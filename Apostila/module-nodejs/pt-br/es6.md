# ES6

Essa é apenas uma pequena amostra do ES6 para podermos entender os códigos desse módulo, porém usaremos apenas:

- let;
- const;
- arrow function.

**Para deixar o resto para o módulo de ES6 do Be MEAN.**

## let

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

## const

## arrow function
