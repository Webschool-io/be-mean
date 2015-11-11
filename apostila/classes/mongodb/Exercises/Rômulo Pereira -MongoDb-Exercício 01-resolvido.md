# MongoDB - Aula 01 - Exercício
Aurtor: Rômulo Pereira

## Importando os restaurantes
```
MacBook-Pro-de-Macbook:/ macbook$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T01:25:27.636-0200	connected to: localhost
2015-11-10T01:25:27.637-0200	dropping: be-mean.restaurantes
2015-11-10T01:25:30.599-0200	[##########..............] be-mean.restaurantes5.2 MB/11.3 MB (45.5%)
2015-11-10T01:25:32.053-0200	imported 25359 documents
```
## Contando os restaurantes
```
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

```