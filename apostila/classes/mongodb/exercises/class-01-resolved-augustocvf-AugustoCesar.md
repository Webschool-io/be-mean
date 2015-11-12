# MongoDB - Aula 01 - Exercício
autor: Augusto Cesar Vieira Formentão

## Importando os restaurantes

    mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
    2015-11-11T22:25:51.488-0200    connected to: 127.0.0.1
    2015-11-11T22:25:51.490-0200    dropping: be-mean.restaurantes
    2015-11-11T22:25:52.746-0200    imported 25359 documents


## Contando os restaurantes

    use be-mean
    switched to db be-mean
    db.restaurantes.find({}).count()
    25359
