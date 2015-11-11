# MongoDB - Aula 01 - Exercício
autor: Jackell Alves

## Importando os restaurantes

    ```
    mongoimport --host 127.0.0.1 --port 27017 --db be-mean --collection restaurantes --type json --drop --file restaurantes.json
    2015-11-10T18:38:36.488-0200    connected to: 127.0.0.1:27017
    2015-11-10T18:38:36.571-0200    dropping: be-mean.restaurantes
    2015-11-10T18:38:38.929-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359

    ```