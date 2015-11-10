# MongoDB - Aula 01 - Exercício
autor: Andreo Vieira

## Importanto os restaurantes

```
vagrant@vagrant-ubuntu-trusty-64:~$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
Tue Nov 10 18:33:16.396 dropping: be-mean.restaurantes
Tue Nov 10 18:33:17.504 check 9 25359
Tue Nov 10 18:33:17.535 imported 25359 objects
```

```
vagrant@vagrant-ubuntu-trusty-64:~$ mongo be-mean
MongoDB shell version: 2.4.9
connecting to: be-mean
> db.restaurantes.find({}).count()
25359
```
