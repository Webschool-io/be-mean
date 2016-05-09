//aula 10
# ng-style

Dando continuidade na série sobre estilização da *View* vamos aprender sobre o `ng-style`, mas **devemos evitar ao máximo utilizar** pois ele mistura muito CSS com JavaScript, ferindo assim o princípio da responsabilidade única.

Entretanto vamos aprender pois ele será a base para o próximo tópico.

Vamos criar um estilo para o título, porém ele não será no CSS.

> Suissa c tá doido rapá?

Pois olha, nesse momento não.

Por isso disse que não devemos nem usaremos, mas quero que você saiba que exista pois **as vezes** pode ser necessário.

```js
vm.tituloStyle = {
  "color" : "#D0BB00"
, "font-size" : "100px"
, "text-align" : "center",
}
```

E depois passamos esse valor para a diretiva `ng-style`:

```html
<h1 data-ng-style="User.tituloStyle">{{ User.titulo }}</h1>
```

Vou deixar para você fazer algo mais complicado como exercício. ;)

## Exercício

Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via `checkbox`.

# ng-class

Com o `ng-class` as coisas já melhoram um pouco pois podemos definir a classe no CSS e apenas chamá-la na *View*, por exemplo:

```css
.atom-titulo {
  color : #D0BB00;
  font-size : 80px;
  text-align : center;
}
```

Depois precisamos passar esse valor para nossa *View* via o *Controller*, difinindo uma variável no seu escopo com o valor da classe desejada:

```js
vm.tituloStyle = "atom-titulo";
```

Agora é só utilizar a diretiva `ng-class` na *View*:

```html
<h1 data-ng-class="User.tituloStyle">{{ User.titulo }}</h1>
```

Outra coisa interessante que podemos fazer é criar uma função que retorne esse valor, dessa forma:

```html
<h1 data-ng-class="User.getTituloStyle">{{ User.titulo }}</h1>
```

E no *Controller*:

```js
vm.getTituloStyle = function() { return "atom-titulo"; };
```

Porém o melhor do `ng-class` é seu uso condicional.

> Como assim?

Nós temos uma forma muito simples para utilizarmos uma classe dependendo de algum valor.

`ng-class="{classe: valor}`

Vamos ver com um código que já conhecemos bem:

```html
 <tr ng-class="{bold: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
  <td>
    <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
    <label for="user-{{$index}}"></label>
  </td>
  ...
```

Nesse caso se selecionarmos o `checkbox` de `user.selecionado` a classe `bold` será definida no elemento, por isso quando selecionada, a linha toda, fica em negrito.

O mais interessante está em utilizar classes combinadas na mesma diretiva, para exemplificar vamos adicionar nesse mesmo código:

```html
ng-class="{bold: !user.selecionado, strike: user.selecionado}"
```

Isso irá deixar todos os itens em negrito, pro isso `!user.selecionado`, quando nenhum estiver selecionado e quando for selecionado ele adiciona a classe `strike` que é um risco por cima do texto.

Confira como ficou o código:

```html
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
```

A única coisa que preciso fazer para isso funcionar é criar seu CSS:

```css
.strike {
  text-decoration: line-through;
}
.bold {
  font-weight: bold;
}
```

## Exercício

1) Criar mais 2 classes condicionais quando o elemento é selecionado.
2) Zebrar a lista utilizando um teste ternário.

# ng-if

O `ng-if` se difere do `ng-show/hide` pois ele irá remover ou recriar o elemento no DOM e não apenas mudar a sua visibilidade da regra `display` do CSS.

Se a expressão passada for `false` então o elemento será removido, porém se for `true` um clone do elemento é re-inserido no DOM. Cuidado com seu escopo pois quando ele é removido seu escopo é destruído e depois quando é inserido ele vem com um escopo novo.

Usaremos ele em vez do `ng-hide` no nosso botão de salvar com o valor de `User.editing`, pois se for `false` ele não mostrará e isso já está definido em `UserController` em `vm.editing = false`:

```html
<button data-ng-if="User.editing" data-ng-click="User.save(User.form)" class="btn btn-large animate blue waves-effect waves-light col s12" type="submit" name="action">Save</button>
```


