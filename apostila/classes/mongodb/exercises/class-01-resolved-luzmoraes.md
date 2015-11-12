# MongoDB - Aula 01 - Exercício
autor: ANDERSON MORAES

## Importando os restaurantes

    ```
    anderson@amoraes:~/Documentos/MEAN_INSTAGRAM$ mongoimport --db db_mean  --collection restaurantes --drop --file restaurantes.json
    2015-11-10T18:11:18.893-0200    connected to: localhost
    2015-11-10T18:11:18.895-0200    dropping: db_mean.restaurantes
    2015-11-10T18:11:21.821-0200    [##########..............] db_mean.restaurantes5.2 MB/11.3 MB (45.5%)
    2015-11-10T18:11:24.820-0200    [#####################...] db_mean.restaurantes10.4 MB/11.3 MB (91.6%)
    2015-11-10T18:11:25.757-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359


    ```