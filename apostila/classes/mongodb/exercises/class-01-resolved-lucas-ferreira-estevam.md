# MongoDB - Aula 01 - Exercício
autor: Lucas Ferreira Estevam

## Importando os restaurantes

    ```
      mongoimport -db be-mean-instagram --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
connected to: 127.0.0.1
Wed Nov 11 10:01:24.384 dropping: be-mean-instagram.restaurantes
Wed Nov 11 10:01:25.815 check 9 25359
Wed Nov 11 10:01:25.918 imported 25359 objects

    ```

## Contando os restaurantes

    ```
    mongo
MongoDB shell version: 2.4.9
connecting to: test
Server has startup warnings: 
Wed Nov 11 09:26:33.492 [initandlisten] 
Wed Nov 11 09:26:33.492 [initandlisten] ** NOTE: This is a 32 bit MongoDB binary.
Wed Nov 11 09:26:33.492 [initandlisten] **       32 bit builds are limited to less than 2GB of data (or less with --journal).
Wed Nov 11 09:26:33.492 [initandlisten] **       See http://dochub.mongodb.org/core/32bit
Wed Nov 11 09:26:33.493 [initandlisten] 
> use be-mean-instagram
switched to db be-mean-instagram
> db.restaurantes.find({}).count()
25359


    ```
