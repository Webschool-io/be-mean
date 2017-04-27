# Arquitetura

Como falado anteriormente o Angular foi criado com o conceito de MVC, nisso sabemos que ele precisa ter:

- Model
- View
- Controller

**Porém como isso é definido no Angular?**

Vamos iniciar pelo *Controller*, para criarmos um basta usar a função `controller()` atrelada a algum módulo como no código abaixo:

```js
angular.module('BeMEAN', [])
  .controller('UserController', function(){});
```

Bem simples, não? Porém até agora ele não irá fazer nada então vamos começar a criar sua lógica, contudo antes de fazermos qualquer coisa precisamos **sempre** INJETAR O `scope` dessa forma:

```js
angular.module('BeMEAN', [])
  .controller('UserController', function(){});
```
