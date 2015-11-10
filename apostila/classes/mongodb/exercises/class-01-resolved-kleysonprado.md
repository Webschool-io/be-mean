# MongoDB - Aula 01 - Exercício
autor: Kleyson Prado

## Importando os restaurantes

```
➜  Downloads  mongoimport --db be_mean --collection restaurantes --file restaurantes.json  
2015-11-09T21:06:32.619-0300	connected to: localhost
2015-11-09T21:06:33.637-0300	imported 25359 documents
```

## Contando os restaurantes

```
blacksheep(mongod-3.0.7) be_mean> db.restaurantes.find({}).count()
25359
```


