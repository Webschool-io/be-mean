# MongoDB - Aula 01 - Exercício
autor: Jean Nascimento

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-10T14:12:59.372-0200    connected to: 127.0.0.1
2015-11-10T14:12:59.372-0200    dropping: be-mean.restaurantes
2015-11-10T14:13:02.373-0200    [##################......] be-mean.restaurantes 8.5 MB/11.3 MB (75.0%)
2015-11-10T14:13:03.047-0200    imported 25359 documents
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
