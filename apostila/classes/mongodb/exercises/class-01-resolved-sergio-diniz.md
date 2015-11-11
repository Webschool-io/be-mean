# MongoDB - Aula 01 - Exercício
	autor: Sergio Diniz Correia

## Importando os restaurantes

    ```
    Sergios-MBP:~ sergiodiniz$ mongoimport --db be-mean --collection restaurantes --drop --file ../../Volumes/Arquivos/Sergio/Documentos/Estudos/be-mean/MongoDB/aula1/aula1.json 
	2015-11-10T09:04:35.717-0300	connected to: localhost
	2015-11-10T09:04:35.718-0300	dropping: be-mean.restaurantes
	2015-11-10T09:04:37.565-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
	> db.restaurantes.find({}).count()
	25359
	> 

    ```

