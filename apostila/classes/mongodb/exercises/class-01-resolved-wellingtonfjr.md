# MongoDB - Aula 01 - Exercício
autor: Wellington Fernandes

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-10-29T23:34:49.494-0200    connected to: localhost
    2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
    2015-10-29T23:34:54.732-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359

    ```