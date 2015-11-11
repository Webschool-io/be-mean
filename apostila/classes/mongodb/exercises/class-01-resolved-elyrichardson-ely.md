# MongoDB - Aula 01 - Exercício
Autor: Ely Richardson 

## Importando os restaurantes

elymoral@dell:~/bemean$ mongoimport --db be-mean --collection restaurantes --drop --file mongodb/restaurantes.json 
2015-11-10T17:11:21.559-0300	connected to: localhost
2015-11-10T17:11:21.560-0300	dropping: be-mean.restaurantes
2015-11-10T17:11:23.172-0300	imported 25359 documents
elymoral@dell:~/bemean$ 

## Contando os restaurantes

dell(mongod-3.0.7) test> show dbs
local   → 0.078GB
be-mean → 0.078GB
dell(mongod-3.0.7) test> use be-mean
switched to db be-mean
dell(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

