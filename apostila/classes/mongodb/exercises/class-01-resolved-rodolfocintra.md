# MongoDB - Aula 01 - Exercício
autor: Rodolfo Antunes Dias Cintra

## Importando os restaurantes

    ```
	rodolfocintra@rodolfocintra ~/be-mean-instagram $ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
	2015-11-09T23:51:41.379-0200	connected to: localhost
	2015-11-09T23:51:41.379-0200	dropping: be-mean.restaurantes
	2015-11-09T23:51:42.568-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
	rodolfocintra(mongod-3.0.7) be-mean>  db.restaurantes.find({}).count()
	25359


    ```
