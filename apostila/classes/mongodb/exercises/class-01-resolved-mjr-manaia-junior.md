# MongoDB - Aula 01 - Exercício
autor: Manaia Junior

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
     2015-11-10T09:32:04.715-0300	connected to: localhost
     2015-11-10T09:32:04.724-0300	dropping: be-mean.restaurantes
     2015-11-10T09:32:06.618-0300	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359
    ```
