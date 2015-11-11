# Mongo DB - Aula 01 - Exercício
Autor: Leonardo Soares

## Importando os restaurantes

  ```
  leonardo@helpdesk:~$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
  2015-11-10T11:25:07.481-0300	connected to: localhost
  2015-11-10T11:25:07.482-0300	dropping: be-mean.restaurantes
  2015-11-10T11:25:08.256-0300	imported 25359 documents
  leonardo@helpdesk:~$
  ```

## Contando os restaurantes

  ```
  leonardo@helpdesk:~$ mongo be-mean
  MongoDB shell version: 3.0.7
  connecting to: be-mean
  Mongo-Hacker 0.0.8
  Server has startup warnings:
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten]
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten]
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
  2015-11-10T10:40:53.269-0300 I CONTROL  [initandlisten]
  helpdesk(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
  25359
  helpdesk(mongod-3.0.7) be-mean>
  ```
