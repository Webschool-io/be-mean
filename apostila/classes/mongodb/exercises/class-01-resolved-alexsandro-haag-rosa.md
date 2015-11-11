
# MongoDB - Aula 01 - Exercício
autor: ALEXSANDRO HAAG DA ROSA

## Importando os restaurantes


  alexsandro@katsumoto:~$ mongoimport -d be-mean -c restaurantes --file /home/alexsandro/Documentos/be-mean-instagram/apostila/mongodb/data/restaurantes.json 
2015-11-09T23:46:06.807-0200    connected to: localhost
2015-11-09T23:46:09.404-0200    imported 25359 documents



## Contando os restaurantes


> db
test
> use be-mean
switched to db be-mean
> show collections
restaurantes
system.indexes
> db.restaurantes.find().count()
25359

