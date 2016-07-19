# Diretivas

// iniciando na aula 20

Vamos iniciar utilizando de base um repositório **antigo**, mas muito útil ainda [github.com/suissa/angularjs-directive-manual](https://github.com/suissa/angularjs-directive-manual)

Já percebemos que [o exemplo para criar](https://github.com/suissa/angularjs-directive-manual#como-criar) uma usa IIFE:

```js
(function () {

  var directive = function () {
    return {

    };
  };

  angular.module('moduleName')
    .directive('directiveName', directive);

}());
```

Nosso código inda não está usando IIFE, mas chegaremos em 1 aula apenas para **refatorar** isso.

Então o que nos importa é isso aqui: 

```js
var directive = function () {
  return {

  };
};

angular.module('moduleName')
  .directive('directiveName', directive);
```

Nesse caso `angular.module('moduleName')` seria o `angular.module('BeMEAN')`, onde buscamos o módulo onde adicionamos a `directive('directiveName', directive)`. 

Agora vamos criar nossa primeira diretiva que irá mostrar `Hello World`


