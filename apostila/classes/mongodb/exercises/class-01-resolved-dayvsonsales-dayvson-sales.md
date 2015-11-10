# MongoDB - Aula 01 - Exercício
autor: Dayvson Sales

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
     connected to: 127.0.0.1
     Tue Nov 10 10:29:58.919 dropping: be-mean.restaurantes
     Tue Nov 10 10:29:59.875 check 9 25359
     Tue Nov 10 10:29:59.984 imported 25359 objects

    ```

## Contando os restaurantes

    ```
	dayvs0n in ~ λ-> mongo be-mean
	MongoDB shell version: 2.4.9
	connecting to: be-mean
    	> db.restaurantes.find({}).count()
	25359
    ```
