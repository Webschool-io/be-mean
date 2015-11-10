# MongoDB - Aula 01 - Exercício
autor: Vinícius Galvão

## Importando os restaurantes

```
➜ mongoimport --db be-mean --collection restaurantes --drop --file ~/dev/restaurantes.json
2015-11-10T03:20:01.277-0300	connected to: localhost
2015-11-10T03:20:01.277-0300	dropping: be-mean.restaurantes
2015-11-10T03:20:02.056-0300	imported 25359 documents
```

## Contando os restaurantes

```   
➜ mongo be-mean
MongoDB shell version: 3.0.6
connecting to: be-mean
> db.restaurantes.find({}).count()
25359
```
