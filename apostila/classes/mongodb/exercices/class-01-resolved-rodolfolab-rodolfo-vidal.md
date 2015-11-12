# MongoDB - Aula 01 - Exercício
Autor: Rodolfo Vidal

## Importando os restaurantes

     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
     connected to: 127.0.0.1
     2015-11-12T12:14:58.121-0300    dropping: be-mean.restaurantes
     2015-11-12T12:15:16.031-0300 		Progress: 10736994/11906303	90%
     2015-11-12T12:15:16.033-0300 			21400	1188/second
     2015-11-12T12:15:18.912-0300    check 9 25359
     2015-11-12T12:15:18.913-0300    imported 25359 objects

## Contando os restaurantes

     labcriativo(mongod-3.0.6) be-mean > db.restaurantes.find({}).count()
25359
