# MongoDB - Aula 01 - Exercício
autor: Matheus Jose Krumenauer Weber

## Importando os restaurantes

    ```
   matheus@Math:/media/matheus/OS/Users/Matheus Weber/Desktop/Dropbox/Cursos/Be-Mean/Mongodb/Aula 1/Exercicio 1$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json.txt
2015-11-11T22:32:21.504-0200	connected to: localhost
2015-11-11T22:32:22.363-0200	dropping: be-mean.restaurantes
2015-11-11T22:32:22.608-0200	[#######.................] be-mean.restaurantes3.7 MB/11.3 MB (32.6%)
2015-11-11T22:32:24.802-0200	imported 25359 documents


    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
	25359


    ```
