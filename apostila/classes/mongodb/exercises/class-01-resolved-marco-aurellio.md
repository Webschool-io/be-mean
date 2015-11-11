#MongoDB -Aula1- Exercícios
autor: marco aurellio

## Importando Restaurantes

...
C:\Users\Marco\be-mean\be-mean-modulo-mongodb>mongoimport --db be-mean --collect
ion restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-11T10:37:49.350-0200    connected to: 127.0.0.1
2015-11-11T10:37:49.358-0200    dropping: be-mean.restaurantes
2015-11-11T10:37:52.346-0200    [###############.........] be-mean.restaurantes
7.4 MB/11.4 MB (65.1%)
2015-11-11T10:37:54.397-0200    imported 25359 documents

...

##Contando os Restaurantes

...
> db.restaurantes.find({}).count()
25359
>
...

