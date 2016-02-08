# HTTP

O módulo `http` é o principal módulo da nossas aplicações pois é com ele que criamos um servidor web para fornecer nossos sistemas.

Ele trabalha com diversas funcionalidades do protocolo [HTTP](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol), porém não iremos abranger todas.

Esse é um módulo nativo, não necessitando que seja instalado anteriormente.

## Como usar

Para utilizar esse módulo basta importá-lo para seu código:

```js
require('http')
```

Cada requisição enviada possui cabeçalhos que dizem o que essa requisição faz, vamos ver um exemplo de uma requisição `GET`:

```
GET / HTTP/1.1
Host: webschool.io
Connection: close
User-Agent: Chrome/46.0.2490.86
Accept-Encoding: gzip
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Cache-Control: no
Accept-Language: de,en;q=0.7,en-us;q=0.3
Referer:
```

Veja a primeira linha: `GET / HTTP/1.1`.
Onde o `GET` é o **verbo do HTTP** da nossa requisição , falarei mais adiante sobre.

Após enviada essa requisição pelo cliente o servidor irá tratar e retorna uma resposta, seguindo o exemplo abaixo:

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/html
Date: Sun, 06 Dec 2015 01:07:17 GMT
ETag: W/'55f9df1c-23f'
Last-Modified: Wed, 16 Sep 2015 21:29:00 GMT
Server: nginx
Transfer-Encoding: chunked
Vary: Accept-Encoding
```

Note na primeira linha onde recebemos: `HTTP/1.1 200 OK`.

Esse `200` é o código de *status* da nossa resposta, falarei mais adiante sobre.

Então perceba que o **cliente** envia uma requisição com um **verbo HTTP** e seus cabeçalhos, depois de recebida e tratada o servidor responde com um **STATUS CODE** e seus cabeçalhos.

## Methods

O protocolo HTTP possui um conjunto de métodos/verbos que o cliente pode invocar, veja abaixo a lista dos verbos mais usados:

- **GET**: Requisita um representação do recurso especificado (O mesmo recurso pode ter várias representações, ao exemplo de serviços que retornam XML e JSON).
HEAD: Retorna os cabeçalhos de uma resposta (sem o corpo contendo o recurso)
- **POST**: Envia uma entidade e requisita que o servidor aceita-a como subordinada do recurso identificado pela URI.
- **PUT**: Requisita que um entidade seja armazenada embaixo da URI fornecida. Se a URI se refere a um recurso que já existe, ele é modificado; se a URI não aponta para um recurso existente, então o servidor pode criar o recurso com essa URI.
- **DELETE**: Apaga o recurso especificado.
- **TRACE**: Ecoa de volta a requisição recebida para que o cliente veja se houveram mudanças e adições feitas por servidores intermediários.
OPTIONS: Retorna os métodos HTTP que o servidor suporta para a URL especificada.
- **CONNECT**: Converte a requisição de conexão para um túnel TCP/IP transparente, usualmente para facilitar comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado.
- **PATCH**: Usado para aplicar modificações parciais a um recurso.

E são com 4 verbos diferentes que criamos um [CRUD](https://pt.wikipedia.org/wiki/CRUD), que é **essencial em qualquer sistema**.

No CRUD precisamos ter 4 ações:

- Create
- Retrieve/Read
- Update
- Delete

**Sabendo disso agora, quais são os 4 verbos que utilizamos para o CRUD?**

ps: Faz parte do exercício dessa aula.

## Status Codes

Os códigos de retorno HTTP são compostos por 3 dígitos que seguem um formato padrão dando melhor direcionamento para a identificação correta do retorno.

Os códigos de *status* são divididos em:

### 1XX Informacional

Não há necessidade de se preocupar com este, serve apenas para informar que a informação foi recebida e que o processo continua.

### 2XX Sucesso

Significa que o pedido foi recebido com sucesso. É o que sempre acontece quando suas páginas são carregadas

200 – OK. O pedido ao servidor foi atendido com sucesso. A página web existe e será enviada ao user-agent (navegador, robô de busca…).

### 3XX Redirecionamento

Serve para avisar direto no cabeçalho HTTP uma mudança de página. Diferente de um Meta Refresh ou usar javascript, ele permite um redirecionamento “suave” e importante para SEO.

301 – Movido Permanentemente. Muito útil para redirecionar páginas. Serve para redirecionar suas URLs que foram movidas permanentemente. Assim você evita páginas de código 404 ou pode tornar URLs dinâmicas com em URLs limpas.

302 – Movido Temporariamente. Serve também para mover, mas com função temporária. A vantagem é que você pode reverter isto. Funciona bem para manutenções ou alteração não definitiva. O robô de busca continua visitando o endereço original.

### 4XX Erro do Cliente

Deve ser tratado com atenção pois o conteúdo não estará acessível para o visitante nem para o site de busca. Problema para indexar.

401 – Não autorizado. O acesso a página não esta autorizado pois possivelmente a pessoa não está logada. Isto impede de uma página ser indexada por exemplo.

403 – Proibido. Neste caso o robô de busca também não terá como indexar o conteúdo.

404 – Não encontrado. É o código de retorno pode ser uma página ou arquivo que não existe no servidor, como um arquivo apagado. Pode ser usado para apresentar uma página com conteúdos relacionados à URL procurada.

### 5XX Erro do Servidor

O servidor não consegui atender o pedido por algum erro. Também não permitirá a indexação da página.

500 – Erro interno do servidor.

503 – Serviço indisponível. Pode ser um erro temporário. Uma manutenção ou uma grande quantidade de acessos pode derrubar o servidor.

[Lista dos códigos de *status*](https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_status_HTTP).

### Cats API

![Erro 450](https://http.cat/450.jpg)

Tem até uma [API](https://http.cat/) para consultar o **STATUS CODE** felino.

## createServer

Antes de iniciar a criação dos códigos desse módulo crie uma pasta para o Workshop e dentro dela uma para o Node.js, por exemplo:

```
workshop-be-mean/nodejs/
```

Para iniciarmos um servidor HTTP utilizaremos a função `createServer` que recebe uma função com 2 parâmetros:

- request;
- response.

```js
// hello-world.js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Be MEAN');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Ou:

```js
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Be MEAN');
  response.end();
});

server.listen(3000, function(){
  console.log('Executando Servidor HTTP');
});
```

A única diferença que no primeiro código não atribuimos o servidor em uma variável por isso encadeamos a função `listen` que faz o servidor *subir* na porta passada para ela e executando um *callback* após.

Percebeu que uma função sem nome foi passada para o `createServer`?

```js
function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Be MEAN');
  response.end();
}
```

Isso se chama **função anônima** e é uma característica **muito importante** do JavaScript, nessa função respondemos para o cliente que fez a requisição.

Exemplo de um cabeçalho:

```js
{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'mysite.com',
  'accept': '*/*' }
```

[Lista dos campos do cabeçalho](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), voltando ao nosso código.

```js
response.writeHead(200, {'Content-Type': 'text/plain'});
```

Acima estamos criando o cabeçalho da resposta com o **Status Code** `200` e o **Content-Type** `text/plain`.

```js
response.write('Be MEAN');
```

Depois escrevemos no corpo da resposta `Be MEAN`.

```js
response.end();
```

E por fim finalizamos a conexão com o cliente.

Mas como estamos trabalhando com o Navegador para acessar nosso servidor vamor retornar um HTML então.

```js
// hello-http.js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('<h1>Be MEAN</h1>');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

**Ué mas deu merda!**

Então como nós retornamos nossa resposta corretamente?

Corrigindo o cabeçalho da resposta.

```js
// hello-http.js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Be MEAN</h1>');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Aprendemos a enviar um HTML escrevendo ele na resposta, agora é a hora de respondermos com um HTML já criado, então primeiramente crie um `index.html`, na mesma pasta dos seus códigos, com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Be MEAN - Instagram</title>
</head>
<body>
  <h1>Be MEAN - Instagram - html</h1>
</body>
</html>
```

Depois crie o seguinte script `hello-html.js`:

```js
// hello-html.js
var http = require('http')
  , fs = require('fs')
  , index = fs.readFileSync('index.html');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(index);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Nesse código estamos lendo o `index.html` com o `fs.readFileSync`, falaremos mais tarde sobre o módulo `fs`.

Com isso aprendemos como a criar um simples servidor HTTP para nossas futuras aplicações.

## Rotas

A primeira coisa que nosso sistema web precisa ter para ser acessado são rotas, então vamos criar nossa primeira rota `/api/v1` que retornará informações sobre a nossa api.

Primeiramente vamos criar o JSON de resposta:

```js
const JSON = {
  version: 1.0
, name: 'Be MEAN'
, created_at: Date.now()
};
```

Depois vamos adicioná-lo no script `server.js` que irá conter o nosso servidor HTTP.

```js
// server.js
'use strict';

const http = require('http')
, JSON = {
    version: 1.0
  , name: 'Be MEAN'
  , created_at: Date.now()
  };

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Sim iremos usar [comma-first](http://nomadev.com.br/comma-first-por-que-usar/).

Esse será nosso esqueleto, agora precisamos verificar qual é a URL requisitada pelo cliente.

```js
// server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }
    , ERROR = {
      message: 'DEU MERDA FI!!!!'
    };

http.createServer(function(req, res){
  if(req.url === '/api/v1') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(SUCCESS));
  }
  else {
    res.writeHead(400, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

**DICA**: como iremos trabalhar em arquivos únicos, para eliminarmos o trabalho manual de derrubarmos o servidor e levantarmos novamente, vamos instalar o `nodemon`:

```js
npm i -g nodemon
```

Instalamos ele globalmente com `-g` para que seja acessível em linha de comando.

Também instale o [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) que é uma extensão para o Chrome, para testarmos nossas APIs, será de grande utilização durante o curso.

Depois de ter feito tudo isso levante seu servidor com o `nodemon`:

```
nodemon server.js
6 Dec 16:05:26 - [nodemon] v1.3.8
6 Dec 16:05:26 - [nodemon] to restart at any time, enter `rs`
6 Dec 16:05:26 - [nodemon] watching: *.*
6 Dec 16:05:26 - [nodemon] starting `node server.js`
Servidor rodando em localhost:3000
```

Agora abra o POSTMAN e dê um `GET` na url `http://localhost:3000/api/v1`.

![POSTMAN requisição de sucesso](https://cldup.com/Qsn8q1qbsS-3000x3000.png)

Pronto conseguimos a resposta de **sucesso**, agora vamos requisitar uma URL inexistente para vermos o retorno de **erro**.

![POSTMAN requisição de erro](https://cldup.com/DUohAk2WIw-3000x3000.png)


### Querystring

```js
'use strict';
// file: hello-querystring.js
let http = require('http')
  , url = require('url');

http.createServer(function(request, response){

  var result = url.parse(request.url, true);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body>');
  response.write('<h1>Query string</h1>');
  response.write('<ul>');

  for(var key in result.query){
    response.write('<li>'+key+' : '+result.query[key]+'</li>');
  }

  response.write('</ul>');
  response.write('</body></html>');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

```


## get

Para dar continuidade no HTTP vamos ver um dos verbos mais usados, o `GET`.

Com ele iremos requisitar informações na nossa ou em outras APIs e é isso que faremos agora, consultaremos a [API dos Pokemons](http://pokeapi.co/).

Usaremos a função `http.get` seguindo o seguinte modelo:

```js
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // criar um novo agente apenas para este pedido
}, function (res) {
  // Faça algo com res
})
```

Agora criando a requisição para o nosso servidor que está rodando o `hello-querystring.js`:

```js
// file: http-get-localhost-querystring.js
'use strict';

const http = require('http');

http.get({
  hostname: 'localhost',
  path: '/user?name=Suissa&teacher=true&age=31',
  port: 3000,
  agent: false
}, function (response) {
   let body = '';

    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + response.headers);

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      console.log('Resposta: ', body);
    });
});
```

Mas vamos fazer uma pequena modificação para vocês já se acostumarem com [Arrow Functions] do [ES6]:

```js
// file: http-get-localhost-querystring.js
'use strict';

const http = require('http');

http.get({
  hostname: 'localhost',
  path: '/user?name=Suissa&teacher=true&age=31',
  port: 3000,
  agent: false
}, (response) => {
   let body = '';

    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + response.headers);

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      console.log('Resposta: ', body);
    });
});
```

Eu poderia ter omitido os `()` de `(response) => `, porém deixei para ficar mais fácil a sua migração.

Salve esse código como `http-get-localhost-querystring.js` e execute como visto abaixo:

```js
node http-get-localhost-querystring.js
STATUS: 200
HEADERS: {"content-type":"text/html","date":"Sat, 12 Dec 2015 14:46:37 GMT","connection":"close","transfer-encoding":"chunked"}
Resposta:  <html><body><h1>Be - MEAN</h1><h2>Query string</h2><ul><li>name : Suissa</li><li>teacher : 1</li><li>age : 31</li></ul></body></html>
```

Agora vou explicar o que aconteceu no código, primeiramente passamos o JSON de configuração da requisição:

```js
{
  hostname: 'localhost',
  path: '/user?name=Suissa&teacher=true&age=31',
  port: 3000,
  agent: false
}
```

E no segundo parâmetro passamos a função anônima que é executada após a requisição ser respondida:

```js
(response) => {
   let body = '';

    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + response.headers);

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      console.log('Resposta: ', body);
    });
}
```

Inicialmente criamos a variável `body` que irá receber a resposta em si, porém de uma forma diferente que estamos acostumados, pois precisamos concatenar `body += data` os dados que chegam no evento `data` do `response` que é recebido pelo *callback* do `get()`.

A única diferença entre o `http.get()` e `http.request`é que o `get()` seta o valor do verbo para `GET` e chama o `req.end()` automaticamente.

**Percebeu que estamos usando 2 eventos do `response`?**

Isso acontece porque ele é uma instância do [http.IncomingMessage](https://nodejs.org/api/http.html#http_http_incomingmessage).

> Um objeto `IncomingMessage` é criado por `http.Server` ou `http.ClientRequest` e passado como o primeiro argumento para o `request` e  `response`, respectivamente. Ele pode ser usado para acessar resposta de status, os cabeçalhos e os dados em si.

O `IncomingMessage` implementa a interface de [Readable Stream ](https://nodejs.org/api/stream.html#stream_class_stream_readable) que nos dá alguns eventos importantes, como:

- **close**: evento emitido quando qualquer tipo de stream foi fechada;
- **data**: evento que recebe os dados da *Stream*;
- **end**: evento emitido quando não há mais dados para ler;
- **error**: evento emitido quando acontecer algum erro.

Sabendo de tudo isso podemos seguir para o `request` e começar a consumir APIs externas.

## request

Primeira coisa que precisamos fazer é criar o JSON de configuração da requisição:

```js
const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};
```

Depois criamos a função de *callback*:

```js
function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}
```

Para depois passarmos os 2 para o `request`:

```js
const req = http.request(options, callback);
```

Bastando assim apenas escutar o evento `error` e fechar a conexão com `req.end()`:

```js
req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```

Juntando todas essas partes criamos o arquivo `http-request.js`:

```js
// file: http-request.js
'use strict';

const http = require('http');

const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```

Depois basta executar esse script no terminal:

```
node http-request.js
STATUS: 200
HEADERS: {'server':'nginx','date':'Sun, 06 Dec 2015 16:15:05 GMT','content-type':'application/json;charset=utf-8','transfer-encoding':'chunked','connection':'close','set-cookie':['PHPSESSID=s1vnnu7rm4g4tagh2la03kni36; path=/'],'expires':'Thu, 19 Nov 1981 08:52:00 GMT','cache-control':'no-store, no-cache, must-revalidate, post-check=0, pre-check=0','pragma':'no-cache'}
Dados finalizados:  {'videos':[...]}
```

Vamos continuar com o `request` porém dessa vez consultaremos


### Create - POST

Para executarmos a ação de ***Create*** usaremos o verbo `POST`, normalmente, na mesma url que usamos o `GET`, requisitaremos em uma API externa pois ainda não estamos trabalhando com banco aqui e queremos um efeito real.

Essa API está em `http://webschool-io.herokuapp.com/`.


```js
// file: http-request-post.js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Jean Nascimento'
      , type: 'professor'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons'
      , method: 'POST'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

**Percebeu que começamos importando um módulo novo?**

O [querystring](https://www.npmjs.com/package/querystring) irá servir para *parsear* os dados no formato [Querystring](https://en.wikipedia.org/wiki/Query_string), este sendo nada mais que um padrão que o protocolo HTTP utiliza para transporte de informação do cliente para o servidor, ou até mesmo cliente - cliente.

O querystring obedece o seguinte padrão:

```
nome_da_variavel=conteudo da variavel
```

Então o conteúdo da `const postData`, após a execução da `querystring.stringify()`, é:

```
name=Jean%20Nascimento&type=professor
```

Depois criamos o, já manjado, JSON de configuração, porém dessa vez temos mais coisas:

```js
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

```

Dessa vez adicionamos o objeto `headers` o qual conterá todos nossos cabeçalhos, como:

```js
{
  'Content-Type': 'application/x-www-form-urlencoded'
, 'Content-Length': postData.length
}
```

Que são necessários quando enviamos dados com `POST`.

O cabeçalho `'Content-Type': application/x-www-form-urlencoded` diz a forma que a informação é enviada, nesse caso como *querystring*.

E o cabeçalho `'Content-Length': postData.length` fala qual é o tamanho, em bytes, da informação enviada, aqui sendo `37` pois é a quantidade de caracteres de `name=Jean%20Nascimento&type=professor`, onde cada caracter é 1 byte.

# FIM

Dica: [https://github.com/floatdrop/debug-http](https://github.com/floatdrop/debug-http)
