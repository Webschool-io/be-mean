# Teoria

Node.js é um *interpretador* de JavaScript que funciona do lado do servidor criado em cima do [V8](https://developers.google.com/v8/) que é o motor de JavaScript da Google e que roda no seu Chrome. 

O Node.js age como uma ponte entre uma API acessável via JavaScript e funções em C++ do V8, foi criado por Ryan Dahl em 2009.

Conta-se que Ryan se inspirou depois de ver barra de progresso de upload de arquivos no [Flickr](https://www.flickr.com/), percebeu que o navegador não sabia o quanto do arquivo foi carregado e tinha que consultar o servidor web. Loco não?

## Single thread

O Node.js trabalha *apenas* com uma thread, podendo ser criadas outras, com isso economizando muita memória, diferentemente da forma que o Apache trabalha e você percebe claramente a diferença de utilização de memória, já que com apenas uma *thread* você não precisa criar um processo novo para cada usuário conectado, acarretando também em uma economia de CPU.

**Mas como ele consegue gerenciar a porra toda apenas com uma *thread*?**

Com uma coisinha fachama *Event Loop*.

## Event Loop



## I/O Async

## Libuv

## V8

## Event Drive

## API
