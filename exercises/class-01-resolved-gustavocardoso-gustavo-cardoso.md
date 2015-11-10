# MongoDB - Aula 01 - Exercício
autor: Gustavo Cardoso

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --file ~/Sites/mean/be-mean/be-mean-instagram-mongodb/restaurantes.json
2015-11-10T18:43:04.867-0200  connected to: localhost
2015-11-10T18:43:07.841-0200  [####################....] be-mean.restaurantes 9.8 MB/11.3 MB (86.3%)
2015-11-10T18:43:08.352-0200  imported 25359 documents
```

## Contando os restaurantes

```
grindhouse(mongod-3.0.4) be-mean> db.restaurantes.find({}).count();
25359
```