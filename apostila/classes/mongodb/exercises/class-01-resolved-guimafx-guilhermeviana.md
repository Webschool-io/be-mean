# MongoDB - Aula 01 - Exercício
autor: GUILHERME BORGES VIANA

## Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --drop --file /Users/Guilherme/Desktop/restaurantes.json 
connected to: 127.0.0.1
2015-11-10T21:12:19.569-0200 dropping: be-mean.restaurantes
2015-11-10T21:12:21.289-0200 check 9 25359
2015-11-10T21:12:21.346-0200 imported 25359 objects

## Contando os restaurantes

➜  ~  mongo
MongoDB shell version: 2.6.7
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
