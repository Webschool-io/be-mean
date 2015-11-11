# MongoDB - Aula 01 - Exercício
autor: Matuzalém Teles

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T13:53:18.419-0200    connected to: localhost
    2015-11-10T13:53:18.454-0200    dropping: be-mean.restaurantes
    2015-11-10T13:53:20.241-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359

    ```
