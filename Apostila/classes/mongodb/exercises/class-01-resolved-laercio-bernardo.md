# MongoDB - Aula 01 - Exercício
autor: Laércio Bernardo

## Importando os restaurantes

```
    mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
    2016-03-10T10:36:01.673-0300    connected to: 127.0.0.1
    2016-03-10T10:36:01.674-0300    dropping: be-mean.restaurantes
    2016-03-10T10:36:02.633-0300    imported 25359 documents

```

## Contando os restaurantes

```
    db.restaurantes.find().count()
    25359

```