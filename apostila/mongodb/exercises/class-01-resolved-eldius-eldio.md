# MongoDB - Aula 01 - Exercício
autor: Eldio Santos Junior

## Importando os restaurantes

  ```
  vagrant@vagrant:/vagrant/bemean-curso$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
  2015-11-11T20:16:40.509+0000    connected to: localhost
  2015-11-11T20:16:40.510+0000    dropping: be-mean.restaurantes
  2015-11-11T20:16:43.509+0000    [####################....] be-mean.restaurantes 9.8 MB/11.3 MB (86.2%)
  2015-11-11T20:16:44.074+0000    imported 25359 documents

  ```

## Contando os restaurantes

  ```
  vagrant(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
  25359
  ```
