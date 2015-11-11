#MONGODB - AULA 01 - Exercício
Author: Adriano Biolchi

##Importação dos restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-10T23:26:14.540-0200	connected to: localhost
2015-11-10T23:26:14.541-0200	dropping: be-mean.restaurantes
2015-11-10T23:26:17.538-0200	[#####################...] be-mean.restaurantes10.3 MB/11.3 MB (91.3%)
2015-11-10T23:26:17.888-0200	imported 25359 documents
```

##Contagem de Restaurantes

```
mongo be-mean
MongoDB shell version: 3.0.7
connecting to: be-mean
db.restaurantes.find({}).count()
25359
```
