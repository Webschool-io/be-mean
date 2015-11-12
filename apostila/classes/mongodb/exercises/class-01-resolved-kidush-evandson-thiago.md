# MongoDB - Aula 01 - Exercício
autor: Evandson Thiago S. F. Lins

## Importando os restaurantes

    ```
    2015-11-11T14:00:32.489-0300 connected to: 127.0.0.1
    2015-11-11T14:00:32.492-0300    dropping: test.restaurantes
    2015-11-11T14:00:34.062-0300    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    ThiagoMacBook(mongod-3.0.6) test> db.restaurantes.find({}).count()
    25359
    ```


