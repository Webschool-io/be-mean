# MongoDB - Aula 01 - Exercício
autor: Fabiano Cacin Pinel

## Importando os restaurantes

    ```
	c:\MongoAula>mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2015-11-10T13:26:03.702-0200    connected to: localhost
	2015-11-10T13:26:03.704-0200    dropping: be-mean.restaurantes
	2015-11-10T13:26:06.468-0200    imported 25359 documents
	c:\MongoAula>

    ```

## Contando os restaurantes

    ```
	> db.restaurantes.find({}).count()
	25359

    ```
	