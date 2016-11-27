# MongoDB - Aula 01 - Exercício
autor: Jota Maximo

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    connected to: 127.0.0.1
    Sat Jul 30 08:35:37.731 dropping: be-mean.restaurantes
    Sat Jul 30 08:35:38.172 check 9 25359
    Sat Jul 30 08:35:38.227 imported 25359 objects


    ```

## Contando os restaurantes

    ```
    05L0V3(mongod-2.4.9) be-mean> db.restaurantes.find({}).count()
    X

    ```