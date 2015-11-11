
# MongoDB - Aula 01 - Exercício
autor: Wayre Avelar

## Importando os restaurantes

    ```
     
     ➜  be-mean-instagram master ✗ mongoimport --db be-mean --collection restaurantes --drop --file ~/Sites/estudos/be-mean-instagram/apostila/mongodb/data/restaurantes.json
	2015-11-11T12:07:22.806-0200	connected to: localhost
	2015-11-11T12:07:22.807-0200	dropping: be-mean.restaurantes
	2015-11-11T12:07:24.991-0200	imported 25359 documents
        
    ```

## Contando os restaurantes

    ```
	➜  be-mean-instagram master ✗ mongo be-mean
	MongoDB shell version: 3.0.7
	connecting to: be-mean
	Mongo-Hacker 0.0.8
	mac-wayre(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359
    ```
    