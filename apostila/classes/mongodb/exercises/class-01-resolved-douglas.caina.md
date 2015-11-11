# MongoDB - Aula 01 - Exercício
autor: Douglas Caina

## Importando os restaurantes

    ```
    MacBook-Air-de-DOUGLAS:~ caina$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/caina/desktop/restaurantes.json
    2015-11-09T23:18:10.704-0200    connected to: localhost
    2015-11-09T23:18:10.705-0200    dropping: be-mean.restaurantes
    2015-11-09T23:18:12.597-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359


    ```