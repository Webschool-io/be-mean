# MongoDB - Aula 01 - Exercício
autor: Thiago de Carvalho

## Importando os restaurantes

```
--db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-02-18T14:35:18.559-0200	connected to: 127.0.0.1
2016-02-18T14:35:18.561-0200	dropping: be-mean.restaurantes
2016-02-18T14:35:20.610-0200	imported 25359 documents
```

## Contando os restaurantes

```
megazord(mongod-3.2.3) be-mean-instagram>  db.restaurantes.find({}).count()
25359
```
