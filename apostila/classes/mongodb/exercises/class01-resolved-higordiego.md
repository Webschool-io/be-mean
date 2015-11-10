# MongoDB - Aula 01 - Exercício
autor: Higor Diego Alves Ferreira Pinheiro

## Importando os restaurantes

    ```
   root@m0nk3y:~# mongoimport -d be-mean -c restaurantes --file restaurantes.json 
    2015-11-10T12:40:45.182-0200    connected to: localhost
    2015-11-10T12:40:46.826-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    m0nk3y(mongod-3.0.7) test> use be-mean;

    m0nk3y(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```
