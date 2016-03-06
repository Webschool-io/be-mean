#MondoDB - Aula01 - Exercício
autor: Jeferson Ferreira

##Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-03-05T22:33:10.067-0300	connected to: 127.0.0.1
2016-03-05T22:33:10.076-0300	dropping: be-mean.restaurantes
2016-03-05T22:33:12.865-0300	imported 25359 documents

##Contando os restaurantes

MacBook-Pro-de-finacio(mongod-3.3.1) test> use be-mean
switched to db be-mean
MacBook-Pro-de-finacio(mongod-3.3.1) be-mean> db.restaurantes.find({}).count()
25359