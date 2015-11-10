# MongoDB - Aula 01 - Exercício
autor: Ednilson Amaral


## Importando os restaurantes

```
C:\wamp\www\curso-be-mean\be-mean-instagram-mongodb>mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json  
2015-11-10T08:28:05.640-0200   connected to: localhost  
2015-11-10T08:28:05.643-0200   dropping: be-mean.restaurantes  
2015-11-10T08:28:07.937-0200   imported 25359 documents
```


Contando os restaurantes
-------------------------

```
> use be-mean  
switched to db be-mean  
> db.restaurantes.find({}).count()  
25359
```