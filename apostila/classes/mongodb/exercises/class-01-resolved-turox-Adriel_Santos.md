# MongoDB - Aula 01 - Exercício
autor: 	Adriel Cardoso dos Santos

## Importando os restaurantes

    ```
	mongoimport --db be-mean-instagram --collection restaurantes --host=127.0.0.1 --file restaurantes.json 
	2015-11-10T20:42:36.363-0200	connected to: 127.0.0.1
	2015-11-10T20:42:37.674-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
	> use be-mean-instagram
	switched to db be-mean-instagram
	> db.restaurantes.find({}).count()
	25359


    ```
