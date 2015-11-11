# MongoDB - Aula 01 - Exercício
autor: Gilmar Palega

## Importando os restaurantes

    ```
$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 2015-11-10T14:45:17.407-0200	connected to: localhost
2015-11-10T14:45:17.408-0200	dropping: be-mean.restaurantes
2015-11-10T14:45:20.392-0200	[##################......] be-mean.restaurantes	8.6 MB/11.3 MB (75.9%)
2015-11-10T14:45:21.638-0200	imported 25359 documents
 
    ```

## Contando os restaurantes

    ```
use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

    ```
