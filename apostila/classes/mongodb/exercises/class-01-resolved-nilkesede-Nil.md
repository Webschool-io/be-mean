# MongoDB - Aula 01 - Exercício
autor: Nil Késede

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --file ~/Desktop/restaurantes.json
2015-11-10T14:18:36.728-0300    connected to: localhost
2015-11-10T14:18:38.142-0300    imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
