# Filtro

Os filtros são usados ​​para a formatação de dados exibidos para o usuário, logo eles não irão modificar os valores desses dados.

Para criarmos ou utilizarmos algum filtro precisamos seguir a seguinte sintaxe:

```js
{{ expression [| filter_name[:parameter_value] ... ] }}
```

Vamos iniciar utilizando um filtro nativo do Angular, o `uppercase`:

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>{{ titulo }}</title>
</head>
<body>
  <label for="nome">Seu nome:
    <input type="text" data-ng-model="nome">
  </label>

  Olá, {{ nome | uppercase }}

  <label for="nome">Título:
    <input type="text" data-ng-model="titulo">
  </label>

  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
  </script>
</body>
</html>
```

Como visto anteriormente não precisamos criar nenhum código adicional, bastou utilizar: `Olá, {{ nome | uppercase }}`.

Sabendo disso vamos criar nosso primeiro filtro, para isso utilizamos a função `filter()` concatenada ao módulo onde será usada:

```js
angular.module('BeMEAN', [])
  .filter('reverseString', function() {});
```

Percebeu qual a API da função `filter`?

**ISSO MESMO!** Primeiro o nome do filtro e depois a sua função.

Porém para criarmos a sua função precisamos fazer algo um pouco diferente, precisamos na verdade **retornar** uma função com a lógica do filtro, pois na verdade é essa a função a ser executada na sua *View*.

```js
angular.module('BeMEAN', [])
  .filter('reverseString', function() {
    return function(text) {}
  });
```

Além disso nós **sempre** iremos receber **pelo menos 1 parâmetro** nessa função, o qual é o valor da expressão que está chamando o filtro. Para não dar brecha para erros nós sempre testamos essa variável para depois retornarmos o valor *filtrado*:

```js
angular.module('BeMEAN', [])
  .filter('reverseString', function() {
    return function(text) {
      if(text) return text.split("").reverse().join("");
    }
  });
```

Nesse caso a variável `text` é transformada em *Array*, com `split("")`, para depois ser invertida, com `reverse()`, para finalizar juntando tudo em uma *String*, com `join("")`. Isso porque o JavaScript não possui uma função nativa para inverter *Strings*.

Finalmente nosso código ficou assim:

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body>
  <label for="nome">Seu nome:
    <input type="text" data-ng-model="nome">
  </label>

  Olá, {{ nome | reverseString }}

  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .filter('reverseString', function() {
        return function(text) {
          if(text) return text.split("").reverse().join("");
        }
      });
  </script>
</body>
</html>
```

O mais interessante ainda é que podemos utilizar mais de 1 filtro por vez, por exemplo:

```html
  Olá, {{ nome | reverseString | uppercase}}
```

Com isso podemos criar pequenos filtros e ir compondo eles na *View* dependendo da sua necessidade.


