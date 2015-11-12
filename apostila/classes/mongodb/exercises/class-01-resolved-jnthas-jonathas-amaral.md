# MongoDB - Aula 01 - Exercicio
autor: Jonathas Amaral

## Importando os restaurantes

```
jonathas@jonathas-desktop:~/mongodb-linux-i686-3.0.7/bin$ ./mongoimport --db be-mean --collection restaurantes --drop --file ~/restaurantes.json 
2015-11-10T22:43:38.561-0200	connected to: localhost
2015-11-10T22:43:38.561-0200	dropping: be-mean.restaurantes
2015-11-10T22:43:40.624-0200	imported 25359 documents
```

## Contando os restaurantes

```
jonathas-desktop(mongod-3.0.7) be-mean> db.restaurantes.find({}).count();
25359
```
