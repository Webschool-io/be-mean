# MongoDB - Aula 01 - Exercício
autor: Vander Amorin

## Importando os restaurantes

    ```
     mongoimport --db be_mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T19:39:42.839-0200	connected to: localhost
2015-11-10T19:39:42.841-0200	dropping: be_mean.restaurantes
2015-11-10T19:39:45.831-0200	[#################.......] be_mean.restaurantes	8.4 MB/11.3 MB (74.6%)
2015-11-10T19:39:47.080-0200	imported 25359 documents

    ```

## Contando os restaurantes

    ```
    vander@Ubuntu-VirtualBox:~/Downloads$ mongo be_mean
    > db.restaurantes.find({}).count()
    25359


    ```
