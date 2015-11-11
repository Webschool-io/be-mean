# MongoDB - Aula 01 - Exerc�cio
autor: Leonardo Cassuriaga Lima

## Importando os restaurantes

mongoimport --db be-mean --collection  restaurantes --drop --file G:\Node\restaurantes.json
2015-11-09T23:41:46.651-0200    connected to: localhost
2015-11-09T23:41:46.660-0200    dropping: be-mean.restaurantes
2015-11-09T23:41:48.162-0200    imported 25359 documents

## Contando os restaurantes

db.restaurantes.find({}).count()
25359