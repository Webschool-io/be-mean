# MongoDB - Aula 01 - Exercício
autor: João Paulo Ribeiro


## Importando os restaurantes

  ```
  mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
  connected to: 127.0.0.1
  Mon Nov  9 23:12:55.790 dropping: be-mean.restaurantes
  Mon Nov  9 23:12:56.531 check 9 25359
  Mon Nov  9 23:12:56.552 imported 25359 objects
  ```

## Contando os restaurantes

  ```
  > db.restaurantes.find({}).count()
  25359
  ```
