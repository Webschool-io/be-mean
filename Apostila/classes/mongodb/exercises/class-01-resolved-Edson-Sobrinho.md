$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --f                                                    ile restaurantes.json
2018-07-15T20:30:03.767-0300    connected to: 127.0.0.1
2018-07-15T20:30:03.846-0300    dropping: be-mean.restaurantes
2018-07-15T20:30:06.741-0300    [###################.....] be-mean.restaurantes9                                                    .05MB/11.3MB (79.7%)
2018-07-15T20:30:07.445-0300    [########################] be-mean.restaurantes1                                                    1.3MB/11.3MB (100.0%)
2018-07-15T20:30:07.446-0300    imported 25359 documents

> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
>