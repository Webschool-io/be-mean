# MongoDB - Aula 01 - Exercício
autor: Dalianny Vieira

## Importando os restaurantes

    ```
	mongoimport --db be-mean-instagram --collection restaurantes --hos
	t=127.0.0.1 --drop --file restaurantes.json
	2015-11-11T16:23:02.002-0200    connected to: 127.0.0.1
	2015-11-11T16:23:02.004-0200    dropping: be-mean-instagram.restaurantes
	2015-11-11T16:23:03.733-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
	db.restaurantes.find({}).count()
	25359

    ```