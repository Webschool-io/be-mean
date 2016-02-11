# Node.js - Projeto Final

O projeto final desse módulo consistirá em uma API REST onde deverá existir o CRUD para todas as coleções pedidas:

- user
- produtos
- pedidos

Requisitos técnicos:

- API REST
- TDD
- Envio de email
- Upload de imagem (avatar do user)
    + Formidable
- Mongoose
    + Populate
    + Plugin
    + Validate
    + Index
    + Getters & Setters
    + Methods & Statics
    + Middleware
    + Virtuals
- Internacionalização
    + Mongoose
    + Express

## Arquitetura

- Módulo Atômico
  + JSON de configuração
    * Rotas
    * Actions (Eventos)
  - Schemas Atômicos
  - Model
  - Dispatcher
  - Actions
      + Middlewares (Express)
  - Routes
      + Gerar as rotas do Express a partir do JSON de config


### Workflow

1. Requisição chega no Express
  1.1. Passa pelos middlewares
2. Rota emite evento para o *Dispatcher*
3. *Dispatcher* emite evento para a *Action* correta
4. *Action* ouve e executa a função requisitada
5. Provavelmente chamará uma função/evento do *Model*
6. Que por conseguinte interage com o Banco
  6.1. Retorna um JSON padrão de resposta
7. Model retorna o JSON para o *Dispatcher*
8. *Dispatcher* envia o JSON para a *Action* que formata a resposta e a traduz
  8.1. Depois do JSON formatado ele é enviado para a *Action* de render, sendo essa responsável tanto por renderizar uma view como responder o JSON.

> Uma *Action* pode chamar outras *Actions* se necessário, por isso deve-se criar um padrão para a API de eventos.

Vamos nos basear no one-way data flow para não colocarmos mais responsabilidade em nosso módulos do que o necessário, por isso a arquitetura será **bem atômica**.


## JSON de configuração

### Rotas

As rotas deverão ser configuradas no JSON do módulo, onde cada rota pode ser um arquivo separado contendo apenas as informações daquela rota:

```js
// route.create.config.json
{
    action: 'user:create'
  , method: 'post'
  , url: '/'
  , callback: null
}
```

- action: evento emitido nessa rota
- method: método do HTTP
- url: o caminho a partir do nome do módulo
  + não é necessário colocar `http://localhost:3000/api/users`
- callback: caso não deseje usar eventos, passe a função a ser executada.

Caso prefira criar um módulo em vez de um JSON, pode aproveitar pra deixar mais genérico, por exemplo: 

```js
const module_name = 'user';
const RouteConfig = {
    action: module_name+':create'
  , method: 'post'
  , url: '/'
  , callback: null
};
module.exports = RouteConfig;
```

Ou até pode criar uma *Factory*:

```js
const RouteConfig = function(module_name, action, method, url, callback)
  return {
      action: module_name+':'+action
    , method: method
    , url: url
    , callback: callback
  };
module.exports = RouteConfig;
```

**Só não esqueça de validar os parâmetros.**

Deverá ser injetado o objeto `Router` do framework utilizado, nele você adicionará as rotas geradas e retornará-o.

No app.js deverá ficar apenas a chamada do módulo:

```js
app.use('/users', UserRouter);
```

### Dispatcher

O módulos de *Dispatcher* deverá ser uma **API de eventos** que já terá por padrão os eventos do CRUD, quando enviado o nome do módulo ele deverá criar os eventos padrões, e qualquer outro evento deverá ser **adicionado a esse módulo** pois ele deverá apenas escutar e emitir eventos pré-cadastrados nele.

**Deve ser uma instância de EventEmitter.**

Exemplo:

```js
[
  {
    module: 'User'
    events: [
      {
        in: 'user:create',
        out: 'user:create', //será chamada na Action
        action: 'UserAction'
      }
    ]
  }
];
```

### Actions

As ações deverão ser atreladas as funções da rota por meio do seu evento pré-cadastrado no *Dispatcher*.

Cada módulo deverá conter um atributo `state` que deverá receber sempre o último evento emitido.

Seu sistema deverá receber uma requisição em uma rota e essa deve emitir o evento descrito no JSON, exemplo:

```js

{
  action: 'user:create'
}

```

Nesse caso a ação é `user:create` que deverá ser escutada no módulo de Actions e esse chamar a função ou emitir o evento correto.

### Model

Será no Model que colocaremos as regras de negócio.

**Todo *Model* deve possuir um atributo `state` que armazenará o nome da ultima função executada.**

**Todo *Model* deve possuir um array de tamanho 5 onde armazenará as últimas ações feitas no Banco.**

Por exemplo:

```js
oplog = {
  model: 'User'
  [
    {
      ts: Date.now,
      action: 'insert',
      query: '*',
      val_new: 'objeto do User a ser inserido',
      val_old: null,
    }
  ]
}
```

Para entender um pouco melhor sobre o `oplog` recomendo [essa leitura do meu blog](http://nomadev.com.br/fullstack-offline-api-first/).

**Bonus: implementar a funcionalidade de ROLLBACK com isso.**

Esse *Model* também funcionará dessa forma mesmo se os dados utilizados vierem de uma API externa, nesse caso só mudará o acesso aos dados.

#### Service

Quando o *Model* necessitar consumir dados externos deverá fazê-lo através de um *Service* específico para gerenciar as requisições e deve retornar uma *Promise*, assim como no Angular.

Quando usarmos o MongoDb o próprio Mongoose fará o papel de *Service*.

Se usado um *Service* para consumo externo você deverá sobrescrever as funções nativas do Mongoose, como:

- find
- findOne
- update
- remove

Para que funcionem normalmente com o *Model* já criado.



## Internacionalização

**TODAS AS MENSAGENS E TEXTOS DEVERÃO ESTAR SEPARADOS EM UM ARQUIVO DE DICIONÁRIO.**

Tanto as mensagens de validação, por isso nossas validações são separadas em módulos atômicos, pois devem poder funcionar para qualquer outro *Schema* de banco de dados ou em qualquer outro módulo que necessite validação.

Deverá ser gerado automaticamente o idioma Inglês, fazendo um crawler para isso.

## API

As rotas da API devem ser geradas a partir da configuração do módulo.

### Create

**url:**

```
api_host/user POST
```

### Retrieve

Para **listar** todos os users (só é possível para vendedor **logado**):

**url:**

```
api_host/user GET
```

Para **consultar** APENAS 1 user (só é possível para vendedor **logado** ou se for o próprio *user* pois será necessário para preencher futuramente seu painel administrativo):

**url:**

```
api_host/user/{_id} GET
```

```
api_host/user/{email} GET
```

```
api_host/user/{nome} GET
```

A mesma rota deverá ser responsável por entender qual tipo de busca é requisitada e entregar a requisição para a função correta.

**Criar um middleware no Express que deverá chamar seu módulo que irá reconhecer qual tipo de busca e adicionará uma *FLAG* no objeto `request` indicando qual busca é, para que a função da sua rota execute a função correta do *Controller*.**

### Update

**url:**

```
api_host/user POST
```

### Delete

**url:**

```
api_host/user POST
```


## User

Deverá autenticar usuário via TOKEN e persistir uma sessão para ele que deverá expirar em 15 minutos caso não haja não seja feita nenhuma ação nesse tempo.

O *user* deverá servir tanto para comprador como para vendedor.

### Create

Após a criação do usuário deverá ser enviado um email com um link para ele entrar e finalizar seu cadastro colocando a senha.

**A mesma coisa deve ser feita para o cadastro com o Facebook.**

### Validação

Validar todos os campos já ensinados e os demais que você achar necessário, **não esqueça de criar as validações em módulos atômicos

### Password

Utilizar criptografia de mão única adicionando um ***SALT*** à senha criptografada.



## Produtos

Para popular sua base com produtos você deverá pegar esses dados de algum site já existente usando o *crawler*.
