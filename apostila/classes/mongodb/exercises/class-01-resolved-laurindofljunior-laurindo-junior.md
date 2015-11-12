# MongoDB - Aula 01 - Exercício
autor: Laurindo Ferreira Lucio Junior

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-12T02:55:02.653-0200    connected to: localhost
    2015-11-12T02:55:02.659-0200    dropping: be-mean.restaurantes
    2015-11-12T02:55:04.797-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    Junior-PC(mongod-3.0.6) test> use be-mean
    switched to db be-mean
    Junior-PC(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    25359
    ```