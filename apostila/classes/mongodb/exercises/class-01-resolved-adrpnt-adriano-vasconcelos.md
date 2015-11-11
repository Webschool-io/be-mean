# MongoDB - Aula 01 - Exercício
autor: ADRIANO VASCONCELOS

## Importando os restaurantes

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-10T18:17:10.534+0000    connected to: localhost
    2015-11-10T18:17:12.975+0000    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```