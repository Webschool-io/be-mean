# MongoDB - Aula 01 - Exercício

Autor: Angelo Rodrigo de Jesus Servo

## Importando os restaurantes

```
MacBook-Pro-de-Angelo:Be.MEAN arjservo$ mongoimport --host=127.0.0.1 --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T22:01:22.017-0200	connected to: 127.0.0.1
2015-11-09T22:01:22.018-0200	dropping: be-mean.restaurantes
2015-11-09T22:01:25.001-0200	[####################....] be-mean.restaurantes	9.8 MB/11.3 MB (86.3%)
2015-11-09T22:01:25.317-0200	imported 25359 documents
```

## Contando os restaurantes

```
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
```
