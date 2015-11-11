# MongoDB - Aula 01 - Exercício
autor: Bruno Garbim

## Importando os restaurantes


     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T17:57:58.295-0200    connected to: localhost
    2015-11-10T17:57:58.297-0200    dropping: be-mean.restaurantes
    2015-11-10T17:58:01.289-0200    [#####################...] be-mean.restaurantes
    10.2 MB/11.3 MB (90.5%)
    2015-11-10T17:58:01.530-0200    imported 25359 documents


## Contando os restaurantes


    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    