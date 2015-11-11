# MongoDB - Aula 01 - Exercicio
autor: Edno Fedulo

## Importando os restaurantes
```
ubuntu@ubuntu-VirtualBox:~$ mongoimport --db be-mean --collection restaurantes --drop --file /home/ubuntu/Downloads/restaurantes.json
2015-11-09T21:23:03.312-0300	connected to: localhost
2015-11-09T21:23:03.314-0300	dropping: be-mean.restaurantes
2015-11-09T21:23:05.400-0300	imported 25359 documents
```
##Contando os restaurantes
```
ubuntu-VirtualBox(mongod-3.0.7) test> use be-mean
switched to db be-mean
ubuntu-VirtualBox(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
```

