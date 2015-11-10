# MongoDB - Aula 01 - Exercício
autor: Ramon Lopes da Graça

## Importando os restaurantes

    ```
    ramon@ramon-S460-L-BG26P1:~$ mongoimport --db be-mean --collection restaurantes --drop --file /home/ramon/Documents/restaurantes.json
    2015-11-09T23:26:58.731-0200	connected to: localhost
    2015-11-09T23:26:58.746-0200	dropping: be-mean.restaurantes
    2015-11-09T23:27:00.771-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
    ramon-S460-L-BG26P1(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359


    ```
