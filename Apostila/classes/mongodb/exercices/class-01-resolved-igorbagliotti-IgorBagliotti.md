# MongoDB - Aula 01 - Exercício
autor: Igor Rotondo Bagliotti

## Importando os restaurantes

    ```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-01-30T14:48:40.079-0200	connected to: 127.0.0.1
2016-01-30T14:48:40.080-0200	dropping: be-mean.restaurantes
2016-01-30T14:48:42.121-0200	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359
 
    ```
