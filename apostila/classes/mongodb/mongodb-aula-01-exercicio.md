# MongoDB - Aula 01 - Exercício
autor: islanilton (@islanilton)

## Importando os restaurantes
connected to: 127.0.0.1
2015-11-09T23:15:51.566-0300 dropping: be-mean.restaurantes
2015-11-09T23:15:52.670-0300 check 9 25359
2015-11-09T23:15:52.789-0300 imported 25359 objects

## Contando os restaurantes
use be-mean
switched to db be-mean
db.restaurantes.find({}).count()
25359