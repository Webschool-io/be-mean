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

O protocolo HTTP é possui um conjunto de métodos/verbos que o cliente pode invocar, por exemplo os do CRUD:

- Create
- Retrieve
- Update
- Delete

## Status Codes

![Erro 450](https://http.cat/450.jpg)

Tem até uma [API](https://http.cat/) para consultar o **STATUS CODE** felino.

## createServer

## Methods

## get

// Consultar a API dos gatos e servir posteirormente a imagem em rotas.

## request