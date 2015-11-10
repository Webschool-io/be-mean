# MongoDB - Aula 01 - Exercício
autor: Jose Alves de Sousa Neto

## Importando os restaurantes

    
     mongoimport -d be-mean -c restaurantes --drop  --file /Users/joseasousa/restaurantes.json  
    2015-11-10T00:15:04.022-0300	connected to: localhost
    2015-11-10T00:15:04.023-0300	dropping: be-mean.restaurantes
    2015-11-10T00:15:07.000-0300	[##########..............] be-mean.restaurantes	5.2 MB/11.3 MB (45.5%)
    2015-11-10T00:15:09.003-0300	imported 25359 documents

    

## Contando os restaurantes

    
     mongo be-mean
    MongoDB shell version: 3.0.6
    connecting to: be-mean
    Mongo-Hacker 0.0.8
    Server has startup warnings: 
    2015-11-09T23:56:13.482-0300 I CONTROL  [initandlisten] 
    2015-11-09T23:56:13.482-0300 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
    Mac-mini-de-Jose(mongod-3.0.6) be-mean> db.restaurantes.find().count()
    25359


    
