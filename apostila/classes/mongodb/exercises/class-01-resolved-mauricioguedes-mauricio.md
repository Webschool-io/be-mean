# MongoDB - Aula 01 - Exercício
autor: Maurício Guedes

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection 
	restaurantes --drop --file restaurantes.json
	2015-11-10T22:12:28.241+0000    connected to: localhost
	2015-11-10T22:12:28.249+0000    dropping: be-mean.restaurantes
	2015-11-10T22:12:30.611+0000    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359

    ```