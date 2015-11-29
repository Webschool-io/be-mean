# MongoDB - Aula 01 - Exercício
autor: Daniel Haberbeck dos Santos

## Importando os restaurantes


daniel@ubuntu:~/be-mean-instagram/mongodb/exercicios$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
connected to: 127.0.0.1
Sun Nov 29 18:21:42.053 dropping: be-mean.restaurantes
Sun Nov 29 18:21:45.005 		Progress: 9920448/11906303	83%
Sun Nov 29 18:21:45.012 			19100	6366/second
Sun Nov 29 18:21:45.720 check 9 25359
Sun Nov 29 18:21:46.991 imported 25359 objects

## Contando os restaurantes

db.restaurantes.find({}).count()
25359
