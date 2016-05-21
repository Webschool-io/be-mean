CLI
===

**CLI** significa _Command Line Interface_, é uma interface que disponibiliza uma serie de comandos para você usar no seu terminal, podemos citar aqui como exemplo de CLI:

+ [Gulp](http://gulpjs.com/)  
+ [Grunt](http://gruntjs.com/)
+ [Bower](http://bower.io/) 

entre outros...  

Em geral são feitos em _Shell Script_, mas é óbvio que o node nos dá a possibilidade de fazer com javascript também.  

Entendendo o básico
-------------------

Bom vamos entender primeiro como funciona a captura de argumentos na linha de comando, nos usamos `process.argv`, vamos fazer um teste com ele. Colocaremos o seguinte código dentro de um arquivo `app.js`.

```js
console.log(process.argv);
```

depois de executar o arquivo com `node app`, note a saída no teminal: 

```
[ '/home/igor/.nvm/versions/node/v6.0.0/bin/node',
  '/home/igor/Documentos/CLI/app.js' ]
```

repare que ele nos trouxe um array com todos os comandos que colocamos no terminal, primeiramente o comando `node`, depois o arquivo que foi executado.
Fazendo mais um teste vamos executar agora da seguinte forma: `node app abc bemean javascript nosql`

e olha só a saída no terminal:

```
[ '/home/igor/.nvm/versions/node/v6.0.0/bin/node',
  '/home/igor/Documentos/CLI/app',
  'abc',
  'bemean',
  'javascript',
  'nosql' ]
```

tudo o que colocamos depois de `node app` foi para o array, já que são argumentos também. Tendo isso em mente já é temos um noção de como fazer a CLI, afinal manusear esses argumentos dentro do array, é fácil com estruturas condicionais e de controle, e também as funções de array disponíveis no jasvascript.

> Eeeeeeeeeiiiiiiiii rapa, mas uma CLI não podemos colocar o 'node' na frente do arquivo para executar...

certo, para podemos eliminar o comando node na frente da execução do arquivo,
vamos colocar `#!/usr/bin/env node`, como isso podemos também remover a extensão do arquivo.

```js
#!/usr/bin/env node
console.log(process.argv);
```

mas antes de executar, vamos dar permissão de execução ao arquivo com `chmoc +x app` e logo depois vamos executar o arquivo com `./app` e temos a seguinte saída no terminal:

```
[ '/home/igor/.nvm/versions/node/v6.0.0/bin/node',
  '/home/igor/Documentos/CLI/app.js' ]
```


Modulo Commander
----------------

Claro que com o que já sabemos, é possível criar sua CLI, mas para facilitarmos nosso trabalho vamos utilizar o modulo [commander](https://www.npmjs.com/package/commander) que nos ajuda bastante nessa tarefa.

Mas antes de tudo vamos instala-lo:

```
npm install --save commander
```

Ok, vamos começar colocando no nosso arquivo uma estrutura básica com o modulo **commander**

```js
#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .parse(process.argv);
```

bem, fizemos o require do modulo, aqui `.version('0.0.1')` colocamos a versão que será mostrada e aqui `.parse(process.argv)`, passamos para o commander os argumentos.  

Com esse código se você executar não terá saída no terminal executando `./app`, mas já é entregue um 'esqueleto' da CLI, por exemplo você pode executar tanto `./app -V`, que terá como saída a versão do seu modulo, quanto `./app -h`, que terá como saída uma ajuda de toda as opções e descrições disponíveis.

vamos começar incrementando um pouco esse código:

```js
#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .usage('[argumento opcional] <argumento obrigatorio>')
  .description('Apenas um teste maroto!')
  .parse(process.argv);
```

beleza, o `.usage()` vai amostrar a forma de uso da CLI, avisando quais argumentos são obrigatórios e quais são opcionais e o `.description()` vai amostrar do que se trata a CLI.

**Para colocar a forma de uso dos argumentos em `.usage()` você precisa saber que, colocando entre [ ] quer dizer que é opcional e colocando entre < > quer dizer que é obrigatório**

vamos ver a saída no terminal

```

  Usage: app [argumento opcional] <argumento obrigatorio>

  Apenas um teste maroto!

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

Ok, temos uma estrutura básica, vamos ver mais algumas _features_.

Legal, para fazer sub comandos... `npm install` o **install** é um bom exemplo.
Para fazer isso vamos fazer algumas modificações no nosso código:

```js
#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .usage('[argumento opcional] <argumento obrigatorio>')
  .description('Apenas um teste maroto!')
  .command('get [name]', 'get name')
  .parse(process.argv);
```

Ótimo, mas quando chamarmos o comando pelo terminal assim `./app get nome_qualquer`, o commander vai procurar um arquivo executável no diretório de execução do arquivo executável principal(ficou mesmo estranho isso, né?), ele vai buscar um arquivo com nome **app-nome_do_comando** no nosso caso **app-get**, e dentro desse arquivo vamos colocar o seguinte:

```js
#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .action( param => {
    console.log(`O parâmetro é ${param}`);
  })
  .parse(process.argv);
```

Aqui temos `.action(callback)` que recebe um callback capturando o argumento passado pelo terminal, tendo mais argumentos é só adicionar mais parâmetros.
A saída no terminal nesse caso executando `./app get BEMEAN` seria: 

```
O parâmetro é BEMEAN
```

se for fazer algo mais simples, o `.action(callback)` pode ser colocado sem o `.command()` no executável principal, sendo que os argumentos passados depois de `./app` seriam os parâmetros de `.action(callback)`.

Beleza agora para usamos opções ou _flags_ fazemos assim:

```js
#!/usr/bin/env node

'use strict';

const program = require('commander');


program
  .version('0.0.1')
  .usage('[argumento opcional] <argumento obrigatorio>')
  .description('Apenas um teste maroto!')
  .option('-m, --mode <mode>', '<uppercase> | <lowercase> name to uppercase or lowercase')
  .action( name => {
    if(program.mode == 'uppercase') {
      console.log(name.toUpperCase());
    } else {
      console.log(name.toLowerCase());
    }
  })
  .parse(process.argv);
```

aqui nós usamos o `option()` que tem essa sintaxe que é auto explicativa ao olhar o código. Colocando o `<qualquer_coisa>`, dizemos que é para guardar o valor após a _flag_ quando invocado pelo terminal.

Ex: Ao invocarmos `./app bemean -m uppercase`, dentro do objeto **program** vai ter um atributo assim `mode: 'uppercase'`, se não colocássemos o `<qualquer_coisa>` ou `[qualquer_coisa]` teríamos o atributo só que sendo evaluado _true_ ou _false_.

Há bastante coisa que você pode fazer com esse modulo, aqui foi citado o necessário para construir a CLI, mas vale a pena dar uma olhada na [API](https://www.npmjs.com/package/commander).

"Arquiteturazinha"
==================

Bem, você não precisa seguir uma arquitetura para fazer sua CLI, mas fazer tudo em cima de uma estrutura é praticamente necessário.

Aí vai uma base para você:

```
.
├── bin
│   ├── app
│   └── app-get
├── lib
│   ├── another-functions.js
│   ├── app-get.js
│   └── app.js
├── package.json
└── test
    └── get.spec.js

3 directories, 8 files
```

onde em todos os arquivos dentro do diretório **bin** temos um `require` para seu arquivo no diretório **lib**, Como por exemplo, segue o conteúdo do **bin/app/**

```js
#!/usr/bin/env node

require('../lib/app');
```

assim fica tudo bem bacana!


Publicando no NPM!
==================

Para isso você precisa ter um cadrastro no site do [npm](https://www.npmjs.com/) e dar uma pesquisada no nome do modulo que você quer dar para saber se esta disponível.

Vamos também colocar no package.json essas linhas:

```
  "preferGlobal": true,
  "bin": {
    "jget": "./caminho_para_o_executavel_principal"
  }
```

nessas linhas indicamos que o modulo deve ser instalado globalmente e a localização do executável.

Depois de fazer isso, vamos dar o comando `npm adduser`, que irá pedir seu usuário, senha e email(esse e-mail ficará público), respondido as perguntas e estando logado no site do NPM, você precisa dar o comando `npm login`.

Logo após como temos uma pasta **node_modules**, obviamente não queremos que ela seja enviada para o NPM então crie um arquivo `.npmignore`, o uso desse arquivo é similar ao `.gitignore`, e então finalmente vamos dar o comando `npm publish`.

Agora você pode instalar sua CLI globalmente com o npm:

```
npm install -g nome_do_seu_modulo
```

