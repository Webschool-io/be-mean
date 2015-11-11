# MongoDB - Aula 01 - Exercício
autor: Marcelo Santana Martins

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file /home/marcelo/Downloads/restaurantes.json
     2015-11-11T09:46:22.045-0200	connected to: localhost
     2015-11-11T09:46:22.046-0200	dropping: be-mean.restaurantes
     2015-11-11T09:46:23.726-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    marcelo-VirtualBox(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```

