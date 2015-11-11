# MongoDB - Aula 01 - Exercício
autor: Pedro Henrique Pinto Leão

## Importando os restaurantes

    ```
	pedro@laptop:/$ mongoimport -db be-mean --collection restaurantes --drop --file /home/pedro/Downloads/restaurantes.json
	connected to: 127.0.0.1
	2015-11-09T23:51:12.389-0200 dropping: be-mean.restaurantes
	2015-11-09T23:51:13.165-0200 check 9 25359
	2015-11-09T23:51:13.557-0200 imported 25359 objects

    ```

## Contando os restaurantes

    ```
	laptop(mongod-2.6.3) be-mean> db.restaurantes.find({}).count()
	25359

