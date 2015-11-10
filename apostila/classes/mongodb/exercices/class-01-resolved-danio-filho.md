# MongoDB - Aula 01 - Exercício
autor: Dânio Filho

## Importando os restaurantes

    ```
    MacBook-Pro-de-Danio:~ daniofilho$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/daniofilho/Dropbox/Estudo/Be\ MEAN/01\ -\ MongoDB/aula01\ -\ restaurantes.json
    2015-11-10T08:13:47.177-0200	connected to: localhost
    2015-11-10T08:13:47.177-0200	dropping: be-mean.restaurantes
    2015-11-10T08:13:50.094-0200	[##############..........] be-mean.restaurantes	6.7 MB/11.3 MB (59.2%)
    2015-11-10T08:13:50.803-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359
