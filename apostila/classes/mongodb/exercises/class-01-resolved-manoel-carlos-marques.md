# MongoDB - Aula 01 - Exercício
autor: MANOEL CARLOS MARQUES BARRETO

## Importando os restaurantes

```
connected to: 127.0.0.1
2015-11-10T23:20:14.991-0300 dropping: be-mean.collection
2015-11-10T23:20:15.726-0300 check 9 25359
2015-11-10T23:20:15.779-0300 imported 25359 objects
```

## Contando os restaurantes

```
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359 
```