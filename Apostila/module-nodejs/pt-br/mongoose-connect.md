## connect

Obviamente precisamos conectar no MongoDb antes de fazermos qualquer coisa com o Mongoose e para isso também contamos com eventos para nos ajudar a gerenciar essa conexão.

Primeiramente passamos a *string* de conexão para a função `connect`:

```js
var dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);
```

Para depois trabalharmos com esses 4 eventos:

```js
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});
```

E para colocar a cereja no bolo, vamos fechar a conexão com o MongoDb caso o processo do Node.js seja finalizado:

```js
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

Agora juntando tudo isso temos um arquivo de configuração/conexão com o MongoDb que podde ser re-usado.

```js
var dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

```

Para saber mais [visite a documentação](http://mongoosejs.com/docs/connections.html).