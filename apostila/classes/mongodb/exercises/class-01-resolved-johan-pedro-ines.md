# MongoDB - Aula 01 - Exercício
autor: JOHAN PEDRO INÊS

## Importando os restaurantes

    ```
    mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
    2015-11-11T04:49:48.865-0200    connected to: localhost
    2015-11-11T04:49:48.866-0200    dropping: be-mean.restaurantes
    2015-11-11T04:49:50.382-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359
    ```