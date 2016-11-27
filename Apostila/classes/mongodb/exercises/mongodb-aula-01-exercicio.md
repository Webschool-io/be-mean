# MongoDB - Aula 01 - Exercício
autor: Diego de Mattos Martins

## Importando os restaurantes

```
$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-09-18T21:22:36.147-0300    connected to: 127.0.0.1
2016-09-18T21:22:36.175-0300    dropping: be-mean.restaurantes
2016-09-18T21:22:39.068-0300    [#############...........] be-mean.restaurantes6.40MB/11.3MB (56.3%)
2016-09-18T21:22:40.394-0300    [########################] be-mean.restaurantes11.3MB/11.3MB (100.0%)
2016-09-18T21:22:40.394-0300    imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```