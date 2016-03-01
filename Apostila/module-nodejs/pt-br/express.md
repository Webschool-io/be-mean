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


### res.set(field [, value])


#### Exercício

Criar um módulo onde seja passado o retorno, podendo ser *String* ou *Buffer*, caso seja *String* definir cabeçalho correto mesmo usando `res.send`.



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


### res.type(type)

### res.links(links)

Junta-se os links fornecidos para preencher o campo Link do cabeçalho de resposta do HTTP.

```Js
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

Criar uma busca com o Mongoose que pagine o resultado retornando os links corretamente.


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
npm i --save express-generator
```

Ensinar a porra toda antes do Atomic

### Express Atomic Design

Mas é claro que iremos atomizar o Express também, eu não seria nem louco de não ensinar uma maravilha dessas.

Como já temos a parte do Mongoose atomizada, agora basta que integremos ela com as rotas, para isso iremos criar um JSON com a config das rotas para melhor reuso delas.

#### Routes

Para isso vamos definir quais são as informações necessárias definirmos em uma rota:

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
