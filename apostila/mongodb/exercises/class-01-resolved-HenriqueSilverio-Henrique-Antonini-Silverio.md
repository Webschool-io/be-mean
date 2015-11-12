# MongoDB - Aula 01 - Exercício
Autor: Henrique Antonini Silvério

## Importando os restaurantes

```bash
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T23:16:35.553-0200  connected to: localhost
2015-11-11T23:16:35.553-0200  dropping: be-mean.restaurantes
2015-11-11T23:16:38.074-0200  [###################.....] be-mean.restaurantes 9.2 MB/11.3 MB (81.3%)
2015-11-11T23:16:38.549-0200  imported 25359 documents
```

## Contando os restaurantes

```bash
db.restaurantes.find({}).count()
25359
```
