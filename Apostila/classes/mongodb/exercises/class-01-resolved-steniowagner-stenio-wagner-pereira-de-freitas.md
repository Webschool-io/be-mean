# MongoDB - Aula 01 - Exercício
autor: STENIO WAGNER PEREIRA DE FREITAS

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2016-02-19T00:59:55.748-0300	connected to: localhost
	2016-02-19T00:59:55.755-0300	dropping: be-mean.restaurantes
	2016-02-19T00:59:56.890-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    stenio-Inspiron-3421(mongod-3.0.9) be-mean> db.restaurantes.find({}).count()
	25359

    ```