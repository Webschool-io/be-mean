# MongoDB - Aula 01 - Exercício
autor: André Torbitoni

## Importando os restaurantes

    ```
mongoimport -db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
connected to: 127.0.0.1
Tue Nov 17 06:08:04.275 dropping: be-mean.restaurantes
Tue Nov 17 06:08:05.518 check 9 25359
Tue Nov 17 06:08:05.587 imported 25359 objects


    ```

## Contando os restaurantes

    ```
db.restaurantes.find({}).count()
25359


    ```