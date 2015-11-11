# MongoDB - Aula 01 - Exercício
autor: Erackson Brito

## Importando os restaurantes

    ```
     mongoimport --db be-mean --collection restaurantes --drop --file /Development/bemean/mongodb/restaurantes.json
     2015-11-11T00:20:22.149-0300	connected to: localhost
     2015-11-11T00:20:22.149-0300	dropping: be-mean.restaurantes
     2015-11-11T00:20:25.095-0300	[###################.....] be-mean.restaurantes	9.0 MB/11.3 MB (79.5%)
     2015-11-11T00:20:25.637-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    erackson(mongod-3.0.3) be-mean> db.restaurantes.find({}).count()
    25359

    ```
