# MongoDB - Aula 01 - Exercício
autor: Raphael Lima

## Importando os restaurantes

    ```
		raphael@debian:/$ mongoimport --db be-mean --collection restaurantes --drop --file /restaurantes.json 
		2015-11-09T22:39:06.309-0200	connected to: localhost
		2015-11-09T22:39:06.315-0200	dropping: be-mean.restaurantes
		2015-11-09T22:39:07.414-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
	  25359
	```
