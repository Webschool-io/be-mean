# MongoDB - Aula 01 - Exercício
autor: Andrew Esteves

## Importando os restaurantes

    ```
    2015-11-10T19:42:18.705-0300	connected to: localhost
    2015-11-10T19:42:18.708-0300	dropping: be-mean.restaurantes
    2015-11-10T19:42:21.324-0300	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    MongoDB shell version: 3.0.4
    connecting to: test
    Server has startup warnings: 
    2015-11-10T19:41:17.799-0300 I CONTROL  [initandlisten] 
    2015-11-10T19:41:17.799-0300 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count();
    25359
    > 
    ```
