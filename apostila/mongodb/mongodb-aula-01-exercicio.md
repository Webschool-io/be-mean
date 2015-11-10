# MongoDB - Aula 01 - Exercício
autor: JULIANO BAILAO (JUB4)

## Importando os restaurantes

    ```
    mongoimport --db bemean --collection restaurantes --drop --file /home/jub4/Downloads/restaurantes.json
    connected to: 127.0.0.1
    Mon Nov  9 21:47:56.290 dropping: bemean.restaurantes
    Mon Nov  9 21:47:56.646 check 9 25359
    Mon Nov  9 21:47:56.712 imported 25359 objects
    ```

## Contando os restaurantes

    ```
    > use bemean
    switched to db bemean
    > db.restaurantes.find({}).count()
    25359
    ```
