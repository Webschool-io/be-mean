# MongoDB - Aula 01 - Exercício
Autor: Jefferson Andrade Agostinho

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurants --drop --file restaurants.json
2015-11-10T00:49:22.473-0200	connected to: localhost
2015-11-10T00:49:22.473-0200	dropping: be-mean.restaurants
2015-11-10T00:49:23.530-0200	imported 25359 documents
```

## Contando os restaurantes

```
use be-mean
switched to db be-mean
db.restaurants.find({}).count()
25359
```
