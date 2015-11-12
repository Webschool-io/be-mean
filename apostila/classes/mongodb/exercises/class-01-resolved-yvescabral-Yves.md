# MongoDB - Aula 01 - Exercício
autor: Yves Cabral

## Importando os restaurantes

    ```
    mongoimport --db test --collection restaurantes --drop --file restaurantes.json
    connected to: 127.0.0.1
    Tue Nov 10 16:30:22.637    dropping: be-mean.restaurantes
    Tue Nov 10 16:30:22.233 check 9 25359
    Tue Nov 10 16:30:22.381 imported 25359 objects

    ```

## Contando os restaurantes

    ```
    > db.restaurantes.count()
    25359

    ```
