# MongoDB - Aula 01 - Exercício
autor: Ronaldo Lima

## Importando os restaurantes

    ```
    Clientes-MacBook-Pro:/ cliente$ mongoimport --db be-mean --collection restaurantes --file Users/cliente/Downloads/restaurantes.json
	2015-11-09T22:33:29.678-0200	connected to: localhost
	2015-11-09T22:33:32.602-0200	[##########..............] be-mean.restaurantes	5.2 MB/11.3 MB (45.5%)
	2015-11-09T22:33:35.599-0200	[###############.........] be-mean.restaurantes	7.5 MB/11.3 MB (66.2%)
	2015-11-09T22:33:38.008-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
	25359
	> 

    ```





