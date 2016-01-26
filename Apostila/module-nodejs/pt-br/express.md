# Express

O Express será o *framework* para rotas e views da nossa arquitetura, para quem conhece Padrões de Projeto ele é como um *[Front Controller](https://en.wikipedia.org/wiki/Front_controller)*.

O *Front Controller* é um padrão arquitetural que se comporta como um controlador tratando todas as solicitações para API e então roteia para uma ação (ou comando), utilizando o padrão *[Command](https://en.wikipedia.org/wiki/Command_pattern)* para executar as ações necessárias em cada rota.

Veremos como isso desacopla o código e nos facilita a manutenção futura, apoveitaremos para criar um criador de rotas baseado em uma configuração de JSON, **que deverá ser reutilizada no Angular**.

Então vamos pelo início, crie uma pasta chamada `aula-express` e dentro dela execute o `npm init`


```
npm i express --save
```

