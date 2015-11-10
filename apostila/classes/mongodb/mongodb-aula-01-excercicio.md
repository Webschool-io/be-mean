# MongoDB - Aula 01 - Exercício
autor: Lucas Comino (@lcomino)

## Importando os restaurantes

```

 ~/be-mean-instagram/apostila/classes/mongodb# mongoimport --db be-mean --collection restaurantes --drop --file ../../mongodb/data/restaurantes.json
connected to: 127.0.0.1
2015-11-09T19:32:34.189-0500 dropping: be-mean.restaurantes
2015-11-09T19:32:37.002-0500            Progress: 9861681/11880944      83%
2015-11-09T19:32:37.002-0500                    19000   6333/second
2015-11-09T19:32:37.553-0500 check 9 25359
2015-11-09T19:32:37.560-0500 imported 25359 objects

```

## Contando os restaurantes

```

use be-mean
switched to db be-mean
db.restaurantes.find({}).count()
25359

```
