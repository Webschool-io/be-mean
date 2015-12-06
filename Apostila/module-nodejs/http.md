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

O protocolo HTTP é possui um conjunto de métodos/verbos que o cliente pode invocar, veja abaixo a lista dos verbos mais usados:

- GET: Método que solicita algum recurso ou objeto ao servidor
- HEAD: Solicita informações de um determinado objeto sem que esse seja enviado ao cliente apenas para testa a validade do último acesso.
- POST: Método usado para envio de arquivo dados ou formulário HTML ao servidor.
- PUT: Cria ou modifica algum objeto do servidor.
- DELETE: Informa por meio do URL o objeto a ser deletado.
- OPTIONS: Por meio desse método o cliente obtém as propriedades do servidor.
- TRACE: Para enviar mensagem do tipo loopback para teste.
- CONNECT: Comunicar com servidores Proxy.

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

![Erro 450](https://http.cat/450.jpg)

Tem até uma [API](https://http.cat/) para consultar o **STATUS CODE** felino.

## createServer

## Methods

## get

// Consultar a API dos gatos e servir posteirormente a imagem em rotas.

## request