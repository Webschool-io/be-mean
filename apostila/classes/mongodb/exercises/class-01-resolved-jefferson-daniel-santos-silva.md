# MongoDB - Aula 01 - Exercício
autor: Jefferson Daniel (https://github.com/jeffersondanielss)

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T10:03:46.489-0200  connected to: localhost
    2015-11-10T10:03:46.490-0200  dropping: be-mean.restaurantes
    2015-11-10T10:03:48.161-0200  imported 25359 documents

    ```

## Contando os restaurantes

    ```
    testes-iMac(mongod-3.0.7) test> db.restaurantes.find({}).count()
    0
    testes-iMac(mongod-3.0.7) test> use be-mean
    switched to db be-mean
    testes-iMac(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359
    ```
