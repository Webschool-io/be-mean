# MongoDB - Aula 01 - Exercício
autor: João Siqueira

## Importando os restaurantes

  ```
  mongoimport --db be-mean --collection restaurantes --drop --file restaurantes/restaurantes.json
  2015-11-11T18:54:50.598-0200	connected to: localhost
  2015-11-11T18:54:50.598-0200	dropping: be-mean.restaurantes
  2015-11-11T18:54:53.572-0200	[####################....] be-mean.restaurantes	8.8 MB/11.3 MB (83.3%)
  2015-11-11T18:54:53.816-0200	imported 25359 documents
  ```

## Contando os restaurantes

  ```
  be-mean> db.restaurantes.find({})count();
  25359
  ```
