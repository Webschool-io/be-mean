# MongoDB - Aula 01 - Exercício
autor: Edison Bosnyak

## Importando os restaurantes

    ```
    PS C:\Users\edison\Desktop> mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T03:20:05.426-0200    connected to: localhost
    2015-11-10T03:20:05.431-0200    dropping: be-mean.restaurantes
    2015-11-10T03:20:06.904-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359

    ```
