# MongoDB - Aula 01 - Exercício
autor: Rodrigo Alviani

## Importando os restaurantes

  ```
  mongoimport --db be-mean --collection restaurantes --drop --file restaurantes/restaurantes.json
  2015-11-11T14:54:50.598-0200	connected to: localhost
  2015-11-11T14:54:50.598-0200	dropping: be-mean.restaurantes
  2015-11-11T14:54:53.572-0200	[####################....] be-mean.restaurantes	9.8 MB/11.3 MB (86.3%)
  2015-11-11T14:54:53.816-0200	imported 25359 documents
  ```

## Contando os restaurantes

  ```
  WMD00096(mongod-3.0.7) be-mean> db.restaurantes.count();
  25359
  ```
