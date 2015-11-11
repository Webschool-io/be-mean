# MongoDB - Aula 01 - Exercício
Autor: Rodrigo de Medeiros Gianotto

## Importando os restaurantes

    ```
	Rodrigos-iMac:~ cantodosteve$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/cantodosteve/Development/be-mean-estudo/09112015-aula01-mongodb/restaurantes.json
	2015-11-10T00:14:07.947-0200	connected to: localhost
	2015-11-10T00:14:07.947-0200	dropping: be-mean.restaurantes
	2015-11-10T00:14:10.942-0200	[##########..............] be-mean.restaurantes	5.2 MB/11.3 MB (45.5%)
	2015-11-10T00:14:13.251-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
	> db.restaurantes.find({}).count()
	25359

    ```