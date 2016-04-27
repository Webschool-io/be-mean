# MongoDB - Aula 01 - Exercício
autor: Pablo Zaniolo

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes host=127.0.0.1 --drop --file restaurantes.json 
	2016-04-27T18:26:57.421-0300	connected to: 127.0.0.1
	2016-04-27T18:26:57.422-0300	dropping: be-mean.restaurantes
	2016-04-27T18:26:58.573-0300	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359
    ```
