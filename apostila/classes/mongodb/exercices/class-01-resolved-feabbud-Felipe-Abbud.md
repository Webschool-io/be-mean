# MongoDB - Aula 01 - Exercício
autor: Felipe R S Abbud

## Importando os restaurantes

    ```
     C:\MongoDB\bin>mongoimport --db be-mean --collection restaurantes --drop --file C:/MongoDB/exercicio/restaurantes.json
     2015-11-10T08:14:22.218-0200    connected to: localhost
     2015-11-10T08:14:22.220-0200    dropping: be-mean.restaurantes
     2015-11-10T08:14:23.414-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359

    ```
