#MongoDB - Aula 01 - Exercício
autor: Marcelo Henrique

##Importanto os restaurantes

mongoimport --db exercises  --collection restaurantes --	host=127.0.0.1 --drop --file restaurantes.json
connected to: 127.0.0.1
Thu Nov 19 10:15:53.815 dropping: exercises.restaurantes
Thu Nov 19 10:15:55.181 check 9 25359
Thu Nov 19 10:15:55.493 imported 25359 objects


##Count dos restaurantes

MarceloLocal(mongod-2.4.9) exercises> db.restaurantes.find({}).count()
25359
