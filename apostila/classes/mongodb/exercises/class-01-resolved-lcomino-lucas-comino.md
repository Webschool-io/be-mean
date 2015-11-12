# MongoDB - Aula 01 - Exercício
autor: Lucas Comino

## Importando os restaurantes

```
lcomino@Zoidepomba:~/be-mean-mongo-db# mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
2015-11-11T19:45:08.687-0500 dropping: be-mean.restaurantes
2015-11-11T19:45:11.005-0500            Progress: 7338864/11880944      61%
2015-11-11T19:45:11.006-0500                    13600   4533/second
2015-11-11T19:45:12.398-0500 check 9 25359
2015-11-11T19:45:12.440-0500 imported 25359 objects
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count();
25359
```
