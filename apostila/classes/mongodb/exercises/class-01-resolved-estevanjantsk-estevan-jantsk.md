# MongoDB - Aula 01 - Exercício
autor: Estevan Jantsk

## Importando os restaurantes

    ```
    [Desktop]$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-09T23:46:05.850-0200	connected to: localhost
    2015-11-09T23:46:05.851-0200	dropping: be-mean.restaurantes
    2015-11-09T23:46:07.059-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    [Desktop]$ mongo
    MongoDB shell version: 3.0.7
    connecting to: test
    Server has startup warnings:
    2015-11-09T23:34:40.681-0200 I CONTROL  [initandlisten]
    2015-11-09T23:34:40.681-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    >

    ```
