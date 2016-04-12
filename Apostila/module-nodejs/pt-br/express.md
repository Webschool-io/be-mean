# Express

O Express será o *framework* para rotas e views da nossa arquitetura, para quem conhece Padrões de Projeto ele é como um *[Front Controller](https://en.wikipedia.org/wiki/Front_controller)*.

O *Front Controller* é um padrão arquitetural que se comporta como um controlador tratando todas as solicitações para API e então roteia para uma ação (ou comando), utilizando o padrão *[Command](https://en.wikipedia.org/wiki/Command_pattern)* para executar as ações necessárias em cada rota.

Veremos como isso desacopla o código e nos facilita a manutenção futura, aproveitaremos para criar um gerador de rotas baseado em uma configuração de JSON, **que deverá ser reutilizada no Angular**.

Será com o Express que construiremos nossa API então vamos pelo início, crie uma pasta chamada `aula-express` e dentro dela execute o `npm init` para gerar o seguinte `package.json`:

```js
{
  "name": "aula-express",
  "version": "0.0.1",
  "description": "Aula sobre Express",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Express",
    "Node",
    "MEAN",
    "Webschool"
  ],
  "author": "Suissa",
  "license": "WTFPL"
}
```

Depois logicamente instalamos o Express localmente:

```
npm i express --save
```

## Hello World

Claro que faremos um *hello world*, esse é o código:

```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Depois de criarmos o `app` com `express()` utilizamos a função `get` para setar o verbo `GET` a rota `/`, enviando como resposta `'Hello World!'`.

Perceba que dessa vez não precisamos escrever os cabeçalhos e nem o `res.end`.

Então vamos mudar para nosso retorno para um HTML simples:

```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Acesse o endereço `http://localhost:3000/` com o POSTMAN via `GET` e entre na aba  `Headers`.

![](https://cldup.com/zNrPy9XMLR-3000x3000.png)

```
Connection → keep-alive
Content-Length → 21
Content-Type → text/html; charset=utf-8
Date → Wed, 27 Jan 2016 19:21:56 GMT
ETag → W/"15-otHLJPJLMip9rVIEFMUj6Q"
X-Powered-By → Express
```

    Com isso você percebeu que o Express cuidou de toda a formatação da resposta apenas com a função `send`.

    Então antes de iniciarmos nossa API propriamente dita, vamos aprender mais sobre algumas partes do Express.

## Response - res

O objeto *Response*(`res`) representa a resposta HTTP que o Express envia quando chega uma requisição HTTP, ou seja, será o objeto utilizado para responder para o *client*, vamos conhecer algumas de suas funções.

### res.send([status|body], [body])

Esse método realiza uma infinidade de tarefas úteis para respostas como atribuir automaticamente o `Content-Length`, a menos que previamente definindo, e provendo o cabeçalho automaticamente.

```js
res.send(new Buffer('bufferinggggg'));
res.send({ algum: 'json' });
res.send('<h1>algum html</h1>');
res.send(404, 'Não achei!');
res.send(500, { error: 'FFFFFUUUUUUU' });
res.send(200);
```

Quando um *buffer* é enviado o `Content-Type` é definido como `"application / octet-stream"` a menos que previamente definido, como mostrado abaixo:

```js
res.set('Content-Type', 'text/html');
res.send(new Buffer('<h1>algum html</h1>'));
```


### res.json([status|body], [body])

Envia uma resposta JSON. Este método é idêntico ao `res.send` quando um objeto ou *array* é passado, pode converter valores como `null`, `undefined` como JSON, **no entanto estes não são tecnicamente JSON válido**.

```js
res.json(null)
res.json({ user: 'tobi' })
res.json(500, { error: 'message' })
```


### res.jsonp([status|body], [body])

Envia uma resposta JSON como JSONP. Este método é idêntico ao `res.json` contudo opta-se pelo retorno em JSONP.

```js
res.jsonp(null)
res.jsonp({ user: 'tobi' })
res.jsonp(500, { error: 'message' })
```

> JSONP ou "JSON with padding" é um complemento ao formato de dados JSON. Ele
provê um método para enviar requisições de dados de um servidor para um
domínio diferente, uma coisa proibida pelos navegadores típicos por causa da
Política de mesma origem. Com a Política de mesma origem, uma página servida
de server1.example.com não pode normalmente se conectar ou se comunicar com
servidores diferentes de `server1.example.com`. Uma exceção é a tag HTML
`<script>`. Explorando a política aberta para a tag `<script>`, algumas páginas usam a tag para recebe código Javascript que opera com dados em formato JSON de outra origem gerados dinamicamente. Esse padrão de uso é conhecido com JSONP. Requisições de JSONP não trazem JSON, mas código Javascript arbitrário. Eles são executados pelo interpretador Javascript, e não parseados pelo parser JSON.

*fonte: [https://pt.wikipedia.org/wiki/JSONP](https://pt.wikipedia.org/wiki/JSONP)*

Nós não usaremos JSONP pois usarmos [CORS](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing).

> Cross-origin resource sharing (CORS)(ou compartilhamento de recursos de origem cruzada) é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir que seus recursos sejam acessados por uma página web de um domínio diferente.[1] Esse tipo de acesso seria de outra forma negado pela same origin policy. CORS define um meio pelo qual um navegador e um servidor web podem interagir para determinar se devem ou não utilizar/permitir requisições cross-origem[2] . É um acordo que permite grande flexibilidade, mas é mais seguro que permitir todos as requisições desse tipo.

*fonte: [https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing)*



### res.redirect([status,] path)

Redireciona para a URL definida no parâmetro, com um código HTTP de *status*. Se você não especificar um, o código de *status* padrão é `302 "Found"`.

```js
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
res.redirect('http://google.com');
```

O redirecionamento pode ser relativo à raiz do nome do host. Por exemplo, se o aplicativo estiver em `http://example.com/admin/post/new`, o seguinte seria redirecionar para a `http://example.com/admin` URL:

```js
res.redirect('/admin');
```

O redirecionamento pode ser relativo para a URL atual. Por exemplo, de `http://example.com/blog/admin/` (observe a barra à direita), o seguinte seria redirecionar para a URL `http://example.com/blog/admin/post/new`.

```js
res.redirect('post/new');
```

Redirecionando para `post/new` a partir de `http://example.com/blog/admin` (sem barra à direita), irá redirecionar para `http://example.com/blog/post/new`.

**Se você encontrou o comportamento acima confuso, pense em segmentos de caminho como diretórios (com barra ao final) e arquivos, ele vai começar a fazer sentido.**

Se você não colocar a `/` no início ele irá inferir que você deseja continuar em `http://example.com/blog/admin/` e só concatenará seu caminho.

Redirecionamentos relativos também são possíveis. Se você estivesse em `http://example.com/admin/post/new`, o seguinte iria redirecionar para `http//example.com/admin/post`

```js
res.redirect('..');
```

Visto que o `.` significa o diretório atual e `..` significa o diretório acima(pai).

Um redirecionamento volta redirecciona o pedido de volta para o *referer*, o padrão quando o `REFERER` é a  `/`.

```js
res.redirect('back');
```


#### Exercício

Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para `url/404`.





### res.render(view [, locals] [, callback])

Renderiza uma *view* e envia o HTML gerado para o cliente.

Parâmetros opcionais:

- ***locals***: um objeto cujas propriedades define variáveis locais para a *view*;
- ***callback***: uma função de retorno. Se fornecida, a função retorna tanto o possível erro e a *string* renderizada, mas não executa uma resposta automática. Quando ocorre um erro, ele vem no primeiro parâmetro (err).

**Isso é importante SEMPRE saber!**

> A assinatura de um *callback* no Node.js, tanto no Mongoose como no Express, é a seguinte: `function(erro, retorno)`.

Por isso é de praxe sempre testarmos se vem algo no primeiro parâmetro para depois continuar, exemplo:

```js
function (err, data) {
  if(err) return ErrorHandler(err);
  rerturn Action(data);
}
```

Perceba que não usamos o `else` pois se já temos um `if` antes obviamente o que vier a seguir é o `else`.

Vamos então criar a primeira *view*, `index.jade`, usando [Jade](http://jade-lang.com/) que é um *template engine*, logo inciamos definindo qual é nossa `view engine` dessa forma:

```js
'use strict';

const express = require('express');
const app = express();

// Definição do template engine
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  // Renderiza views/idex.jade
  res.render('index', { title: 'Be MEAN', message: 'Bem vindo ao Be MEAN' });
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});

```

Porém para conseguirmos renderizar uma *view* em Jade precisamos instalar esse módulo anteriormente:


```
npm i --save jade
```

Para depois criar a *view* `views/index.jade`:

```jade
html
  head
    title= title
  body
    h1= message
```

![Resultado da view renderizada](https://cldup.com/lY71LwBVUi-2000x2000.png)

**Percebeu que não definimos a pasta onde nossa *view* se encontra?**

Então o Express usou o padrão que é da pasta `views`, nesse caso essa é a configuração implícita:

```js
app.set('views', path.join(__dirname, 'views'));
```

## path

Você deve se perguntar: **e esse *path* de onde vem?**

Essa é uma ótima pergunta pois o módulo [path](https://nodejs.org/api/path.html) é muito útil para [criarmos sistemas multiplataformas](http://shapeshed.com/writing-cross-platform-node/).

![](https://media.giphy.com/media/vh9isNb4S2Spa/giphy.gif)

Traduzindo a documentação:

> Este módulo contém utilitários para a manipulação e transformação de caminhos de arquivo. Quase todos estes métodos executam apenas transformações de *String*. O sistema de arquivos não é consultado para verificar se os caminhos são válidos.

Basicamente o que ele faz é converter caminhos do formato Linux para outros, vamos entender melhor com esse exemplo:

```js
var foo = 'foo';
var bar = 'bar';
var filePath = foo + '/' + bar + '/';
```

Se você usar o caminho de `filePath` no Windows dará **MERDA**, pois ele utiliza `\\` em vez de `/`, para resolver isso automaticamente fazemos:

```js
var filePath = path.join(foo, bar);
// 'foo/bar' no OSX e Linux
// 'foo\\bar' no Windows
```

Para você entender melhor, imagine executar o seguinte código na sua pasta pessoal `cd ~`:

```js
path.resolve('../');
```

O resultado desse comando é diferente para os 3 sistemas operacionais:

- `'/home'` no Linux
- `'/Users'` no OSX
- `'C:\\Users'` no Windows

**Beleza Suissa e se quisermos mudar o caminho das *views*?**

Para ilustrar esse exemplo vamos definir a pasta das *views* como sendo nossa *modules* pois definiremos a *view* a partir dela, assim:

```js
'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'jade');

app.get('/users', function (req, res) {
  res.render('users/views/index');
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
```

Para esse código funcionar crie a *view* `modules/users/views/index.jade`:

```jade
html
  head
    title= 'Listagem dos usuários'
  body
    h1= 'Listagem dos usuários'
```

E entre na url `http://localhost:3000/users`:

![View renderizada de users](https://cldup.com/Ax6UW1_-OH-3000x3000.png)


**Ótimo Suissa mas eu quero passar a lista dos usuários para essa *view* e agora?**

![Muito fácil manda outra](https://cldup.com/_IpnF6U9DT-1200x1200.jpeg)

Vamos inicialmente criar a *view* `modules/users/views/list.jade`:

```jade
html
  head
    title= 'Listagem dos usuários'
  body
    h1= 'Listagem dos usuários'
    ul
      each user in users
        li= user.name
```

Antes de tudo vamos analisar essa linha: 

```jade
each user in users
```

Ela assemelha-se muito à uma instrução muito usada no JavaScript, **sabe qual?**

**É CLARO QUE ESTAMOS FALANDO DO `forEach`!**

Obviamente qualquer instrução nomeada com `each` significa que ela irá iterar sobre cada elemento da coleção, nesse caso um *Array*. 

Logo precisamos criar um *Array* para passar para a *view*, deixando nosso `app` assim:

```js
'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'jade');

app.get('/users', function (req, res) {
  const users = [
    { name: 'Suissa' }
  , { name: 'Itacir' }
  , { name: 'Caio' }
  ];
  res.render('users/views/list', {users} );
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
```

Logicamente esse *Array* de usuários virá do Mongoose, mas isso é assunto para outra aula.

Beleza eu mostrei a renderização usando um *template engine* pois o mesmo provê poderes que o HTML sozinho não possui, para ilustrar isso vamos renderizar uma *view* com HTML:

```js
'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.get('/users', function (req, res) {
  res.sendFile(path.join(__dirname, 'modules/users/views/list.html'));
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
```

Criando a *view* `modules/users/views/list.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Listagem via HTML</title>
</head>
<body>
  <h1>Listagem via HTML</h1>
</body>
</html>
```

Você notou que enviando apenas o HTML não conseguimos adicionar nenhum tipo de lógica em cima, muito menos enviar dados para ela. Por isso quase sempre utilizamos um *template engine* para criar nossas views e isso é muito importante para seu futuro como desenvolvedor FullStack.



### res.sendFile(path [, options] [, fn])

> `res.sendFile()` é suportado por Express v4.8.0 em diante

Transfere o arquivo para o caminho determinado. Define a resposta do campo de cabeçalho HTTP `Content-Type` com base na extensão do arquivo. A menos que a opção de raiz esteja definido no objeto de opções, o caminho deve ser um caminho absoluto para o arquivo.

- ***maxAge***:  Define a propriedade `maxAge` do cabeçalho `Cache-Control` em milissegundos ou uma string no [formato ms](https://www.npmjs.com/package/ms). Valor padrão: 0
- ***root***:  Diretório raiz para nomes de arquivos relativos.
- ***lastModified***:  Define o cabeçalho `Last-Modified` para a data da última modificação do arquivo no sistema operacional. Defina false para desativá-lo. Valor padrão: "Enabled". Apenas em Express >= 4.9.0
- ***headers***: objeto contendo cabeçalhos HTTP para servir com o arquivo.
- ***dotfiles***:  Opção para servir `dotfiles`. Os valores possíveis são "allow", "deny" e "ignore". Valor padrão: "ignore"

```js
app.get('/file/:name', function (req, res, next) {

  let options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});
```

Adicionei na pasta `public` o logo da Webschool para conseguirmos requisitar no servidor pela URL: `http://localhost:3000/file/logo-webschool.png`

![](https://cldup.com/Ef1yJWMFWf.png)

E podemos confirmar o retorno dos cabeçalhos:

![](https://cldup.com/WIb9DdfEX_-2000x2000.png)

Agora vamos modularizar esse código criando um módulo retornar apenas arquivos, para isso vamos mudar nossa lógica para o arquivo `modules/files/SendFiles.js`:

```js
module.exports = function(req, res) {
  const options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  const fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
};
```

Deixando o `app` assim:

```js
const express = require('express');
const app = express();
const SendFiles = require('./modules/files/SendFiles');

app.get('/file/:name', function (req, res, next) {
  return SendFiles(req, res);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```


### res.status(code)

Utilize este método para definir o status HTTP para a resposta. É um apelido encadeável de [Response.Status](http://nodejs.org/api/http.html#http_response_statuscode).

```js
res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');
```

### res.sendStatus(statusCode)

Define o código de *status* HTTP e envia sua representação de seqüência como o corpo da resposta.

![Black-Guy-Meme-Question-Marks-Que](http://memesvault.com/wp-content/uploads/Black-Guy-Meme-Question-Marks-Que-02.jpg)

Bem mais fácil mostrar com código né? Então toma!

```js
res.sendStatus(200); // equivalente a res.status(200).send('OK')
res.sendStatus(403); // equivalente a res.status(403).send('Forbidden')
res.sendStatus(404); // equivalente a res.status(404).send('Not Found')
res.sendStatus(500); // equivalente a res.status(500).send('Internal Server Error')
```

Ou seja ele já nos poupa trabalho e **é por isso que você usará ele para criar um módulo de respostas para sua API retornando o código de *status* correto**.

Vamos criar o retorno padrão quando a entidade não é encontrada, **o famoso 404**.

Para isso criamos uma rota para qualquer valor que vier e que não entre em nehuma rota anterior, algo bem simples assim:

```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('*', function (req, res) {
  res.sendStatus(404);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Depois com o Postman execute um `GET` em `http://localhost:3000/` e depois em `http://localhost:3000/teste`, retornando nesse último:

![](https://cldup.com/69QvbmTbbI-3000x3000.png)

Beleza agora basta passarmos essa lógica para um módulo separado:

```js
module.exports = (res, type) => {
  if(!type || type['Not-Found']) res.sendStatus(404);
}
```

Nesse caso se o `type` não for enviado irá **sempre** retornar `404`.

Ficando assim no `app`:

```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('*', function (req, res) {
  const type = { 'Not-Found': true };
  return require('./modules/http/HTTPStatusCode')(res,type);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Esse é apenas um exemplo simples, pois será seu exercício incrementá-lo.


#### Exercício

Adicionar o retorno correto para os seguinte códigos:

- 200
- 201
- 202
- 405
- 500


### res.set(field [, value])

Define campo de cabeçalho do HTTP da resposta. Para definir vários campos de uma só vez, passar um objeto como o parâmetro.

```js
res.set('Content-Type', 'text/plain');

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  'ETag': '12345'
});
```

É um atalho para `res.header(field [, value])`.

### res.get(field)

Retorna o cabeçalho de resposta HTTP especificado pelo campo, é case-insensitive.

```js
res.get('Content-Type');
// => "text/plain"
```


### res.type(type)

Define o cabeçalho `Content-Type` do HTTP para o tipo do da resposta.

```js
res.type('.html');              // => 'text/html'
res.type('html');               // => 'text/html'
res.type('json');               // => 'application/json'
res.type('application/json');   // => 'application/json'
res.type('png');                // => image/png:
```


### res.format(object)

Executa *content-negotiation* sobre o cabeçalho `Accept` do HTTP no objeto `request`, quando presente. Ele usa `req.accepts()` para selecionar um manipulador para o `request`, com base nos tipos aceitáveis. Se o cabeçalho não for especificado, o primeiro *callback* é invocado. Quando não for encontrada nenhuma correspondência, o servidor responde com 406 `Not Acceptable`, ou chama o *callback* padrão.

O cabeçalho de resposta `Content-Type` é definido quando um *callback* é selecionado. No entanto, você pode alterar isso dentro do *callback* usando métodos como `res.set()` ou `res.type()`.

O exemplo a seguir iria responder com `{ "message": "hey"}` quando o cabeçalho `Accept` é definido como `application/json` ou `*/json` (no entanto, se ele é `*/*`, então a resposta será `hey`).

```js
res.format({
  'text/plain': function(){
    res.send('hey');
  },
  'text/html': function(){
    res.send('<p>hey</p>');
  },
  'application/json': function(){
    res.send({ message: 'hey' });
  },
  'default': function() {
    res.status(406).send('Not Acceptable');
  }
});
```


### res.links(links)

Junta-se os links fornecidos para preencher o campo Link do cabeçalho de resposta do HTTP.

```js
res.links({
  next: 'http://api.example.com/users?page=2',
  last: 'http://api.example.com/users?page=5'
});
```

Retornando:

```html
Link: <http://api.example.com/users?page=2>; rel="next",
      <http://api.example.com/users?page=5>; rel="last"
```

Isso é muito importante para a navegabilidade de uma API REST.

#### Exercício

Criar uma busca, dos Pokemons, com o Mongoose que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:

- html
- json

*ps: Não esquecer do link para `previous` e `first` quando necessários.*

## Request - req

O objeto req representa a solicitação HTTP e tem propriedades para a cadeia de consulta do pedido, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. Nesta documentação e, por convenção, o objeto é sempre referido como req (ea resposta HTTP é res), mas seu nome real é determinada pelos parâmetros para a função de retorno de chamada na qual você está trabalhando.


## Router

O objeto *Router* é um exemplo isolado de *middleware* e rotas. Você pode pensar nisso como um "mini-aplicativo", capaz apenas de realizar funções de *middleware* e de roteamento.

O roteador se comporta como um *middleware*, para que possa usá-lo como um argumento em `app.use()` ou como o argumento para o uso de outro roteador.

O objeto do Express tem um método `Router()` que cria um novo objeto roteador.

Depois de criar o objeto roteador, você pode adicionar *middleware* e rotas com método HTTP (como GET, PUT, POST e assim por diante) a ele apenas como uma aplicação. Por exemplo:

```js
// chamado para qualquer requisição passada para esse roteador
router.use(function(req, res, next) {
  // aqui vc faz sua mágica
  next();
});

// gerencia todas as requisições que terminam em /events
router.get('/events', function(req, res, next) {
  // ..
});
```

Então você pode usar um roteador para uma determinada URL raiz, desta forma separando suas rotas em arquivos/módulos.

```js
// todas requisições para /calendar/* serão enviadas para o "router"
app.use('/calendar', router);
```

Vamos ver um exemplo bem simples:

```js
const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.use( (req, res, next) => {
  res.end('Hello World');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Então como visto, criamos o roteador com `express.Router()`:

```js
const router = express.Router();
```

Para depois criarmos a função que será usada na requisição:

```js
router.use(function(req, res, next) {
  res.send('Hello World');
});
```

E simplesmente usar na rota desejada:

```js
app.use('/hello', router);
```

Fácil não?!

Para entendermos melhor como esse roteador funciona iremos ver quais são seus principais métodos.

### Methods

Vamos conhecer na prática alguns dos seu principais métodos.

> Dica: a ordem das rotas **IMPORTA**.

#### router.all(path, [callback, ...] callback)

Este método é extremamente útil para o mapeamento lógico "global" para prefixos de caminho específicos ou combinações arbitrários.

Por exemplo, se você colocou a seguinte rota no topo de todas as outras definições de rotas, seria necessário que todas as rotas a partir desse ponto exijam autenticação e carreguem automaticamente um usuário.

```js
router.all('*', requireAuthentication, loadUser);
```

O código abaixo também é equivalente:

```js
router.all('*', requireAuthentication)
router.all('*', loadUser);
```

Tenha em mente que esses *callbacks* não precisam agir como *endpoints*; `loadUser` pode executar uma tarefa, em seguida, chamar `next()` para continuar combinando rotas subseqüentes.

E caso deseje definir uma rota raiz, faça assim:

```js
router.all('/api/*', requireAuthentication);
```

Agora vamos executar um exemplo bem simples, pois ainda não chegamos em autenticação:

```js
const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.send('Hello World');
  console.log('Hello World');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Agora execute com o POSTMAN uma requisição `GET` em `http://localhost:3000/hello`:

![requisição GET em http://localhost:3000/hello](https://cldup.com/KwN-Lv96CN-1200x1200.png)

E agora uma requisição `POST` na mesma rota:

![requisição POST em http://localhost:3000/hello](https://cldup.com/GDJNae-ML1-1200x1200.png)

Logicamente você percebeu que não importa qual o `METHOD` da requisição ele sempre irá executar aquela lógica.

#### router.METHOD(path, [callback, ...] callback)

Os métodos `router.METHOD()` fornecem funcionalidade de roteamento a partir do método do HTTP requisitado, onde método é um dos métodos HTTP em letras minúsculas. Assim, os métodos atuais são `router.get()`, `router.post()`, `router.put()`, e assim por diante.

Ficará mais fácil mostrando esse exemplo de `GET`:

```js
router.get('/', (req, res) => {
  res.send('hello world');
});
```

Vamos adicioná-lo então no exemplo anterior:

```js
router.all('*', (req, res, next) => {
  res.send('Hello World');
  console.log('Hello World');
});

router.get('/', (req, res) => {
  res.send('Listagem');
  console.log('Listagem');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Quando você entrar na rota `http://localhost:3000/hello` verá isso:

![Requisição GET em localhost:3000/hello](https://cldup.com/Gq_KWA_-_q-1200x1200.png)

E no terminal também verá **apenas** o `Hello World`.

Agora eu lhe pergunto:

> Por quê?

Você percebeu quais são os parâmetros do callback de `router.all`??

São eles:

- req
- res
- next

Bom o `req` e o `res` você já conhece né? Então sobrou o `next`.

Essa função `next` é um padrão do Node.js para você chamar o próximo 
processo do Event Loop, pois se ele não for chamado sua função finaliza e não da sequência no fluxo.

**Já percebeu o que temos que fazer agora?**

SIM! Chamar `next()` no `router.all`!

```js
router.all('*', (req, res, next) => {
  res.send('Hello World');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  res.send('Listagem');
  console.log('Listagem');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Simples não?!

Agora entre na rota `http://localhost:3000/hello` e confira seu retorno, tanto no POSTMAN como no terminal.

![](https://cldup.com/eVntZgsI37-1200x1200.png)

Nessa imagem você já percebeu que o `res.send('Listagem')` não veio, né?

Então vamos conferir o que aconteceu no terminal:

```
Servidor rodando em localhost:3000
Hello World
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:345:11)
    at ServerResponse.header (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/response.js:718:10)
    at ServerResponse.send (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/response.js:163:12)
    at /Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/app-router-get-next.js:15:7
    at Layer.handle [as handle_request] (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/route.js:131:13)
    at Route.dispatch (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/layer.js:95:5)
    at /Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/index.js:277:22
    at Function.process_params (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial-ATUAL/Apostila/module-nodejs/src/aula-express/node_modules/express/lib/router/index.js:330:12)
```

Pela mensagem de erro já conseguimos entender o que aconteceu:

```
Error: Can't set headers after they are sent.
```

Traduzindo:

```
Erro: Não é possível definir cabeçalhos após o seu envio
```

**Entendeu? Ainda não?**

Então vamos analisar nosso código:

```js
router.all('*', (req, res, next) => {
  res.send('Hello World');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  res.send('Listagem');
  console.log('Listagem');
});
```

Como sabemos o `router.all` irá executar antes pois ele está antes da outra rota, e dentro dele nós chamamos `res.send('Hello World')`.

Agora eu lhe pergunto:

> O que a função `res.send` faz?

Como já visto anteriormente, ela além de enviar a resposta **também define os cabeçalhos**!

Voltando ao nosso erro, ele diz que não é possível definir cabeçalhos após o seu envio, sabendo disso onde você acha que está o problema?

![Pensando...](https://media.giphy.com/media/lELRD773cY7Sg/giphy.gif)

Obviamente está em `res.send('Listagem')` pois o mesmo está tentando definir **novamente** os cabeçalhos sendo que eles já foram enviados anteriormente e claramente você não pode modificar eles após o envio.

Então como resolveremos isso?

Primeiramete que nunca utilizaremos o `router.all` para responder com nossa API, ele vai servir para aplicação de lógicas em cima do `req` ou `res`, entre outras funcionalidades.
 
Então vamos eliminar o `res.send` e adicionar apenas um cabeçalho novo:

```js
const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.setHeader('Webschool', 'FODA');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  res.send('Listagem');
  console.log('Listagem');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

![GET em localhost:3000/hello](https://cldup.com/VtH4W4VzYC-3000x3000.png)

![cabeçalhos do GET em localhost:3000/hello](https://cldup.com/Z0J4yScviF-3000x3000.png)

Para dar um exemplo mais prático agora iremos listar os pokemons, do módulo de MongoDB e retornar como JSON.

```js
require('./db/config');

const express = require('express');
const app = express();
const router = express.Router();


// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.setHeader('Webschool', 'FODA');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  require('./modules/pokemons/models/model-pokemon-list')(req, res);
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Você deve estar se perguntando:

> Mas o porquê você está chamando apenas o `require`?

Vamos olhar o arquivo `/modules/pokemons/models/model-pokemon-list`:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = (req, res) => {
  PokemonModel.find({}, function (err, data) {
    if (err) return console.log('ERRO: ', err);
    res.send(data);
  });
};
```

Então aqui eu fiz um módulo **super simples** que irá apenas listar todos os *Pokemons* e já responder eles como JSON.

> Como assim já vai responder eles?

**Sim**, será nesse módulo que será enviado o retorno da resposta via `res.send(data)`, pois **as rotas nunca devem ser responsáveis pela resposta diretamente** visto que esse não é o trabalho delas.

> **Uma rota deverá apenas receber `req` e `res`  entregar eles para a função/módulo correto.**

O mais correto ainda é termos um módulo que seja responsável apenas pela resposta do nosso sistema, mas não se preocupe que nós ainda iremos fazer.

Depois de entender tudo isso iremos agora para nosso exercício.

### Exercícios

1. Criar as 4 rotas para o CRUD.
2. Criar a arquitetura atômica do Mongoose
  - Organismo
  - Ações
  - Molécula
  - Átomos
  - Quarks
3. Integrar as funções do CRUD do Mongoose com o Express.
  - Com todas as funções do CRUD funcionando via API
4. Criar um módulo responsável pelas respostas do sistema.
5. Criar um módulo responsável por tratar os erros, primeiro parâmetro do *callbacks*

## Express Generator

Para facilitar o início de um projeto com Express iremos utilizar o `express-generator` instalando-o globalmente:

```js
npm i -g express-generator
```

Agora basta executar `express nome-do-projeto`:

```
express aula-express-generator

   create : aula-express-generator
   create : aula-express-generator/package.json
   create : aula-express-generator/app.js
   create : aula-express-generator/public
   create : aula-express-generator/public/javascripts
   create : aula-express-generator/public/images
   create : aula-express-generator/public/stylesheets
   create : aula-express-generator/public/stylesheets/style.css
   create : aula-express-generator/routes
   create : aula-express-generator/routes/index.js
   create : aula-express-generator/routes/users.js
   create : aula-express-generator/views
   create : aula-express-generator/views/index.jade
   create : aula-express-generator/views/layout.jade
   create : aula-express-generator/views/error.jade
   create : aula-express-generator/bin
   create : aula-express-generator/bin/www

   install dependencies:
     $ cd aula-express-generator && npm install

   run the app:
     $ DEBUG=aula-express-generator ./bin/www
```

Ele irá criar toda a estrutura inicial de um projeto com Express, depois basta entrar na pasta criada e executar `npm install` para instalar sua dependências pré-definidas no `package.json`:

```js
{
  "name": "aula-express-generator",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "express": "~4.2.0",
    "static-favicon": "~1.0.0",
    "morgan": "~1.0.0",
    "cookie-parser": "~1.0.1",
    "body-parser": "~1.0.0",
    "debug": "~0.7.4",
    "jade": "~1.3.0"
  }
}
```

Perceba que ele não vem com o Mongoose como padrão, então vamos instalá-lo:

```
npm i --save mongoose
```

Pronto agora você pode iniciar o projeto executando:

```
npm start
```

Como você deve ter notado o objeto `scripts` no `package.json`:

```js
  "scripts": {
    "start": "node ./bin/www"
  }
```

É nele que definimos o comando para iniciar, como já trabalhamos com o `nodemon` mude de `node` para `nodemon`:

```js
  "scripts": {
    "start": "nodemon ./bin/www"
  }
```

Você deve estar estranhando esse arquivo `./bin/www` não? Pois normalmente iniciamos o projeto com `nodemon app.js`, então de onde vem esse `www`??

Abra o arquivo `./bin/www`:

```js
#!/usr/bin/env node
var debug = require('debug')('aula-express-generator');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
```

Na primeira linha esse código `#!/usr/bin/env node` nos possibilita executar esse arquivo como se fosse um shell script, por exemplo:

```
./bin/www
```

Já na segunda linha chamamos o módulo de [*debug*](https://www.npmjs.com/package/debug) passando para ele o nome do módulo que estamos debugando e logo após importo o módulo principal do nosso sistema:

```js
var debug = require('debug')('aula-express-generator');
var app = require('../app');
```

Tendo o módulo da nossa aplicação, `app`, agora basta definirmos sua porta padrão caso nenhuma seja passada na hora da inicialização do projeto.

```js
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
```

Para passar um outro valor para porta basta adicionar `PORT=666` na hora de iniciar:

```
PORT=666 ./bin/www
// ou
PORT=8080 npm start
```

Depois disso que iremos iniciar nosso servidor com a função `app.listen()`, a qual recebe 2 parâmetros:

- porta
- callback

```js
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
```

Perceba que o valor da porta é retornado por `app.get('port')`, pois como já vimos em aulas passadas:

- app.set(variavel, valor): define um valor para a variavel
- app.get(variavel): retorna o valor da variavel

**MUITO CUIDADO com o get!!!**

Pois como sabemos `app.get` também é um método de roteamento, mas então como podemos usar a mesma função para coisas diferentes?

**Pela interface da função.**

Como assim????

Perceba que quando desejamos buscar o valor de uma variável passamos para o `app.get` apenas o nome dessa variável e para utilizarmos a rota com o método `GET` usamos:

```js
app.get(URL, CALLBACK);
```

Então sempre tenha isso em mente!

Com isso sabemos como inicia nosso projeto, então é hora de analisarmos o módulo principal, o `app.js`:

Nas primeiras linhas tempos a importação dos módulos necessário, onde a maioria é um *Middleware*, como:

```js
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
```

Logo após vemos a importação de 2 módulos locais gerados pelo `express-generator`:

```js
const routes = require('./routes/index');
const users = require('./routes/users');
```

Então abra o arquivo `./routes/index` para analisarmos:

```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

Ele tem nada mais que a definição da rota `/` que irá renderizar a *view* `views/index.jade`, passando o objeto `{ title: 'Express' }` para ela.

Como você deve ter iniciado o projeto e entrado na URL definida, deve ter visto que a página inicial mostra exatamente esse valor, `Express`, como título.

Para confirmar isso basta abrir a *view* `views/index.jade`:

```jade
extends layout

block content
  h1= title
  p Welcome to #{title}
```

Inicialmente vimos que essa *view* está importando a *view* `layout`, então abra-a:

```jade
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Você deve ter percebido que as *views* com Jade são orientadas a identação, logo você deverá escolher entre TAB e Espaços, como também seu tamanho. **E isso não poderá mudar entre as *views* se não ela não renderizará!**

Essa *view* é a base para todas as outras pois ela define o início do HTML com seus cabeçalhos e logo após em `body` ela cria um bloco de conteúdo com `block content`.

Voltando para a *view* `index` notamos então que logo após o `extend layout`, criamos o `block content` que tem o mesmo nome do `block` definido em `layout` para que o conteúdo de `index` entre exatamente no espaço definido para ele.

```jade
extends layout

block content
  h1= title
  p Welcome to #{title}
```

Dentro do `block content` possuimos 2 *tags*:

- h1
- p

Em `h1= title` estamos pegando o conteúdo da variável `title` que foi passada no `res.render` e atribuindo diretamente para o título `h1`, ficando assim:

```html
<h1>Express</h1>
```

E em `p Welcome to #{title}` estamos interpolando o valor de `title`, colocando-o dentro da *String* `Welcome to #{title}`, renderizando dessa forma:

```html
<p>Welcome to Express</p>
```

Logo você deve ter percebido que se eu usar `tag= variavel` eu estarei atribuindo o valor da variavel no texto da *tag*, enquanto que se eu quiser colocar esse valor dentro de outra *String* basta utilizar `#{variavel}`.

Depois de entendermos o básico dessas *views* vamos voltar para o `./routes/index`:

```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

Perceba que em vez de definirmos a rota diretamente no `app.js` agora criamos um módulo para encapsular todas as rotas de um módulo, assim como em `./routes/users`:

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
```

Vamos voltar para o `app.js`, já conhecemos muito bem a parte de definição das *views* e do uso dos *Middlewares*, logo não preciso explicar novamente.

```js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
```

O que nos interessa é o que vem após:

```js
app.use('/', routes);
app.use('/users', users);
```

É nessa parte onde definimos nossas rotas e qual módulo de rotas usado, perceba que utilizamos `app.use` e como você sabe essa é a função para executar *Middlewares*.

Logo todas as rotas que iniciarem em `/` irão chamar o módulo `routes`, para visualizarmos isso melhor adicione a seguinte rota no módulo `routes/index`:

```js
router.get('/nois', function(req, res) {
  res.render('index', { title: 'que voa' });
});
```

E entre na url `http://localhost:3000/nois` que você verá a *view* renderizada com esse valor.

**Mas pera aí se todas irão cair na `/` então ela não chegará nas outras rotas?**

Ótima pergunta!

Para visualizarmos melhor adicione mais uma rota nesse arquivo:

```js
router.get('/users', function(req, res) {
  res.render('index', { title: 'USERS' });
});
```

E entre na url `http://localhost:3000/users`, você verá a *view* `index` renderizada com esse valor.

**E agora como irá chegar no módulo `app.use('/users', users)`?**

Nesse caso ela **NUNCA** chegará nessa linha pois você definiu a mesma rota no módulo anterior e no Express **a ordem das rotas IMPORTA**.

Pois quando uma requisição chegar ela será entregue primeiramente para o módulo `routes`, caso não encontre a rota nesse módulo ele irá para o próximo que possui essa rota, no caso `app.use('/users', users)`.

Logo eu não posso criar rotas que possam ser utilizadas em outros módulos no módulo `routes`, então retire essa última rota criada.

Analisando o módulo `users`:

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
```

Percebemos que a rota definida internamente é a mesma do módulo `routes`: `router.get('/', ...)`.

**Então como isso funciona?**

Ela funciona pois na verdade essa rota é baseada na rota definida no `app.js`:

```js
app.use('/users', users);
```

Nesse caso ele só entrará nesse módulo quando a url iniciar em `/users`, adicione essa rota como exemplo:

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/json', function(req, res) {
  res.json({name: 'Suissa'});
});

module.exports = router;
```

E entre na url `http://localhost:3000/users/json`, pronto agora você verá o retorno desse JSON.

Voltando para o `app.js`, logo após a definição das rotas temos uma função que irá pegar qualquer rota que não exista, pois para chegar nesse ponto ele não pode ter entrado em nenhuma rota pré-definida acima:

```js
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
```

E logo abaixo é definido as funções de manipulação de erros:

```js
/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
```

Quando o ambiente for definido como `'development'`, `app.get('env') === 'development'`, o erro será renderizado na *view* `error.jade` com seu *stacktrace*:

```js
res.render('error', {
    message: err.message,
    error: err
});
```

Enquanto que no ambiente de produção só será renderizada a mensagem de erro:

```js
res.render('error', {
    message: err.message,
    error: {}
});
```

Fechando assim nosso módulo com `module.exports = app` para que possamos importar no script que inicia o servidor.

Agora que conhecemos o básico vamos iniciar criando um módulo novo em `modules/User` com o arquivo `routes.js` dentro dele.

```js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'User' });
});

module.exports = router;
```

Onde importaremos esse módulo no `app.js`:

```js
var routes = require('./routes/index');
var users = require('./routes/users');

// API Modules
var UsersAPI = require('./modules/Users/routes');
```

E depois usamos ele na rota `/api/users`:

```js
app.use('/', routes);
app.use('/users', users);

// API Routes
app.use('/api/users', UsersAPI);
```

Por hora ela não faz nada de interessante então bora integrar ela com o *Mongoose*, utilizando os *Pokemons* por hora:

```js
'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const callback = function (err, data, res) {
  if (err) return console.log('ERRO: ', err);
  return res.json(data);
};

router.get('/', function(req, res) {
  const query = {};
  PokemonModel.find(query, (err, data) => {
    callback(err, data, res);
  });
});
```

Antes de executar precisamos criar o `db/config.js` para adicionarmos no `app` e termos a conexão inicializada diretamente:

```js
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

Pronto! Basta adicionarmos esse arquivo no `app.js` dessa forma:

```js
'use strict';

require('./db/config');
const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const users = require('./routes/users');
const UsersAPI = require('./modules/Users/routes');

...
```

Depois disso vamos criar a rota do ***Create***:

```js
router.post('/', function(req, res) {
  const body = req.body;
  const poke = new PokemonModel(body);
  poke.save((err, data) => {
    callback(err, data, res);
  });
});
```

Percebeu que os valores enviados na requisição se encontram em `req.body`?

Isso graças ao *middleware* `body-parser`!

Para finalizar essa parte precisamos refatorar o `routes.js` pois o mesmo está com a responsabilidade de trabalhar com o *Mongoose* coisa que não é da sua alçada.

Logo vamos passar esse código para o arquivo `model.js` que criaremos na pasta `modules/Users`:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
module.exports = mongoose.model('Pokemon', pokemonSchema);
```

Deixando nosso `routes.js` assim:

```js
'use strict';

const express = require('express');
const router = express.Router();
const PokemonModel = require('./model');

const callback = function (err, data, res) {
  if (err) return console.log('ERRO: ', err);
  return res.json(data);
};

router.get('/', function(req, res) {
  const query = {};
  PokemonModel.find(query, (err, data) => {
    callback(err, data, res);
  });
});

router.post('/', function(req, res) {
  const body = req.body;
  const poke = new PokemonModel(body);
  poke.save((err, data) => {
    callback(err, data, res);
  });
});

module.exports = router;
```

### Exercício aula 11 parte 3

Criar um CRUD para User, o qual deve possuir os seguintes campos:

- email: String
- password: String
- createdAt: Date

As rotas de `UPDATE` e `DELETE` devem ser definidas utilizando a variável `:id` para que suas ações executem diretamente no `User` desejado.

Criar uma rota que deverá retornar **APENAS** 1 usuário, utilizando o seguinte padrão:

```
router.get('/:id', ...)
```

## Express Generator - continuação

Depois de integrarmos o *Mongoose* iremos mudar nosso módulo de `Users` para nosso formato atômico, logo basta copiarmos o conteúdo da pasta do `mongoose-atomic-design`(aula 12), que são:

```
actions
atoms
molecules
organisms
quarks
```

E colá-las no pasta do nosso módulo `modules/Users` que tinha apenas `routes.js` e `model.js`.

Então sabemos que nessa rota iremos buscar os usuários no MongoDb e depois retornar como JSON, para isso importaremos o `organisms/organism-user` que possui todas as funcionalidades desse módulo e chamamos a função `find()`:

```js
const express = require('express');
const router = express.Router();

const User = require('./organisms/organism-user');

router.get('/', function(req, res) {
  User.find(req, res);
});

module.exports = router;
```

Porém como já manjamos de JavaScript, sabemos que podemos escrever assim:

```js
router.get('/', User.find);
```

A função `find` se encontra em `actions/action-find.js`:

```js
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = {};
    Organism.find(query, (err, data) => callback(err, data, res));
  };
}
```

**Agora ficou fácil fazer o resto do CRUD não?**

```js
router.get('/', User.find);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.remove);
```

Essas são as ações utilizadas:

```js
// action-create
'use strict';

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    Organism.create(req.body, (err, data) => {
      callback(err, data, res);
    });
  }
};
```


```js
// action-update
'use strict';

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    const mod = req.body
    Organism.update(query, mod, (err, data) => callback(err, data, res));
  };
};
```


```js
// action-remove
'use strict';

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    Organism.remove(query, (err, data) => callback(err, data, res));
  };
};
```

### Express Atomic Design

Mas é claro que iremos atomizar o Express também, eu não seria nem louco de não ensinar uma maravilha dessas.

Como já temos a parte do Mongoose atomizada, agora basta que integremos ela com as rotas, para isso iremos criar um JSON com a config das rotas para melhor reuso delas.

#### Routes

Para isso vamos analisar quais são as informações necessárias definirmos em uma rota:

- *method*: método HTTP;
- *path*: url da rota;
- *callback*: ação a ser executada.

Vou apenas adicionar um "nome" para rota no atributo *action*:

```js
const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Controller.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , path: '/'
    , callback: Controller.find
    }
  , {
      action: 'get'
    , method: 'get'
    , path: '/:id'
    , callback: Controller.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Controller.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Controller.remove
  }
];
```

Claramente você percebeu que não definimos a função de *callback* diretamente na rota para melhor reuso da mesma.

Após definirmos suas informações necessitaremos criar uma função que possa gerar elas automaticamente para o Express, então como fazer isso?

Vamos lembrar da [aula que aprendemos os métodos do *Router*](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/express.md#routermethodpath-callback--callback):

```js
router.get('/', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/', (req, res) => {});
router.delete('/', (req, res) => {});
```

Com os métodos acima podemos criar nossa API REST, sabendo disso vamos analisar a estrutura dessa função:

```js
router.get('/', (req, res) => {});
router['get']('/', (req, res) => {});

const METHOD = 'get';

router[METHOD]('/', (req, res) => {});
```

Agora ficou fácil separarmos as outras partes, não?

```js
router.get('/', (req, res) => {});
router['get']('/', (req, res) => {});

const METHOD = 'get';
const PATH = '/';
const CALLBACK = (req, res) => {};

router[METHOD](PATH, CALLBACK);
```

Ótimo agora precisamos usar essa função genérica com os dados do nosso *Array* de rotas, se possuimos uma coleção de rotas e precisamos criar uma rota nova com cada item dessaa coleção, qual a melhor forma de fazer isso?

> forEach

Exatamente! Com a função `forEach` que é específica para isso.

```js
routes.forEach( route => {
  Router[route.method](route.path, route.callback);
});
```

Após definirmos todas as rotas basta exportarmos o *Router* para que nossa aplicação possa utilizar, deixando nosso código final assim:

```js
'use strict';

const express = require('express');
const Router = express.Router();

const Controller = require('./organisms/organism-crud-user');
const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Controller.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , path: '/'
    , callback: Controller.find
    }
  , {
      action: 'get'
    , method: 'get'
    , path: '/:id'
    , callback: Controller.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Controller.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Controller.remove
  }
];

routes.forEach( route => {
  Router[route.method](route.path, route.callback);
});

module.exports = Router;
```

Depois basta importar esse módulo em `app.js`:

```js
const UserAPI = require('./modules/User/routes');
```

E depois utilizá-lo na rota desejada:

```js
app.use('/api/users', UserAPI);
```

**Pronto!**

Vamos testar o CRUD:

**CREATE**

![](https://cldup.com/xlnW6HboE8-3000x3000.png)

**RETRIEVE**

![](https://cldup.com/65xxQyL-MQ-1200x1200.png)
![](https://cldup.com/C6CX86NwpX-3000x3000.png)

**UPDATE**

![](https://cldup.com/xPKgzOUe8z-1200x1200.png)
![](https://cldup.com/-AQOBrmfMO.png)

**DELETE**

![](https://cldup.com/belgreycsL.png)
![](https://cldup.com/PTfhA412Ad-1200x1200.png)

#### Organisms

Agora iremos refatorar nossos Organismos, para isso abra o arquivo `organism-crud-user.js`:

```js
const mongoose = require('mongoose');
const Molecule = require('./../molecules/molecule-user');
const Organism = mongoose.model('User', Molecule);
const create = require('./../actions/action-create')(Organism);
const find = require('./../actions/action-find')(Organism);
const findOne = require('./../actions/action-findOne')(Organism);
const update = require('./../actions/action-update')(Organism);
const remove = require('./../actions/action-remove')(Organism);

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

Vamos separar o Organismo do *User* do seu CRUD:

```js
// organism-user.js
const mongoose = require('mongoose');
const Molecule = require('./../molecules/molecule-user');

module.exports = mongoose.model('User', Molecule);
```

Separando dessa forma ficará muito mais fácil de reusar e também de testar.

Podemos ainda criar um gerador de Organismos genéricos dessa forma, crie esse código em `organism-factory`:

```js
const mongoose = require('mongoose');

module.exports = (Name, Molecule) => {
  return mongoose.model(Name, Molecule);
};
```

Criamos assim um módulo que irá receber `Name` e `Molecule` como parâmetros e irá retornar o *Model* criado pelo *Mongoose*, refatorando o `organism-user`:

```js
const ORGANISM_NAME = 'User';
const Molecule = require('./../molecules/molecule-user');

module.exports = require('./organism-factory')(ORGANISM_NAME, Molecule);
```

Deixando o `organism-crud-user` assim:

```js
const mongoose = require('mongoose');
const Organism = require('./organism-user');
const create = require('./../actions/action-create')(Organism);
const find = require('./../actions/action-find')(Organism);
const findOne = require('./../actions/action-findOne')(Organism);
const update = require('./../actions/action-update')(Organism);
const remove = require('./../actions/action-remove')(Organism);

module.exports = {
  create
, find
, findOne
, update
, remove
};
```

Vamos refatorar o arquivo `routes` mudando de `Controller` para `Actions`, tirando assim um pouco do MVC para que possamos criar arquiteturas diferentes para nossos projetos:

```js
const Actions = require('./organisms/organism-actions');
const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Actions.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , path: '/'
    , callback: Actions.find
    }
  , {
      action: 'get'
    , method: 'get'
    , path: '/:id'
    , callback: Actions.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Actions.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Actions.remove
  }
];
```

Como você notou nós importamos o arquivo `organism-actions`, então precisamos criá-lo, basicamente é o mesmo `organism-crud-user` porém mais genérico:

```js
const Organism = require('./organism');
const create = require('./../actions/action-create')(Organism);
const find = require('./../actions/action-find')(Organism);
const findOne = require('./../actions/action-findOne')(Organism);
const update = require('./../actions/action-update')(Organism);
const remove = require('./../actions/action-remove')(Organism);

module.exports = {
  create
, find
, findOne
, update
, remove
};
```

Perceba que também mudei o nome de `organism-user` para `organism` para deixar nosso código mais genérico já que esse Organismo existe apenas dentro do módulo de *User*, deixando o `organism.js` assim:

```js
const ORGANISM_NAME = 'User';
const MOLECULE_PATH = './../molecules/molecule-user';
const MOLECULE = require(MOLECULE_PATH);

module.exports = require('./organism-factory')(ORGANISM_NAME, MOLECULE);
```

Deixando ainda mais genérico e dependente apenas do nome do Organismo que basicamente é o nosso módulo:

```js
const ORGANISM_NAME = 'User';
const MOLECULE_BASE = './../molecules/molecule-';
const MOLECULE_PATH = MOLECULE_BASE+ORGANISM_NAME.toLowerCase();
const MOLECULE = require(MOLECULE_PATH);

module.exports = require('./organism-factory')(ORGANISM_NAME, MOLECULE);
```

Desse jeito podemos definir nossa estrutura padrão para cada módulo e que o mesmo funcione com todo o CRUD genérico passando apenas seu nome.

Com isso vemos um padrão que irá se repetir em todos nossos módulos então para facilitar nossa vida e generalizar ainda mais nosso código vamos passar essas informações para o arquivo `config.js` que deverá ficar na raíz do nosso módulo *User*:

```js
module.exports = {
  MODULE_NAME: 'User'
, MOLECULE_PATH_BASE: './../molecules/molecule-'
, MOLECULE_PATH: this.MOLECULE_PATH_BASE+this.MODULE_NAME.toLowerCase();
, ORGANISM_FACTORY: './organism-factory'
};
```

Deixando assim o `organism.js`:

```js
'use strict';

const CONFIG = require('./../config');
const ORGANISM_NAME = 'User';
const MOLECULE_PATH_BASE = CONFIG.MOLECULE_PATH_BASE;
const MOLECULE_PATH = MOLECULE_PATH_BASE+ORGANISM_NAME.toLowerCase();
const MOLECULE = require(MOLECULE_PATH);

module.exports = require(CONFIG.ORGANISM_FACTORY)(ORGANISM_NAME, MOLECULE);
```

**PS: TODOS OS ARQUIVOS DEVEM OBRIGATORIAMENTE COMEÇAR COM 'use strict';** eu só não coloquei em todos exemplos aqui para poupar texto.

Agora vamos mudar o nome da Molécula `molecule-user` para apenas `molecule`, pois mesmo se o *Schema* agregar outras moléculas, essa sempre será a molécula que define nosso módulo.

Refatorando ficará assim:

```js
// config.js
module.exports = {
  MODULE_NAME: 'User'
, MOLECULE_PATH: './../molecules/molecule'
, ORGANISM_FACTORY: './organism-factory'
};

// organism.js
const CONFIG = require('./../config');
const ORGANISM_NAME = CONFIG.MODULE_NAME;
const MOLECULE_PATH = CONFIG.MOLECULE_PATH;
const MOLECULE = require(MOLECULE_PATH);

module.exports = require(CONFIG.ORGANISM_FACTORY)(ORGANISM_NAME, MOLECULE);
```

Então mudamos nossa arquitetura para isso:

```
Routes -> organism-actions -> organism-user -> organism-factory -> molecule -> atoms
```

Dessa forma nós encapsulamos as ações do Organismo em `organism-actions` que para ser gerado necessita do `organism-user` que por sua vez é gerado pelo `organism-factory` que cria o *Model* do Mongoose a partir de sua Molécula.

Assim deixando nossa arquitetura bem modular e reusável.

### Exercícios

- Criar 1 módulo completo na arquitetura ensinada



## Performance


### gzip

Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app. Use the compression middleware for gzip compression in your Express app. For example:

```js
var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());
```

For a high-traffic website in production, the best way to put compression in place is to implement it at a reverse proxy level (see Use a reverse proxy). In that case, you do not need to use compression middleware. For details on enabling gzip compression in Nginx, see Module ngx_http_gzip_module in the Nginx documentation.

### Don’t use synchronous functions
Synchronous functions and methods tie up the executing process until they return. A single call to a synchronous function might return in a few microseconds or milliseconds, however in high-traffic websites, these calls add up and reduce the performance of the app. Avoid their use in production.

Although Node and many modules provide synchronous and asynchronous versions of their functions, always use the asynchronous version in production. The only time when a synchronous function can be justified is upon initial startup.

If you are using Node.js 4.0+ or io.js 2.1.0+, you can use the --trace-sync-io command-line flag to print a warning and a stack trace whenever your application uses a synchronous API. Of course, you wouldn’t want to actually use this in production, but rather to ensure that your code is ready for production. See the Weekly update for io.js 2.1.0 for more information.

### Use middleware to serve static files
In development, you can use res.sendFile() to serve static files. But don’t do this in production, because this function has to read from the file system for every file request, so it will encounter significant latency and affect the overall performance of the app. Note that res.sendFile() is not implemented with the sendfile system call, which would make it far more efficient.

Instead, use serve-static middleware (or something equivalent), that is optimized for serving files for Express apps.

An even better option is to use a reverse proxy to serve static files; see Use a reverse proxy for more information.

### Do logging correctly
In general, there are two reasons for logging from your app: For debugging and for logging app activity (essentially, everything else). Using console.log() or console.err() to print log messages to the terminal is common practice in development. But these functions are synchronous when the destination is a terminal or a file, so they are not suitable for production, unless you pipe the output to another program.

### For debugging

If you’re logging for purposes of debugging, then instead of using console.log(), use a special debugging module like debug. This module enables you to use the DEBUG environment variable to control what debug messages are sent to console.err(), if any. To keep your app purely asynchronous, you’d still want to pipe console.err() to another program. But then, you’re not really going to debug in production, are you?

### For app activity

If you’re logging app activity (for example, tracking traffic or API calls), instead of using console.log(), use a logging library like Winston or Bunyan. For a detailed comparison of these two libraries, see the StrongLoop blog post Comparing Winston and Bunyan Node.js Logging.


### Handle exceptions properly
Node apps crash when they encounter an uncaught exception. Not handling exceptions and taking appropriate actions will make your Express app crash and go offline. If you follow the advice in Ensure your app automatically restarts below, then your app will recover from a crash. Fortunately, Express apps typically have a short startup time. Nevertheless, you want to avoid crashing in the first place, and to do that, you need to handle exceptions properly.

### To ensure you handle all exceptions, use the following techniques:

Use try-catch
Use promises
Before diving into these topics, you should have a basic understanding of Node/Express error handling: using error-first callbacks, and propagating errors in middleware. Node uses an "error-first callback" convention for returning errors from asynchronous functions, where the first parameter to the callback function is the error object, followed by result data in succeeding parameters. To indicate no error, pass null as the first parameter. The callback function must correspondingly follow the error-first callback convention to meaningfully handle the error. And in Express, the best practice is to use the next() function to propagate errors through the middleware chain.


### Things to do in your environment / setup
Here are some things you can do in your system environment to improve your app’s performance:

Set NODE_ENV to "production"
Ensure your app automatically restarts
Run your app in a cluster
Cache request results
Use a load balancer
Use a reverse proxy
Set NODE_ENV to "production"
The NODE_ENV environment variable specifies the environment in which an application is running (usually, development or production). One of the simplest things you can do to improve performance is to set NODE_ENV to "production."

Setting NODE_ENV to "production" makes Express:

### Cache view templates.
Cache CSS files generated from CSS extensions.
Generate less verbose error messages.

### Cache request results
Another strategy to improve the performance in production is to cache the result of requests, so that your app does not repeat the operation to serve the same request repeatedly.

Use a caching server like Varnish or Nginx (see also Nginx Caching) to greatly improve the speed and performance of your app.

### Use a load balancer
No matter how optimized an app is, a single instance can handle only a limited amount of load and traffic. One way to scale an app is to run multiple instances of it and distribute the traffic via a load balancer. Setting up a load balancer can improve your app’s performance and speed, and enable it to scale more than is possible with a single instance.

A load balancer is usually a reverse proxy that orchestrates traffic to and from multiple application instances and servers. You can easily set up a load balancer for your app by using Nginx or HAProxy.

With load balancing, you might have to ensure that requests that are associated with a particular session ID connect to the process that originated them. This is known as session affinity, or sticky sessions, and may be addressed by the suggestion above to use a data store such as Redis for session data (depending on your application). For a discussion, see Using multiple nodes.

Using StrongLoop PM with an Nginx load balancer

StrongLoop Process Manager integrates with an Nginx Controller, making it easy to configure multi-host production environment configurations. For more information, see Scaling to multiple servers (StrongLoop documentation).

### Use a reverse proxy
A reverse proxy sits in front of a web app and performs supporting operations on the requests, apart from directing requests to the app. It can handle error pages, compression, caching, serving files, and load balancing among other things.

Handing over tasks that do not require knowledge of application state to a reverse proxy frees up Express to perform specialized application tasks. For this reason, it is recommended to run Express behind a reverse proxy like Nginx or HAProxy in production.

## pm2

http://expressjs.com/en/advanced/pm.html
