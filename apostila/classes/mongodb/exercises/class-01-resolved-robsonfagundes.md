# MongoDB - Aula 01 - Exercício
autor: Robson Fagundes

## Importando os restaurantes

    ```
    robsonfagundes@Dell-3500:~$ mongoimport --db test --collection restaurantes --drop --file restaurantes.json
	2015-11-09T22:49:20.600-0200	connected to: localhost
	2015-11-09T22:49:20.601-0200	dropping: test.restaurantes
	2015-11-09T22:49:23.597-0200	[##################......] test.restaurantes	8.8 MB/11.3 MB (77.9%)
	2015-11-09T22:49:25.024-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    Dell-3500(mongod-3.0.7) test> db.restaurantes.find({}).count()
    25359

    ```
