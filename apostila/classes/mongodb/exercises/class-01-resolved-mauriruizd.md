# MongoDB - Aula 01 - Exercício
autor : Mauricio José Maria Ruiz Diaz Maciel

## Importando os restaurantes
$ mongoimport -d be-mean -c restaurantes --file restaurantes.json
2015-11-10T08:17:50.345-0300    connected to: localhost
2015-11-10T08:17:51.505-0300    imported 25359 documents

## Contando os restaurantes
$ mongo be-mean
2015-11-10T08:35:55.087-0300 I CONTROL  Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.0.7
connecting to: be-mean
db.restaurantes.count()
25359