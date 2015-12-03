# Teoria

![](http://2.bp.blogspot.com/-Wk3CjzUfsug/VVH5I-3mrkI/AAAAAAAAARk/xFNZzbmQUFk/s1600/loop2.png)

![](http://image.slidesharecdn.com/nodejsexplained-130219213912-phpapp02/95/nodejs-explained-13-638.jpg?cb=1386103418)


Node.js é um *interpretador* de JavaScript que funciona do lado do servidor criado em cima do [V8](https://developers.google.com/v8/) que é o motor de JavaScript da Google e que roda no seu Chrome. 

O Node.js age como uma ponte entre uma API acessável via JavaScript e funções em C++ do V8, foi criado por Ryan Dahl em 2009.

Conta-se que Ryan se inspirou depois de ver barra de progresso de upload de arquivos no [Flickr](https://www.flickr.com/), percebeu que o navegador não sabia o quanto do arquivo foi carregado e tinha que consultar o servidor web. Loco não?

## Single thread

O Node.js trabalha *apenas* com uma thread, podendo ser criadas outras, com isso economizando muita memória, diferentemente da forma que o Apache trabalha e você percebe claramente a diferença de utilização de memória, já que com apenas uma *thread* você não precisa criar um processo novo para cada usuário conectado, acarretando também em uma economia de CPU.

**Mas como ele consegue gerenciar a porra toda apenas com uma *thread*?**

Com uma coisinha fachama *Event Loop*.

## Event Loop

![](http://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg)

O Event Loop nada mais é que uma fila **infinita** que recebe todos os eventos emitidos pelo Node.js, isso inclui as requisições que recebemos no servidor HTTP.

Quando o evento chega para ser exeutado no *Event Loop*, caso ele seja assíncrono, ele será enviado para onde deve ser executado, por exemplo: filesystem, network, process, etc.

Como o processo é **assíncrono** ele irá executar e só após sua finalização que ele dispara o *trigger* para seu *callback* esse voltando para a fila que irá ser executada pelo *Event Loop*.

## I/O Async

Qualquer função do Node.js, por padrão é assíncrona por isso sempre precisamos de uma função que executará após o final da execução dessa função, essa que executa posteriormente é chamada de *callback*, falremos muito mais sobre isso futuramente.

**Mas então o que quer dizer que o *I/O* é assíncrono?**

Basicamente diz que qualquer leitura ou escrita de dados não espera seu processo finalizar para continuar o *script*, nesse caso os processos ocorrem *paralelamente* à execução.

Para termos uma ideia melhor de como é o funcionamento assíncrono, vamos pensar um restaurante que é **síncrono**.

![](http://3.bp.blogspot.com/-H_YdVxlPEpg/ULZxtpkNBcI/AAAAAAAAAFU/BGZng58wZbw/s1600/img2.jpg)

![](http://4.bp.blogspot.com/-eXQNL7LvhVs/ULZzMEyKxaI/AAAAAAAAAFk/GlqXs6tBw9g/s1600/img3.jpg)

No restaurante **síncrono** quando uma mesa é atendida ela precisa receber seu pedido antes que o garçom possa antender outra mesa!!

![](http://4.bp.blogspot.com/-NKB6IU5aisI/ULZzTGe-m7I/AAAAAAAAAF8/mK3IWFoEdZ8/s1600/img5.jpg)

Agora no restaurante **assíncrono** o mesmo garçom pode atender vários pedidos e enviá-los para a cozinha. Será a cozinha a responsável por responder cada pedido na ordem que para eles forem mais importantes ou mais rápidos. Nesse caso a ordem da resposta dos pedidos pode ser diferente da ordem pedida para a cozinha.

Quando um pedido é finalizado no **Restaurante Assíncrono** uma campainha/evento é emitido.

![](http://3.bp.blogspot.com/-MHXJwM7bl9k/ULZzVB9e0lI/AAAAAAAAAGE/zPbckg8M9lo/s400/img6.jpg)

Agora no **Restaurante Assíncrono** o garçom pode atender todas as mesas que existirem apenas enviando seus pedidos para serem executados na **cozinha**.

![](http://3.bp.blogspot.com/-9kP7uBwqSfI/ULZzWkSPgdI/AAAAAAAAAGM/PbD_AAGkwys/s400/img7.jpg)

O mesmo acontece com nossos sistemas, quando você **envia uma requisição assíncrona** você não tem a certeza quando ela irá retornar, por isso usamos *Promises*, mas isso é um assunto posterior.

Isso me lembrou o [Princípio da incerteza de Heisenberg](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_incerteza_de_Heisenberg) na física, mais alguém pira nisso como eu? :p


## Thread Pool

![http://kunkle.org/assets/scaling-event-loop.png](http://kunkle.org/assets/scaling-event-loop.png)

## Libuv

## V8

## Event Drive

## API
