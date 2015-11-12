# MongoDB - Aula 01 - Exercício
Autor: Robson Batista

## Importando os restaurantes
  ```
    mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-11T08:27:46.616-0200    connected to: localhost
    2015-11-11T08:27:46.652-0200    dropping: be-mean.restaurantes
    2015-11-11T08:27:49.305-0200    imported 25359 documents
  ```

## Contando os restaurantes
  ```
    > db.restaurantes.find({}).count()
    25359
  ```