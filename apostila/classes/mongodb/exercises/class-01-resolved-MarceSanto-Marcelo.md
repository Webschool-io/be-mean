# MongoDB - Aula 01 - Exercício
autor: Marcelo Santos

## Importando os restaurantes
 
    ```   
    PS C:\Users\marce\Desktop> mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
    2015-11-09T22:58:56.412-0200    connected to: localhost
    2015-11-09T22:58:56.416-0200    dropping: be-mean.restaurantes
    2015-11-09T22:58:58.850-0200    imported 25359 documents
    ```

## Contando os restaurantes

    ```
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    
    ```
