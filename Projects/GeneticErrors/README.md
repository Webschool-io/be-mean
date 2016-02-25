# Corretor de Erros

Um módulo de gerenciamento de erros que entenda qual erro ocorrido e o corrija.

## O Problema

Muitos dos erros que recebemos do Node.js são fáceis de entender pois o mesmo além de mostrar o *Stack Trace* também mostra exatamente qual linha e caracter que ocasionou o erro.

## A Solução

Um módulo que contenha as mensagens de erro padrão onde ele define que aquele erro deve ser corrigido de tal forma, vamos pegar um exemplo simples de falta de um módulo:


```
module.js:341
    throw err;
    ^

Error: Cannot find module 'mongoose'
    at Function.Module._resolveFilename (module.js:339:15)
    at Function.Module._load (module.js:290:25)
    at Module.require (module.js:367:17)
    at require (internal/module.js:16:19)
    at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)


```

Com essa mensagem padrão do Node.js sabemos que o erro vem após `Error` e a mensagem base é `Cannot find module 'mongoose'`, nesse caso o desenvolvedor registra a mensagem de erro é `Cannot find module` e o objeto do erro é `'mongoose'`, agora sabendo disso para criar um script de correção desse erro. 

Logo ele deve escrever a solução para esse erro que deve ser algo assim:


1. Achar em qual arquivo ocorreu o erro
  - `at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)`
2. Pegar o nome do módulo faltante
3. Abrir esse arquivo e adicionar require('$nome_do_modulo')
4. Executar `npm install --save $nome_do_modulo
5. Reiniciar o servidor.

O maior problema é em como generalizar isso para qualquer erro, então vamos analisar mais um erro básico:

```js
const version = 7;
version = 20;
const version = 20;

```

Erro:

```
/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/es6/const.js:3
const version = 20;
^

SyntaxError: Identifier 'version' has already been declared
    at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/es6/const.js:1:11)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:139:18)
    at node.js:999:3

```

Perceba então que o tipo de **Erro** já mudou aqui para `SyntaxError`, com isso nós sabemos que é algum erro de escrita com essa mensagem: `Identifier 'version' has already been declared`. Isso signifia que `'version'` já foi declarada, logo ela não pode ser redeclarada, ou seja, mudar seu valor.

Uma possível solução para isso é o script entender isso e perguntar ao desenvolvedor se ele gostaria de mudar o nome dessa constante, caso ele deseje, isso pode ser o padrão, o script irá trocar todos os nomes daquela constante no código a partir do nome novo definido. Ou o script pode apenas excluir todas linhas anteriores que possuam aquela declarão.

Com esses 2 exemplos conseguimos escrever genericamente assim:


- tipo do erro: String até encontrar `:` após uma linha em branco;
- mensagem do erro: o que vier após o `:`;
- objeto do erro: String que se encontra entre `' '`;

A partir do tipo e da mensagem do erro que será executado o script que deverá conter seu algortimo para solução daquele erro, linkando cada ação do algoritmo a uma função do sript, vamos pegar como exemplo o erro de módulo:


```
module.js:341
    throw err;
    ^

Error: Cannot find module 'mongoose'
    at Function.Module._resolveFilename (module.js:339:15)
    at Function.Module._load (module.js:290:25)
    at Module.require (module.js:367:17)
    at require (internal/module.js:16:19)
    at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)


```


Então podemos definir o algoritmo assim:

```
- lê mensagem de erro
- lê tipo de erro
- lê objeto do erro
- lê qual arquivo e linha ocorreu o erro
- abre o aquivo que originou o erro
- adiciona na primeira linha `require(modulo);` com quebra de linha
- salva o arquivo
- instala o módulo localmente com `--save`
- reinicia o servidor caso não use `nodemon` da vida

```

Após definir o algoritmo fica mais fácil de criar o script, porque lembrando:

> Cada passo precisa ser uma função.

Então vamos criar a base para esse algoritmo:


```js
const ReadErrorMessage = (error) => {};
const ReadErrorType = (error) => {};
const ReadErrorObject = (error) => {};
const ReadErrorFile = () => {};
const OpenErrorFile = () => {};
const CorrectErrorFile = () => {};
const SaveErrorFile = () => {};
const RestartServer = () => {};

```

Então o que fizemos foi converter o algoritmo em funções, agora basta implementá-las.

Uma coisa interessante sobre esse objeto que ele é basicamente a API que precisamos para resolver qualquer erro, pois toda mágica acontecerá realmente no `CorrectErrorFile`.

Criei uma [prova de conceito aqui.](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/GeneticErrors)

## Requisitos


## Arquitetura

## Equipe
