# MongoDB - Aula 01 - Exercício
autor: Jorge Roberto

## Importando os restaurantes

```
➜  mongodb  mongoimport --db be-mean -c restaurantes --drop restaurantes.json
2015-11-10T09:21:24.873-0200	connected to: localhost
2015-11-10T09:21:24.879-0200	dropping: be-mean.restaurantes
2015-11-10T09:21:26.881-0200	imported 25359 documents

```

## selecionando o database

```
> use be-mean
```

## Contando os restaurantes

```

> db.restaurantes.find({}).count()
25359

```
