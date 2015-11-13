# MongoDB - Aula 01 - Exercício
autor: Aguinaldo Alves Barbosa Silva

## Importando os restaurantes

```

➜  Downloads  mongoimport --db be-mean -c restaurantes --drop --file restaurantes.json
2015-11-10T18:17:26.149-0200	connected to: localhost
2015-11-10T18:17:26.150-0200	dropping: be-mean.restaurantes
2015-11-10T18:17:27.237-0200	imported 25359 documents

```


## Contando os restaurantes

```

MacBook-Pro-de-Aguinaldo(mongod-3.1.9) be-mean> db.restaurantes.find({}).count()
25359
MacBook-Pro-de-Aguinaldo(mongod-3.1.9) be-mean>

``

