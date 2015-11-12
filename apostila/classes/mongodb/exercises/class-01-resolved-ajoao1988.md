# MongoDB - Aula 01 - Exercício
autor: JOAO PAULO SANTOS DE ARAUJO

## Importando os restaurantes

    ```
    mongoimport -d be-mean -c restaurantes --drop --file d:\restaurantes.json
    2015-11-10T21:12:52.964-0200    connected to: localhost
    2015-11-10T21:12:52.969-0200    dropping: be-mean.restaurantes
    2015-11-10T21:12:54.848-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359

    ```