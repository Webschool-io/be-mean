# MongoDB - Aula 01 - Exercício
autor: Alex Miranda

## importando restaurantes

$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T00:23:21.090-0200    connected to: localhost
2015-11-11T00:23:21.100-0200    dropping: be-mean.restaurantes
2015-11-11T00:23:22.587-0200    imported 25359 documents


## contando restaurantes

use be-mean
switched to db be-mean
db.restaurantes.find({}).count()
25359
