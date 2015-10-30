## remove
Para apagarmos os dados dessa coleção usaremos o `remove`.

O `remove` apenas apaga os dados, porém a coleção continua existindo, como podemos ver abaixo:

```
suissacorp(mongod-2.4.8) be-mean> db.teste.remove({})
Removed 2 record(s) in 1ms

suissacorp(mongod-2.4.8) be-mean> db.teste.find()
Fetched 0 record(s) in 0ms -- Index[none]

suissacorp(mongod-2.4.8) be-mean> show collections
system.indexes
teste

suissacorp(mongod-2.4.8) be-mean> db.teste.drop()
true

suissacorp(mongod-2.4.8) be-mean> show collections
system.indexes

```
