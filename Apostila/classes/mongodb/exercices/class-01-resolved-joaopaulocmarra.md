# MongoDB - Aula 01 - Exercício
autor: João Paulo Costa Marra


## Importando os restaurantes
C:\Users\Jota\Desktop\be-mean-instagram>mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file c:\Users\Jota\Desktop\restaurantes.json
2016-02-08T10:36:48.087-0200    connected to: 127.0.0.1
2016-02-08T10:36:48.089-0200    dropping: be-mean.restaurantes
2016-02-08T10:36:49.496-0200    imported 25359 documents


## Contando os restaurantes
Jota-PC(mongod-3.2.1) be-mean> db.restaurantes.find({}).count()
25359
