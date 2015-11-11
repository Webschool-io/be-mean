# MongoDB - Aula 01 - Exercício
autor: Islanilton Rodrigues

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
connected to: 127.0.0.1
2015-11-10T23:13:32.777-0300 dropping: be-mean.restaurantes
2015-11-10T23:13:33.449-0300 check 9 25359
2015-11-10T23:13:33.914-0300 imported 25359 objects
```

## Contando os restaurantes

```
mongo
use be-mean
ubuntu-dev(mongod-2.6.3) be-mean> db.restaurantes.find({}).count()
25359
```