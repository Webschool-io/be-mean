# Callback
Olha só que legal, callback é um termo bastante usado nas nossas aulas e deveremos entender a sua razão de existencia.
O node.js trabalha **fortemente com programação assíncrona**, I/O assíncrono é só **code-nome**.

Vamos mostrar isso em código e explicar linha a linha.
```javascript
/**
 * Olha só
 */
 function sayName (name, cb) {
   if (typeof name === 'undefined') {
       var error = new Error("Você deve passar um parâmetro como string para essa função, caraalho");
       /*** aqui a gente só retorna o erro da nossa função */
       return cb(err, null);
   } else {
     /*** agora definimos o nosso erro como null e retornamos o valor passado */
       return cb(null, name);
   }
 }
```
A ideia de callback é justamente proporcionar uma extensão da continuação da função sayName, sem ter que precisar parar o código para fazer isso em uma outra função.

Para extendermos a execução de sayName, precisamos usar uma função anônima e passarmos como parâmetro, no segundo parâmetro.


```javascript
/*** a função normal seria assim */
// sayName("Caio");
/*** função com callback */
sayName ("Caio", function (err, result) {
  if (err) console.log(err);
  console.log(result); // "Caio"
});
```
Confesso para os senhores que é um pouco verboso usar callback, mas só assim conseguimos garantir a continuação da execução de uma determinada função.

O legal é ter uma forma **extendida de nossa função.**

Esse estilo de programação é herdada do paradigma funcional que o javascript sofre influência, é facilmente confudível com o conceito de first-class function, porém o que se adequa mais ao conceito de continuação de uma função é o high-order-functions.

Essa continuação é um pattern de programação funcional chamado de continuation-passing-style. É bom conhecermos esses nomes por que se a gente quiser se aprofundar mais nos conceitos a gente sabe para onde ir :).

Nem tudo é mar de flores, nem tudo é tão bonito assim.

# Callback-hell ou boomerang-effect:
E se agente quiser tratar callbacks como um certa ordem?
Vejamos o seguinte exemplo com mais de uma função definida
```javascript
 function sayName (name, cb) {
   // dessa vez a gente vai usar um primito assincrono
   // para garantir que essa função seja assincrona de qualquer forma
   setTimeout(function () {
     if (typeof name === 'undefined') {
         var error = new Error("Você deve passar um parâmetro como string para essa função, caraalho");
         /*** aqui a gente só retorna o erro da nossa função */
         return cb(err, null);
     } else {
       /*** agora definimos o nosso erro como null e retornamos o valor passado */
         return cb(null, name);
     }
   }, 100);
 }
 function saySurname (name, cb) {
   // dessa vez a gente vai usar um primito assincrono
   // para garantir que essa função seja assincrona de qualquer forma
   setTimeout(function () {
     if (typeof name === 'undefined') {
         var error = new Error("Você deve passar um parâmetro como string para essa função, caraalho");
         /*** aqui a gente só retorna o erro da nossa função */
         return cb(err, null);
     } else {
       /*** agora definimos o nosso erro como null e retornamos o valor passado */
         return cb(null, name);
     }
   }, 105);
 }
```
E agora para darmos uma ordem de execução desses callbacks:

```javascript
sayName ("Caio", function (err, result) {
  if (err) console.log(err);
  console.log(result); // "Caio"
  saySurname("Cutrim", function (err, result) {
    if (err) console.log(err);
    console.log(result); // "Cutrim"
  });
});
```
Agora a gente tem uma pequena diferença quando colocamos um primitivo assíncrono chamado timer-function, isso deixa o nosso assíncrono, então se é assíncrono a gente não tem ordem na execução do nossos callbacks.

Você já consegue imaginar que se quisermos ter mais funções assíncronas a gente vai ter mais callbacks aninhados não é mesmo? ou seja:

```javascript
sayName ("Caio", function (err, result) {
  if (err) console.log(err);
  console.log(result); // "Caio"
  saySurname("Cutrim", function (err, result) {
    if (err) console.log(err);
    console.log(result); // "Cutrim"
    sayFullName("Caio Cutrim", function (err, result) {
      if (err) console.log(err);
      console.log(result); // "Caio Cutrim"
    });
  });
});
```

Aff... a tendendência desse código é ficar cada vez mais feia devido a complexidade das funções que criarmos, então para evitar isso nós temos varias soluções que nós iremos tratar posteriormente. :)

Beijo no coração.
