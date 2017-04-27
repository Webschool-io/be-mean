# Gerenciador de Sessões Universal

Existe um sistema parecido com esse https://auth0.com/ logo precisamos fazer um melhor e como sempre digo:

> Não importa se já existe, é até melhor pois temos onde nos basear, todos sistemas que faremos é para estudar e logicamente usar. Então nada melhor para um grupo de programadores do que criar todas suas ferramentas, não?

## O Problema

Ter que se logar com alguma rede social e precisar se logar, mesmo usando a mesma rede, toda vez.

Em quase todos sistemas web precisamos basicamente de um sistema de autenticação e um de ACL, e caso o desenvolvedor não use algum módulo pronto ele demandará um bom tempo para implementar isso manualmente.

## A Solução

Um sistema centralizador de acesso onde esse sistema gerencie os logins com redes sociais e utilize a mesma sessão para todos os sistemas que utilizarem essa solução.

Para utilizar esse sistema o aluno da Webschool.io deverá se logar nele e criar um novo projeto no sistema, esse liberando um TOKEN único para ele o qual será usado como base criptografar todo histórico do usuário.

O usuário se logará no site que utiliza nosso sistema onde o mesmo fará o login na rede social escolhida e recebe os dados do login, criando para esse user um **TOKEN único** que sempre será usado independente da forma de login escolhida.

O sistema utilizador deverá utilizar nosso módulo local pois será ele que validará todas as requisições baseadas nesse token, para isso o módulo armazenará as sessões localmente ou via log físico ou via banco de dados (preferencialmente um de Cache ou MongoDB).

Será com essa lista de tokens que o módulo irá trabalhar, sendo essa lista sempre atualizada ou via *Websocket* ou via *AJAX Pooling* a cada minuto.

Além do gerenciamento de sessões o sistema também pode conter um módulo de gerenciamento de ACL, onde nosso módulo gerenciará todos tipos de acessos nas rotas como também as ações permitidas em cada entidade (*Model*), esses módulos serão como *Middlewares* do Express, mas o mesmo deve funcionar em qualquer outro *framework*.

Esse sistema possuirá 2 formas de uso:

- API REST/Websocket
- Local via módulo

### API

### Local

Utilizando o módulo 

## Requisitos

- Autenticação com OAuth
  - criação de um servidor
- Autenticação com redes sociais
- API REST
- API Websocket

## Arquitetura

## Equipe
