# MongoDB - Aula 01 - Exercício
autor: Dariano Soares

## Importando os restaurantes

	```

    Não deve está conectado no mongo antes de executar o comando.

      mongoimport --db be-mean --collection restaurantes --file /media/dariano/Docs1/Cursos/be-mean/mongodb/restaurantes.json
	connected to: 127.0.0.1
	2015-11-09T23:38:23.401-0200 check 9 25359
 	2015-11-09T23:38:23.455-0200 imported 25359 objects


    ```

## Contando os restaurantes

	```
    mongo
    use be-mean
    dariano-IC4I(mongod-2.6.3) be-mean> db.restaurantes.find({}).count()
    25359


    ```
