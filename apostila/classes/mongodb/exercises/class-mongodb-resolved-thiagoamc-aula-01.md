# MongoDB - Aula 01 - Exercício
autor: THIAGO AUGUSTO MATOS COELHO

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file /Users/thiagocoelho/Desktop/thiagoamc/curso_bemean/restaurantes.json
		2015-11-10T11:58:58.444-0200	connected to: localhost
		2015-11-10T11:58:58.445-0200	dropping: be-mean.restaurantes
		2015-11-10T11:59:00.474-0200	imported 25359 documents

    ```

## Contando os restaurantes

	```
	use be-mean
	db.restaurantes.find({}).count()
	25359
	``
