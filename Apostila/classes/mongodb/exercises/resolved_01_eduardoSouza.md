# Mongo DB - Aula 01
# Importando restaurantes
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
connected to: 127.0.0.1
dropping: be-mean.restaurantes
imported 25359 objects

#Contanto restaurantes
vagrant@precise64:/var/www/teste$ clear
vagrant@precise64:/var/www/teste$ mongo
MongoDB shell version: 2.0.4
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find().count()
25359

