#MongoDB Aula 01 - Exercício
autor: Jefferson Luiz de Lima

##Importando os Restaurantes


Fla&Jef@FLAJEF-PC /c/xampp/htdocs/be-mean-instagram/be-mean-instagram-mongodb (master)
$ mongoimport --db be-mean --collection restaurantes --host=localhost --drop --file restaurantes.json
2015-11-15T16:50:19.262-0200    connected to: localhost
2015-11-15T16:50:19.265-0200    dropping: be-mean.restaurantes
2015-11-15T16:50:21.466-0200    imported 25359 documents


##Contando os restaurantes

Fla&Jef@FLAJEF-PC /c/xampp/htdocs/be-mean-instagram/be-mean-instagram-mongodb (master)
$ mongo
MongoDB shell version: 3.0.7
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
>






