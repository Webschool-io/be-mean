# MongoDB - Aula 01 - Exercício
autor: Natan Alves

## Importando os restaurantes

    ```
     ➜  ~ mongoimport --db be-mean --collection restaurantes --drop --file ~/Documents/restaurantes.json
    2015-11-09T23:19:31.869-0200  connected to: localhost
    2015-11-09T23:19:31.869-0200  dropping: be-mean.restaurantes
    2015-11-09T23:19:34.869-0200  [#######################.] be-mean.restaurantes 11.0 MB/11.3 MB (97.3%)
    2015-11-09T23:19:35.080-0200  imported 25359 documents

    ```

## Contando os restaurantes

    ```
    stark(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359
    
    ```
