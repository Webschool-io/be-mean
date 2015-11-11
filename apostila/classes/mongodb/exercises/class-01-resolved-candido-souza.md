# MongoDB - Aula 01 - Exercício
autor: Candido Souza

## Importando os restaurantes

```

mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file arquivos/restaurantes.json
2015-11-10T20:28:24.474-0200	connected to: 127.0.0.1
2015-11-10T20:28:24.474-0200	dropping: be-mean.restaurantes
2015-11-10T20:28:25.762-0200	imported 25359 documents

```

## Contando os restaurantes

```
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

```