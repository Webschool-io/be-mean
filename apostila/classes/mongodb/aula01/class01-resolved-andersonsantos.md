# MongoDB - Aula 01 - Exercício
autor: ANDERSON FARIA SANTOS

## Importando os restaurantes

    ```
    ./mongo/mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T05:06:30.369-0200	connected to: localhost
    2015-11-10T05:06:30.370-0200	dropping: be-mean.restaurantes
    2015-11-10T05:06:32.357-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    MacBook-Air-de-Anderson(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    25359

    ```
