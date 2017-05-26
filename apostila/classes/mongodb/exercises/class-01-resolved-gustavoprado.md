# MongoDB - Aula 01 - Exercício
autor: Gustavo Prado

## Importando restaurantes

    ```
  	~/repositorio/be-mean-instagram-mongodb$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file /home/gustavo/restaurantes.json
	2015-11-12T11:05:31.655-0200	connected to: 127.0.0.1
	2015-11-12T11:05:31.656-0200	dropping: be-mean.restaurantes
	2015-11-12T11:05:33.185-0200	imported 25359 documents
    ```

## Contando restaurantes

    ```
    	be-mean> db.restaurantes.find({}).count()
	25359
    ```