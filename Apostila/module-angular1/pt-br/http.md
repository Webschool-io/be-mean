//aula 17
# $http

O `$http` é um serviço **interno** do Angular que facilita a comunicação via AJAX, logo será com ele que iremos consultar dados externos e das nossas APIs.

A API do `$http` é baseada em *Promises* então necessitará sempre de uma função para de sucesso e uma de erro.

Para utilizar o serviço do `$http` passamos para ele um objeto com a configuração da requisição, as propriedades comumente utilizadas são:

- method: método HTTP
- url: URL a ser requisitada
- params: parâmetros adicionais que serão serializados e enviados via GET
- data: objeto com os dados a serem enviados
- headers: cabeçalhos adicionais da requisição

Caso deseje conhecer o resto das propriedades [leia essa documentação](https://docs.angularjs.org/api/ng/service/$http#usage).

Logo após passarmos o objeto de configuração para o `$http()` iremos concatenar o retorno da *Promise* utilizando `then` e passando suas funções de sucesso e erro.

```js
$http({
  method: 'GET',
  url: '/minhaURL'
})
.then(
  function successCallback(response) {},
  function errorCallback(response) {}
);
```

Também podemos usar o seguinte atalho:

```js
$http({
  method: 'GET',
  url: '/minhaURL'
})
.success(successCallback)
.error(errorCallback);
```

Como visto o `$http` retorna o objeto `response` que possui as seguintes propriedades:

data – retorno da requisição;
status – código de status HTTP da resposta;
headers – cabeçalhos da resposta;
config – objeto de config usado para criar essa requisição;
statusText – texto do código de status HTTP da resposta.

Sabendo disso tudo vamos fazer nossa primeira requisição para o [Github](https://github.com) recebendo as informações do seu usuário:

```js
const user = 'suissa';
const url = 'https://api.github.com/users/'+user;
const method = 'GET';
$http({
  url: url,
  method: method
})
.success(function(data){
  console.log('Data: ', data);
  $scope.user = data;
})
.error(function(err){
  console.log('Erro: ', err);
});
```

## Exercício

Crie uma rota/view que receba o nome de um usuário do github na url `users/github/:user` e mostre **pelo menos** 8 atributos, com sua imagem de avatar em uma estrutura visual mais correta.




