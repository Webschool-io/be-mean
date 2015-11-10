# MongoDB - Aula 01 - Exercício
autor: Pedro Henrique

## Importando os restaurantes

    C:\Users\Pedro>mongoimport --db be-mean --collection restaurantes --drop --file E:/mongodb/restaurantes.json
    2015-11-09T21:51:21.369-0200    connected to: localhost
    2015-11-09T21:51:21.370-0200    dropping: be-mean.restaurantes
    2015-11-09T21:51:22.009-0200    imported 25359 documents

## Contando os restaurantes
    C:\Users\Pedro>mongo
    MongoDB shell version: 3.0.7
    connecting to: test
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
