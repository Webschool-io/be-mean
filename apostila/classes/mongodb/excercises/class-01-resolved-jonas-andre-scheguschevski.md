# MongoDB - Aula 01 - Exercício
autor: Jonas Andre Scheguschevski

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file ../../Be-Mean/restaurantes.json 
    2015-11-09T21:28:36.679-0200	connected to: localhost
    2015-11-09T21:28:36.679-0200	dropping: be-mean.restaurantes
    2015-11-09T21:28:37.644-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    jsnb(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359


    ```
