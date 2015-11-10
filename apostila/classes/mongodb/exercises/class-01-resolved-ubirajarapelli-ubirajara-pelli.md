# MongoDB - Aula 01 - Exercício
Autor: Ubirajara Pelli

## Importando os restaurantes

```
Ubirajaras-Mac-mini:~ ubirajarapelli$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/ubirajarapelli/Desktop/restaurantes.json
2015-11-10T10:37:49.303-0200	connected to: localhost
2015-11-10T10:37:49.303-0200	dropping: be-mean.restaurantes
2015-11-10T10:37:51.756-0200	[#######################.] be-mean.restaurantes	11.1 MB/11.3 MB (97.8%)
2015-11-10T10:37:51.890-0200	imported 25359 documents

```

## Contando os restaurantes

```
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

```