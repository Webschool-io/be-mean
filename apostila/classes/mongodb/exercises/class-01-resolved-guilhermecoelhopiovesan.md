# MongoDB - Aula 01 - Exercício
autor: Guilherme Coelho Piovesan

## Importando os restaurantes

    ```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-11T22:37:49.679-0200	connected to: localhost
2015-11-11T22:37:49.680-0200	dropping: be-mean.restaurantes
2015-11-11T22:37:50.623-0200	imported 25359 documents
     ```

## Contando os restaurantes

    ```
be-mean> db.restaurantes.find({}).count()
25359
    ```
