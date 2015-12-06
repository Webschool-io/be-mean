```md
# MongoDB - Aula 01 - Exercício
autor: Fernando Miranda Vaz

## Importando os restaurantes

    ```
     mongoimport [AQUI VEM O COMANDO]
    2015-12-06T04:33:43.954-0200    connected to: 127.0.0.1
    2015-12-06T04:33:43.957-0200    dropping: be-mean.restaurantes
    2015-12-06T04:33:45.611-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    noteblook(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
    25359

    ```

```
