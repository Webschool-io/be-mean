# MongoDB - Aula 01 - Exercício
autor: Rodrigo Alves Guerra

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file /home/ogid/Downloads/restaurantes.json
     connected to: 127.0.0.1
     Tue Nov 10 00:43:18.060 dropping: be-mean.restaurantes
     Tue Nov 10 00:43:19.861 check 9 25359
     Tue Nov 10 00:43:19.919 imported 25359 objects

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
25359

    ```
