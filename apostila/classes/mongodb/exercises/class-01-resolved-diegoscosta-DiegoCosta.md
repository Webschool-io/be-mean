# MongoDB - Aula 01 - Exercício
autor: Diego Costa

## Importando os restaurantes
```
C:\Users\Diego\Desktop>mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T14:07:42.115-0300    connected to: localhost
2015-11-11T14:07:42.118-0300    dropping: be-mean.restaurantes
2015-11-11T14:07:43.671-0300    imported 25359 documents
```

## Contando os restaurantes
```
DIEGO-LAPTOP(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
DIEGO-LAPTOP(mongod-3.0.7) be-mean>
```