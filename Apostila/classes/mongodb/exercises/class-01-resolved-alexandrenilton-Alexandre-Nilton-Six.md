# MongoDB - Aula 01 - Exercício
autor: Alexandre Nilton Six Matos Belem

## Importando os restaurantes

    ```
$ mongoimport --db be-mean --collection restaurantes --drop --file C:\\restaurantes.json
2016-04-25T15:33:33.690-0300    connected to: localhost
2016-04-25T15:33:33.691-0300    dropping: be-mean.restaurantes
2016-04-25T15:33:35.503-0300    imported 25359 documents


    ```

## Contando os restaurantes

    ```
$ mongo
2016-04-27T15:33:07.967-0300 I CONTROL  [main] Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.2.4
connecting to: test
Mongo-Hacker 0.0.13
show dbs
be-mean  ? 0.005GB
local    ? 0.000GB
use be-mean
switched to db be-mean
show collections
restaurantes ? 10.138MB / 4.457MB
db.restaurantes.find().count();
25359
    ```