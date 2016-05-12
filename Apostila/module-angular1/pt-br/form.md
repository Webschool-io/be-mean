//aula 11
# Forms

Vamos iniciar uma série para aprender a trabalhar com algumas funcionalidades específicas para `forms` no Angular.

Uma das coisas que ainda não fizemos é criar um `select` para ser mostrado a partir dos valores do *Controller*.

Antes de iniciarmos vamos refatorar a listagem dos usuários para adicionarmos mais elementos e atributos, deixando assim:

```js
vm.users = [
  {name: 'Suissa', email: 'suissera@mano.com', type: 'teacher', active: true}
, {name: 'João', email: 'joao@macio.com', type: 'student', active: false}
, {name: 'Fran', email: 'fran@quimica.com', type: 'teacher', active: false}
, {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true}
, {name: 'José', email: 'js@gmail.com', type: 'student', active: true}
];
```

Infelizmente o Material Design não usa ng-options pois ele utiliza a diretiva md-select que usa `ng-repeat` em vez de `ng-options`, [leia mais aqui](https://github.com/angular/material/issues/1837).

Mas nós iremos utilizar apenas seu CSS, para isso precisamos apenas sobrescrever seu estilo para `select` se não ele não será mostrado pois está definido como `display:none`. Então basta adicionar no nosso CSS:

```css
html body select {
  display: inline-block;
}
```

Aproveitei e já defini com `html body` também para aumentar sua [especificidade](http://www.maujor.com/tutorial/specificity_wars.php), caso você não consiga apenas com a especificidade terá que apelar para o `!important`. LOL

## ng-options

Utilizamos o `ng-options` para gerar dinamicamente uma lista de `<option>` para o `select`. O `ng-repeat` pode ser usado para chegar em um resultado similar, porém o `ng-options` é mais otimizado para esse caso não criando um escopo novo para cada elemento repetido, além de dar maior flexibilidade na hora da criação do `select`.

Como vemos no exemplo abaixo:

```html
<select data-ng-model="User.selected">
  <option value="{{ user.email }}" data-ng-repeat="user in User.users">{{ user.name }}</option>
</select>
```

Agora vamos ver as diferentes formas de uso do `ng-options`:

- label for value in array

```html
<select class="pure-input-1" ng-model="User.lista_comum" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

Forma mais simples onde o valor mostrado no `<option>` é o `user.name` e o valor `User.lista_comum` é o objeto inteiro que foi selecionado, exemplo:

```js
 {"name":"Suissa","email":"suissera@manoveio.com","type":"teacher","active":true}
```

- select as label for value in array

```html
<select ng-model="User.lista_comum_com_valor" ng-options="user.email as user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

Nesse caso quando o `<option>` é selecionado o valor definido em `User.lista_comum_com_valor` é o de `user.email`, dessa forma você pode definir qual o valor será enviado.

- label group by group for value in array

```html
<select class="pure-input-1" ng-model="User.lista_agrupada" ng-options="user.name group by user.type for user in User.users">
  <option value="">Usuários agrupados por type</option>
</select>
```

Forma utilizada para agrupar, com `<optgroup>`, baseada no valor de `group by user.type`.


- label disable when disable for value in array

```html
<select class="pure-input-1" ng-model="User.users1" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

Funcionalidade para desabilitar as opções, utilizando `disabled`.

## ng-disabled

Anteriormente vimos como desabilitar uma opção do `<select>` agora, para exemplificar, iremos desabilitar um `<button>`.

Vamos criar uma lógica para desabilitar o botão de `ADD` enquanto estiver editando um usuário, para isso basta adicionar `ng-disabled="User.editing"` no botão:

```html
<button data-ng-disabled="User.editing" data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>
```

E precisamos modificar uma regrar CSS quando o atributo `disabled` é adicionado, infelizmente teremos que usar o `!important` assim:

```css
[disabled] {
  background-color: #ccc !important;
}
```

![](http://i.imgur.com/iM0BHMS.png)

## Exercícios

1) Adicionar ordenação no `ng-options`.
2) Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.

//aula 12
## ng-form

Possuimos uma diretiva para o `<form>` pois o Angular provê diversas funcionalidades, principalmente de validação, para melhorar a experiência do usuário e ele não deixa você submeter um `form` caso ele não tenha uma `action` definida.

- ng-valid: é definido se o formulário é válido,
- ng-invalid: é definido se o formulário é inválido,
- ng-pending: é definido se o formulário é pendente,
- ng-pristine: é definido se o formulário é puro ou seja não foi modificado,
- ng-dirty: é definido se o formulário é sujo pu seja foi modificado,
- ng-submitted: é definido se o formulário foi enviado(subimitted),
- ng-touched: é definido se o formulário foi tocado,
- ng-untouched: é definido se o formulário foi não tocado.

Cuidado ao estilizar o `ng-invalid` se você utiliza `required` nos seus `inputs`, caso utilize seu `form` inicia como inválido até ter todos os campos obrigatórios.

[mostrar aula12/aula12-ng-invalid-required.html]

O Angular nos provê duas formas de utilizarmos os valores que mencionei acima, então vamos fazer esse exemplo utilizando `ng-valid` e `ng-invalid` cada um de uma forma:

- via classe automática
- via expressão com `ng-class`

Vamos inicialmente criar os estilos para os estados de válido e inválido:

```css
.ng-valid {
  background-color: #B4E5C4;
}
.invalid {
  background-color: red;
}
```

Nesse caso a classe `ng-valid` ela é atribuída automaticamente e a classe `invalid` será definida via expressão assim:

```html
<div ng-class="{'invalid' : userForm.name.$invalid}">
  <input type="text" name="name" ng-model="user.name" placeholder="Name" required>
</div>
```

Agora criando o `form` preciamos definir **SEMPRE** seu `name`:

```html
<form name="userForm">
  <div data-ng-class="{'invalid' : userForm.name.$invalid}">
    <input type="text" name="name" data-ng-model="user.name" placeholder="Name" required>
  </div>
  <div data-ng-class="{'invalid' : userForm.email.$invalid}">
    <input type="email" name="email" data-ng-model="user.email" placeholder="Email">
  </div>
</form>
```

Logo notamos que para acessarmos o valor booleano de `ng-valid` utilizamos o valor `$valid` e esse é o padrão para entendermos essas duas formas.

```
{form}.{campo}.${classe}
```

Sendo:

- {form}: objeto do form definido em `name="userForm"`,
- {campo}: objeto do campo, do `input`, definido em `name="name"`,
- {classe}: nome da classe definida automaticamente.

Como você deve ter percebido o campo do *email* inicia como `valid` porque ele não é `required`, nesse caso ele só começa a validar quando você começa a modificar seu valor.

Por isso precisamos utilizar essa técnica em conjunto a classe `ng-pristine`

```html
<form name="userForm">
  <div data-ng-class="{'invalid' : userForm.name.$valid  && !userForm.name.$pristine}">
    <label>Name</label>
    <input type="text" name="name" data-ng-model="user.name" required>
  </div>
  <div data-ng-class="{'invalid' : userForm.emaile.$valid  && !userForm.name.$pristine}">
    <label>Email</label>
    <input type="email" name="emaile" data-ng-model="user.email">
  </div>
</form>
```

Agora podemos fazer adicionar o botão `ADD` onde ele tem que ficar desabilitado até a validação correta dos campos.

// mais
Basicamente qualquer elemento controlado pelo form inicia com essas 2 classes:

- ng-pristine
- ng-untouched

Pois elas dizem que os campos não foram modificados de nenhuma forma ou seja estão no seu estado inicial.

Agora precisamos criar a função que será chamada quando o formulário for submetido, para isso definimos `ng-submit="User.submitForm(User.form)"` no `form`, onde mudei o `name` dele para `User.form` para possuirmos ele dentro do escopo do Controller para trabalharmos futuramente.

E o botão de `ADD` virou um `type="submit"`.

### Exercício

1) Não deixar adicionar um usuário que seja inválido. (via *Controller*)

//aula 13
[Mostrar aquela tabela de validações]
## Validações

Para acessarmos o valor de uma validação via seu objeto utilizamos o seguinte padrão:

{form}.{campo}.$error.{validação}

Onde:

- {form}: é o nome do `form`, por exemplo: `<form name="User.userForm">`
- {form}: é o nome do `input`, por exemplo: `<input name="email" ...`
- {validação}: validação definida no `input`, por exemplo: `ng-minlength=3`

Vamos conhecer um pouco mais sobre as diretivas de validação dos *inputs*, mais especificamente do `type="text"`:

- ng-minlength
- ng-maxlength
- ng-pattern

Iniciamos com um exemplo do `ng-minlength`:

```html
<input type="text" name="name" data-ng-minlength="3" data-ng-model="User.form.name" placeholder="Name" required>
<p>
  error: {{ User.userForm.name.$error }}
</p>
```

Com esse exemplo vemos que inicialmente ele irá mostrar `error: {"required":true}`, quando você não digitou nada ainda, depois que você digitar 1 letra ele irá virar `error: {"minlength":true}` pois a validação do `required` já verdadeira, porém a validação do `minlength` é pelo menos 3 caracteres. Então depois de digitar `Ana` ele irá ficar sem erro `error: {}`.

Como o `ng-maxlength` é igual ao `ng-minlength` iremos ver agora o `ng-pattern`, ele serve para validar expressões regulares assim como o `pattern` do HTML5 já faz, aliás *minlength* e `maxlength` também são do HTML5.

```html
<input type="text" name="phone" data-ng-pattern="/9?([0-9]{4})-?([0-9]{4})/" data-ng-model="User.form.phone" placeholder="Phone">
<p>
  error: {{ User.userForm.phone.$error }}
</p>
```

Mas podemos definir no assim `ng-pattern="phoneRegex"` precisando definir o valor de `regex` no *Controller*, vamos fazer uma REGEX bem simples que teste se o telefone possui 8 dígitos numéricos:

```js
vm.phoneRegex = "9?([0-9]{4})-?([0-9]{4})";
```

Só para deixar claro que como o `input` é uma diretiva do Angular você pode usar apenas essas validações como no HTML5, sem o `ng-`, que ela irá funcionar. \o/

A diferença para o `pattern` comum e o `ng-pattern` é que esse último testa uma REGEX que está no *Controller*

Com isso conseguimos ter maior controle nas nossas mensagens de erro.

Porém o Angular possui mais uma forma de gerenciar essas mensagens de erro, com o `ng-messages` que é um módulo separado por isso precisamos importar ele com:

```html
script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-messages.js"></script>
```

E injetar como dependência no nosso módulo:

```js
angular.module('BeMEAN', ['ngAnimate', 'ngMessages'])
```

Agora podemos refatorar nosso HTML para:

```html
<div>
  <input type="text" name="phone" data-ng-pattern="User.regexPhone" data-ng-model="User.form.phone" placeholder="Phone" required>
  <p>
    User.userForm.phone.$error: {{ User.userForm.phone.$error }}
  </p>
  <div ng-messages="User.userForm.phone.$error">
    <p ng-message="required">Telefone é obrigatório.</p>
    <p ng-message="pattern">O telefone não está no padrão correto.</p>
  </div>
</div>
```

### Exercícios

1) Criar um input do tipo `date`, sua validação e mensagem desta validação.
2) Criar um input do tipo `number`, sua validação e mensagem desta validação.
3) Criar um input do tipo `password`, sua validação e mensagem desta validação.
4) Passe todas as mensagens para `ng-meassages`.

## Mensagens de Erro

A partir do 1.3/1.4 tivemos a melhoria do `ng-messages` que é a diretiva responsável por escolher qual `ng-message` de erro será mostrada, ela lembra a lógica de um `switch`
