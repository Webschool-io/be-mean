# MongoDB - Aula 01 - Exercício
autor: Jean Martins Rito
https://github.com/rito

## Importando os restaurantes

Mockingjay:be-mean-instagram-mongodb jeanrito$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T13:07:34.881-0200	connected to: localhost
2015-11-11T13:07:34.881-0200	dropping: be-mean.restaurantes
2015-11-11T13:07:37.823-0200	[####################....] be-mean.restaurantes	9.8 MB/11.3 MB (86.3%)
2015-11-11T13:07:38.731-0200	imported 25359 documents
Mockingjay:be-mean-instagram-mongodb jeanrito$


# Contando os restaurantes

  Mockingjay(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
  25359
  Mockingjay(mongod-3.0.7) be-mean>
