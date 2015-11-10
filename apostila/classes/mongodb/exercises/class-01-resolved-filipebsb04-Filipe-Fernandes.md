# MongoDB - Aula 01 - Exercício
autor: Filipe Fernandes

## Importando os restaurantes

    ```
    PS C:\Windows\system32> mongoimport --db be-mean --collection restaurantes --drop --file c:\data\restaurantes.json
	2015-11-09T22:45:07.221-0200    connected to: localhost
	2015-11-09T22:45:07.234-0200    dropping: be-mean.restaurantes
	2015-11-09T22:45:09.528-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
	> db.restaurantes.find({}).count()
	25359

    ``` 
