# MongoDB - Aula 01 - Exercício
autor: Alexsandro Felix

## Importando os restaurantes

    ```
[felix@bemean ~]$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T08:13:45.379-0300    connected to: localhost
2015-11-10T08:13:45.380-0300    dropping: be-mean.restaurantes                                      
2015-11-10T08:13:48.382-0300    [####################....] be-mean.restaurantes 9.7 MB/11.3 MB (85.2%)                                                                                                  
2015-11-10T08:13:49.337-0300    [########################] be-mean.restaurantes 11.3 MB/11.3 MB (100.0%)                                                                                                
2015-11-10T08:13:49.337-0300    imported 25359 documents 

    ```

## Contando os restaurantes

    ```
    bemean(mongod-3.2.0-rc2-74-g78d3e85) be-mean> db.restaurantes.find({}).count()
    25359

    ```
