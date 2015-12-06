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
ETag: W/"55f9df1c-23f"
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
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Ou:

```js
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
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
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
  response.end();
}
```

Isso se chama **função anônima** e é uma característica **muito importante** do JavaScript, nessa função respondemos para o cliente que fez a requisição.

```js
response.writeHead(200, {"Content-Type": "text/plain"});
```

Acima estamos criando o cabeçalho da resposta com o **Status Code** `200` e o **Content-Type** `text/plain`.

```js
response.write("Be MEAN");
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
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("<h1>Be MEAN</h1>");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

**Ué mas deu merda!**

Então como nós retornamos nossa resposta corretamente?

Corrigindo o cabeçalho da resposta.

```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Be MEAN</h1>");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Aprendemos a enviar um HTML escrevendo ele na resposta, agora é a hora de respondermos com um HTML já criado, então primeiramente crie um `index.html`, na mesma pasta dos seus códigos, com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(index);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```

Nesse código estamos lendo o `index.html` com o `fs.readFileSync`, falaremos mais tarde sobre o módulo `fs`.


```js
var http = require('http')
  , url = require('url');

http.createServer(function(request, response){

  var result = url.parse(request.url, true);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html><body>");
  response.write("<h1>Query string</h1>");
  response.write("<ul>");

  for(var key in result.query){
    response.write("<li>"+key+" : "+result.query[key]+"</li>");
  }

  response.write("</ul>");
  response.write("</body></html>");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

```


## get

// Consultar a API dos gatos e servir posteirormente a imagem em rotas.

## request