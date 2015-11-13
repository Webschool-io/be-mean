# MongoDB - Aula 01 - Exercício
autor: Mate Paiva

## Importando os restaurantes
```
mate@levelho:~$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-13T19:33:51.275-0200	connected to: 127.0.0.1
2015-11-13T19:33:51.290-0200	dropping: be-mean.restaurantes
2015-11-13T19:33:54.224-0200	[####################....] be-mean.restaurantes	9.8 MB/11.4 MB (86.2%)
2015-11-13T19:33:54.962-0200	imported 25359 documents

```
## Contando os restaurantes
```
levelho(mongod-3.0.7) test> use be-mean
switched to db be-mean
levelho(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```
