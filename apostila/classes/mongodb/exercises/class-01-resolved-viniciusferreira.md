
# MongoDB - Aula 01 - Exercício

autor: VINICIUS FERREIRA PIASSAROLLO

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 

2015-11-10T03:21:14.774-0200	connected to: localhost
2015-11-10T03:21:14.775-0200	dropping: be-mean.restaurantes
2015-11-10T03:21:16.070-0200	imported 25359 documents

```

## Contando os restaurantes

```

switched to db be-mean
> db.restaurantes.find({}).count()
25359
>

 ``` 





