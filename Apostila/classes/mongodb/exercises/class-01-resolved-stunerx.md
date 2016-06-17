# MongoDB - Aula 01 - Exercício
autor: SEU NOME

## Importando os restaurantes

    ```
    sudo mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
	sudo: não foi possível resolver máquina stunerx
	connected to: 127.0.0.1
	2016-06-17T02:54:35.850-0300 dropping: be-mean.restaurantes
	2016-06-17T02:54:36.824-0300 check 9 25359
	2016-06-17T02:54:36.857-0300 imported 25359 objects

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359


    ```
