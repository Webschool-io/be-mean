# MongoDB - Aula 01 - Exercício
autor: RYAN USBERTI

## Importando os restaurantes

    ```
     ryan@ryan-VirtualBox:~$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-02-20T23:16:38.699-0300	connected to: localhost
2016-02-20T23:16:38.700-0300	dropping: be-mean.restaurantes
2016-02-20T23:16:41.708-0300	[########################] be-mean.restaurantes11.4 MB/11.4 MB (100.0%)
2016-02-20T23:16:41.897-0300	[########################] be-mean.restaurantes11.4 MB/11.4 MB (100.0%)
2016-02-20T23:16:41.897-0300	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    ryan-VirtualBox(mongod-3.2.3) be-mean> db.restaurantes.find({}).count()
25359

    ```