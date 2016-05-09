//aula s8
# ng-animate - CSS e Animações

> O que CSS e Animações tem a ver com o com Angular??

Ahhhhhhhhhhhh agora você verá! :D

Primeiramente precisaremos chamar o módulo `ngAnimate`, adicionando antes o seu `script`:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-animate.js"></script>
```

E depois chamando no módulo do `ng-app`:

```js
angular.module('BeMEAN', ['ngAnimate'])
```

Agora precisamos conhecer quais são os tipos de animações e onde podemos usar:

- ng-show e ng-hide: show e hide
- ng-repeat: enter, leave e move
- ng-view: enter e leave
- ng-include: enter e leave
- ng-switch: enter e leave
- ng-if: enter e leave
- ng-class: add e remove

Antes de iniciarmos nas animações vamos conhecer melhor 2 diretivas:

- ng-show
- ng-hide

A diretiva `ng-show` mostra algum elemento do DOM dependendo do seu seu valor e a `ng-hide` esconde.

Vaos ver um exemplo bem simples:

```html
<!-- ng-show -->
<input type="checkbox" id="mostrar" ng-model="myCheck" />
<label for="mostrar">Mostrar</label>
<p>Valor de myCheck: {{myCheck}}</p>
<div class="message" ng-show="myCheck"></div>

<!-- ng-hide -->
<input type="checkbox" id="esconder" ng-model="myCheck" />
<label for="esconder">Esconder</label>
<p>Valor de myCheck: {{myCheck}}</p>
<div class="message" ng-hide="myCheck"></div>
```

## Classes

Vamos conhecer melhor algumas dessas animações pelas classes mais utilizadas:

- .ng-move
- .ng-enter
- .ng-leave
- .ng-hide

Acredito que os nomes sejam auto-explicativos, não?

### .ng-hide

Primeiramente adicionamos a diretiva `ng-hide` no elemento que deverá

```html
Esconder: <input type="checkbox" ng-model="myCheck">
<div class="message" ng-hide="myCheck"></div>
```

```css
.message {
  transition: all linear 0.5s;
  background-color: #666;
  height: 100px;
}
.ng-hide {
  height: 0;
}
```

Para acontecer a animação o Angular irá adicionar e remover várias classes, por exemplo na animação da diretiva `ng-hide`:

- ng-animate
- ng-hide-animate
- ng-hide-add (se o elemento será escondido)
- ng-hide-remove (se o elemento será mostrado)
- ng-hide-add-active (se o elemento será escondido)
- ng-hide-remove-active (se o elemento será mostrado)

#### Exercício

1) Criar a mesma lógica de animação do botão `SAVE` para o botão `EDIT`, porém **utilizando uma animação, de CSS, DIFERENTE**.

// aula 9

### .ng-enter

Essa classe é adicionada quando um novo elemento entra no DOM.
Usada no `ng-repeat`, `ng-view`, `ng-include`, `ng-switch`, `ng-if`.

Para exemplificar essa classe iremos estilizar o elemento quando um usuário novo é adicionado.

Antes de iniciarmos preciso explicar que para as animações ocorrerem precisaremos utilizar mais uma claasse: `.ng-{ação}-active`, vamos ver o seguinte exemplo:

```css
.item.ng-enter {
  -webkit-transition:all linear 0.5s;
  transition:all linear 0.5s;
}
.item.ng-enter {
  opacity:0;
}
.item.ng-enter.ng-enter-active {
  opacity:1;
}
```

Perceba então que quando queremos que um elemento entre com `opacity:1` utilizaremos a classe `active` na ação do `enter`, por isso a classe é `ng-enter-active`.

Como precisamos que ele tenha um valor inicial para que sua animação possa ocorrer, definimos `opacity:0` em `ng-enter` pois esse é seu estado antes de entrar em `active`.

E quem faz toda a mágica acontecer é esse código:

```css
.item.ng-enter {
  -webkit-transition:all linear 0.5s;
  transition:all linear 0.5s;
}
```

Onde podemos definir o tipo e a duração dessa animação.

#### Exercício

1) Criar uma animação melhor com `keyframes` para entrada do usuário na lista.

### .ng-leave

Essa classe é adicionada quando um novo elemento removido no DOM.
Usada no `ng-repeat`, `ng-view`, `ng-include`, `ng-switch`, `ng-if`.

#### Exercício

1) Criar uma animação melhor com `keyframes` para saída do usuário na lista.

### .ng-move

Essa classe é adicionada quando um elemento é movido de sua posição.
Usada no `ng-repeat`.

#### Exercício

1) Criar uma animação melhor com `keyframes` para a busca do usuário na lista.

