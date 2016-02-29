# MongoDB - Aula 01 - Exercício
autor: MARCO COMASSETTO

## Importando os restaurantes


[root@localhost exercicios]# mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-02-28T21:53:56.540-0300    connected to: 127.0.0.1
2016-02-28T21:53:56.548-0300    dropping: be-mean.restaurantes
2016-02-28T21:53:59.483-0300    [#####################...] be-mean.restaurantes10.0 MB/11.3 MB (87.9%)
2016-02-28T21:53:59.906-0300    [########################] be-mean.restaurantes11.3 MB/11.3 MB (100.0%)
2016-02-28T21:53:59.906-0300    imported 25359 documents


## Contando os restaurantes

> db.restaurantes.find({}).count()
25359

