# MongoDB - Aula 01 - Exercício
autor: Gabriel Panassol

## Importando os restaurantes

    ```
	Gabriel@gabriel MINGW64 ~/Documents/BeMean/MongoDB
	$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2015-11-10T10:32:28.729-0200    connected to: localhost
	2015-11-10T10:32:28.760-0200    dropping: be-mean.restaurantes
	2015-11-10T10:32:31.122-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
	Gabriel@gabriel MINGW64 ~/Documents/BeMean/MongoDB/be-mean-modulo-mongodb (master)
	$ mongo
	MongoDB shell version: 3.0.7
	connecting to: test
	> use be-mean
	switched to db be-mean
	> db.restaurantes.find({}).count()
	25359

    ```