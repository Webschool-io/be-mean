# MongoDB - Aula 01 - Exercício
autor: Diego Araújo

## Importando os restaurantes
mestre@Zeus:~$ mongoimport --db be-mean --collection restaurantes --drop --file Documentos/Projetos/MEAN/be_mean_instagram/exercicioaula001.json
2015-11-10T00:26:30.494-0200    connected to: localhost
2015-11-10T00:26:30.518-0200    dropping: be-mean.restaurantes
2015-11-10T00:26:33.455-0200    [###################.....] be-mean.restaurantes9.4 MB/11.3 MB (82.7%)
2015-11-10T00:26:34.343-0200    imported 25359 documents

## Contando os restaurantes

Zeus(mongod-3.0.7) test> use be-mean
switched to db be-mean
Zeus(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
Zeus(mongod-3.0.7) be-mean>
