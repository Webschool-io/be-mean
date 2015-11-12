# MongoDB - Aula 01 - Exercício
autor: Leonardo Barbosa de Oliveira

## Importando os restaurantes

    ```
    $ mongoimport --db be-mean-instagram-mongodb --collection restaurantes --drop --host=127.0.0.1 --file restaurantes.json
	2015-11-11T03:17:54.184-0200    connected to: 127.0.0.1
	2015-11-11T03:17:54.186-0200    dropping: be-mean-instagram-mongodb.restaurantes
	2015-11-11T03:17:55.273-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359
    
    ```