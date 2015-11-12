# MongoDB - Aula 01 - Exercício
autor: Franklin Dias

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
connected to: 127.0.0.1
2015-11-11T11:25:45.262-0300 dropping: be-mean.restaurantes
2015-11-11T11:25:46.085-0300 check 9 25359
2015-11-11T11:25:46.322-0300 imported 25359 objects
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```