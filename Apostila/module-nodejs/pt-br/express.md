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

O objeto *Response*(`req`) representa a resposta HTTP que o Express envia quando chega uma requisição HTTP, ou seja, será o objeto utilizado para responder para o *client*, vamos conhecer algumas de suas funções.

### res.send([status|body], [body])

Esse método realiza uma infinidade de tarefas úteis para respostas não-streaming simples como atribuir automaticamente o `Content-Length`, a menos que previamente definindo e provendo o cabeçalho automaticamente.

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
Redirecting to post/new from http://example.com/blog/admin (no trailing slash), will redirect to http://example.com/blog/post/new.

If you found the above behavior confusing, think of path segments as directories (with trailing slashes) and files, it will start to make sense.

Path-relative redirects are also possible. If you were on http://example.com/admin/post/new, the following would redirect to http//example.com/admin/post:

```js
res.redirect('..');
```
A back redirection redirects the request back to the referer, defaulting to / when the referer is missing.

```js
res.redirect('back');
```

### res.render(view [, locals] [, callback])

Renderizar uma *view* e envia o HTML gerado para o cliente. 

Parâmetros opcionais:

- ***locals***: um objeto cujas propriedades define variáveis locais para a *view;
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

Perceba que não usamos o `else` pois se já temos um `if` antes obviamente o que vier a seguir é o `else` e como **todas nossas funções devem rerornar algo** só executará o `return` fora do `if` se não existir erro.

### res.sendFile(path [, options] [, fn])

> `res.sendFile()` é suportado por Express v4.8.0 em diante

Transfere o arquivo para o caminho determinado. Define a resposta do campo de cabeçalho HTTP `Content-Type` com base na extensão do arquivo. A menos que a opção de raiz esteja definido no objeto de opções, o caminho deve ser um caminho absoluto para o arquivo.

- ***maxAge***:  Define a propriedade `maxAge` do cabeçalho `Cache-Control` em milissegundos ou uma string no [formato ms](https://www.npmjs.com/package/ms). Valor padrão: 0
- ***root***:  Diretório raiz para nomes de arquivos relativos.
- ***lastModified***:  Define o cabeçalho `Last-Modified` para a data da última modificação do arquivo no sistema operacional. Defina false para desativá-lo. Valor padrão: "Enabled". Apenas em Express >= 4.9.0
- ***headers***: objeto contendo cabeçalhos HTTP para servir com o arquivo.
- ***dotfiles***:  Opção para servir `dotfiles`. Os valores possíveis são "allow", "deny" e "ignore". Valor padrão: "ignore"

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
module.exports = function(res, type) {
  if(!type || type['Not-Found']) res.sendStatus(404);
}
```

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

### res.set(field [, value])

### res.status(code)

### res.type(type)

## Router

### Methods

## Request - req

O objeto req representa a solicitação HTTP e tem propriedades para a cadeia de consulta do pedido, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. Nesta documentação e, por convenção, o objeto é sempre referido como req (ea resposta HTTP é res), mas seu nome real é determinada pelos parâmetros para a função de retorno de chamada na qual você está trabalhando.

The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.


## Express Generator

Para facilitar o início de um projeto com Express iremos utilizar o `express-generator` instalando-o globalmente:

```js
npm i --save express-generator
```

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
