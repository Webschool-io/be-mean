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
# ng-form

Possuimos uma diretiva para o `<form>` pois o Angular provê diversas funcionalidades, principalmente de validação, para melhorar a experiência do usuário e ele não deixa você submeter um `form` caso ele não tenha uma `action` definida.

- ng-valid: é definido se o formulário é válido.
- ng-invalid: é definido se o formulário é inválido.
- ng-pending: é definido se o formulário é pendente.
- ng-pristine: é definido se o formulário é puro ou seja não foi modificado.
- ng-dirty: é definido se o formulário é sujo pu seja foi modificado.
- ng-submitted: é definido se o formulário foi enviado(subimitted).
- ng-touched: é definido se o formulário foi tocado.
- ng-untouched: é definido se o formulário foi não tocado.

Antes de tudo precisamos modificar nosso código anterior trocando o `<p>` por `<form>`

Cuidado ao estilizar o `ng-invalid` se você utiliza `required` nos seus `inputs`, caso utilize seu `form` inicia como inválido até ter todos os campos obrigatórios.




novalidate
