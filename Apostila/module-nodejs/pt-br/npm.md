# NPM

O [npm](https://www.npmjs.com/) nada mais é que o gerenciador de pacotes do Node.js.

Uns dizem que **npm** significa **Node Package Manager**, outros dizem que não, então **FODA-SE**. Ele é nosso gerenciador dos módulos que iremos instalar.

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

O objeto de **dependências** é um dos mais importantes, pois você **nunca** deverá enviar a pasta `node_modules`, a qual armazena todos os módulos instalados no seu projeto.

**Se eu nunca devo enviar minhas dependências então como alguém irá instalá-las?**

Ótima pergunta gafanhoto, é por isso que esse *array* de dependência é tão importante, pois é nele que você irá especificar cada módulo e sua versão. Fazendo com que a listagem de todas as dependências estejam no `package.json`, quando alguém clonar o projeto receberá apenas os códigos e o `package.json`.

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

Quando iniciarmos qualquer projeto utilizando o Node.js, usaremos esse comando `npm init` para inicializar o projeto.

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

### package.json

#### name

As coisas mais importantes no seu `package.json` são o nome e a versão, pois eles são **obrigatórios** e seu *package* não instalará sem eles.

O nome e a versão, juntos, formam um identificador que é para ser único, não esqueça de mudar a versão quando soltar algum *release* novo.

**Algumas regras:**

- o nome precisa ser menor que 214 caracteres;
- o nome não pode começar com um `.` ou `_`;
- novos *packages* não podem ter letras maiúsculas no nome;
- o nome não pode conter quaisquer caracteres *non-URL-safe*.

**Algumas dicas:**

- não use o mesmo nome de um módulo do *core* do Node;
- não coloque "js" ou "node" no nome;
- o nome provavelmente será passado como um argumento para require(), por isso deve ser algo curto, mas também razoavelmente descritivo;
- você pode querer verificar o registro do npm para ver se há algo com esse nome já, antes que você fique muito apegado a ele. [https://www.npmjs.com/](https://www.npmjs.com/)


## npm install

O comando `npm install` serve para instalar algum módulo/pacote ou as dependências listadas no `package.json`

Vamos conhecer um pouco mais sobre as opções do `npm install`.

### npm install --global ou -g

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

#### Erro: EACCES

Você pode receber um erro `EACCES` quando você tentar instalar um pacote global. Isso indica que você não tem permissão para gravar os diretórios que o **NPM** usa para armazenar pacotes globais e comandos.

Você pode corrigir esse problema usando uma das duas opções:

- Alterar a permissão do diretório padrão do NPM.
- Alterar o diretório padrão do npm para outro diretório.

##### Opção 1: Mudar a permissão do diretório padrão do NPM

Primeiramente você precisa saber qual é o diretório padrão do **NPM**, para isso execute `npm config get prefix`:

```
npm config get prefix
/usr/local
```

Se for um Sistema Operacional baseado em Unix provavelmente será: `/usr/local`.

Depois para mudar a permissão desse diretório para que seu usuário seja o *dono* dele basta executar `sudo chown -R `whoami` diretorio`

Caso você não queira mudar a permissão de todo o diretório, você pode mudar apenas as permissões dos sub-diretórios:

- bin
- share
- lib/node_modules

##### Opção 2: Mudar o diretório padrão do NPM para outro

Há momentos em que você não deseja alterar a propriedade do diretório padrão que o NPM usa; por exemplo, se você estiver compartilhando uma máquina com outros usuários.

Neste caso, você pode configurar npm para usar um diretório diferente.

Crie um diretório para instalações globais:

```
mkdir ~/npm-global
```

Configure o NPM para usar o novo o diretório:

```
npm config set prefix '~/npm-global'
```

Abra ou crie um arquivo `~/.profile` e adicione esta linha:

```
export PATH=~/npm-global/bin:$PATH
```

Volte na linha de comando e atualize suas variáveis do sistema com:

```
source ~/.profile
```

**Caso você não queira modificar seu `~/.profile`, nos passos 2 a 4, poderá fazer assim:**

```
NPM_CONFIG_PREFIX=~/npm-global npm install -g jshint
```


### npm install --save ou -S

Com o -g você instala os módulos globalmente, agora para instalar o módulo localmente basta executar: 

```
npm install nome_modulo
```

Instalando somente dessa forma você não adiciona o módulo instalado na lista de dependências do package.json, para adicionar nas listagem das dependências basta adicionar `--save`.

Então dentro do diretório da nossa aplicação `pokemons-api` vamos instalar o `mongoose` pois precisaremos dele futuramente.

```
npm i --save mongoose
```

**Sim podemos usar apenas o `i` em vez do `install`!!!**

Depois de instalar, para você confirmar basta olhar seu `package.json`:

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
  "license": "WTFPL",
  "dependencies": {
    "mongoose": "^4.3.3"
  }
}
```

Perceba que ele criou um objeto novo chamado `dependencies`

```
  "dependencies": {
    "mongoose": "^4.3.3"
  }
```

Caso deseje instalar uma versão específica basta executar assim:

```
npm i --save modulo@versão

// Exemplo
npm i --save mongoose@4.0
```


**Você deve ter percebido que existe um `^` antes da versão, correto?**

Então possuímos algumas formas diferentes de especificar a versão do nosso módulo, que são:

- ~versão "Equivalente a versão"
- ^versão "Compativel com a versão"
- versão Precisa ser a evrsçao exata
- >versão Must be greater than versão
- >=versão etc
- < versão
- <=versão
- 1.2.x 1.2.0, 1.2.1, etc., mas não 1.3.0

Exemplo de como escolher uma faixa de versões:

```
npm i mongoose@">=4.1.0 <4.3.0"
```

**Para você instalar apenas as dependências listadas em `dependencies` basta executar `npm install --production`.**

### npm install --save-dev ou -D

Executando o `npm install --save-dev` ele irá adicionar seu módulo e versão no objeto `devDependencies` do `package.json`.

Para instalar apenas as `devDependencies` você deverá executar `npm install --dev`, com isso ele não instalará as dependências listadas em `dependencies`.

### npm install --optional ou -O

Irá adicionar sua dependência em `optionalDependencies`.

São dependências opcionais que não devem interferir na execução do projeto.

## npm run

Esse é um tópico deveras interessante, pois você pode executar scripts para automatizar suas tarefas.

Para demonstrar isso primeiro crie uma pasta chamada `npm` e dentro dela execute o `npm init`, depois crie o `script.js` com esse pequeno código:

```js
console.log("Rodei!");
```

Depois de salvar o `script.js` adicione a seguinte linha:

```js
  "scripts": {
    "roda": "node script.js"
  },
```

Agora basta executar da seguinte forma:

```
npm run roda

> roda-script@1.0.0 roda /Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial/Apostila/module-nodejs/src/npm
> node script.js

Rodei!
```

Então como visto acima o comando é:

```
npm run nome-script
```

Além de executar seus scripts ele também possui os seguintes scripts nativos:

- prepublish: Roda ANTES do módulo ser publicado. (Also run on local npm install without any arguments.);
- publish: publica um módulo no npm;
- postpublish: Roda DEPOIS do módulo ser publicado;
- preinstall: Roda ANTES do módulo ser instalado;
- install: Instala todas as dependências localmente;
- postinstall: Roda DEPOIS do módulo ser instalado;
- preuninstall, uninstall: Roda ANTES the package ser desinstalado;
- postuninstall: Roda DEPOIS the package is desinstalado;
- preversion: Roda ANTES do comando version;
- version: Execute para modificar sua versão;
- postversion: Roda DEPOIS de rodar o version;
- pretest: Roda ANTES do test;
- test: Roda o comando que executa os testes;
- posttest: Roda DEPOIS de executar os testes;
- prestop: Roda ANTES do comando stop;
- stop: Roda o script caso definido;
- poststop: Roda DEPOIS do comando stop;
- prestart: Roda ANTES do comando start;
- start: Executa o comando definido, normalmente utilizado para levantar o servidor;
- poststart: Roda DEPOIS do comando start;
- prerestart: Roda ANTES do comando restart;
- restart: Reinicia o script;
- postrestart: Roda DEPOIS do comando restart.

O `restart` na verdade executa o `stop` e o `start` também, e seus scripts pre e post, na ordem abaixo:

- prerestart
- prestop
- stop
- poststop
- restart
- prestart
- start
- poststart
- postrestart

*ps: Com os scripts nativos não é necessário npm run script, apenas npm script.*


