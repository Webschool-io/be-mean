# MongoDB - Aula 01 - Exercício
autor: Pedro Germano

## Importando os restaurantes

    ```
    pedro@pedro:~/dev/be-mean-instagram-mongodb/01$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2016-08-24T14:16:17.117-0300	connected to: localhost
    2016-08-24T14:16:17.117-0300	dropping: be-mean.restaurantes
    2016-08-24T14:16:18.442-0300	imported 25359 documents
    pedro@pedro:~/dev/be-mean-instagram-mongodb/01$


## Contando os restaurantes
db.restaurantes.find({}).count()
 25359
