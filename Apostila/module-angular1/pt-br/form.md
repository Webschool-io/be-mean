# Forms

Vamos iniciar uma série para aprender a trabalhar com algumas funcionalidades específicas para `forms` no Angular.

Uma das coisas que ainda não fizemos é criar um `select` para ser mostrado a partir dos valores do *Controller*.

## ng-options

Utilizamos o `ng-options` para gerar dinamicamente uma lista de `<option>` para o `select`. O `ng-repeat` pode ser usado para chegar em um resultado similar, porém ele é mais otimizado para esse caso não criando um escopo novo para cada elemento repetido, além de dar maior flexibilidade na hora da criação do `select`.

- label for value in array

```html
<select class="pure-input-1" ng-model="User.users1" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

- select as label for value in array

```html
<select class="pure-input-1" ng-model="User.users1" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

- label group by group for value in array

```html
<select class="pure-input-1" ng-model="User.users1" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

- label disable when disable for value in array

```html
<select class="pure-input-1" ng-model="User.users1" ng-options="user.name for user in User.users">
  <option value="">Usuários</option>
</select>
```

- label group by group for value in array track by trackexpr
  - exercício
- label disable when disable for value in array track by trackexpr
  - exercício
- label for value in array | orderBy:orderexpr track by trackexpr (for including a filter with track by)
  - exercício

Onde:

- array / object: an expression which evaluates to an array / object to iterate over.
- value: local variable which will refer to each item in the array or each property value of object during iteration.
- key: local variable which will refer to a property name in object during iteration.
- label: The result of this expression will be the label for <option> element. The expression will most likely refer to the value variable (e.g. value.propertyName).
- select: The result of this expression will be bound to the model of the parent <select> element. If not specified, select expression will default to value.
- group: The result of this expression will be used to group options using the <optgroup> DOM element.
- disable: The result of this expression will be used to disable the rendered <option> element. Return true to disable.
- trackexpr: Used when working with an array of objects. The result of this expression will be used to identify the objects in the array. The trackexpr will most likely refer to the value variable (e.g. value.propertyName). With this the selection is preserved even when the options are recreated (e.g. reloaded from the server).

Infelizmente não poderemos utilizar o ng-options com o Material Design apara o Angular pois ele utiliza a diretiva md-select que usa `ng-repeat` em vez de `ng-options`, [leia mais aqui](https://github.com/angular/material/issues/1837).

