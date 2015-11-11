# MongoDB - Aula 01 - Exercício
autor: Airton Vancin Junior

## Importando os restaurantes

```
junior@linux:~/mongodb$ mongoimport --db be-mean --collection restaurantes --drop --file ../Downloads/restaurantes.json 
connected to: 127.0.0.1
2015-11-10T00:53:36.222-0200 dropping: be-mean.restaurantes
2015-11-10T00:53:37.077-0200 check 9 25359
2015-11-10T00:53:37.119-0200 imported 25359 objects
```

## Contando os restaurantes

```
junior@linux:~/mongodb$ mongo
MongoDB shell version: 2.6.10
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
>
```