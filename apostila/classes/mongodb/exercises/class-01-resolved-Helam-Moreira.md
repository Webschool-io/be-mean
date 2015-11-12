# MongoDB - Aula 01 - Exercício
autor: Helam Moreira

## Importando os restaurantes

```
$ mongoimport --db be-mean-instagram --collection restaurantes --drop --file /c/DEV/web/BeMean/MongoDB/restaurantes.json
2015-11-10T10:45:53.638-0200    connected to: localhost
2015-11-10T10:45:53.643-0200    dropping: be-mean-instagram.restaurantes
2015-11-10T10:45:56.645-0200    [############............] be-mean-instagram.restaurantes       5.7 MB/11.4 MB (50.4%)
2015-11-10T10:45:59.041-0200    imported 25359 documents

```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359

```