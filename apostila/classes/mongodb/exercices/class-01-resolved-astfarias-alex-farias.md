# MongoDB - Aula 01 - Exercício
autor: Alex Farias

## Importando os restaurantes

    ```
  	mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
	2015-11-10T12:34:49.528-0200	connected to: localhost
	2015-11-10T12:34:49.529-0200	dropping: be-mean.restaurantes
	2015-11-10T12:34:50.829-0200	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    	astfarias-pc(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359


    ```