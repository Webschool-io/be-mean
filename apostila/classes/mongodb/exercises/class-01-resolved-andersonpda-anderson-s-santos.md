# MongoDB - Aula 01 - Exercício
autor: Anderson S Santos

## Importando os restaurantes

    ```
	Mac-mini-de-Anderson:Desktop anderson$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2015-11-09T21:58:01.781-0200	connected to: localhost
	2015-11-09T21:58:01.782-0200	dropping: be-mean.restaurantes
	2015-11-09T21:58:03.036-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
	Mac-mini-de-Anderson(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359
	
	```