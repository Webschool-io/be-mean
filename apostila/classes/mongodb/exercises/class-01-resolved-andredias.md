# MongoDB - Aula 01 - Exercício
autor: André Dias

## Importando os restaurantes

andredias@andre-dias-skywalker:~/be-mean$ mongoimport --db test --collection restaurantes --drop --file restaurantes.json
2015-11-09T21:54:30.788-0200	connected to: localhost
2015-11-09T21:54:30.789-0200	dropping: test.restaurantes
2015-11-09T21:54:33.593-0200	imported 25359 documents

## Contando os restaurantes

andre-dias-skywalker(mongod-3.0.7) test> db.restaurantes.find({}).count()

25359

