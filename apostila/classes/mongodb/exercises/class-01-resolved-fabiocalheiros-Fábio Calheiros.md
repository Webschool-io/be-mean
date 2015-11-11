# MongoDB - Aula 01 - Exercício
autor: Fábio Calheiros (conta: fabiocalheiros)

## Importando os restaurantes

C:\Users\fabio>mongoimport --db be-mean --collection restaurantes --drop --file
C:\mongodb\restaurantes.json
2015-11-10T14:39:20.049-0200    connected to: localhost
2015-11-10T14:39:20.051-0200    dropping: be-mean.restaurantes
2015-11-10T14:39:22.122-0200    imported 25359 documents

## Contando os restaurantes

> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
>

