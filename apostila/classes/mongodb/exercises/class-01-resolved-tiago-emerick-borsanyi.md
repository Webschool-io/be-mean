#MongoDB - Aula 01 - Exercicio
autor: Tiago Emerick Borsanyi

##Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T23:09:51.056-0200	connected to: localhost
2015-11-09T23:09:51.057-0200	dropping: be-mean.restaurantes
2015-11-09T23:09:51.670-0200	imported 25359 documents
```

##Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
