MongoDB - Aula 01 - Exercício
autor: C0D3R4 - Andres Grams

## Importando os restaurantes

john_@john1 ~/MEAN-WS/be-mean-instagram-mongodb/exercises $ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-11T13:40:30.208+0000    connected to: 127.0.0.1
2015-11-11T13:40:30.210+0000    dropping: be-mean.restaurantes
2015-11-11T13:40:31.681+0000    imported 25359 documents


## Contando restaurantes 

john1(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
john1(mongod-3.0.7) be-mean> 
