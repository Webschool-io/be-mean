# MongoDB - Aula 01 - Exercício
autor: Janderson Martins

## Importando os restaurantes

```
janderson@janderson-K46CA:~/Documentos$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-09T21:41:41.445-0200    connected to: localhost
2015-11-09T21:41:41.446-0200    dropping: be-mean.restaurantes
2015-11-09T21:41:42.953-0200    imported 25359 documents

```

## Contando os restaurantes

```
> db.restaurantes.find({}).count();
25359

```