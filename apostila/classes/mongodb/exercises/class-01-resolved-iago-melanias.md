# MongoDB - Aula 01 - Exercício
autor: Iago Melanias

## Importando os restaurantes

    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-10-29T23:34:49.494-0200    connected to: 127.0.0.1:27017
    2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
    2015-10-29T23:34:52.487-0200    [##########..............] be-mean.restaurantes   5.2 MB/11.3 MB (45.5%)
    2015-10-29T23:34:54.732-0200    imported X documents


## Contando os restaurantes

    > db.restaurantes.find({}).count();
    25359