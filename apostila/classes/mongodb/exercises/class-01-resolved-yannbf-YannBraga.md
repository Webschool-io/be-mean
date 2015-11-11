# MongoDB - Aula 01 - Exercício
autor: Yann Braga

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file .\restaurantes.json
    2015-11-11T01:58:39.267-0300    connected to: localhost
    2015-11-11T01:58:39.269-0300    dropping: be-mean.restaurantes
    2015-11-11T01:58:40.706-0300    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    MongoDB shell version: 3.0.7
    connecting to: test
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    ```