# MongoDB - Aula 01 - Exercício
autor: Felipe Cabianchi de Oliveira

## Importando os restaurantes

    ```
    mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
    2015-11-11T00:31:57.169-0200    connected to: localhost
    2015-11-11T00:31:57.170-0200    dropping: be-mean.restaurantes
    2015-11-11T00:31:58.381-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359

    ```