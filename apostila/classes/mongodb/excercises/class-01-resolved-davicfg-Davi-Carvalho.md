# MongoDB - Aula 01 - Exercício

autor: Davi Carvalho

## Importando os restaurantes

```
davi@davi-Lenovo-G460:~/Documentos/BeMEAN/be-mean-modulo-mongodb/aula-01-exercicio$ mongoimport --db be-mean --collection restaurantes --drop --file ~/Documentos/BeMEAN/be-mean-modulo-mongodb/aula-01-exercicio/restaurantes.json
2015-11-10T18:30:53.916-0300	connected to: localhost
2015-11-10T18:30:53.918-0300	dropping: be-mean.restaurantes
2015-11-10T18:30:55.439-0300	imported 25359 documents

```
## Contando os restaurantes

```

> db.restaurantes.find({}).count()
25359

```
