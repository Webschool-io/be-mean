# ES6

Essa é apenas uma pequena amostra do ES6 para podermos entender os códigos desse módulo, porém usaremos apenas:

- let;
- const;
- arrow function.

**Para deixar o resto para o módulo de ES6 do Be MEAN.**

## Let

O `let` é o substituto para o `var`, pois futuramente o `var` será descontinuado.

**Por que tio Suissa?**

Porque o `let` se comporta como o esperado de uma variável.

**Como assim?**

Vamos pelo mais básico, quando você quer pegar o valor de uma variável pressupõe-se que ela já tenha sido criada, correto?

```js
a = 1;
var a;
console.log(a);
```

Executando no terminal temos:

```
1
```

Agora mude de `var` para `let`:


```js
a = 1;
let a;
console.log(a);
```

Recebemos o seguinte erro:

```js
let a;
^^^

SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

**Isso significa o quê?**

![](http://geradormemes.com/media/created/e9gk8o.jpg)

Tá certo! É muito fácil mesmo, leia aqui comigo:

> SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode

Traduzindo:

> Erro de sintaxe: declarações Bloco de escopo (let, const, function, class) ainda não são suportadas fora modo estrito

Bom então é fácil de revolver correto? Basta adicionar o [use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) no começo do arquivo:

```js
'use strict';
a = 1;
let a;
console.log(a);
```

**Pronto!**

```js
'use strict';
let a;
a = 1;
console.log(a);
```

Pronto o erro correto hehehehhe.

Com isso deduzimos que com `let` **sempre** precisamos declarar as variáveis antes e isso faz muito bem para sua sanidade mental e do seu código, vai por mim. #saudadesC

```js
a = 1;
  ^

ReferenceError: a is not defined
```

Corrigindo o código:

```js
'use strict';
let a;
a = 1;
console.log(a); //1
```

E se fizermos algo assim:

```js
'use strict';
var a = 1;
var a = true;
console.log(a); // true
```

Sobrescreveu o valor né? Agora mude para `let`:

```js
'use strict';
let a = 1;
let a = true;
console.log(a); // SyntaxError: Identifier 'a' has already been declared
```

Isso porquê você não pode re-declarar variáveis com `let`, para esolver isso basta não usar o `let` quando for odificar o valor de uma variável já criada.

Ainda tem mais, já ouviu falar sobre ***hoisting***?

Então aconselho a você ler [esse ótimo artigo](http://loopinfinito.com.br/2014/10/29/hoisting-e-escopo-em-javascript/), agora que você já manja dos paranaues, **SHOW ME THE CODE!**

```js
'use strict';
function pimba() {
  console.log(naGorduchinha); // undefined
  var naGorduchinha = true;
}
pimba();
```

Agora mude para `let`:

```js
'use strict';
function pimba() {
  console.log(naGorduchinha); // ReferenceError
  let naGorduchinha = true;
}
pimba();
```

Isso acontece porquê o JavaScript *iça* a declaração variável `naGorduchinha`, ficando assim por trás dos panos:

```js
'use strict';
function pimba() {
  var naGorduchinha = undefined;
  console.log(naGorduchinha); // undefined
  var naGorduchinha = true;
}
pimba();
```

Entendeu agora o por quê do valor `undefined`?

Pois no momento da chamada do seu valor ele ainda não estava definido como `true`, apenas como `undefined`.

E para fechar temos os efeitos colaterais de variáveis de um `for` por exemplo:

```js
'use strict';

for(var i = 0; i < 10; i ++){}
console.log(i); // ReferenceError: i is not defined

for(let i = 0; i < 10; i ++){}
console.log(i); // ReferenceError: i is not defined
```

## Const

Esta declaração cria uma constante que pode pertencer ao escopo global ou local de uma função. Constantes são block-scoped. O valor de uma constante não pode ser alterado via re-atribuição, e uma constante não pode ser redeclarada. É obrigatório que um valor seja atribuido à constante em sua declaração. Uma constante não deve compartilhar o nome com uma função ou variável em um mesmo escopo.

```js
// define version como uma constante e atribui o valor 7
const version = 7;

// isto falha mas não emite erros
version = 20;
console.log("Versão: " + version); // 7

const version = 20; // TypeError: Identifier 'version' has already been declared

// não modifica o valor
var version = 20; // undefined
console.log("Versão: " + version); // 7

// Atribuir valores a uma variável const é um erro de sintaxe
const a = 1; a = 2;

// const deve ser inicializada
const foo; // SyntaxError: missing = in const declaration

// const também funciona com objetos
const myObject = {"key": "value"};

// Sobrescrever o objeto também falha (no Firefox e Chrome but mas não no Safari)
myObject = {"otherKey": "value"};

// Entretando, atributos de objetos não estão protegidos,
// logo a seguinte instrução é executada sem problemas 
myObject.key = "otherValue";
```

## Arrow Function

Uma *arrow function* possui uma sintaxe mais curta quando comparada com a função normal, vinculando o valor de `this` de maneira léxica.
**Arrow functions sempre são anônimas.**

Como já disse na aula anterior a *arrow function* não possui `arguments` e seu `this` não pode ser modificado. Ela também não tem prototype e não pode ser usada como construtor.

```js
function (x) { return x; }
(x) = > x;
// console.log(function (x) { return x; });
// console.log((x) => x);

function pimba (x) { return x; }
// // pimba(x) =>  { return x; } NÃO EXISTE

const pimba = function (x) { return x; }
// const pimba = (x) = > x;
```

```js
normal(); // YES
arrow(); // TypeError: arrow is not a function
function normal() { console.log("YES"); }
const arrow = () => { console.log("YES"); };
```

E caso queira retornar um objeto?

```
() => {} // undefined
() => ({}) // {}
```

Como usamos `{}` para a abertura do bloco da nossa função ele irá retornar `undefined` pois não nenhum retorno dela, agora se encapsularmos `{}` dentro de `()` estaremos retornando esse objeto vazio.

Como você já **deve ter feito o [primeiro artigo do Be MEAN](https://github.com/Webschool-io/be-mean-instagram-artigos#artigo-1), sobre instanciação, logo conhecer IIFE, correto?**

Se não conhece então esta na hora de você fazer esse artigo. #ficadica

```js
// ES5
(function() {
  // ...
})();

// ES6
(() => {
  // ...
})();

// ERRADO
// (() => {}());
```

A *arrow function* nos proporciona um atalho para criação de callbacks:

```js
// ES5
// [1,2,3].map(function(x) { return x * x });
console.log([1,2,3].map(function(x) { return x * x }));
// ES6
// [1,2,3].map(x => x * x);
console.log([1,2,3].map(x => x * x));

// [2,true].map(x => { if (typeof x === 'number') return x * x; else return x; })
console.log([2,true].map(x => { if (typeof x === 'number') return x * x; else return x; }));

// [2,true, 3].map(x => { 
//   if (typeof x === 'number') {
//     if (x % 2 === 0) return x;
//     return x * x;
//   }
// });
console.log([2,true, 3].map(x => { 
  if (typeof x === 'number') {
    if (x % 2 === 0) return x;
    return x * x;
  }
}));
```

Vamos dificultar um pouco as coisas utilizando uma função que retorne outra função que retorne um valor.

![](https://media.giphy.com/media/Ni4cpi0uUkd6U/giphy.gif)

```js
// ES5
function onPower(exponent) {
  return function(number) {
    return Math.pow(number, exponent);
  };
}

// ES6
const onPower = exponent => number => Math.pow(number, exponent);
// const onPower = exponent => number => {
//   return Math.pow(number, exponent);
// };

const square = onPower(2);
```

*ps: Exemplos de *arrow functions* retirados [daqui](https://medium.com/jedi-js/future-javascript-1-arrow-functions-f44ee4098b30#.ip8yfl7hy), let e const da [MDN](mdn.io)*

## Tail Call Optimization

## Template String

## Default Params

## Rest Params

## Spread Operator

## Destructuring

## Generator

## Iterators

## Module

## Class

## Promise

## Map

## Set