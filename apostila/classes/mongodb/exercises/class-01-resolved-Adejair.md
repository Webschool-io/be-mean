# MongoDB - Aula01 - Exercício 
autor: Adejair Júnior

## Importando os restaurantes

```
2015-11-10T15:15:01.245-0200    connected to: localhost
2015-11-10T15:15:01.250-0200    dropping: be-mean-instagram.restaurantes
2015-11-10T15:15:04.257-0200    [####################....] be-mean-instagram.restaurantes       9.8 MB/11.4 MB (86.2%)
2015-11-10T15:15:04.862-0200    imported 25359 documents
```

## Contando os restaurantes
```
PS C:\Users\Adejair> mongo be-mean-instagram
2015-11-10T15:41:54.107-0200 I CONTROL  Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.0.7
connecting to: be-mean-instagram
> db.restaurantes.find({}).count()
25359
>
```