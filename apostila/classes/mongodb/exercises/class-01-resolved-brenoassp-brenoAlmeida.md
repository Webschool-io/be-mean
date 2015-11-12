
# MongoDB - Aula 01 - Exercício
autor: Breno Almeida dos Santos Rodrigues Machado

## Importando os restaurantes

    ```
	mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
	2015-11-12T00:06:13.504-0200	connected to: localhost
	2015-11-12T00:06:13.505-0200	dropping: be-mean.restaurantes
	2015-11-12T00:06:14.465-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
	> db.restaurantes.find({}).count()
	25359

    ```
