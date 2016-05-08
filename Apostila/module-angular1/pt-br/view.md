# View

Aprenderemos a usar algumas funcionalidades no Angular para melhorar a exibição dos dados.

## ng-repeat

Como já havíamos usado rapidamente o `ng-repeat` na [aula sobre *Controllers*]() vamos iniciar por ele.

Creio que ficou claro o que ele faz já na aula passada, porém vamos reforçar.

O `ng-repeat` é a diretiva responsável por iterar em um *Array* ou Objeto existente no escopo.

> Em Objeto também?

**- Sim em Objeto também!**

Logo veremos as duas formas, contudo iniciaremos pelo *Array* que já conhecemos, para isso vamos usar o exemplo da aula passada:

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

Nesse exemplo não tem segredo, né?

Para que o `ng-repeat` possa iterar o *Array* precisa estar no escopo de onde ele é chamado, nesse caso `UserController`.

Vamos adicionar mais 1 *Controller* nesse código para exemplificar:

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">

  <div data-ng-controller="CursoController as Curso">
    <h1>{{ User.titulo }}</h1>
    <ul>
      <li data-ng-repeat="user in User.users">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <h3>{{ Curso.titulo }}</h3>
    <ul>
      <li data-ng-repeat="curso in Curso.cursos">
        {{ curso.name }} - {{ curso.teacher }}
      </li>
    </ul>
  </div>

  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CursoController', CursoController);

    function () {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos usuários";
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];
    }

    function CursoController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos cursos";
      vm.cursos = [
        {name: 'Be MEAN', teacher: 'Suissa'}
      , {name: 'Learning Machine', teacher: 'Ivan Gustavo'}
      , {name: 'Laravel', teacher: 'Michael Douglas'}
      ];
    }
  </script>
</body>
</html>
```

Se tirarmos `<li data-ng-repeat="curso in Curso.cursos">` de `<div data-ng-controller="CursoController as Curso">` não teremos mais acesso ao seu escopo fazendo assim que seus dados não sejam exibidos.

Com certeza você notou que colocamos 1 *Controller* dentro de outro correto?

E percebeu que os dados de `UserController` foram exibidos e eles estão dentro de `CursoController`?

Isso acontece pela forma que a herança entre eles é feita, porém esse não é o assunto da aula, teremos uma aula apenas sobre escopo.

O que eu quero que você note é que seus dados só são acessíveis, diretamente, se estiverem no seu escopo.

Agora vamos iterar sobre um Objeto! Analisemos o exemplo abaixo:

```html
<table>
  <tr data-ng-repeat="curso in Curso.cursos">
    <td>
      {{ curso.name }}
    </td>
    <td>
      {{ curso.teacher }}
    </td>
  </tr>
</table>
```

Dessa forma nós teremos que definir **todas** as `tds` manualmente, porém se iterarmos no objeto `curso` poderemos deixar esse código mais genérico. É a mesma coisa de antes, veja abaixo:

```html
<table>
  <tr data-ng-repeat="curso in Curso.cursos">
    <td data-ng-repeat="info in curso">
      {{ info }}
    </td>
  </tr>
</table>
```

Agora que já sabemos exibir corretamente nossos dados podemos ordená-los.

## orderBy

Para ordenar uma lista não usaremos uma diretiva, mas sim um **filtro**!

```html
data-ng-repeat="user in User.users | orderBy"
```

Já conhecemos os filtros para saber que podemos passar parâmetros, para o `orderBy` podemos passar 2 parâmetros:

- `predicate`
- `reverse`

No parâmetro `predicate` iremos definir por qual o campo a lista será ordenada e no `reverse` apenas definimos `true` ou `false` caso desejamos que a ordenação seja invertida ou não.

```html
data-ng-repeat="user in User.users | orderBy:'name':true"
```

Logo mais aprenderemos a criar uma função para ordenar a partir de um campo clickado, aguarde.

E olhe que legal, ele ordena independente da tag HTML utilizada, isso é uma mão na roda!

Após ordenarmos nossos dados podemos ainda **filtrá-los**!

## filter filter

Essa equipe do Angular é foda né? Criam um filtro chamado `filter`! --'

Sorte que ele é deveras poderoso, por isso nem vou apavorar.

Para utilizá-lo é muito simples, basta usar o `filter` passando como parâmetro o nome do `ng-model` que receberá o valor a ser pesquisado.

```html
<label>Busca: <input ng-model="searchUser"></label>
<h1>{{ User.titulo }}</h1>
<ul>
  <li data-ng-repeat="user in User.users | orderBy:'name' | filter:searchUser">
    {{ user.name }} - {{ user.email }}
  </li>
</ul>
```

Agora ele automagicamente irá atualizar sua lista do `ng-repeat` deixando apenas os objetos que possuam aquele texto buscado.

### Exercícios

1) Adicionar mais 1 campo em todos os *Controllers* e utilizar ele em `orderBy`.
2) Utilizar esse valor adicional no `ng-init` para cada `ng-repeat` da *View*.
3) Criar um campo de **filtro** para cada `ng-repeat`.

// aula 5
## ng-click

Chegamos agora no tão importante `ng-click`, isso porque com ele podemos chamar funções do *Controller*. Então vamos iniciar criando uma função no *UserController* para adicionar 1 usuário de exemplo:

```js
vm.addUser = addUser;
function addUser() {
  vm.users.push({name: 'Exemplo', email: 'exe@mplo.com'})
}
```

E depois chamamos essa função no `ng-click`:

```html
<button data-ng-click="User.addUser()">ADD USER</button>
```

Não esquecendo de utilizar o nome do `Controller as`, pois podemos ter o mesmo nome de função em diferentes *Controllers* na mesma *View*.

Para exemplificar isso vamos mudar o nome da função para `add` e criar ela no `CursoController` para adicionar um curso de exemplo:

```html
<body data-ng-controller="UserController as User">
  <div data-ng-controller="CursoController as Curso">
    <label>Busca: <input ng-model="searchUser"></label>
    <button data-ng-click="User.add()">ADD USER</button>
    <h1>{{ User.titulo }}</h1>
    <ul>
      <li data-ng-repeat="user in User.users | orderBy:'name' | filter:searchUser">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <h3>{{ Curso.titulo }}</h3>
    <button data-ng-click="Curso.add()">ADD CURSO</button>
    <table>
      <tr data-ng-repeat="curso in Curso.cursos">
        <td data-ng-repeat="info in curso">
          {{ info }}
        </td>
      </tr>
    </table>
  </div>

  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CursoController', CursoController);

    function UserController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos usuários";
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];

      vm.add = add;
      function add() {
        vm.users.push({name: 'Exemplo', email: 'exe@mplo.com'})
      }
    }

    function CursoController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos cursos";
      vm.cursos = [
        {name: 'Be MEAN', teacher: 'Suissa'}
      , {name: 'Learning Machine', teacher: 'Ivan Gustavo'}
      , {name: 'Laravel', teacher: 'Michael Douglas'}
      ];

      vm.add = add;
      function add() {
        vm.cursos.push({name: 'Exemplo', teacher: 'Exeeemplooooo'})
      }
    }
  </script>
</body>
```

Agora imagine se você não estiver utilizando `Controller as` as chamadas das funções seriam apenas `add()`.

Vamos melhorar nossa função de adicionar um usuário, dessa vez iremos passar o usuário a ser adicionado.

Primeiramente vamos criar os `inputs` com nome de cada campo no seu `ng-model`:

```html
  <label>Name:
    <input type="text" data-ng-model="form.name">
  </label>
  <label>Email:
    <input type="text" data-ng-model="form.email">
  </label>
  <button data-ng-click="User.add(form)">ADD USER</button>
```

Nesse exemplo ainda não estou usando `<form>` pois ele é assunto da próxima aula. ;)

Note que defini os nome como: `form.campo`.

Essa é a forma mais correta pois assim encapsulamos seus valores em um objeto para poder passar apenas esse objeto para a função `add`. Se não fizéssemos dessa forma teríamos que pegar os valores lá no *Controller* e **isso é péssimo!**

Péssimo porque o *Controller* deve apenas **escrever** dados e não lê-los, por isso injetamos o objeto inteiro, deixando nossa função assim:

```js
vm.add = add;
function add(user) {
  vm.users.push(user);
}
```

Bem simples, não?!

## Exercícios

1) Criar uma função que para ordenar uma tabela a partir de uma coluna, clickando na sua `th>td`, ordenando pelo campo da coluna.
2) Criar mais 1 *Controller* para *Teachers* com seu form para adição, listagem (defina um *Array* inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

// aula 6
# CRUD - Delete

Na aula passada vimos apenas como adicionar e buscar um elemento, agora iremos aprender a deletar e alterar ele.

Mas antes disso vamos deixar nossa *View* mais ajeitada para facilitar nossa visualização e interação, para isso vaos adicionar o [MaterializeCSS](http://materializecss.com/).

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
```

Agora iremos aprender a deletar nossos usuários a partr de um `button` na sua listagem

...

## Exercício

1) Criar a função de `delete` utilizando `splice` em vez de `filter`.

//aula 7
# CRUD - Update

Chegando nos finalmente do CRUD vamos atualizar nossos usuários e para isso utilizaremos bastante conhecimento das aulas passadas.

Primeiramente vamos adicionar um `button` lateral para que o usuário possa clickar e seus dados serem mostrados nos seus campos para edição, após a edição ele deverá clickar em outro botão, SAVE, *irmão* ao de adicionar.

```html
<p class="col s12">
  <label>
    <input type="text" data-ng-model="User.form.name" placeholder="Name">
  </label>
  <br>
  <label>
    <input type="email" data-ng-model="User.form.email" placeholder="Email">
  </label>
</p>
<button data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s6" type="submit" name="action">Add</button>
<button data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s6" type="submit" name="action">Save</button>
```

Perceba que inverti o nome do `ng-model` que na aula anterior era `form.User` e agora é `User.form`, pois dessa forma o objeto `form` está dentro do escopo do *UserController* facilitando a manipulação dos seus dados.

Agora vejamos como ficará a listagem dos usuários e o botão para editar:

```html
<tr data-ng-repeat="user in User.users | orderBy:predicate:reverse | filter:searchUser ">
  <td>
    <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
    <label for="user-{{$index}}"></label>
  </td>
  <td>{{ user.name }}</td>
  <td>{{ user.email }}</td>
  <td>
    <button data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit
    </button>
  </td>
</tr>
```

Note a chamada da função `User.edit(user, $index)`, estou passando o `$index` que é o contador do `ng-repeat` para ter uma referência de qual objeto da listagem será editado, isso não será necessário quando nossos registros vierem com o `_id` do MongoDB.

Chegando agora na função do botão da listagem onde o mesmo deve receber os dados e colocá-los nos campos, desta forma:

```js
vm.edit = edit;
function edit(user, index) {
  vm.form = angular.copy(user);
  vm.form.index = index;
}
```

Necessitamos utilizar o `angular.copy` para que quando modificado no `ng-model` ele não mude diretamente no `ng-repeat` e adicionamos o valor de `index` no `form` pois é ele que será salvo posteriormente.

Logo vamos fazer a função de salvar:

```js
vm.save = save;
function save(user) {
  function saveUser(el, i){
    if(i === user.index) {
      delete user.index;
      return user;
    }
    return el;
  }
  var users = vm.users.map(saveUser);
  vm.users = users;
}
```

Nessa função eu só preciso testar se o contador do `map` é o mesmo do `index` para daí sobrescrever esse objeto com `return user;`, enquanto que o resto continua a mesma coisa `return el;`.

**Facílimo não?!**

## Exerício

1) Fazer a função do `save` o *Controller* de Professores e utilizar o `forEach` em vez do `map`.

