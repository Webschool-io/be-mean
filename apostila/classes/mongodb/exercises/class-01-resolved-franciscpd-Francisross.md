# MongoDB - Aula 01 - Exercício
autor: Francisross Soares de Oliveira

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T23:00:03.705-0300	connected to: localhost
    2015-11-10T23:00:03.706-0300	dropping: be-mean.restaurantes
    2015-11-10T23:00:04.620-0300	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359
    ```
