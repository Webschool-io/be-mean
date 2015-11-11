# MongoDB - Aula 01 - Exercício
autor: Fellipe Pinheiro

## Importando os restaurantes

    ```
    [delete@vostro:be-mean]$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
    2015-11-10T13:00:26.329-0200    connected to: localhost
    2015-11-10T13:00:26.329-0200    dropping: be-mean.restaurantes
    2015-11-10T13:00:27.681-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    [delete@vostro:be-mean]$ mongo
    MongoDB shell version: 3.0.7
    connecting to: test
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    > 
    ```
