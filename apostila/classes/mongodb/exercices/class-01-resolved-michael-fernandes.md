# MongoDB - Aula 01 - Exercício
autor: Michael Fernandes

## Importando os restaurantes

    ```
    $ mongoimport --db be-mean --collection restaurantes --drop --host=127.0.0.1 --file restaurantes.json
	2015-11-13T22:18:38.805-0200    connected to: 127.0.0.1
	2015-11-13T22:18:38.806-0200    dropping: be-mean.restaurantes
	2015-11-13T22:18:40.684-0200    imported 25359 documents


    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359
	

    ```