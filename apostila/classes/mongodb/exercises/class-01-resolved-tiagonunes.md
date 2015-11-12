# MongoDB - Aula 01 - Exercício
autor: Tiago Nunes

## Importando os restaurantes

    ```
    @SkyWine:~$ mongoimport --db be-mean-instagram --collection restaurantes --drop --file restaurantes.json
    connected to: 127.0.0.1
    2015-11-09T22:41:55.205-0300 dropping: be-mean-instagram.restaurantes
    2015-11-09T22:41:56.098-0300 check 9 25359
    2015-11-09T22:41:56.272-0300 imported 25359 objects


    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359

    ```
