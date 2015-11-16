# MongoDB - Aula 01 - Exercício
autor: HIGOR

##Importando os restaurantes

...
vagrant@vagrant-ubuntu-trusty-64:/$ mongoimport --db be-mean --collection restaurantes --drop --file var/restaurantes.json 
2015-11-16T18:10:06.657+0000    connected to: localhost
2015-11-16T18:10:06.658+0000    dropping: be-mean.restaurantes
2015-11-16T18:10:08.249+0000    imported 25359 documents

...

## Contando os restaurantes

...
> db.restaurantes.find({}).count()
25359

