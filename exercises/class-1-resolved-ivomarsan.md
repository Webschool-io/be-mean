# MongoDB - Aula 01 - Exercício
autor: Ivomar

## Importando os restaurantes

    ```
    mongoimport -d be-mean -c restaurantes --file ~/Downloads/restaurantes.json 
    2015-11-11T05:49:50.157-0300	connected to: localhost
    2015-11-11T05:49:52.007-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    ASUS-K46CB(mongod-3.0.5) be-mean> db.restaurantes.find({}).count()
    25359

    ```
