# MongoDB - Aula 01 - Exercício
autor: Valdir Pereira

## Importando os restaurantes

    ```
    $ mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
	2015-11-11T01:09:47.981-0200    connected to: localhost
	2015-11-11T01:09:48.019-0200    dropping: be-mean.restaurantes
	2015-11-11T01:09:49.463-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > use be-mean
	switched to db be-mean
	> db.restaurantes.find({}).count()
	25359

    ```