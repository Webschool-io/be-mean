# MongoDB - Aula 01 - Exercício
autor: Lucas Albuquerque
## Importando os restaurantes

    ```
     C:\Program Files\MongoDB\Server\3.0\bin>mongoimport --db bemean --collection restaurantes --drop --file restaurantes.json
        2015-11-10T00:41:11.028-0200    connected to: localhost
        2015-11-10T00:41:11.075-0200    dropping: bemean.restaurantes
        2015-11-10T00:41:13.694-0200    [####################....] bemean.restaurantes
        9.8 MB/11.3 MB (86.3%)
        2015-11-10T00:41:14.819-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
        > show dbs
        bemean  0.078GB
        local   0.078GB
        > use bemean
        switched to db bemean
        > db.restaurantes.find({}).count()
        25359
