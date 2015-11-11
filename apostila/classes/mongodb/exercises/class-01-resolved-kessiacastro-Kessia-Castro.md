# MongoDB - Aula 01 - Exercício
autora: KESSIA CASTRO CORREA


## Importando os restaurantes

Kessias-MBP:be-mean-modulo-mongodb kessiacastro$ mongoimport --db be-mean-mongo --collection restaurantes --drop --file restaurantes.json
2015-11-10T13:07:25.173-0300	connected to: localhost
2015-11-10T13:07:25.174-0300	dropping: be-mean-mongo.restaurantes
2015-11-10T13:07:26.687-0300	imported 25359 documents


## Contando os restaurantes

Kessias-MBP(mongod-3.0.7) be-mean-mongo> db.restaurantes.find({}).count()
25359