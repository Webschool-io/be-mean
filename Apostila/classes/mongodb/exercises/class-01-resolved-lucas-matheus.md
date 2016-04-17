# MongoDB - Aula 01 - Exercício
autor: LUCAS MATHEUS DE ALMEIDA VIEIRA

## Importando os restaurantes
	
```
mongoimport --db be-mean -c restaurantes --drop --file restaurantes.json
2016-04-17T17:41:29.832-0300	connected to: localhost
2016-04-17T17:41:29.832-0300	dropping: be-mean.restaurantes
2016-04-17T17:41:31.046-0300	imported 25359 documents
```


## Contando os restaurantes

```
lucas(mongod-3.2.5) be-mean> db.restaurantes.find({}).count()
25359
```

