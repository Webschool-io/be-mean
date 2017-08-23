
# MongoDB - Aula 01 - Exercício
autor: Carlos Henrique Oliveira Ribeiro

## Importando os restaurantes

 mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop
--file restaurantes.json 2016-10-25T16:40:18.412-0200    connected to:
127.0.0.1 2016-10-25T16:40:18.437-0200    dropping: be-mean.restaurantes
2016-10-25T16:40:20.086-0200    imported 25359 documents

## Contando os restaurantes

db.restaurantes.find({}).count()
25359