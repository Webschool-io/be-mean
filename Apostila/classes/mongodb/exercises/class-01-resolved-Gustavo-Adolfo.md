```md
# MongoDB - Aula 01 - Exercício
autor: Gustavo Adolfo

## Importando os restaurantes


"C:\Program Files\MongoDB\Server\3.2\bin\mongoimport.exe" --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-02-17T15:06:09.942-0200    connected to: 127.0.0.1
2016-02-17T15:06:09.977-0200    dropping: be-mean.restaurantes
2016-02-17T15:06:12.133-0200    imported 25359 documents


## Contando os restaurantes

> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

