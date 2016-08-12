# MongoDB - Aula 01 - Exercício
autor: Eve Montalvão

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
     2016-08-11T22:50:45.655-0300   connected to: localhost
     2016-08-11T22:50:45.656-0300   dropping: be-mean.restaurantes
     2016-08-11T22:50:46.980-0300   imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359

    ```