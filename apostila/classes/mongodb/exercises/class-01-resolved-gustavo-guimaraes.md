# MongoDB - Aula 01 - Exercício
autor: Gustavo Rocha de Almeida Guimarães

## Importando os restaurantes

gustavorag@gustavorag-Inspiron-5437:~$ mongoimport --db be-mean --collection restaurantes --drop --file /home/gustavorag/Dev/Cursos/BeMEAN/ModuloMongoDB/Exercicios/restaurantes.json
2015-11-09T23:23:34.570-0300	connected to: localhost
2015-11-09T23:23:34.571-0300	dropping: be-mean.restaurantes
2015-11-09T23:23:35.707-0300	imported 25359 documents


## Contando os restaurantes

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean> 
   
