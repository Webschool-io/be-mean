# Node.js - Aula 02 - Exercício
**user:** [diegolopesdev](http://github.com/diegolopesdev)
**autor:** Diego Lopes do Nascimento

## Quais são os 4 verbos que utilizamos para o CRUD?
* C - Create - Criar (POST)
* R - Retrieve / Read - Recuperar / Ler (GET)
* U - Update - Atualizar (PUT)
* D - Delete - Deletar (DELETE)

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Para informar e padronizar o retorno das requisições HTTP entre o Cliente e o Servidor.

Exemplo de retorno do 100: https://http.cat/100 [100](https://http.cat/100)
![Exemplo de imagem 100](https://http.cat/301 "Exemplo de imagem 100")

Exemplo de retorno do 201: https://http.cat/201 [201](https://http.cat/201)
![Exemplo de imagem 201](https://http.cat/201 "Exemplo de imagem 201")

Exemplo de retorno do 301: https://http.cat/301 [301](https://http.cat/301)
![Exemplo de imagem 301](https://http.cat/301 "Exemplo de imagem 301")

Exemplo de retorno do 404: https://http.cat/404 [404](https://http.cat/404)
![Exemplo de imagem 404](https://http.cat/301 "Exemplo de imagem 404")

Exemplo de retorno do 500: https://http.cat/500 [500](https://http.cat/500)
![Exemplo de imagem 500](https://http.cat/301 "Exemplo de imagem 500")

## Explique o que é cada parâmetro da função recebida no `createServer`.
A função *createServer*, do módulo HTTP, recebe uma função anônima que possui dois parâmetros: req (request) e res (response) e que retorna um objeto da classe *EventEmitter*.

*request* - É uma instância da classe *http.IncomingMessage* e possui informações sobre a requisição feita ao servidor.
*response* - É uma instância da classe *http.ServerResponse* e é responsável por manipular a resposta que será enviada ao cliente.

## O que é e para que serve a Querystring?
*QueryString* é um padrão que o protocolo HTTP utiliza para transporte de informações do cliente para o servidor, como um conjunto de valores anexados a URL através de uma requisição GET.

Exemplo: http://www.meusite.com/pokemon/search?name=Mea&limit=10.

O servidor receberá uma requisição que contém duas variáveis nessa requisição: *Name* e *Limit*. Nesse exemplo, eu poderia listar na pesquisa todos os pokémons que começam com "Mea" e limitando o resultado em 10 items.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```

var http = require('http');
var STATUS = {};

function setStatus(action, message){
   STATUS = {
      action: action,
      message: message,
      date_at: new Date().toJSON()
   };
}

http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

   switch(req.url){
      case '/api/pokemons/create':
         setStatus('CREATE', 'Você está criando um Pokémon.');
      break;
      case '/api/pokemons/read':
         setStatus('READ', 'Você está retornando um Pokémon.');
      break;
      case '/api/pokemons/update':
         setStatus('UPDATE', 'Você está atualizando um Pokémon.');
      break;
      case '/api/pokemons/delete':
         setStatus('DELETE', 'Você está excluindo um Pokémon.');
      break;
      default:
         res.writeHead(404, {'Content-Type': 'application/json'});
         setStatus('ERROR', 'Not found');
      break;
   }
   res.write(JSON.stringify(STATUS));
   res.end();
}).listen(3300, () => {
      console.log('O servidor está rodando em localhost:3300.');
});

```

## Envio

[Veja na nossa Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-nodejs
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-X-resolved-githubuser-Nome-Completo-Com-Hifens-Nos-Espaços.md`
3. Dê um `fork` no repositório oficial [https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises)
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Execute um `git add NOME_DO_SEU_ARQUIVO.md` depois o `git commit -m 'SEU NOME - Node.js - Exercicio X resolvido'`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Na mensagem do commit/pull request favor seguir o padrão: Nome Completo - Node.js - Exercicio X resolvido
7. Levante as mão para o céu e agradeça se acaso tiver ... #brinks
