# Diretivas

// iniciando na aula 20

Vamos iniciar utilizando de base um repositório **antigo**, mas muito útil ainda [github.com/suissa/angularjs-directive-manual](https://github.com/suissa/angularjs-directive-manual)

Já percebemos que [o exemplo para criar](https://github.com/suissa/angularjs-directive-manual#como-criar) uma usa IIFE:

```js
(function () {

  var directive = function () {
    return {

    };
  };

  angular.module('moduleName')
    .directive('directiveName', directive);

}());
```

Nosso código inda não está usando IIFE, mas chegaremos em 1 aula apenas para **refatorar** isso.

Então o que nos importa é isso aqui: 

```js
var directive = function () {
  return {

  };
};

angular.module('moduleName')
  .directive('directiveName', directive);
```

Nesse caso `angular.module('moduleName')` seria o `angular.module('BeMEAN')`, onde buscamos o módulo onde adicionamos a `directive('directiveName', directive)`. 

Agora vamos criar nossa primeira diretiva que irá mostrar `Hello World`, em `assets/js/user.js` adicione:

```js
.directive('helloWorld', helloWorld)
```

Em `angular.module('User', [])`, criando nossa diretiva assim:

```js
const helloWorld = function () {
  return {
    restrict: 'AECM',
    replace: 'true',
    template: '<h3>Hello World!!</h3>'
  };
};
```

Esse será nosso código contemplando essas 3 partes:

```js
const helloWorld = function () {
  return {
    restrict: 'ACME',
    replace: 'true',
    template: '<h3>Hello World!!</h3>'
  };
};
// ...

angular.module('User', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users-list.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/create', {
        templateUrl: 'views/users-create.html',
        controller: 'UserCreateController',
        controllerAs: 'User'
      })
      .when('/users/github', {
        templateUrl: 'views/users-github.html',
        controller: 'UserGithubController',
        controllerAs: 'UserGithub'
      })
      .when('/users/:id', {
        templateUrl: 'views/users-details.html',
        controller: 'UserDetailsController',
        controllerAs: 'UserDetails'
      });
  }])
  .service('UserService', UserService)
  .directive('helloWorld', helloWorld)
  .controller('UserController', ['UserService', UserController])
  //...

```

Agora basta chamar essa diretiva na view `views/index.html`:

```html
<h2>Página INICIAL</h2>
<!-- A -->
<div hello-world></div>
<!-- C -->
<div class="hello-world"></div>
<!-- M -->
<!-- directive:hello-world  -->
<!-- E -->
<hello-world></hello-world>
```

Você deverá ver isso no navegador:

![printscreen dos 4 Hello Wolrds mostrados no index](http://i.imgur.com/f7PjAYI.png)

Isso aconteceu porque utilizamos o `restrict: 'ACME'` e  que isso que me dizer?

Para criar seu elemento podemos utilizar 4 formas diferentes:

- A: via atributo
- C: via classe
- M: via comentário
- E: via elemento

> **Não é recomendado utilizar VIA COMENTÁRIO!!!**

Para padronizar vamos usar como elemento:

```html
<hello-world></hello-world>
```

Beleza mas até agora nossa diretiva não faz merda nenhuma, então vamos começar

