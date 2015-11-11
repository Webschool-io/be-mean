# MongoDB - Aula 01 - Exercício
autor: Jorge Rafael

## Importando os restaurantes

```
PS C:\Users\Triforce\Study\be-mean-course\mongodb> mongoimport --db be-mean -c restaurantes --drop .\restaurantes.json
2015-11-09T21:16:52.155-0200    connected to: localhost
2015-11-09T21:16:52.156-0200    dropping: be-mean.restaurantes
2015-11-09T21:16:53.376-0200    imported 25359 documents

```

## Contando os restaurantes

```

> db.restaurantes.find({}).count()
25359

```
