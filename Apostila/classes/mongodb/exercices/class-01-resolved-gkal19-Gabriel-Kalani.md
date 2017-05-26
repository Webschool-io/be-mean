#MONGODB - AULA 01 - Exercício
Author: Gabriel Kalani

##Importação dos restaurantes

```
gkal19:~/workspace $ mongoimport --db db --collection restaurantes --drop --file restaurantes.json
2015-12-22T19:54:03.216-0200    connected to: localhost
2015-11-10T23:26:14.541-0200	dropping: db.restaurantes
2015-11-10T23:26:17.538-0200	[#####################...] be-mean.restaurantes 10.3 MB/11.3 MB (91.3%)
2015-11-10T23:26:17.888-0200	imported 25359 documents
```

##Contagem de Restaurantes

```
gkal19:~/workspace $ mongo db
MongoDB shell version: 2.6.11
connecting to: db
Mongo-Hacker 0.0.9
gkal19-aula-bemean-2468380(mongod-2.6.11) db> db.restaurantes.find({}).count()
25359
```
