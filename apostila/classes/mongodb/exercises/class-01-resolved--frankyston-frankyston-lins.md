
# MongoDB - Aula 01 - Exercício
autor: Frankyston Lins

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-09T21:47:20.229-0200	connected to: localhost
    2015-11-09T21:47:20.230-0200	dropping: be-mean.restaurantes
    2015-11-09T21:47:21.053-0200	imported 25359 documents

    ```

## Selecionando o banco de dados

    ```
    frankyston-pc(mongod-3.0.7) be-mean> use be-mean
    switched to db be-mean

    ```

## Contando os restaurantes

    ```
    frankyston-pc(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359
    
    ```
