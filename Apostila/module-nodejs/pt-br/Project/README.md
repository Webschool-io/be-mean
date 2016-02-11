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
  - Actions
      + Middlewares (Express)
  - Routes
      + Gerar as rotas do Express a partir do JSON de config

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

### Actions

O módulos de *Actions* deverá ser uma **API de eventos** que já terá por padrão os eventos do CRUD e qualquer outro evento deverá ser **adicionado a esse módulo** pois ele deverá apenas escutar e emitir eventos pré-cadastrados nele.

**Deve ser uma instância de EventEmitter.**

As ações deverão ser atreladas as funções da rota.

Seu sistema deverá receber uma requisição em uma rota e essa deve emitir o evento descrito no JSON, exemplo:

```js

{
  create: 'user:create'
}

```

Nesse caso a ação é `user:create` que deverá ser escutada no módulo de Actions e esse chamar a função ou emitir o evento correto.

## API

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

#### Password

Utilizar criptografia de mão única adicionando um ***SALT*** à senha criptografada.



## Produtos

Para popular sua base com produtos você deverá pegar esses dados de algum site já existente usando o *crawler*.
