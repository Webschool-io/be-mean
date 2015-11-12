# MongoDB - Aula 01 - Exercício
autor: Wellerson Roberto

## Importando os restaurantes

C:\Users\Wellerson>mongoimport --db be-mean --collection restaurantes --drop --file "D:\restaurantes.json"
2015-11-10T23:28:59.270-0200    connected to: localhost
2015-11-10T23:28:59.272-0200    dropping: be-mean.restaurantes
2015-11-10T23:29:00.266-0200    imported 25359 documents

## Contando os restaurantes

> db.restaurantes.find({}).count()
25359