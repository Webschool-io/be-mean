# MongoDB - Aula 01 - Exercício
autor: Filipe Cunha

## Importando os restaurantes

```
filipecunha@Lipao /P/D/e/M/mongodb> mongoimport --db be-mean -c restaurantes --drop ./restaurantes.json 
2015-11-09T22:53:17.025-0200	connected to: localhost
2015-11-09T22:53:17.025-0200	dropping: be-mean.restaurantes
2015-11-09T22:53:17.510-0200	imported 25359 documents

```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359

```