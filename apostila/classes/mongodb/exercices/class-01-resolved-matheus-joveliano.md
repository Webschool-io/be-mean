##MongoDb - Aula 01 - Exercicio
autor: Matheus Joveliano

##importando os restaurantes 

...
PS C:\be-mean\be-mean-instagram-mongodb\exercises> mongoimport --db be-mean --collection restaurantes --drop --file rest
aurantes.json.txt
2015-11-12T21:54:42.755-0200    connected to: localhost
2015-11-12T21:54:42.792-0200    dropping: be-mean.restaurantes
2015-11-12T21:54:44.910-0200    imported 25359 documents
...

## Contando os Resultados

...
PS C:\> mongo
MongoDB shell version: 3.0.7
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
>
...
