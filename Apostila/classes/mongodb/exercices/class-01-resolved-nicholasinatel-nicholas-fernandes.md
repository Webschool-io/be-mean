Nicholass-MacBook-Pro:Import_json_restaurante Nicholas$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-12-16T10:42:16.644-0200	connected to: localhost
2015-12-16T10:42:16.645-0200	dropping: be-mean.restaurantes
2015-12-16T10:42:19.072-0200	imported 25359 documents


Nicholass-MacBook-Pro(mongod-3.2.0) test> use be-mean
switched to db be-mean
Nicholass-MacBook-Pro(mongod-3.2.0) be-mean> db.restaurantes.find({}).count()
25359
