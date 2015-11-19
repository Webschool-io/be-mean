## MongoDb - Aula 01 - Exercício

autor: Janderson Cassan

##Importando os restaurantes

C:\Program Files\MongoDB\Server\3.0\bin>mongoimport --db be-mean --collection re
staurants --drop --file c:\Users\Jande\Desktop\Dagora-bemean\exercises\01\restau
rantes.json
2015-11-18T23:00:30.463-0200    connected to: localhost
2015-11-18T23:00:30.469-0200    dropping: be-mean.restaurants
2015-11-18T23:00:33.420-0200    [####################....] be-mean.restaurants
9.8 MB/11.4 MB (86.2%)
2015-11-18T23:00:33.969-0200    imported 25359 documents

##Contando os restaurantes

> use be-mean
switched to db be-mean
> db.restaurants.find({}).count()
25359
>
