# MongoDB - Aula 01 - Exercício
autor: Leandro Matos

## Importando os restaurantes

    ```
    $ mongoimport --db be-mean --collection restaurantes --drop --file ~/restaurantes.json
    2015-11-10T14:01:35.352-0200    connected to: localhost
    2015-11-10T14:01:35.352-0200    dropping: be-mean.restaurantes
    2015-11-10T14:01:36.471-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    leandromatos-imac(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359
    ```