# MongoDB - Aula 01 - Exercício
autor: Vinicius de Siqueira Campos

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file 'D:\Cursos\beMEAN\MongoDB\restaurantes.json'
	2015-11-10T00:37:20.131-0200    connected to: localhost
	2015-11-10T00:37:20.133-0200    dropping: be-mean.restaurantes
	2015-11-10T00:37:22.017-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count();
	25359
    ```