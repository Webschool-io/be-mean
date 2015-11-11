# MongoDB - Aula 01 - Exercício
autor: Miller Barros

## Importando os restaurantes

    ```
    mongoimport -d be-mean --drop -c restaurantes --file ~/Downloads/restaurantes.json
    2015-11-10T00:56:06.135-0200	connected to: localhost
    2015-11-10T00:56:06.135-0200	dropping: be-mean.restaurantes
    2015-11-10T00:56:07.044-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    miller-nt(mongod-3.0.7) test> use be-mean
    switched to db be-mean
    miller-nt(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```
