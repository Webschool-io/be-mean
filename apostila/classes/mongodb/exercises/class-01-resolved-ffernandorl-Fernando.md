# MongoDB - Aula 01 - Exercício
autor: Francisco Fernando Rocha

## Importando os restaurantes
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
2015-11-11T23:15:20.601-0300 dropping: be-mean.restaurantes
2015-11-11T23:15:22.608-0300 check 9 25359
2015-11-11T23:15:22.608-0300 imported 25359 objects

## Contando os restaurantes
db.restaurantes.find({}).count()
25359
