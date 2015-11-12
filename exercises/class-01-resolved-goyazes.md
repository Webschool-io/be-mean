# MongoDB - Aula 01 - Exercício
autor: Daniel  Cruvinel

## Importando os restaurantes

   '''
   mongoimport --db be-mean --collection restaurantes --drop --file C:\Users\windows\Desktop\restaurantes.json
   2015-11-11T11:00:46.788-0200    connected to: localhost
   2015-11-11T11:00:46.795-0200    dropping: be-mean.restaurantes
   2015-11-11T11:00:49.709-0200    [##########...............] be-mean.restaurantes 5.2 MB/11.3 MB (45.5%)
   2015-11-11T11:00:51.309-0200    imported 25359 documents


## Contando os restaurantes

   db.restaurantes.find({}).count()
   25359
