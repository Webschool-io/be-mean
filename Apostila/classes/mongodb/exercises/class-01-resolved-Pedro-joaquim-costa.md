 # MongoDB - Aula 01 - Exercício
autor: Pedro joaquim da costa

## Importando os restaurantes

    ```
     $ mongoimport --db be-mean --collection restaurantes --file     restaurantes.json
     connected to: 127.0.0.1
     2017-02-07T21:33:05.720-0200 check 9 25359
     2017-02-07T21:33:05.732-0200 imported 25359 objects

    ```

## Contando os restaurantes

    ```
    unus-HP-Notebook(mongod-2.6.11) be-mean> db.restaurantes.find({}).count()
    25359


    ```
 
 
 


