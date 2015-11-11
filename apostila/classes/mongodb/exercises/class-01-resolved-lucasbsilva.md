# MongoDB - Aula 01 - Exercício
Autor: Lucas Bento da Silva

## Importando os restaurantes

    mongoimport --db be-mean --collection restaurantes --drop --file D:\restaurantes.json
    connected to: 127.0.0.1
    2015-11-10T11:29:01.067-0200 dropping: be-mean.restaurantes
    2015-11-10T11:29:03.205-0200 check 9 25359
    2015-11-10T11:29:03.205-0200 imported 25359 objects

## Contando os restaurantes

   ```
   MongoDB shell version: 2.6.3
   > db.restaurantes.find({}).count()
   25359
   ```
