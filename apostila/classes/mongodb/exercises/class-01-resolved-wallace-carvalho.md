# MongoDB - Aula 01 - Exercício
autor: Wallace Carvalho

## Importando os restaurantes

    ```
      wallace  ⋯  Cursos  BeMEAN  Aula 1  mongoimport --host=127.0.0.1 --db be-mean --collection restaurantes --drop --file restaurantes.json
      2015-11-09T21:19:26.721-0300	connected to: 127.0.0.1
      2015-11-09T21:19:26.721-0300	dropping: be-mean.restaurantes
      2015-11-09T21:19:27.859-0300	imported 25359 documents
      wallace  ⋯  Cursos  BeMEAN  Aula 1  

    ```

## Contando os restaurantes

    ```
    localhost(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    25359
    localhost(mongod-3.0.6) be-mean> 

    ```
