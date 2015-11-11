# MongoDB - Aula 01 - Exercício
autor: Adams Alves

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T19:58:44.050-0200	connected to: localhost
    2015-11-10T19:58:44.055-0200	dropping: be-mean.restaurantes
    2015-11-10T19:58:45.456-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359


    ```
