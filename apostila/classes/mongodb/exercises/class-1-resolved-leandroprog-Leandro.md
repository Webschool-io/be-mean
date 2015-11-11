# MongoDB - Aula 01 - Exercício
autor: Leandro Ferreira

## Importando os restaurantes

```

leandro@leandro-IE-G31TM7:~/Área de Trabalho$ mongoimport --db be-mean --collection restaurantes --drop --file /home/leandro/Área\ de\ Trabalho/restaurantes.json
2015-11-11T01:32:03.864-0200	connected to: localhost
2015-11-11T01:32:03.865-0200	dropping: be-mean.restaurantes
2015-11-11T01:32:06.727-0200	imported 25359 documents

```

## Contando os restaurantes

```
leandro-IE-G31TM7(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```
