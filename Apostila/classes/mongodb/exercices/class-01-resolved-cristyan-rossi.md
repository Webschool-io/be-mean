#MongoDB - Aula 01 - Exercício
autor: Cristyan Rossi

## Importado os restaurantes

...
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-01-27T21:07:06.738-0200    connected to: 127.0.0.1
2016-01-27T21:07:06.741-0200    dropping: be-mean.restaurantes
2016-01-27T21:07:08.474-0200    imported 25359 documents
...

## Contando os restaurantes 


...
db.restaurantes.find({}).count()
25359
...
