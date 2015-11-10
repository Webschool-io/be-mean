# MongoDB - Aula 01 - Exercício
autor: Baltazar Parra

## Importando os restaurantes

    ```
	$ mongoimport --db be-mean --collection restaurantes --drop --file /c/restaurantes.json
	2015-11-09T23:14:54.984-0200    connected to: localhost
	2015-11-09T23:14:55.022-0200    dropping: be-mean.restaurantes
	2015-11-09T23:14:56.830-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
	Bal@raveNN MINGW64 /c/be-mean
		$ mongo be-mean
		MongoDB shell version: 3.0.7
		connecting to: be-mean
		db.restaurantes.find({}).count()
		25359


    ```
