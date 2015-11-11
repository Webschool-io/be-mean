# MongoDB - Aula 01 - Exercício
autor: Hugo Andrade

## Importando os restaurantes

  mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
  2015-11-11T01:07:54.943-0200    connected to: localhost
  2015-11-11T01:07:54.963-0200    dropping: be-mean.restaurantes
  2015-11-11T01:07:58.235-0200    [##########..............] be-mean.restaurantes 5.2 MB/11.3 MB (45.5%)
  2015-11-11T01:07:59.956-0200    imported 25359 documents

## Contando os restaurantes

  HugoAndrade(mongod-3.0.2) be-mean> db.restaurantes.find({}).count()
  25359