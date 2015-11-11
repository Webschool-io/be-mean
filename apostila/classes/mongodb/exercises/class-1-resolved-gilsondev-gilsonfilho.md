# MongoDB - Aula 01 - Exercício
autor: Gilson Filho

## Importando os restaurantes

```bash
mongoimport --host 127.0.0.1:27017 --db=be-mean --collection=restaurantes --file=restaurantes.json
2015-11-10T19:15:15.598-0200    connected to: 127.0.0.1:27017
2015-11-10T19:15:16.654-0200    imported 25359 documents
```

## Contando os restaurantes

```bash
MongoDB shell version: 3.0.7
connecting to: test
Mongo-Hacker 0.0.8
Server has startup warnings:
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten]
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten]
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-11-10T19:14:22.300-0200 I CONTROL  [initandlisten]

padawan(mongod-3.0.7) test> use be-mean
switched to db be-mean

padawan(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
```
