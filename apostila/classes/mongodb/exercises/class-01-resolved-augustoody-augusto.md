# MongoDB - Aula 01 - Exercício
autor: Augusto Ody

## Importando os restaurantes

    ```
    vagrant@vagrant-ubuntu-trusty-64:/vagrant$ mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
    2015-11-10T12:56:44.942+0000	connected to: localhost
    2015-11-10T12:56:44.943+0000	dropping: be-mean.restaurantes
    2015-11-10T12:56:47.345+0000	imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    ```
