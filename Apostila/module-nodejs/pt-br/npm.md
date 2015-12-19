# NPM

O [npm](https://www.npmjs.com/) nada mais é que o gerenciador de pacotes do Node.js.

Uns dizem quem **npm** significa **Node Package Manager**, outros dizem que não, então **FODA-SE**. Ele é nosso gerenciador dos módulos que iremos instalar.

Se você ver pelo site do npm, ele é **o** gerenciador de pacotes do JavaScript.

![npm](https://cldup.com/Pw2HZESaKS-3000x3000.png)

O **npm** gerencia seu projeto a partir de um JSON chamado `package.json` e ele é **muito importante** e **obrigatório** em todos seus projetos.

**POR FAVOR NÃO ESQUEÇA DISSO!!!**

É no `package.json` onde estão todas as informações do seu projeto, como

- nome;
- versão;
- descrição;
- autor;
- licença;
- dependências;
- outros.

O Array de **dependências** é um dos mais importantes, pois você **nunca** deverá enviar a pasta `node_modules` a qual armazena todos os módulos instalados no seu projeto.

**Se eu nunca devo enviar suas dependências então como alguém irá instalá-las?**

Ótima pergunta gafanhoto, é por isso que esse *array* de dependência é tão importante, pois é nele que você irá especificar cada módulo e sua versão. Fazendo com que a listagem de todas as dependências esteja no `package.json`, quando alguém clonar o projeto receberá apenas os códigos e o `package.json`.

Com o `package.json` em mãos, basta executar `npm install` para que o **npm** instale todas aquelas dependências listadas.

Simples não?

Por isso **SEMPRE ADICIONE `node_module` no seu .gitignore**!

![okay okay okay](./../src/images/okay-okay-okay.gif)

Além do `npm` nós temos dois gerenciadores de versões para o Node.js:

- [n](https://github.com/tj/n)
- [nvm](https://github.com/creationix/nvm)

## n

Para instalar o **n** é bem fácil, basta clonar [esse repositório do TJ](https://github.com/tj/n) e depois executar o `make install`:

```
➜  tmp  git clone https://github.com/tj/n
Cloning into 'n'...
remote: Counting objects: 1322, done.
remote: Total 1322 (delta 0), reused 0 (delta 0), pack-reused 1322
Receiving objects: 100% (1322/1322), 218.22 KiB | 0 bytes/s, done.
Resolving deltas: 100% (471/471), done.
Checking connectivity... done.
➜  tmp  cd n 
➜  n git:(master) make install
mkdir -p /usr/local/bin/
cp bin/n /usr/local/bin/n
➜  n git:(master) n latest

     install : node-v5.2.0
       mkdir : /usr/local/n/versions/node/5.2.0
       fetch : https://nodejs.org/dist/v5.2.0/node-v5.2.0-darwin-x64.tar.gz
######################################################################## 100.0%

...

   installed : v5.2.0

➜  n git:(master) node -v
v5.2.0
➜  n git:(master) npm -v
3.3.12
```

## nvm

Sobre o **nvm** eu já escrevi [aqui no meu blog - Node.js - O que é nvm e como gerenciar versões do Node?](http://nomadev.com.br/node-js-o-que-%C3%A9-nvm-e-como-gerenciar-vers%C3%B5es-do-node/).

Aconselho a leitura.

Agora vamos voltar ao **npm**.

## npm init

Quando iniciamos qualquer projeto utilizando o Node.js, usaremos esse comando `npm init` para inicializar o projeto.

Então vamos iniciar nosso primeiro projeto utilizando os dados dos Pokemons, para isso crie uma pasta chamada `pokemons-api` dentro da sua pasta do `Node.js` do nosso workshop.

```
mkdir pokemons-api
cd pokemons-api
npm init
```

Depois basta responder as perguntas como abaixo:

```
➜  pokemons-api  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (pokemons-api) 
version: (1.0.0) 
description: Api dos pokemons
entry point: (index.js) server.js
test command: 
git repository: 
keywords: api, pokemons, node.js, mean
author: Suissa
license: (ISC) WTFPL
```

Depois da licença ele pergunta se  você confirma aqueles dados, basta apertar `Enter` ou digitar sua licença, no meu caso a [WTFPL](http://www.wtfpl.net/).

Depois de confirmado ele mostra o `package.json` criado:

```
{
  "name": "pokemons-api",
  "version": "1.0.0",
  "description": "Api dos pokemons",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "api",
    "pokemons",
    "node.js",
    "mean"
  ],
  "author": "Suissa",
  "license": "WTFPL"
}
```

## npm install --global ou -g

Com o **npm** podemos instalar um módulo de forma global ou local porém sendo módulos diferentes, pois um módulo global tem a função de ser executado em linha de comando, enquanto que o local é instalado para ser usado na programação do nosso sistema.

Para instalar um módulo globalmente usaremos `npm install -g nome_do_modulo`.

Vamos aproveitar e instalar o `gulp` globalmente:

```
npm install -g gulp
```

Vários módulos que usamos direto iremos instalar globalmente como:

- nodemon;
- gulp;
- mocha;
- express-generator;
- e outros.

## npm install --save

Com o `-g` você instala os módulos globalmente, agora para instalar o módulo localmente basta executar `npm install nome_modulo`, porém instalando somente dessa forma você não adiciona o módulo instalado na lista de dependências do `package.json`.

Porém não esqueça que você precisa ter o `package.json` antes.

Então dentro do diretório da nossa aplicação `pokemons-api` vamos instalar o `mongoose` pois precisaremos dele futuramente.

```
npm i --save mongoose
```

**Sim podemos usar apenas o `i` em vez do `install`!!!**

## npm install --save-dev


## npm install --optional


## npm run



