# MongoDB - Aula 01 - Exercício
autor: RODRIGO GARCETE

## Importando os restaurantes

mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json 
connected to: 127.0.0.1
2015-11-10T21:32:35.886-0300 dropping: be-mean.restaurantes
2015-11-10T21:32:37.621-0300 check 9 25359
2015-11-10T21:32:37.822-0300 imported 25359 objects

## Contando os restaurantes

rodrigo-Satellite-L505(mongod-2.6.11) be-mean> db.restaurantes.find({}).count()
25359




