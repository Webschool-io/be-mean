## MongoDb - Aula 01 - Exercício

Autor: Henrique Ferraz

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2017-04-27T08:39:28.268-0300  connected to: localhost
2017-04-27T08:39:28.269-0300  dropping: be-mean.restaurantes
2017-04-27T08:39:31.218-0300  [###################.....] be-mean.restaurantes 9.09MB/11.3MB (80.1%)
2017-04-27T08:39:31.954-0300  [########################] be-mean.restaurantes 11.3MB/11.3MB (100.0%)
2017-04-27T08:39:31.954-0300  imported 25359 documents
```

## Contando os restaurantes

```
> show collections
restaurantes
> db.restaurantes.find({}).count()
25359
```