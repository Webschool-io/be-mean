# MongoDB - Aula 01 - Exercício
autor: WANDERVAL CARVALHO

## Importando os restaurantes

    ```
    BluMonkey-2:bin monkey_001$ ./mongoimport --db be-mean --collection restaurantes --drop --file "exercicios/exercicio1/restaurantes.json"
    2015-11-11T13:42:59.190-0200    connected to: localhost
    2015-11-11T13:42:59.190-0200    dropping: be-mean.restaurantes
    2015-11-11T13:43:01.955-0200    imported 25359 documents

    ```

    


## Contando os restaurantes

    ```
    BluMonkey-2:bin monkey_001$ ./mongo be-mean
    MongoDB shell version: 3.0.7
    connecting to: be-mean
    Server has startup warnings: 
    2015-11-11T13:42:37.055-0200 I CONTROL  [initandlisten] 
    2015-11-11T13:42:37.055-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
    > db.restaurantes.find({}).count()
    25359

    ```
