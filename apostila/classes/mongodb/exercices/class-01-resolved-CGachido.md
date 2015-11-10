# MongoDB - Aula 01 - Exercício
autor: Cassius Sanches Gachido de Souza

## Importando os restaurantes
```
2015-11-09T23:52:01.891+0000    connected to: localhost
2015-11-09T23:52:01.892+0000    dropping: be-mean.restaurantes
2015-11-09T23:52:04.892+0000    [####################....] be-mean.restaurantes 9.8 MB/11.4 MB (86.2%)
2015-11-09T23:52:05.515+0000    imported 25359 documents 
```

## Contando os restaurantes
```
> db.restaurantes.find({}).count()
25359
```
