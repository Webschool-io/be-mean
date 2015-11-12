# MongoDB - Aula 01 - Exercício
autor: OLAVO CARVALHO

## Importando os restaurantes

    ```
    ➜  be-mean  mongoimport --db test --collection restaurantes --drop --file _assets/01/restaurantes.json
    2015-11-10T02:13:02.688-0200    connected to: localhost
    2015-11-10T02:13:02.690-0200    dropping: test.restaurantes
    2015-11-10T02:13:04.345-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359
    > 

    ```