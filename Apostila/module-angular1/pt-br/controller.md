# Controller

O *Controller* é uma parte bem importante do Angular pois ele é quem recebe ações do Usuário a partir da *View* e também é automaticamente executado quando definido em uma rota, porém veremos isso mais para frente.

Vamos iniciar criando nosso primeiro *Controller* e para utilizaremos a função `controller()` atrelada a algum módulo, como visto no código abaixo:

```js
angular.module('BeMEAN', [])
  .controller('UserController', []);
```

Você deve se perguntar:

> WTF is that []?

E eu lhe respondo:

**- É o *Array* de dependências do *Controller***.

> Como assim?

**- Ué! Ali não é um *Array*? Então, é nele que iremos passar suas dependências e isso inclui sua própria função.**

> Entendi é porra nenhuma.

**Então vamos ver no código que sempre é mais fácil!**

```js
angular.module('BeMEAN', [])
  .controller('UserController', [ '$scope', function($scope){
      $scope.titulo = "Be MEAN";
    }
  ]);
```

> E como usaremos isso na *View*??

Fácil, após definirmos o `ng-app` precisamos definir **onde** o *Controller* irá executar, porque nós podemos ter mais de 1 por *View*, e para isso usaremos a diretiva `ng-controller`:

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController">
  <h1>{{ titulo }}</h1>
  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', [ '$scope', function($scope){
          $scope.titulo = "Be MEAN";
        }
      ]);
  </script>
</body>
</html>
```

Entretanto essa forma de escrever é a **ERRADA!!! Por favor NUNCA FAÇA ISSO!!!**

> Ué! Então como é a forma certa?

Agora chegamos em um ponto **MUITO IMPORTANTE** pois utilizaremos como base para nosso padrão nesse curso o [styleguide do John Papa](https://github.com/johnpapa/angular-styleguide/tree/master/a1).

Bom ele nos diz que em vez de passarmos esse *Array* com as dependências nós façamos assim:

```js
angular.module('BeMEAN', [])
  .controller('UserController', UserController);

function UserController($scope) {
  $scope.titulo = "Be MEAN";
}
UserController['$inject'] = ['$scope'];
// UserController.$inject = ['$scope'];
```

Então nesse padrão nós já separamos sua função da injeção de suas dependências, deixando o código **muito mais limpo e legível**.

Depois de conhecermos qual o padrão usaremos vamos adicionar mais lógica nesse *Controller*, vamos criar um *Array* de objetos para serem mostrados na *View*:

```js
angular.module('BeMEAN', [])
  .controller('UserController', UserController);

function UserController($scope) {
  $scope.titulo = "Be MEAN";
  $scope.users = [
    {name: 'Suissa', email: 'suissera@manoveio.com'}
  , {name: 'João', email: 'joao@macioesedoso.com'}
  , {name: 'Franciele', email: 'fran@quimica.com'}
  ];
}
UserController['$inject'] = ['$scope'];
```

Para listarmos esses valores na *View* usaremos a diretiva `ng-repeat` apenas para facilitar a visualização:

```html
<ul>
  <li data-ng-repeat="user in users">
    {{ user.name }} - {{ user.email }}
  </li>
</ul>
```

Todavia, se você tiver lido o styleguide do John Papa verá que essa forma deve ser evitada, isso porque caso você use o mesmo nome de objeto em diferentes *Controllers*, na mesma *View*, o `scope` utilizado pode não ser o que você acredita ser.

Então para sanar esse problema iremos utilizar a diretiva `controllerAs`: `<body data-ng-controller="UserController as User">`

**E o que isso irá impactar no nosso código já criado?**

Primeiramente, todos os valores que definirmos no `scope` necessitarão do *nome* do *Controller* para serem acessado.

> Como assim?

**- Assim:**

```html
<h1>{{ User.titulo }}</h1>
<code>{{ User.users }}</code>
```

> E a listagem?

**- Na listagem precisamos apenas mudar o *Array* a ser acessado, assim:**

```html
<ul>
  <li data-ng-repeat="user in User.users">
    {{ user.name }} - {{ user.email }}
  </li>
</ul>
```

> Pronto Suissa?

**- Caaaaaaalma que ainda tem mais!**

Outra mudança **muito significativa** que precisamos fazer é no *Controller*, pois agora ele não irá precisar do `scope`, mas sim do `this`.

Nem adianta me olhar com cara feia que é assim mesmo. :p

```js
angular.module('BeMEAN', [])
  .controller('UserController', UserController);

function UserController() {
  this.titulo = "Be MEAN - Listagem dos usuários";
  this.users = [
    {name: 'Suissa', email: 'suissera@manoveio.com'}
  , {name: 'João', email: 'joao@macioesedoso.com'}
  , {name: 'Franciele', email: 'fran@quimica.com'}
  ];
}
```

E não é que ficou **mais legível**?

Mas tenho certeza, se você conhece JavaScript, deve ter achado **ruim** esse esquema usando `this` pois sabemos que o `this` tem o valor de onde é chamado e não criado, para resolver essa treta iremos usar a famosa técnica do `that`, porém aqui usaremos `vm`.

> Por que `vm` Suissa?

Lembra da primeira aula que comentei que o Angular também é um **MVVM**???

Pois bem, esse `vm` vem daí, de `ViewModel`.

Refatorando nosso código, ficou assim:

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <h1>{{ User.titulo }}</h1>
  <code>{{ User.users }}</code>
  <ul>
    <li data-ng-repeat="user in User.users">
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>

  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController);

    function UserController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos usuários";
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];
    }
  </script>
</body>
</html>
```

## Exercícios

1) Criar 1 *Controller* de Professores, igual aos outros, seguindo nosso último padrão.
2) Utilizar seu filtro criado aula na passada em algum dos seus valores.


