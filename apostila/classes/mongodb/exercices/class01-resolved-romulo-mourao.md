##MongoDB - Aula 01 - Execício
autor: Romulo de Araújo Mourão

##Importando os restaurantes

romulo@rmourao:~$ mongoimport --db be-mean --collection restaurantes --drop --file ~/be-mean/exercicios/restaurantes.json
2015-11-10T12:10:06.890-0200	connected to: localhost
2015-11-10T12:10:06.890-0200	dropping: be-mean.restaurantes
2015-11-10T12:10:07.874-0200	imported 25359 documents


## Contando os restaurantes

rmourao(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
