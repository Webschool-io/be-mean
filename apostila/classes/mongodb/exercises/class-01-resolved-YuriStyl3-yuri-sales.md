# MongoDB - Aula 01 - Exercício
autor: Yuri Sales

## Importando os restaurantes

```
 mongoimport --db be-mean --collection restaurantes --drop --file /home/yuri/Documentos/be-mean/restaurantes.json
2015-11-10T19:01:01.877-0300	connected to: localhost 
2015-11-10T19:01:01.883-0300	dropping: be-mean.restaurantes
2015-11-10T19:01:04.849-0300	[####################....] be-mean.restaurantes9.8 MB/11.3 MB (86.3%)
2015-11-10T19:01:05.451-0300	imported 25359 documents 

```

## Contando os restaurantes

```
Megazord(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```
