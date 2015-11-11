# MongoDB - Aula 01 - Exercício
autor: Rafael Costa da Silva

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    connected to: 127.0.0.1
    dropping: be-mean.restaurantes
    		5605323/11880944	47%
    			10400	3466/second
    imported 25359 objects

    ```

## Contando os restaurantes

    ```
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    ```
