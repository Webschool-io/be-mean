# Promise no Node.js

O que é?  Promise??? É uma abstração para trabalhar com código assíncrono de forma elegante, organizada e simplificada. Existem pessoas crentes que o  Node.js
perdeu a chance de usar toda sua api baseada em Promises, contudo por questões de performance, o callback foi mantido e não apenas isso, outras abstrações podem ser usadas sobre os callbacks. Para saber do que se trata a fundo uma Promise, leia a proposta com base de uma expecificação nesse link: Promise/A+ https://promisesaplus.com/. Nele são abordados detalhes não cobertos nessa apostila.

O Callback é um grande problema no quesito de manutenção de código, e eu particularmente não gosto de mostrar para meus amigos códigos com callbacks,  ainda mais se tiver muitos, com Promise não tenho essa preocupação.

Existe uma abstração para trabalhar com código assíncrono em C++ e Java, que é a future, quem conhece essa abstração entende Promise rapidamente.

Uma Promise é composta por três estados básicos:
pendente: quando ainda está executando.
realizada / fulfilled: quando ela termina e tem um resultado de sucesso.
rejeitada / reject: quando termina e tem algum erro;

O NodeJS desde a versão 0.11.x já possuia a possibilidade de trabalhar com Promise, usando flag, contudo na versão 0.12.7 ela foi adicionada nativamente, passando a ser usada diretamente e melhor ainda, como um objeto global na plataforma, o global.Promise.

Vamos ver um exemplo? Primeiramente, vamos ver como ler um arquivo JSON usando o módulo de FS, com a função readFile sem uso de Promise, no código  01.

Código 01

```js
'use strict';

const fs = require('fs');

fs.readFile('./persons.json','utf-8',function(err, file){
		if(!err) console.log(file);
		});
```

Essa é a forma clássica de ler um arquivo de modo não bloqueante no Node.js, aparentemente isso é algo muito simples, porém caso tenha dois arquivos ou mais com valores diferentes e havendo necessidade de manipulação deles, como no código 02, ficaria bem estranho, então começa ficar confuso, e código confuso vira problema. Verifique-o e tente pensar: e se fossem 4 ou 5 arquivos? Confusão vem a calhar para nomear essa ideia.

```js
'use strict';

const fs = require('fs');
//lendo primeiro arquivo
fs.readFile('./persons.json','utf-8', function(err, persons){
		//array para juntar todos
		let todos = [];
		if(!err){
		fs.readFile('./friends.json','utf-8', function(err, friends){
				if(!err){
					//juntando arquivos
					todos.push(JSON.parse(persons));
					todos.push(JSON.parse(friends));
				} 
					//fazendo uma operação com eles
					sendFiles(todos);
				});
		} 
});

function sendFiles(files){
	//mapeando os arquivos
	var arr = files.map(function(person) {
							return person.concat(person)
						});
	//lendo o resultado
	console.log(arr[0]);
}
```
Isso é um problema, eu tive que comentar um código muito pequeno, não que seja ruim comentar, mas o fato foi que ele ficou pouco intuitivo, muita gente usaria readFileSync, que seria pior, pois travaria a Tread da aplicação, ou até mesmo usariam createReadbleStream, o que seria uma opção melhor para a leitura do código, contudo se pensarmos em reuso, poderíamos facilmente usar a Promise para abstrair esse trabalho e deixá-lo simples de ler, testar e manter. Lembrem-se, testar é muito importante. No código 03 faremos uso de Promise, como opção ao “callback hell”, vamos criar uma função genérica que recebe um PATH/caminho de um arquivo e de forma assíncrona nos retorna uma Promise, o código 03 faz exatamente isso.

Código 03
```js
'use strict';

const fs =  require('fs');

function readFile (path) {
	return new Promise(function(resolve, reject) {
			fs.readFile(path,'utf8',function(err, res) {
					err ? reject(err) : resolve(res);
					});    
			});
}

module.exports = readFile;

```

Recordando, o arquivo fs-promise.js é um modulo, ele exporta a função readFile(path), essa função recebe um caminho e nos retorna uma Promise, essa Promise tem os 3 estados citados anteriormente, PENDING, RESOLVE e REJECT, ou seja, quando passar um caminho válido, será chamado o resolve(res), se algo errado acontecer será chamado o reject(err), essa função ficou muito simples para reuso, verificando como fica o seu uso no código 04.


Código 04
```js
'use strict';

const readFile = require('./fs-promise');

readFile('./persons.json')
.then(function(data) {
		success(data);
		})
.catch(function(err){
		error(err);
		});

readFile('./perso.json')
.then(success , error);

function success (data) {
	console.log(data);
}

function error (err) {
	console.error(err);
}

```
Percebam que na primeira chamada eu passei um arquivo com path correto, onde tudo deu certo e usei “then” e “catch” para representar os estados “success” e “error”, e no segundo caso passei o nome errado para representar o estado de “reject/error” e não usei o “catch”, pois o próprio “then” pode tratar os dois estados. Vamos entender melhor o que foi feito: minha função “readFile” recebeu um caminho correto, executou o then(callback) e em seu callback vai ler o que tem no json, e no segundo caso me retornou um erro, ou seja, o código 04 demonstra claramente o comportamento de um Resolve e um Reject sendo chamado, mas então agora vamos juntar os arquivos? Lembrando que funções em javascript podem ser colocadas arrays, isso vai ajudar no uso do Promise.all( [ ]), que recebe um array de Promises. Veja o código 05. 


Código 05
```js

Promise.all([  
		readFile('./persons.json'),
		readFile('./friends.json')
])
.then(function(result) {
		console.log(result);
		})
.catch(function(err){
		console.log(err);
		});
```

Para melhorar o uso Promise.all([]) no repositório, eu deixei um módulo chamado promise-all.js, que será  usado para fazer um exercício.

# Promise Mongoose

Nos models do mongoose assim como temos Eventemitters por padrão, podemos também trabalhar com Promise, que ajuda muito a deixar o código simples de manter e testar. Vamos usar como base o model de pokemons criando na parte de events, para entendermos como funciona. Em caso de dúvida, a documentação do mongoose possui exemplos básicos de como usar Promise ao invés de callbacks.
http://mongoosejs.com/docs/promises.html

Código 01

```js
'use strict'; 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yourdb');
const Pokemon = require('./models/pokemon');


const pokemon = {
			name : "Pompeu Limp",
			type : "Fire",
			attack : 81,
			defence : 65,
			height : 1.82,
			description : "jiujitero"
};


Pokemon.create(pokemon).then(success , error);

function success(data) {
	console.log(data);
}

function error (err) {
	console.log(err);
}

```

Esse é o exemplo padrão para criar um novo pokemon em uma collection no mongoose, usando Promise. Vamos ver como é simples usar find, findOne, update e delete, que são muito usados nas operações de aplicações web de uma API Rest. Geralmente você faz Create, Retrieve, Update e Delete, denominado de CRUD, já imaginou? Fazer isso usando Promise? Sem callbacks? Ou vários “if” e “else” aninhados? O create já foi feito, então vamos aos retrieves nos códigos 02 e 03.

Código 02

```
'use strict'; 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pompeuapi');
const Pokemon = require('./models/pokemon');

let promise = Pokemon.find({}).exec();
promise.then(success, error);

```

Código 03


```
'use strict'; 

'
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pompeuapi');
const Pokemon = require('./models/pokemon');

let promise = Pokemon.findOne({ _id : '5666fd32ff4ea39e23e1528f' }).exec();
promise.then(success , error);

```
Agora que já sabemos como fazer “find” e “findOne”, percebam que nesses casos foi chamada a função exec() no final, para  transformar minha busca em Promise, que é a única diferença do create, agora verificaremos o update e delete nos códigos 04 e 05.

Código 04
```js

const pokemon = {
			name : "Pompeu Limp",
			type : "Fire",
			attack : 99,
			defence : 99,
			height : 1.82,
			description : "jiujitero"
};

let promise = Pokemon
	.update({ _id : '5666ff2a9fa2a10c25d57ef7'},pokemon).exec();

promise.then(success , error);

```

Código 05
```js

let promise = Pokemon.remove({_id :’ '5666ff2a9fa2a10c25d57ef7'’})
promise.then(success , error);
```

Perceba que o padrão é simples e segue o mesmo ritmo, quando formos trabalhar com Express mais adiante, isso vai deixar o código mais claro, fazendo com que o fluxo da aplicação seja muito intuitivo.

Para finalizar segue uma reflexão sobre código limpo.

Segundo Bjorne, criador do C++, “Gosto do meu código elegante e eficiente. A lógica deve ser direta para dificultar o encobrimento de bugs, as dependências devem ser minimas para facilitar a manutenção, o tratamento de erro deve ser completo de acordo com uma estratégia clara e o desempenho próximo do mais eficiente de modo a não incitar as pessoas a tornarem o código confuso com otimizações sorrateiras. O código limpo faz bem as coisas”

Uma reflexão minha: Promise deixa o código limpo, as versões que seguem do Javascript a Promise está se tornando código de infraestrutura, dando possibilidade de novas apis serem usadas como fetch e async, que usam Promise internamente. Em um futuro próximo (2016) o trabalho com código assíncrono será ridiculamente simples com a implementação da especificação do novo ecma 2016.


