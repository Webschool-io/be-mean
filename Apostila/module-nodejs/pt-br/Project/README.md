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

- Schemas Atômicos
- Model
- Actions
- 

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
