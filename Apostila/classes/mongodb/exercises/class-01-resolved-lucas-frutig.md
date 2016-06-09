# MongoDB - Aula 01 - Exercício
autor: Lucas Frutig

## Importando os restaurantes

    ```
     lucas@vahalla:~$ mongoimport --db be-mean --collection restaurantes --drop --file Cursos/MongoDB/restaurantes.json
	2016-06-09T14:06:53.481-0300	connected to: localhost
	2016-06-09T14:06:53.488-0300	dropping: be-mean.restaurantes
	2016-06-09T14:06:54.848-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359


    ```
