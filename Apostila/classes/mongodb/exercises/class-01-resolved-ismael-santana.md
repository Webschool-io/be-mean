# MongoDB - Aula 01 - Exercício
autor: Ismael Santana

...

## Importando os restaurantes

...

$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-06-02T22:57:05.114-0300    connected to: 127.0.0.1
2016-06-02T22:57:05.155-0300    dropping: be-mean.restaurantes
2016-06-02T22:57:08.148-0300    [####################....] be-mean.restaurantes9.8 MB/11.4 MB (86.2%)
2016-06-02T22:57:09.704-0300    [########################] be-mean.restaurantes11.4 MB/11.4 MB (100.0%)
2016-06-02T22:57:09.704-0300    imported 25359 documents

...


## Contando os restaurantes

    db.restaurantes.find({}).count()
    25359
