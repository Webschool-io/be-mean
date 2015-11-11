# MongoDB - Aula 01 - Exercício
autor: Kirmayr Tomaz

## Importando os restaurantes

    kirmayr@whey:~/projetos$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json  --host 127.0.0.1:27017
    connected to: 127.0.0.1:27017
    2015-11-11T00:47:09.514-0400 dropping: be-mean.restaurantes
    2015-11-11T00:47:09.962-0400 check 9 25359
    2015-11-11T00:47:10.045-0400 imported 25359 objects


## Contando os restaurantes
    kirmayr@whey:~/projetos$ mongo
    MongoDB shell version: 2.6.11
    connecting to: test
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    > 
