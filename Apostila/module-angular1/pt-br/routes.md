# Routes

**Antes de iniciar esse módulo vamos pegar o código da aula anterior e separ em um arquivo `.js` separado do HTML que se chamará `index.html`, já estava na hora né?!**

Passe todo o código entre `<script></script>` e cole num arquivo novo chamado: `app.js`, depois basta adicionar no `index.html`:

```html
<script src="./app.js"></script>
```

O módulo mais básico de roteamento do Angular é o [ngRoute](), onde configuramos nossas rotas definindo seu *Controller* e sua *View*, cso desejamos os dois em conjunto, para que quando o usuário entrar na rota ela execute automaticamente  função do *Controller* carregando o *Template* definido para a *View*.

E para isso utilizaremos o `$routeProvider`, por se tratar de um *provider*, ele só pode ser injetado dentro da função *config*. Portanto, não podemos utilizar o `$routeProvider` dentro de um *Controller*.

Então vamos adicionar ele no nosso HTML:

```html
<script src="//code.angularjs.org/1.5.6/angular-route.js"></script>
```

E depois injetamos ele no nosso módulo:

```js
angular.module('BeMEAN', ['ngRoute'])
```

## ng-view

Para que algo seja mostrado pela *View* precisamos usar a diretiva `ng-view` assim, no lugar desejado:

```html
<section class="row wrapper">
  <img class="atom-logo" src="/assets/images/bemean-logo.png" alt="Logo do Be MEAN">
  <h1>Be MEAN - EAD</h1>
  <div ng-view></div>
</section>
```

## config

A configuração das rotas se dá através dos métodos `when` e `otherwise` do serviço `$routeProvide`.

### when

A função `when` é a responsável por configurar nossas rotas e nela podemos configurar algumas coisas muito úteis, que usaremos, como:

- template: define o Template via *String*, não recomendo;
- templateUrl: define o Template em um arquivo separado, via URL;
- controller: define qual *Controller* será executado;
- controllerAs: define o nome do *Controller* a ser usado na *View*
- redirectTo: define a rota para redirecionar;
- resolve: define funções a srem executadas antes que a *View* seja renderizada.

Vamos fazer um exemplo onde faremos a rota `/users`, para listar nossos usuários, utilizando o *UserController* e o `templateUrl`:

```js
.config(function($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'UserController',
    controllerAs: 'User'
  });
})
```

### otherwise

O `otherwhise` serve para definirmos uma rota padrão caso o usuário tente uma rota não existente, nessa caso faremos ele redirecionar para `/index`:

```js
angular.module('BeMEAN', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'users.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .otherwise({
        redirectTo: '/index'
      });
  })
  .controller('UserController', UserController);
```


### $routeParams

Vamos agora criar a rota que irá mostrar as informações de um usuário pelo seu ID, nesse caso sua posição no nosso *Array*, para isso precisamos criar uma rota que aceite o parâmetro do ID e pra isso precisamos injetar no *Controller* o `$routeparams`:

```js
function UserDetailController($routeParams) {
  var vm = this;
  vm.routeParams = $routeParams;
  ...
}
```

Também criamos um *Controller* novo o `UserDetailController` que é basicamente uma cópia do `UserController` apenas para facilitar nosso *bootstrap*.

Depois criamos um *Template* chamado `user-details.html`:

```html
<h2>Dados do usuário</h2>

<p> Buscar o user pelo id: {{ UserDetail.routeParams.id }}</p>
<p>
  Nome: {{ UserDetail.users[UserDetail.routeParams.id].name}}
  <br>
  Email: {{ UserDetail.users[UserDetail.routeParams.id].email}}
</p>
```

E definimos sua rota:

```js
angular.module('BeMEAN', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'users.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/:id', {
        templateUrl: 'users-detail.html',
        controller: 'UserDetailController',
        controllerAs: 'UserDetail'
      })
      .otherwise({
        redirectTo: '/index'
      });
  })
  .controller('UserController', UserController)
  .controller('UserDetailController', UserDetailController);
```

Agora vamos criar um *link* no nome do usuário para ir para nossa rota recém-criada:

```html
<tr data-ng-class="{bold: !user.selecionado, strike: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
  <td>
    <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
    <label for="user-{{$index}}"></label>
  </td>
  <td><a href="#/users/{{$index}}">{{ user.name }}</a></td>
  ...
```

#### Exercícios

1) Refatorar a view para mostrar os dados em um *Form*.
2) Criar mais 1 rota que busque pelo **email**.

### Hashbang

Perceba que nossas rotas acontecem após o `#`, por exemplo:

```
http://localhost:8080/aula15/#/users
```

Esse é o tal do *Hashbang* e caso você prefira não utilizar as rotas com ele podemos removê-lo utilizando o `$locationProvider` definindo `html5Mode(true)`, dessa forma:

```js
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
```

E para que ele funcione você também **precisa** adicionar o `base` no `head` do `index.html` assim:

```html
<base href="/">
```

Claro que se você utilizar seu sistema em uma pasta tipo `/projetoArmaX` aí é só definir:

```html
<base href="/projetoArmaX">
```

Sabendo disso vamos refatorar nosso cadastro de usuários para separar suas *Views*, então a primeira que faremos será da listagem de usuários que é bem simples.

Logo nosso rota deve ficar assim:

```js
 $routeProvider
  .when('/users', {
    templateUrl: 'views/users-list.html',
    controller: 'UserController',
    controllerAs: 'User'
  })
```

E a *View* `views/users-list.html`:

```html
<h2>Listagem dos usuários</h2>
<table>
  <thead>
    <tr>
      <th colspan="4">
        <label>
          <input data-ng-model="searchUser" data-ng-model-options="User.modelOptions" placeholder="Search">
        </label>
      </th>
    </tr>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-class="{bold: !user.selecionado, strike: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
      <td>
        <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
        <label for="user-{{$index}}"></label>
      </td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>
        <button data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
      </td>
    </tr>
  </tbody>
</table>
<button data-ng-click="User.orderByName()" class="btn btn-large animate black waves-effect waves-light col s12" type="submit" name="action">Order Name</button>
<button data-ng-click="User.orderByEmail()" class="btn btn-large animate black waves-effect waves-light col s12" type="submit" name="action">Order Email</button>
<button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove
</button>
```

Agora quando você entrar em `localhost:8080/users` verá nossa listagem (está em 50% o zoom).

![Listagem de usuários em localhost:8080/users](http://i.imgur.com/zY7Ht9Q.png)

#### Exercícios

1) Refatorar o código para deixar no padrão que utilizamos do John Papa.
2) Criar a rota para a **edição** de um usuário, onde mesmo irá ter que clickar em botão na *View* dos detalhes do usuário onde o levará para:

/users/INDEX/edit

## Events

