# MongoDB - Aula 01 - Exercício
autor: THIAGO MASCARENHAS

## Importando os restaurantes

    ```
$ mongoimport --db test --collection restaurantes --drop --file C:\\Users\\thiag\\Desktop\\MongoDb\\restaurantes.json
2018-05-29T01:04:46.233-0300    connected to: localhost
2018-05-29T01:04:46.274-0300    dropping: test.restaurantes
2018-05-29T01:04:48.221-0300    [#############...........] test.restaurantes   6.20MB/11.3MB (54.6%)
2018-05-29T01:04:48.963-0300    [########################] test.restaurantes   11.3MB/11.3MB (100.0%)
2018-05-29T01:04:48.964-0300    imported 25359 documents

```

## Contando os restaurantes

    ```
use test
switched to db test
db.restaurantes.find({}).count()
25359

