# Code Style

Ele é um fork do [Code Style do Airbnb](https://github.com/airbnb/javascript/).

## Table of Contents

- [Types](#types)
- [References](#references)
- [Objects](#objects)
- [Arrays](#arrays)
- [Destructuring](#destructuring)
- [Strings](#strings)
- [Functions](#functions)
- [Arrow Functions](#arrow-functions)
- [Constructors](#constructors)
- [Modules](#modules)
- [Iterators and Generators](#iterators-and-generators)
- [Properties](#properties)
- [Variables](#variables)
- [Hoisting](#hoisting)
- [Comparison Operators & Equality](#comparison-operators--equality)
- [Blocks](#blocks)
- [Comments](#comments)
- [Whitespace](#whitespace)
- [Commas](#commas)
- [Semicolons](#semicolons)
- [Type Casting & Coercion](#type-casting--coercion)
- [Naming Conventions](#naming-conventions)
- [Accessors](#accessors)
- [Events](#events)
- [jQuery](#jquery)
- [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
- [ECMAScript 6 Styles](#ecmascript-6-styles)
- [Testing](#testing)
- [Performance](#performance)
- [Resources](#resources)
- [In the Wild](#in-the-wild)
- [Translation](#translation)
- [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
- [Chat With Us About JavaScript](#chat-with-us-about-javascript)
- [Contributors](#contributors)
- [License](#license)

## Types

* [1.1](#1.1) <a name='1.1'></a> **Primitivas**: Quando você acessa um tipo primitivo você trabalha diretamente em seu valor.

  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`

```javascript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

* [1.2](#1.2) <a name='1.2'></a> **Complex**: Quando você acessa um tipo complexo que você trabalha em uma referência ao seu valor.

* `object`
* `array`
* `function`

```javascript
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

**[⬆ back to top](#table-of-contents)**

## Referências

* [2.1](#2.1) <a name='2.1'></a> Usar `const` para todas as suas referências; evitar o uso de `var`.

> Por quê? Isso garante que você não pode realocar suas referências, o que pode levar a erros e difíceis de compreender código.

eslint rules: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html).

```javascript
//ruim
var a = 1;
var b = 2;

// bom
const a = 1;
const b = 2;
```

* [2.2](#2.2) <a name='2.2'></a> Se você deve voltar a atribuir referências, utilize `let` ao invés de` var`.

> Why? `let` is block-scoped rather than function-scoped like `var`.

eslint rules: [`no-var`](http://eslint.org/docs/rules/no-var.html).

```javascript
//ruim
var count = 1;
if (true) {
  count += 1;
}

// bom, use o let.
let count = 1;
if (true) {
  count += 1;
}
```

- [2.3](#2.3) <a name='2.3'></a> Note-se que ambos `` let` e const` estão no escopo do bloco.

```javascript
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

**[⬆ back to top](#table-of-contents)**

## Objects

* [3.1](#3.1) <a name='3.1'></a> Use the literal syntax for object creation.

eslint rules: [`no-new-object`](http://eslint.org/docs/rules/no-new-object.html).

```javascript
//ruim
const item = new Object();

// bom
const item = {};
```

* [3.2](#3.2) <a name='3.2'></a> If your code will be executed in browsers in script context, don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61). It’s OK to use them in ES6 modules and server-side code.

```javascript
//ruim
const superman = {
  default: { clark: 'kent' }
, private: true
};

// bom
const superman = {
  defaults: { clark: 'kent' }
, hidden: true,
};
```

* [3.3](#3.3) <a name='3.3'></a> Use readable synonyms in place of reserved words.

```javascript
//ruim
const superman = {
  class: 'alien'
};

//ruim
const superman = {
  klass: 'alien'
};

// bom
const superman = {
  type: 'alien'
};
```

<a name="es6-computed-properties"></a>
* [3.4](#3.4) <a name='3.4'></a> Use computed property names when creating objects with dynamic property names.

> Why? They allow you to define all the properties of an object in one place.

```javascript
function getKey(k) {
  return `a key named ${k}`;
}

//ruim
const obj = {
  id: 5
, name: 'San Francisco'
};
obj[getKey('enabled')] = true;

// bom
const obj = {
  id: 5
, name: 'San Francisco'
, [getKey('enabled')]: true
};
```

<a name="es6-object-shorthand"></a>
* [3.5](#3.5) <a name='3.5'></a> Use object method shorthand.


```javascript
//ruim
const atom = {
  value: 1

, addValue: function (value) {
    return atom.value + value;
  }
};

// bom
const atom = {
  value: 1

, addValue(value) {
    return atom.value + value;
  }
};
```

<a name="es6-object-concise"></a>
* [3.6](#3.6) <a name='3.6'></a> Use property value shorthand.

> Why? It is shorter to write and descriptive.

eslint rules: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand.html).

```javascript
const nome = 'Luke Skywalker';

//ruim
const obj = {
  nome: nome
};

// bom
const obj = {
  nome
};
```

* [3.7](#3.7) <a name='3.7'></a> Group your shorthand properties at the beginning of your object declaration.

> Why? It's easier to tell which properties are using the shorthand.

```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

//ruim
const obj = {
  episodeOne: 1
, twoJediWalkIntoACantina: 2
, lukeSkywalker
, episodeThree: 3
, mayTheFourth: 4
, anakinSkywalker
};

// bom
const obj = {
  lukeSkywalker
, anakinSkywalker
, episodeOne: 1
, twoJediWalkIntoACantina: 2
, episodeThree: 3
, mayTheFourth: 4
};
```

**[⬆ back to top](#table-of-contents)**

## Arrays

* [4.1](#4.1) <a name='4.1'></a> Use the literal syntax for array creation.

eslint rules: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor.html).

```javascript
//ruim
const items = new Array();

// bom
const items = [];
```

* [4.2](#4.2) <a name='4.2'></a> Use Array#push instead of direct assignment to add items to an array.

```javascript
const someStack = [];

//ruim
someStack[someStack.length] = 'be-mean';

// bom
someStack.push('be-mean');
```

<a name="es6-array-spreads"></a>
* [4.3](#4.3) <a name='4.3'></a> Use array spreads `...` para arrays.

```javascript
//ruim
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// bom
const itemsCopy = [...items];
```

* [4.4](#4.4) <a name='4.4'></a> To convert an array-like object to an array, use Array#from.

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

**[⬆ back to top](#table-of-contents)**

## Destructuring

* [5.1](#5.1) <a name='5.1'></a> Use object destructuring when accessing and using multiple properties of an object.

> Why? Destructuring saves you from creating temporary references for those properties.

```javascript
//ruim
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// bom
function getFullName(obj) {
  const { firstName, lastName } = obj;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

* [5.2](#5.2) <a name='5.2'></a> Use array destructuring.

```javascript
const arr = [1, 2, 3, 4];

//ruim
const first = arr[0];
const second = arr[1];

// bom
const [first, second] = arr;
```

* [5.3](#5.3) <a name='5.3'></a> Use object destructuring para vários valores de retorno, não array destructuring.

> Por quê? Você pode adicionar novas propriedades ao longo do tempo ou mudar a ordem das coisas sem quebrar nada.

```javascript
//ruim
function processInput(input) {
  // então um milagre ocorre
  return [left, right, top, bottom];
}

// o chamador precisa pensar sobre a ordem dos dados de retorno
const [left, __, top] = processInput(input);

// bom
function processInput(input) {
  // então um milagre ocorre
  return { left, right, top, bottom };
}

// o chamador seleciona apenas os dados que ele precisa
const { left, right } = processInput(input);
```


**[⬆ back to top](#table-of-contents)**

## Strings

* [6.1](#6.1) <a name='6.1'></a> Use aspas simples `''` para strings.

eslint rules: [`quotes`](http://eslint.org/docs/rules/quotes.html).

```javascript
//ruim
const name = "Capt. Janeway";

// bom
const name = 'Capt. Janeway';
```

* [6.2](#6.2) <a name='6.2'></a> Cadeias mais longas que 100 caracteres devem ser escritos em várias linhas usando concatenação de strings.
* [6.3](#6.3) <a name='6.3'></a> Nota: Se usado em demasia, longas seqüências com concatenação pode afetar o desempenho. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

```javascript
//ruim
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

//ruim
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bom
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';
```

<a name="es6-template-literals"></a>
* [6.4](#6.4) <a name='6.4'></a> Quando construir strings programaticamente, use *template strings* em vez de concatenação.

> Por quê? *Template String* oferece uma sintaxe concisa e legível com recursos de interpolação de string.

eslint rules: [`prefer-template`](http://eslint.org/docs/rules/prefer-template.html).

```javascript
//ruim
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

//ruim
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bom
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
* [6.5](#6.5) <a name='6.5'></a> Never use `eval()` on a string, it opens too many vulnerabilities.

**[⬆ back to top](#table-of-contents)**


## Functions

* [7.1](#7.1) <a name='7.1'></a> Use function declarations instead of function expressions.

> Why? Function declarations are named, so they're easier to identify in call stacks. Also, the whole body of a function declaration is hoisted, whereas only the reference of a function expression is hoisted. This rule makes it possible to always use [Arrow Functions](#arrow-functions) in place of function expressions.

```javascript
//ruim
const foo = function () {
};

// bom
function foo() {
}
```

* [7.2](#7.2) <a name='7.2'></a> Function expressions:

```javascript
// immediately-invoked function expression (IIFE)
(() => {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

* [7.3](#7.3) <a name='7.3'></a> Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.
* [7.4](#7.4) <a name='7.4'></a> **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

```javascript
//ruim
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// bom
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

* [7.5](#7.5) <a name='7.5'></a> Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```javascript
//ruim
function nope(name, options, arguments) {
  // ...stuff...
}

// bom
function yup(name, options, args) {
  // ...stuff...
}
```

<a name="es6-rest"></a>
* [7.6](#7.6) <a name='7.6'></a> Never use `arguments`, opt to use rest syntax `...` instead.

> Why? `...` is explicit about which arguments you want pulled. Plus rest arguments are a real Array and not Array-like like `arguments`.

```javascript
//ruim
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// bom
function concatenateAll(...args) {
  return args.join('');
}
```

<a name="es6-default-parameters"></a>
* [7.7](#7.7) <a name='7.7'></a> Use default parameter syntax rather than mutating function arguments.

```javascript
// really bad
function handleThings(opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// bom
function handleThings(opts = {}) {
  // ...
}
```

* [7.8](#7.8) <a name='7.8'></a> Avoid side effects with default parameters.

> Why? They are confusing to reason about.

```javascript
var b = 1;
//ruim
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

* [7.9](#7.9) <a name='7.9'></a> Always put default parameters last.

```javascript
//ruim
function handleThings(opts = {}, name) {
  // ...
}

// bom
function handleThings(name, opts = {}) {
  // ...
}
```

- [7.10](#7.10) <a name='7.10'></a> Never use the Function constructor to create a new function.

> Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

```javascript
//ruim
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```

- [7.11](#7.11) <a name="7.11"></a> Sem espaço entre a `function` e seus `(parâmetros)` e com espaço entre os `()` e o bloco `{}``.


```javascript
//ruim
const g = function (){};
const h = function() {};

// bom
const f = function() {};
const f = function a() {};
```

**[⬆ back to top](#table-of-contents)**

## Arrow Functions

* [8.1](#8.1) <a name='8.1'></a> Quando você deve usar as expressões de função (como ao passar uma função anônima), use a notação de *arrow function*.

> Por que? Ele cria uma versão da função que executa no contexto do `this`, que normalmente é o que você quer, e é uma sintaxe mais concisa.

> Por que não? Se você tem uma função bastante complicada, você pode mover essa lógica para fora em sua própria declaração de função.


```javascript
//ruim
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// bom
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

* [8.2](#8.2) <a name='8.2'></a> If the function body consists of a single expression, feel free to omit the braces and use the implicit return. Otherwise use a `return` statement.

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

> Why not? If you plan on returning an object.

eslint rules: [`arrow-parens`](http://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](http://eslint.org/docs/rules/arrow-body-style.html).

```javascript
// bom
[1, 2, 3].map(number => `A string containing the ${number}.`);

//ruim
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// bom
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});
```

* [8.3](#8.3) <a name='8.3'></a> In case the expression spans over multiple lines, wrap it in parentheses for better readability.

> Why? It shows clearly where the function starts and ends.

```js
//ruim
[1, 2, 3].map(number => 'As time went by, the string containing the ' +
  `${number} became much longer. So we needed to break it over multiple ` +
  'lines.'
);

// bom
[1, 2, 3].map(number => (
  `As time went by, the string containing the ${number} became much ` +
  'longer. So we needed to break it over multiple lines.'
));
```


* [8.4](#8.4) <a name='8.4'></a> If your function only takes a single argument, feel free to omit the parentheses.

> Why? Less visual clutter.

eslint rules: [`arrow-parens`](http://eslint.org/docs/rules/arrow-parens.html).

```js
// bom
[1, 2, 3].map(x => x * x);

// bom
[1, 2, 3].reduce((y, x) => x + y);
```

**[⬆ back to top](#table-of-contents)**


## Constructors

* [9.1](#9.1) <a name='9.1'></a> Always use `class`. Avoid manipulating `prototype` directly.

> Why? `class` syntax is more concise and easier to reason about.

```javascript
//ruim
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}


// bom
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

* [9.2](#9.2) <a name='9.2'></a> Use `extends` for inheritance.

> Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

```javascript
//ruim
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this._queue[0];
}

// bom
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

* [9.3](#9.3) <a name='9.3'></a> Methods can return `this` to help with method chaining.

```javascript
//ruim
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// bom
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```


* [9.4](#9.4) <a name='9.4'></a> It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

```javascript
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
```

**[⬆ back to top](#table-of-contents)**


## Modules

* [10.1](#10.1) <a name='10.1'></a> Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

> Why? Modules are the future, let's start using the future now.

```javascript
//ruim
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

* [10.2](#10.2) <a name='10.2'></a> Do not use wildcard imports.

> Why? This makes sure you have a single default export.

```javascript
//ruim
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// bom
import AirbnbStyleGuide from './AirbnbStyleGuide';
```

* [10.3](#10.3) <a name='10.3'></a>And do not export directly from an import.

> Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

```javascript
//ruim
// filename es6.js
export { es6 as default } from './airbnbStyleGuide';

// bom
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

* [11.1](#11.1) <a name='11.1'></a> Don't use iterators. Prefer JavaScript's higher-order functions like `map()` and `reduce()` instead of loops like `for-of`.

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side-effects.

eslint rules: [`no-iterator`](http://eslint.org/docs/rules/no-iterator.html).

```javascript
const numbers = [1, 2, 3, 4, 5];

//ruim
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// bom
let sum = 0;
numbers.forEach((num) => sum += num);
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```

* [11.2](#11.2) <a name='11.2'></a> Don't use generators for now.

> Why? They don't transpile well to ES5.

**[⬆ back to top](#table-of-contents)**


## Properties

* [12.1](#12.1) <a name='12.1'></a> Use dot notation when accessing properties.

eslint rules: [`dot-notation`](http://eslint.org/docs/rules/dot-notation.html).

```javascript
const luke = {
  jedi: true,
  age: 28,
};

//ruim
const isJedi = luke['jedi'];

// bom
const isJedi = luke.jedi;
```

* [12.2](#12.2) <a name='12.2'></a> Use subscript notation `[]` when accessing properties with a variable.

```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```

**[⬆ back to top](#table-of-contents)**


## Variables

* [13.1](#13.1) <a name='13.1'></a> Always use `const` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

```javascript
//ruim
superPower = new SuperPower();

// bom
const superPower = new SuperPower();
```

* [13.2](#13.2) <a name='13.2'></a> Use one `const` declaration per variable.

> Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs.

eslint rules: [`one-var`](http://eslint.org/docs/rules/one-var.html).

```javascript
//ruim
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

//ruim
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// bom
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

* [13.3](#13.3) <a name='13.3'></a> Group all your `const`s and then group all your `let`s.

> Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```javascript
//ruim
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

//ruim
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// bom
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

* [13.4](#13.4) <a name='13.4'></a> Assign variables where you need them, but place them in a reasonable place.

> Why? `let` and `const` are block scoped and not function scoped.

```javascript
// bom
function () {
  test();
  console.log('doing stuff..');

  //..other stuff..

  const name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

//ruim - unnecessary function call
function (hasName) {
  const name = getName();

  if (!hasName) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// bom
function (hasName) {
  if (!hasName) {
    return false;
  }

  const name = getName();
  this.setFirstName(name);

  return true;
}
```

**[⬆ back to top](#table-of-contents)**


## Hoisting

* [14.1](#14.1) <a name='14.1'></a> `var` declarations get hoisted to the top of their scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let). It's important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

```javascript
// we know this wouldn't work (assuming there
// is no notDefined global variable)
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

// creating a variable declaration after you
// reference the variable will work due to
// variable hoisting. Note: the assignment
// value of `true` is not hoisted.
function example() {
  console.log(declaredButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

// The interpreter is hoisting the variable
// declaration to the top of the scope,
// which means our example could be rewritten as:
function example() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}

// using const and let
function example() {
  console.log(declaredButNotAssigned); // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
  const declaredButNotAssigned = true;
}
```

* [14.2](#14.2) <a name='14.2'></a> Anonymous function expressions hoist their variable name, but not the function assignment.

```javascript
function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function () {
    console.log('anonymous function expression');
  };
}
```

* [14.3](#14.3) <a name='14.3'></a> Named function expressions hoist the variable name, not the function name or the function body.

```javascript
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  }
}
```

* [14.4](#14.4) <a name='14.4'></a> Function declarations hoist their name and the function body.

```javascript
function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}
```

* For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](#table-of-contents)**


## Comparison Operators & Equality

* [15.1](#15.1) <a name='15.1'></a> Use `===` and `!==` over `==` and `!=`.
* [15.2](#15.2) <a name='15.2'></a> Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

eslint rules: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq.html).

* **Objects** evaluate to **true**
* **Undefined** evaluates to **false**
* **Null** evaluates to **false**
* **Booleans** evaluate to **the value of the boolean**
* **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
* **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```javascript
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
```

* [15.3](#15.3) <a name='15.3'></a> Use shortcuts.

```javascript
//ruim
if (name !== '') {
  // ...stuff...
}

// bom
if (name) {
  // ...stuff...
}

//ruim
if (collection.length > 0) {
  // ...stuff...
}

// bom
if (collection.length) {
  // ...stuff...
}
```

* [15.4](#15.4) <a name='15.4'></a> For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

**[⬆ back to top](#table-of-contents)**


## Blocks

* [16.1](#16.1) <a name='16.1'></a> Use braces with all multi-line blocks.

```javascript
//ruim
if (test)
  return false;

// bom
if (test) return false;

// bom
if (test) {
  return false;
}

//ruim
function () { return false; }

// bom
function () {
  return false;
}
```

* [16.2](#16.2) <a name='16.2'></a> If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your
`if` block's closing brace.

eslint rules: [`brace-style`](http://eslint.org/docs/rules/brace-style.html).

```javascript
//ruim
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// bom
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```


**[⬆ back to top](#table-of-contents)**


## Comments

* [17.1](#17.1) <a name='17.1'></a> Use `/** ... */` for multi-line comments. Include a description, specify types and values for all parameters and return values.

```javascript
//ruim
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...stuff...

  return element;
}

// bom
/**
 - make() returns a new element
 - based on the passed in tag name
 *
 - @param {String} tag
 - @return {Element} element
 */
function make(tag) {

  // ...stuff...

  return element;
}
```

* [17.2](#17.2) <a name='17.2'></a> Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

```javascript
//ruim
const active = true;  // is current tab

// bom
// is current tab
const active = true;

//ruim
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// bom
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}
```

* [17.3](#17.3) <a name='17.3'></a> Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME -- need to figure this out` or `TODO -- need to implement`.

* [17.4](#17.4) <a name='17.4'></a> Use `// FIXME:` to annotate problems.

```javascript
class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn't use a global here
    total = 0;
  }
}
```

* [17.5](#17.5) <a name='17.5'></a> Use `// TODO:` to annotate solutions to problems.

```javascript
class Calculator extends Abacus {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```

**[⬆ back to top](#table-of-contents)**


## Whitespace

* [18.1](#18.1) <a name='18.1'></a> Use soft tabs set to 2 spaces.

eslint rules: [`indent`](http://eslint.org/docs/rules/indent.html).

```javascript
//ruim
function () {
∙∙∙∙const name;
}

//ruim
function () {
∙const name;
}

// bom
function () {
∙∙const name;
}
```

* [18.2](#18.2) <a name='18.2'></a> Place 1 space before the leading brace.

eslint rules: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks.html).

```javascript
//ruim
function test(){
  console.log('test');
}

// bom
function test() {
  console.log('test');
}

//ruim
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// bom
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

* [18.3](#18.3) <a name='18.3'></a> Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space before the argument list in function calls and declarations.

eslint rules: [`space-after-keywords`](http://eslint.org/docs/rules/space-after-keywords.html), [`space-before-keywords`](http://eslint.org/docs/rules/space-before-keywords.html).

```javascript
//ruim
if(isJedi) {
  fight ();
}

// bom
if (isJedi) {
  fight();
}

//ruim
function fight () {
  console.log ('Swooosh!');
}

// bom
function fight() {
  console.log('Swooosh!');
}
```

* [18.4](#18.4) <a name='18.4'></a> Set off operators with spaces.

eslint rules: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops.html).

```javascript
//ruim
const x=y+5;

// bom
const x = y + 5;
```

* [18.5](#18.5) <a name='18.5'></a> End files with a single newline character.

```javascript
//ruim
(function (global) {
  // ...stuff...
})(this);
```

```javascript
//ruim
(function (global) {
  // ...stuff...
})(this);↵
↵
```

```javascript
// bom
(function (global) {
  // ...stuff...
})(this);↵
```

* [18.6](#18.6) <a name='18.6'></a> Use indentation when making long method chains. Use a leading dot, which
emphasizes that the line is a method call, not a new statement.

```javascript
//ruim
$('#items').find('.selected').highlight().end().find('.open').updateCount();

//ruim
$('#items').
  find('.selected').
    highlight().
    end().
  find('.open').
    updateCount();

// bom
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

//ruim
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// bom
const leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);
```

* [18.7](#18.7) <a name='18.7'></a> Leave a blank line after blocks and before the next statement.

```javascript
//ruim
if (foo) {
  return bar;
}
return baz;

// bom
if (foo) {
  return bar;
}

return baz;

//ruim
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// bom
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

//ruim
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// bom
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```

* [18.8](#18.8) <a name='18.8'></a> Do not pad your blocks with blank lines.

eslint rules: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks.html).

```javascript
//ruim
function bar() {

console.log(foo);

}

// also bad
if (baz) {

console.log(qux);
} else {
console.log(foo);

}

// bom
function bar() {
console.log(foo);
}

// bom
if (baz) {
console.log(qux);
} else {
console.log(foo);
}
```

* [18.9](#18.9) <a name='18.9'></a> Do not add spaces inside parentheses.

eslint rules: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens.html).

```javascript
//ruim
function bar( foo ) {
return foo;
}

// bom
function bar(foo) {
return foo;
}

//ruim
if ( foo ) {
console.log(foo);
}

// bom
if (foo) {
console.log(foo);
}
```

* [18.10](#18.10) <a name='18.10'></a> Do not add spaces inside brackets.

eslint rules: [`array-bracket-spacing`](http://eslint.org/docs/rules/array-bracket-spacing.html).

```javascript
//ruim
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// bom
const foo = [1, 2, 3];
console.log(foo[0]);
```

* [18.11](#18.11) <a name='18.11'></a> Add spaces inside curly braces.

eslint rules: [`object-curly-spacing`](http://eslint.org/docs/rules/object-curly-spacing.html).

```javascript
//ruim
const foo = {clark: 'kent'};

// bom
const foo = { clark: 'kent' };
```

**[⬆ back to top](#table-of-contents)**

## Commas

* [19.1](#19.1) <a name='19.1'></a> Comma-first: **Sim.**

[Por que usar comma-first?](http://nomadev.com.br/comma-first-por-que-usar/)

```javascript
//ruim
const story = [
  once,
  upon,
  aTime,
];

// bom
const story = [
  once
, upon
, aTime
];

//ruim
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};

// bom
const hero = {
  firstName: 'Ada'
, lastName: 'Lovelace'
, birthYear: 1815
, superPower: 'computers'
};
```

* [19.2](#19.2) <a name='19.2'></a> Additional trailing comma: **Nope.**

Você não precisa colocar vírgula após o último elemento pois na linha já terá colocado com *comma-first*.

```javascript
//ruim 
const hero = {
  firstName: 'Florence',
  lastName: 'Nightingale',
  inventorOf: ['coxcomb chart', 'modern nursing'],
};

// bom
const hero = {
  firstName: 'Florence'
, lastName: 'Nightingale'
, inventorOf: ['coxcomb chart', 'modern nursing']
};
```

**[⬆ back to top](#table-of-contents)**


## Semicolons

* [20.1](#20.1) <a name='20.1'></a> **Yup.**

eslint rules: [`semi`](http://eslint.org/docs/rules/semi.html).

```javascript
//ruim
(function () {
  const name = 'Skywalker'
  return name
})()

// bom
(() => {
  const name = 'Skywalker';
  return name;
})();

// bom (guards against the function becoming an argument when two files with IIFEs are concatenated)
;(() => {
  const name = 'Skywalker';
  return name;
})();
```

[Read more](http://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).

**[⬆ back to top](#table-of-contents)**


## Type Casting & Coercion

* [21.1](#21.1) <a name='21.1'></a> Perform type coercion at the beginning of the statement.
* [21.2](#21.2) <a name='21.2'></a> Strings:

```javascript
//  => this.reviewScore = 9;

//ruim
const totalScore = this.reviewScore + '';

// bom
const totalScore = String(this.reviewScore);
```

* [21.3](#21.3) <a name='21.3'></a> Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

```javascript
const inputValue = '4';

//ruim
const val = new Number(inputValue);

//ruim
const val = +inputValue;

//ruim
const val = inputValue >> 0;

//ruim
const val = parseInt(inputValue);

// bom
const val = Number(inputValue);

// bom
const val = parseInt(inputValue, 10);
```

* [21.4](#21.4) <a name='21.4'></a> If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

```javascript
// bom
/**
 - parseInt was the reason my code was slow.
 - Bitshifting the String to coerce it to a
 - Number made it a lot faster.
 */
const val = inputValue >> 0;
```

* [21.5](#21.5) <a name='21.5'></a> **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

```javascript
2147483647 >> 0 //=> 2147483647
2147483648 >> 0 //=> -2147483648
2147483649 >> 0 //=> -2147483647
```

* [21.6](#21.6) <a name='21.6'></a> Booleans:

```javascript
const age = 0;

//ruim
const hasAge = new Boolean(age);

// bom
const hasAge = Boolean(age);

// bom
const hasAge = !!age;
```

**[⬆ back to top](#table-of-contents)**


## Naming Conventions

* [22.1](#22.1) <a name='22.1'></a> Avoid single letter names. Be descriptive with your naming.

```javascript
//ruim
function q() {
  // ...stuff...
}

// bom
function query() {
  // ..stuff..
}
```

* [22.2](#22.2) <a name='22.2'></a> Use camelCase when naming objects, functions, and instances.

eslint rules: [`camelcase`](http://eslint.org/docs/rules/camelcase.html).

```javascript
//ruim
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// bom
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

* [22.3](#22.3) <a name='22.3'></a> Use PascalCase when naming constructors or classes.

```javascript
//ruim
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// bom
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

* [22.4](#22.4) <a name='22.4'></a> Use a leading underscore `_` when naming private properties.

eslint rules: [`no-underscore-dangle`](http://eslint.org/docs/rules/no-underscore-dangle.html).

```javascript
//ruim
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// bom
this._firstName = 'Panda';
```

* [22.5](#22.5) <a name='22.5'></a> Don't save references to `this`. Use arrow functions or Function#bind.

```javascript
//ruim
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

//ruim
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// bom
function foo() {
  return () => {
    console.log(this);
  };
}
```

* [22.6](#22.6) <a name='22.6'></a> If your file exports a single class, your filename should be exactly the name of the class.

```javascript
// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
//ruim
import CheckBox from './checkBox';

//ruim
import CheckBox from './check_box';

// bom
import CheckBox from './CheckBox';
```

* [22.7](#22.7) <a name='22.7'></a> Use camelCase when you export-default a function. Your filename should be identical to your function's name.

```javascript
function makeStyleGuide() {
}

export default makeStyleGuide;
```

* [22.8](#22.8) <a name='22.8'></a> Use PascalCase when you export a singleton / function library / bare object.

```javascript
const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
```


**[⬆ back to top](#table-of-contents)**


## Accessors

* [23.1](#23.1) <a name='23.1'></a> Accessor functions for properties are not required.
* [23.2](#23.2) <a name='23.2'></a> If you do make accessor functions use getVal() and setVal('hello').

```javascript
//ruim
dragon.age();

// bom
dragon.getAge();

//ruim
dragon.age(25);

// bom
dragon.setAge(25);
```

* [23.3](#23.3) <a name='23.3'></a> If the property is a `boolean`, use `isVal()` or `hasVal()`.

```javascript
//ruim
if (!dragon.age()) {
  return false;
}

// bom
if (!dragon.hasAge()) {
  return false;
}
```

* [23.4](#23.4) <a name='23.4'></a> It's okay to create get() and set() functions, but be consistent.

```javascript
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
```

**[⬆ back to top](#table-of-contents)**


## Events

* [24.1](#24.1) <a name='24.1'></a> When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

```javascript
//ruim
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function (e, listingId) {
  // do something with listingId
});
```

prefer:

```javascript
// bom
$(this).trigger('listingUpdated', { listingId: listing.id });

...

$(this).on('listingUpdated', function (e, data) {
  // do something with data.listingId
});
```

**[⬆ back to top](#table-of-contents)**


## jQuery

* [25.1](#25.1) <a name='25.1'></a> Prefix jQuery object variables with a `$`.

```javascript
//ruim
const sidebar = $('.sidebar');

// bom
const $sidebar = $('.sidebar');

// bom
const $sidebarBtn = $('.sidebar-btn');
```

* [25.2](#25.2) <a name='25.2'></a> Cache jQuery lookups.

```javascript
//ruim
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// bom
function setSidebar() {
  const $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
```

* [25.3](#25.3) <a name='25.3'></a> For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
* [25.4](#25.4) <a name='25.4'></a> Use `find` with scoped jQuery object queries.

```javascript
//ruim
$('ul', '.sidebar').hide();

//ruim
$('.sidebar').find('ul').hide();

// bom
$('.sidebar ul').hide();

// bom
$('.sidebar > ul').hide();

// bom
$sidebar.find('ul').hide();
```

**[⬆ back to top](#table-of-contents)**
