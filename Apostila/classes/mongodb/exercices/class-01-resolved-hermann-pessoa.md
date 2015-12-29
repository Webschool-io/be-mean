# MongoDB - Aula 01 - Exercício
autor: HERMANN PESSOA

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
    2015-12-29T17:44:17.093-0200    connected to: 127.0.0.1
    2015-12-29T17:44:17.094-0200    dropping: be-mean.restaurantes
    2015-12-29T17:44:20.067-0200    [##########..............] be-mean.restaurantes5.2 MB/11.3 MB (45.5%)
    2015-12-29T17:44:21.684-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    suissacorp(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    X

    ```