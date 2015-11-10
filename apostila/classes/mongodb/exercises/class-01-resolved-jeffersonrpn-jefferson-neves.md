# MongoDB - Aula 01 - Exercício
Autor: Jefferson Neves

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file ~/Downloads/restaurantes.json
2015-11-09T21:24:29.499-0300	connected to: localhost
2015-11-09T21:24:29.513-0300	dropping: be-mean.restaurantes
2015-11-09T21:24:30.866-0300	imported 25359 documents
```

## Contando os restaurantes

```
jeff@jeffunix:~$ mongo
MongoDB shell version: 3.0.4
connecting to: test
> db
test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
> exit
bye
```
