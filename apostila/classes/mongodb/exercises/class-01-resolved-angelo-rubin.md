# MongoDB - Aula 01 - Exercício
autor: Angelo Rogério Rubin

## Importando os restaurantes

    ```
    PS C:\Projetos\be-mean-instagram> mongoimport --db be-mean --collection restaurantes --drop --file C:\data\db\restaurantes.json
    2015-11-11T17:59:43.971-0200    connected to: localhost
    2015-11-11T17:59:43.973-0200    dropping: be-mean.restaurantes
    2015-11-11T17:59:45.363-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    PS C:\> mongo
    MongoDB shell version: 3.0.7
    connecting to: test
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359

    ```