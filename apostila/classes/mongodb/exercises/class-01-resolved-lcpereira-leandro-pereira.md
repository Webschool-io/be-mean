# MongoDB - Aula 01 - Exercício
autor: Leandro Carlos Pereira

## Importando os restaurantes

```
[21:37:55] leandro@note:~/Desktop/be-mean$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
2015-11-09T21:38:07.622-0200 dropping: be-mean.restaurantes
2015-11-09T21:38:08.099-0200 check 9 25359
2015-11-09T21:38:08.122-0200 imported 25359 objects
```

## Contando os restaurantes

```
note(mongod-2.6.11) be-mean> db.restaurantes.find({}).count()
25359
```
