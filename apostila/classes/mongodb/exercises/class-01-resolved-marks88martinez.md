# MongoDB - Aula 01 - Exercício
autor: Marcos Martinez

## Importando os restaurantes
mark@mark-HP-Pavilion-dv6-Notebook-PC:~$ mongoimport --db be-mean --collection restaurante --drop --file '/home/mark/Escritorio/be_mean/aula_1/restaurantes.json'  
2015-11-10T08:20:58.908-0300	connected to: localhost
2015-11-10T08:20:58.917-0300	dropping: be-mean.restaurante
2015-11-10T08:21:01.211-0300	imported 25359 documents

## Contando os restaurantes

> db.restaurante.find({}).count()
25359



