# MongoDB - Aula 01 - Exercício
autor: Diego Pereira Grassato

## Importando os restaurantes

    ```

    mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
    connected to: 127.0.0.1
    Mon Nov  9 23:46:38.679 dropping: be-mean.restaurantes
    Mon Nov  9 23:46:39.752 check 9 25359
    Mon Nov  9 23:46:40.097 imported 25359 objects


    ```

## Contando os restaurantes

    ```

    mongo                                                                  
    MongoDB shell version: 2.4.9
    connecting to: test
    Mongo-Hacker 0.0.8
    a12c1841e174(mongod-2.4.9) test> use be-mean
    switched to db be-mean
    a12c1841e174(mongod-2.4.9) be-mean> db.restaurantes.find({}).count()
    25359


    ```
