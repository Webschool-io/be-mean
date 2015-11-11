# MongoDB - Aula 01 - Exercício
autor: PABLO BOZZI FLORES OLIVEIRA

## Importando os restaurantes
```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file 	 restaurantes.json
2015-11-10T21:35:30.541-0200	connected to: 127.0.0.1
2015-11-10T21:35:30.544-0200	dropping: be-mean.restaurantes
2015-11-10T21:35:31.538-0200	imported 25359 documents
```

## Contando os restaurantes
```
db.restaurantes.find({}).count()
25359
```
