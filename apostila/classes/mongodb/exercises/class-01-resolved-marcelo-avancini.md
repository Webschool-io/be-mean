# MongoDB - Aula 01 - Exercício
autor: Marcelo Avancini

## Importando os restaurantes


    marcelo@marcelo-notebook:/$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-09T23:34:17.999-0200	connected to: localhost
    2015-11-09T23:34:18.000-0200	dropping: be-mean.restaurantes
    2015-11-09T23:34:19.066-0200	imported 25359 documents

## Contando os restaurantes

    > db.restaurantes.count();
    25359
