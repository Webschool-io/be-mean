# MongoDB - Aula 01 - Exercício
autor: Carol Dias

## Importando os restaurantes

    ```

    > mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T21:12:43.873-0200    connected to: localhost
    2015-11-10T21:12:43.876-0200    dropping: be-mean.restaurantes
    2015-11-10T21:12:46.062-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > mongo be-mean
    MongoDB shell version: 3.0.7
    connecting to: be-mean
    > db.restaurantes.find({}).count()
    25359

    ```