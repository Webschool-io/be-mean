# MongoDB - Aula 01 - Exercício
autor: Salvador Torres

## Importando os restaurantes

```
mongoimport --db be-mean-instagram --collection restaurantes --drop --file /data/restaurantes.json
2015-11-10T00:01:57.565-0300	connected to: localhost
2015-11-10T00:01:57.566-0300	dropping: be-mean-instagram.restaurantes
2015-11-10T00:02:00.356-0300	imported 25359 documents   
```

## Contando os restaurantes

```
be-mean-instagram> db.restaurantes.find({}).count()
25359    
```