# MongoDB -Aula 01 - Exercicio
autor: Dennis Borba

## Importando os restaurantes

dennis@Ubuntu-pc:~/projetos/be-mean/MongoDB/aula1$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T22:20:24.652-0200	connected to: localhost
2015-11-09T22:20:24.654-0200	dropping: be-mean.restaurantes
2015-11-09T22:20:25.916-0200	imported 25359 documents

##Contando os restaurantes

Ubuntu-pc(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
