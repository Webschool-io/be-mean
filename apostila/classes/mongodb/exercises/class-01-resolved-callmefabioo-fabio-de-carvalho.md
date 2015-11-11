```md
# MongoDB - Aula 01 - Exercício
autor: Fábio de Carvalho

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
    2015-11-10T21:08:05.027-0200    connected to: 127.0.0.1
    2015-11-10T21:08:05.029-0200    dropping: be-mean.restaurantes
    2015-11-10T21:08:06.724-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    MongoDB shell version: 3.0.7
    connecting to: be-mean
    > db.restaurantes.find({}).count()
    25359

    ```