# MongoDB - Aula 01 - Exercício
autor: GIUSEPPE ANTONELLI

## Importando os restaurantes

    ```
    antonellisantos@antonellisantos-GT60-0N-GT60-0NSR:~/Área de Trabalho/be-mean-instagram/aulas/mongodb$ mongoimport --db be-mean-instagram-mongodb --collection restaurantes --drop --file restaurantes.json
    2015-11-10T02:50:56.078-0200    connected to: localhost
    2015-11-10T02:50:56.079-0200    dropping: be-mean-instagram-mongodb.restaurantes
    2015-11-10T02:50:57.315-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-instagram-mongodb> db.restaurantes.find({}).count()
    25359
    ```