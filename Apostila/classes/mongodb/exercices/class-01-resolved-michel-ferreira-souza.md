# MongoDB - Aula 01 - Exercício 
autor - Michel Ferreira Souza

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
connected to: 127.0.0.1
2015-12-18T21:49:36.295-0200 dropping: be-mean.restaurantes
2015-12-18T21:49:39.004-0200 		Progress: 5443978/11880945	45%
2015-12-18T21:49:39.004-0200 			10100	3366/second
2015-12-18T21:49:40.157-0200 check 9 25359
2015-12-18T21:49:40.219-0200 imported 25359 objects
```

## Contando os restaurantes

```
 db.restaurantes.find({}).count()
25359
```
