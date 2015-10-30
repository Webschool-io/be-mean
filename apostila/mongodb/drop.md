## drop

A função `drop` irá apagar completamente a coleção eliminando ela do nosso database, como visto abaixo:

```
suissacorp(mongod-2.4.8) be-mean> show collections
system.indexes
teste

suissacorp(mongod-2.4.8) be-mean> db.teste.drop()
true

suissacorp(mongod-2.4.8) be-mean> show collections
system.indexes
```