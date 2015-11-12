# MongoDB - Aula 01 - Exercício
autor: Gabriel Alves Scavassa

## Importando os restaurantes
gabriel@SKVASSA /c/mongodb/bin
$ mongoimport --db be-mean --collection restaurantes --drop --file C:\\Users\\gabriel\\Documents\\Cursos\\Be-Mean-Insta
gram\\MongoDB\\Exercicios\\arquivo_importacao_aula_01.json
2015-11-10T16:04:38.818-0200    connected to: localhost
2015-11-10T16:04:38.819-0200    dropping: be-mean.restaurantes
2015-11-10T16:04:40.488-0200    imported 25359 documents


## Contando os restaurantes
gabriel@SKVASSA /c/mongodb/bin
> db.restaurantes.find({}).count()
25359



