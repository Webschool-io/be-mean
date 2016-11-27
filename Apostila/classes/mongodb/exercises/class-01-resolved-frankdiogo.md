# MongoDB - Aula 01 - Exercício
autor: Frank Diogo Cavalcante

## Importando os restaurantes

    ```
    mongoimport --db be-mean  --collection restaurantes --drop --file restaurantes.json
2016-06-21T19:17:37.868-0300	connected to: localhost
2016-06-21T19:17:37.868-0300	dropping: be-mean.restaurantes
2016-06-21T19:17:40.571-0300	imported 25359 documents
     
    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
25359

    ```