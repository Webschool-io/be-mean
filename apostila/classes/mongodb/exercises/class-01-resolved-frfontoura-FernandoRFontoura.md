# MongoDB - Aula 01 - Exercício
autor: Fernando Rufino Fontoura

## Importando os restaurantes

    ```
    fernando@fernando:~/workspaces/be-mean/mongodb$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
	2015-11-09T21:54:59.975-0200	connected to: localhost
	2015-11-09T21:54:59.978-0200	dropping: be-mean.restaurantes
	2015-11-09T21:55:00.985-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
	fernando(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359

    ```