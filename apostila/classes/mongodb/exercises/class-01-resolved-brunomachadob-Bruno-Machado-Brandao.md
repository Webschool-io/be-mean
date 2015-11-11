# MongoDB - Aula 01 - Exercício
autor: Bruno Machado Brandão

## Importando os restaurantes
	```
	mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2015-11-10T15:54:46.217-0200    connected to: localhost
	2015-11-10T15:54:46.218-0200    dropping: be-mean.restaurantes
	2015-11-10T15:54:46.960-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
	25359
	```