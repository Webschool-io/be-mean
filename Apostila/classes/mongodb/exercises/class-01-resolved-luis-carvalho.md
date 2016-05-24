# MongoDB - Aula 01 - Exercício
autor: Luis Aparecido de Carvalho Júnior

## Importando os restaurantes

```
luis-master@luismaster-HP-14-Notebook-PC:~/projects/be-mean-instagram/be-mean-instagram-mongodb$ mongoimport --db be-mean-instagram --collection restaurantes --drop --file restaurantes.json
2016-05-24T00:11:57.537-0300    connected to: localhost
2016-05-24T00:11:57.537-0300    dropping: be-mean-instagram.restaurantes
2016-05-24T00:11:59.044-0300    imported 25359 documents


```

## Contando os restaurantes

```
luismaster-HP-14-Notebook-PC(mongod-3.2.6) be-mean-instagram> db.restaurantes.find({}).count()
25359

