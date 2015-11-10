# MongoDB - Aula 01 - Exercício
autor: Felipe Mendes Andrada

## Importando os restaurantes

```
felipeandrada@felipea:~/Projects/bemean$ mongoimport --db bemean --collection restaurantes --drop --file restaurantes.json --host 127.0.0.1
2015-11-10T01:59:46.093-0200    connected to: 127.0.0.1
2015-11-10T01:59:46.094-0200    dropping: bemean.restaurantes
2015-11-10T01:59:47.367-0200    imported 25359 documents

```

## Contando os restaurantes

```
felipea(mongod-3.0.6) test> use bemean
switched to db bemean
felipea(mongod-3.0.6) bemean> db.restaurantes.find({}).count()
25359
```