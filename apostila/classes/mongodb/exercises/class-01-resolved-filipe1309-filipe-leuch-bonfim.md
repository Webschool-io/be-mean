# MongoDB - Aula 01 - Exercício
autor: Filipe Leuch Bonfim

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-09T22:33:05.854-0200	connected to: localhost
    2015-11-09T22:33:05.854-0200	dropping: be-mean.restaurantes
    2015-11-09T22:33:06.340-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    nz-fedora(mongod-3.0.7) test> use be-mean
    switched to db be-mean
    nz-fedora(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```
