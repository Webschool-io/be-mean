# MongoDB - Aula 01 - Exercício
autor: Igor Simões de Oliveira Lima

## Importando os restaurantes

    ```
	mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
	
	2015-11-09T20:43:43.982-0300	connected to: localhost
	2015-11-09T20:43:43.982-0300	dropping: be-mean.restaurantes
	2015-11-09T20:43:45.037-0300	imported 25359 documents


    ```

## Contando os restaurantes

    ```
	ubuntu-igor(mongod-3.0.7) test> use be-mean
	switched to db be-mean
	ubuntu-igor(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359

    ```
