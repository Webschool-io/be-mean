#adicionando restaurantes.json

mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --file restaurantes.json
2016-01-04T14:32:10.668+0000	connected to: 127.0.0.1
2016-01-04T14:32:13.663+0000	[################........] be-mean.restaurantes	7.7 MB/11.4 MB (67.5%)
2016-01-04T14:32:15.573+0000	[########################] be-mean.restaurantes	11.4 MB/11.4 MB (100.0%)
2016-01-04T14:32:15.573+0000	imported 25359 documents

#verificando a quantidade de registros

 use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359

