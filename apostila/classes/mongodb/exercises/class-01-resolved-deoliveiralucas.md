# MongoDB - Aula 01 - Exercício
autor: Lucas de Oliveira

## Importando os restaurantes

```
lucas@lucas-Vostro-14-5480:~/Downloads$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
Tue Nov 10 20:43:27.706 dropping: be-mean.restaurantes
Tue Nov 10 20:43:28.854 check 9 25359
Tue Nov 10 20:43:28.881 imported 25359 objects
```

## Contando os restaurantes

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean> db.restaurantes.find({}).count()
25359
```
