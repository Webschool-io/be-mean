# MongoDB - Aula 01 - Exercício
autor: David Lee

## Importando os restaurantes

  ```
  2015-11-10T12:40:00.813-0200	connected to: localhost
  2015-11-10T12:40:00.813-0200	dropping: be-mean.restaurantes
  2015-11-10T12:40:01.366-0200	imported 25359 documents
  ```

## Contanto os restaurantes

  ```
  MacBook-Pro-de-David(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
  25359
  ```
