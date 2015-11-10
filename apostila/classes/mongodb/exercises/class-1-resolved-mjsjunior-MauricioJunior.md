# MongoDB - Aula 01 - Exercício
autor: 	MAURÍCIO JOSÉ DA SILVA JÚNIOR


##Importando os restaurantes

```
$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T21:01:22.107-0200	connected to: localhost
2015-11-09T21:01:22.108-0200	dropping: be-mean.restaurantes
2015-11-09T21:01:23.312-0200	imported 25359 documents
```

## Contando os restaurantes

```
$ mongo be-mean

MongoDB shell version: 3.0.7
connecting to: be-mean
Server has startup warnings: 
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] 
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] 
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-11-09T20:47:33.012-0200 I CONTROL  [initandlisten] 
> db.restaurantes.find({}).count()
25359
> 

```

