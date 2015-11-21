# MongoDB - Aula 01 - Exercício
autor: Leonam Souza

## Importando os restaurantes

  mongoimport --db be-mean --collection restaurantes --file         restaurantes.json
  2015-11-21T02:15:35.899-0200	connected to: localhost
  2015-11-21T02:15:36.766-0200	imported 25359 documents

    ```

## Contando os restaurantes


  db.restaurantes.find({}).count()
  25359

