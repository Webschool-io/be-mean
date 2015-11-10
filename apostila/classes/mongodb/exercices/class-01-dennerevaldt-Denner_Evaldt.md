# MongoDB - Aula 01 - Exercício
autor: Denner Evaldt Machado

## Importando os restaurantes

    ```
    MBP-de-Denner:~ dennerevaldtmachado$ mongoimport --db be-mean --collection restaurantes --file documents/bemean/mongodb/aula1/restaurantes.json
	2015-11-09T21:29:53.974-0200	connected to: localhost
	2015-11-09T21:29:56.943-0200	[########################] be-mean.restaurantes	11.3 MB/11.3 MB (100.0%)
	2015-11-09T21:29:56.995-0200	imported 25359 documents

    ```
## Contando os restaurantes

    ```
    MBP-de-Denner:~ dennerevaldtmachado$ mongo be-mean
	MongoDB shell version: 3.0.7
	connecting to: be-mean
	> db.restaurantes.find({}).count()
	25359

    ```