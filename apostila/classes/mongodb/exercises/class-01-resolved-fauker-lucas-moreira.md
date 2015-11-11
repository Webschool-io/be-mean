# Mongo DB - Aula 01 - Exercício
Autor: Lucas Moreira

## Importando os restaurantes

  ```
  mongoimport --db be-mean --collection restaurantes --drop --file
  restaurantes.json
  2015-11-10T00:21:01.357-0200connected to: localhost
  2015-11-10T00:21:01.358-0200dropping: be-mean.restaurantes
  2015-11-110T00:21:02.376-0200imported 25359 documents
  ```

## Contando os restaurantes 

  ```
  mongo be-mean
  MongoDB shell version: 3.0.7
  connecting to: be-mean
  > db.restaurantes.find({}).count()
  25359
  ```

