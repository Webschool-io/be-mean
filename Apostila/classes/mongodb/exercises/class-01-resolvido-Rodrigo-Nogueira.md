#MongoDB - Aula 01 - Exercicíos
Autor: Rodrigo Nogueira

##Importando os restaurantes

@Linux:~/be-mean-insagram-mongodb/exercises$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
connected to: 127.0.0.1
2016-06-26T11:34:38.238-0300 dropping: be-mean.restaurantes
2016-06-26T11:34:40.816-0300 check 9 25359
2016-06-26T11:34:41.966-0300 imported 25359 objects


##Contando os restaurantes

> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
> 
