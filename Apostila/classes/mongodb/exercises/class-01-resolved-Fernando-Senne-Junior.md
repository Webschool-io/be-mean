# MongoDB - Aula 01 - Exercício
autor: Fernando Senne Junior

## Importando os restaurantes

    ```

mongoimport --db be-mean --collection restaurantes --drop --file C:\restaurantes.json
2017-02-27T10:45:57.294-0300    connected to: localhost
2017-02-27T10:45:57.363-0300    dropping: be-mean.restaurantes
2017-02-27T10:46:00.035-0300    imported 25359 documents


## Contando os restaurantes

    ```
   DESKTOP-K2FFG0R(mongod-3.4.2) be-mean> db.restaurantes.find({}).count()
25359

    ```