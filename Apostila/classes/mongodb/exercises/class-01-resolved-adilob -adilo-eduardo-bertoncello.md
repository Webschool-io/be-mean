# MongoDB - Aula 01 - Exercício
autor: ADILO EDUARDO BERTONCELLO

## Importando os restaurantes
```
D:\Data\Desktop\adilo\BE-MEAN>mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-05-01T17:05:33.211-0300    connected to: localhost
2016-05-01T17:05:33.232-0300    dropping: be-mean.restaurantes
2016-05-01T17:05:34.822-0300    imported 25359 documents
```

## Contando os restaurantes
```
D:\Data\Desktop\adilo\BE-MEAN>mongo be-mean
MongoDB shell version: 3.2.5
connecting to: be-mean
Server has startup warnings:
2016-05-01T17:02:09.964-0300 I CONTROL  [initandlisten]
2016-05-01T17:02:09.966-0300 I CONTROL  [initandlisten] ** WARNING: Insecure configuration, access control is not enabled and no --bind_ip has been specified.
2016-05-01T17:02:09.970-0300 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted,
2016-05-01T17:02:09.974-0300 I CONTROL  [initandlisten] **          and the server listens on all available network interfaces.
2016-05-01T17:02:09.978-0300 I CONTROL  [initandlisten]
> db.restaurantes.find({}).count()
25359
```