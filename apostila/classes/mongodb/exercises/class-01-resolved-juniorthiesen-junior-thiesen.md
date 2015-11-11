# MongoDB - Aula 01 - Exercício
autor: Junior Thiesen

## Importando os restaurantes

junior@dev-fast:~/dev/be-mean-instagram-mongodb/exercises$ mongoimport --db be-meam --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-10T23:23:39.458-0200	connected to: 127.0.0.1
2015-11-10T23:23:39.459-0200	dropping: be-meam.restaurantes
2015-11-10T23:23:40.691-0200	imported 25359 documents



## Contando os restaurantes

> use be-meam
switched to db be-meam
> db.restaurantes.find({}).count()
25359
> 
