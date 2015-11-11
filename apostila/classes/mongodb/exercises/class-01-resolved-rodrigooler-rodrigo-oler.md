# MongoDB - Aula 01 - Exercício
autor: Rodrigo Oler
## Importando os restaurantes
```
Rodrigo Oler@DESKTOP-FCHN7SN MINGW64 ~/mongodb/exercises/mongodb-aula-01-exercicio (master)
$ mongoimport --db be-mean -c restaurantes --drop restaurantes.json
2015-11-10T00:23:48.014-0200    connected to: localhost
2015-11-10T00:23:48.017-0200    dropping: be-mean.restaurantes
2015-11-10T00:23:49.250-0200    imported 25359 documents
```
## Contando os restaurantes
```
Rodrigo Oler@DESKTOP-FCHN7SN MINGW64 ~/mongodb/exercises/mongodb-aula-01-exercicio (master)
$ mongo
MongoDB shell version: 3.0.6
connecting to: test
> db.restaurantes.find({}).count()
25359
```
