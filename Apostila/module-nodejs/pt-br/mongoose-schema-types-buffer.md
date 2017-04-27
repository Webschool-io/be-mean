O tipo *Buffer* é muito para salvar arquivos e retorná-los da forma que conhecemos [no Node.js](https://nodejs.org/api/buffer.html), porém o MongoDB converte para [Binary](http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html).

*Dica: caso for gravar uma imagem, converta-a para base64*.

```js
var imageSchema = new Schema({
    mime: String,
    bin: Buffer
});
```
