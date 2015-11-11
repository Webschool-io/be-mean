# MongoDB - Aula 01 - Exercício

autor: Carlos Machel

## Importando os restaurantes

```
carlos@elementaryos:~$ mongoimport --db be-mean --collection restaurantes --drop --file /home/carlos/Projetos/be-mean-instagram-mongodb/exercises/restaurantes.json
2015-11-10T23:02:00.532-0200	connected to: localhost
2015-11-10T23:02:00.533-0200	dropping: be-mean.restaurantes
2015-11-10T23:02:02.229-0200	imported 25359 documents

```

## Contando os restaurantes

```
elementaryos(mongod-3.0.7) test> use be-mean
switched to db be-mean
elementaryos(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```
