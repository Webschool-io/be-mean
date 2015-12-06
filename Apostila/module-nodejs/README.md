# Node.js

Nesse curso abordarei a versão 5 do Node.js.

O MongoDb é um banco e dados NoSQL open-source e orientado a documentos JSON. Ele foi criado para ser escalado horizontalmente, conceito que veremos mais a frente.

## Índice

## Roteiro - 20 horas

- Aula 01: **07/12/2015**
    + [Teoria](./theory.md) - Profs.: [Suissa](https://github.com/suissa) e [Caio]()
        * V8
        * Single thread
        * Event Loop
        * I/O Async
        * Libuv
        * Event Driven
        * API
- Aula 02: **07/12/2015**
    + [HTTP](./http.md) - Prof.: [Suissa](https://github.com/suissa)
        * createServer
        * Methods
        * Status Codes
        * get
        * request
        * [Rotas]()
- Aula 03: **08/12/2015**
    + [Callbacks](./callbacks.md) - Prof.: [Caio Cutrim](https://github.com/caiocutrim/)
    + [FileSystem](./fs.md) - Prof.: [William Bruno](https://github.com/wbruno)
        * mkdir
        * open
        * readdir
        * readFile
        * rename
        * writeFile
- Aula 04: **08/12/2015**
    + [npm](./npm.md) - Prof.: [Suissa](https://github.com/suissa)
        * init
        * install --global ou -g
        * install --save
        * install --save-dev
        * install --optional
        * run
    + [Globals]() - Prof.: [Caio](https://github.com/caiocutrim/)
        * CommonJS
    + [Process]() - Prof.: [Caio](https://github.com/caiocutrim/)
- Aula 05: **09/12/2015**
    + [Mongoose]() - Prof.: [Suissa](https://github.com/suissa)
        * Create
        * Retrieve
        * Update
        * Delete
- Aula 06: **09/12/2015**
    + [Eventos]() - Prof.: [Itacir](https://github.com/pompeu)
        * Mongoose
    + [Promises]() - Prof.: [Itacir](https://github.com/pompeu)
        * Mongoose
- Aula 07: **10/12/2015**
    + [Mongoose]() - Prof.: [Suissa](https://github.com/suissa)
        * Arquitetura Atômica
        * Validate
        * Populate
        * Plugins
- Aula 08: **10/12/2015**
    + [TDD]() - Prof.: [Itacir](https://github.com/pompeu)
        * assert
        * chai
    - Teste Atômicos  - Prof.: [Suissa](https://github.com/suissa)
- Aula 09: **11/12/2015**
    + [Express]() - Prof.: [Suissa](https://github.com/suissa)
        * Model
        * Controller
        * Routes
- Aula 10: **11/12/2015**
    + [Express]()
        * Events - Prof.: [Itacir](https://github.com/pompeu)
        * Promises - Prof.: [Itacir](https://github.com/pompeu)
        * Middlewares - Prof.: [Caio](https://github.com/caiocutrim/)
- Aula 11: **14/12/2015**
    + [Express]()
        * TDD - Prof.: [Itacir](https://github.com/pompeu)
    + [Socket.io]() - Prof.: [Suissa](https://github.com/suissa)
        * TDD - Prof.: [Itacir](https://github.com/pompeu)
- Aula 12: **14/12/2015**
    + [REPL]() - Prof.: [Suissa](https://github.com/suissa)
    + [UDP](./http.md) - Prof.: [Caio](https://github.com/suissa)
    + [TCP](./http.md) - Prof.: [Caio](https://github.com/suissa)
    + [HTTPS](./http.md) - Prof.: [Caio](https://github.com/suissa)
- Aula 13: **15/12/2015**
    + [Utilizando APIs externas]() - Prof.: [Suissa](https://github.com/suissa)
        * [pokemons](http://pokeapi.co/) - Prof.: [William Bruno](https://github.com/wbruno)
        * [github](https://developer.github.com/v3/) - Prof.: [William Bruno](https://github.com/wbruno)
        * [redtube](http://api.redtube.com/docs/) - Prof.: [Suissa](https://github.com/suissa)
        * [instagram](https://www.instagram.com/developer/) - Prof.: [Suissa](https://github.com/suissa)
- Aula 14: **15/12/2015**
    + [Autenticação]() - Prof.: [Caio](https://github.com/caiocutrim/)
        * Session
            - Express
            - Mongoose/MongoDB
- Aula 15: **16/12/2015**
    + [Autenticação]() - Prof.: [Caio](https://github.com/caiocutrim/)
        * Token
- Aula 16: **17/12/2015**
    + **[Projeto em aula]**
        * [ScrumBan - Gerenciador de Projeto com Github](https://github.com/Webschool-io/be-mean-instagram/tree/master/projects/Scrumban)
            - Prof.: [Caio Cutrim](https://github.com/caiocutrim)
- Aula 17: **17/12/2015**
    + **[Projeto em aula]**
        * [Estante Virtual](https://github.com/Webschool-io/be-mean-instagram/tree/master/projects/Estante-Virtual)
            - Prof.: [William Bruno](https://github.com/wbruno)
- Aula 18: **16/12/2015**
    + **[Projeto em aula]**
        * [Gerenciador de Doações](https://github.com/Webschool-io/be-mean-instagram/tree/master/projects/Donations)
            - Prof.: [Suissa](https://github.com/suissa)
- Aula 19: **18/12/2015**
    + **[Projeto em aula]**
        * [Jobs - Gerenciador de Vagas de Trabalho](https://github.com/Webschool-io/be-mean-instagram/tree/master/projects/Jobs)
            - Prof.: [Itacir Pompeu](https://github.com/pompeu)
- Aula 20: **18/12/2015**
    + **[Projeto em aula]**
        * [DevCouchsurfing](https://github.com/Webschool-io/be-mean-instagram/tree/master/projects/DevCouchsurfing)
            - Prof.: [Bruno Marinho](https://github.com/bmsrox)

### Projeto em aula

Cada **Projeto em aula** iniciado terá um professor diferente como gerente e deverá ser feito em grupos de até 5 alunos, lembrando que eles continuarão a desenvolvê-lo sempre agregando os conhecimentos novos adquiridos.

## Code Style

Para mantermos um mínimo padrão entre nossos códigos vamos adotar o seguinte padrão, caso você não o use, não tem problema, começe agora nem que seja para esse projeto apenas.

.[Nosso CODE STYLE aqui.](./code-style.md)



