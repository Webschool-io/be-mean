# MongoDB - Aula 01 - Exercício
autor: José Neto

## Importando os restaurantes
```
vagrant@vagrant-ubuntu-trusty-64:/vagrant$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-13T02:36:04.233+0000	connected to: localhost
2015-11-13T02:36:04.234+0000	dropping: be-mean.restaurantes
2015-11-13T02:36:07.230+0000	[#####################...] be-mean.restaurantes	10.2 MB/11.3 MB (90.3%)
2015-11-13T02:36:07.593+0000	imported 25359 documents
```

## Contando os restaurantes
```
vagrant@vagrant-ubuntu-trusty-64:/vagrant$ mongo
MongoDB shell version: 3.0.7
connecting to: test
Mongo-Hacker 0.0.8
vagrant-ubuntu-trusty-64(mongod-3.0.7) test> use be-mean
switched to db be-mean
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean> 
```