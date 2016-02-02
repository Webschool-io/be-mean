# MongoDB - Aula 01 - Exercício
Autor: Igor luíz

## Importando os restaurantes

```sh
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-02-02T12:07:58.202-0200	connected to: 127.0.0.1
2016-02-02T12:07:58.202-0200	dropping: be-mean.restaurantes
2016-02-02T12:07:59.759-0200	imported 25359 documents
```

## Contando os restaurantes

```sh
db.restaurantes.find({}).count()
25359
```
