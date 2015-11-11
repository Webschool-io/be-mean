# MongoDB - Aula 01 - Exercício
autor: Dênis Nunes

## Importando os restaurantes

```
mongoimport -d be-mean -c restaurantes restaurantes.json 
2015-11-10T07:40:38.130-0200	connected to: localhost
2015-11-10T07:40:39.446-0200	imported 25359 documents

```

## Contando os restaurantes

```
 db.restaurantes.find({}).count()
25359

```