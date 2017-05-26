# MongoDB - Aula 01 - Exercício
autor: Bruno Vieira Tortelli

## Importando os restaurantes
    
    ```
    ➜  bemean git:(master) ✗ mongoimport --db bemean --collection restaurantes --drop --file restaurantes.json
    2016-03-08T00:18:20.635-0300	connected to: localhost
    2016-03-08T00:18:20.635-0300	dropping: bemean.restaurantes
    2016-03-08T00:18:21.323-0300	imported 25359 documents
    
    ´´´
## Contando os restaurantes
    
    ``` 
    bruno-Q470C-500P4C(mongod-3.2.3) test> show dbs
    bemean → 0.078GB
    local  → 0.078GB
    bruno-Q470C-500P4C(mongod-3.2.3) test> use bemean
    switched to db bemean
    bruno-Q470C-500P4C(mongod-3.2.3) bemean> db.restaurantes.find({}).count()
    25359
    
    ´´´
## Explicar como funcionarão os exercícios e as aulas subsequentes.
    
    ```
    No mongoimport temos na sequencia o nome do BD no nosso caso bemean a collection no nosso caso restaurantes e o --drop que apaga sua coleção caso ela ja exista e substitui pelo nova, que sera gerada a partir do nosso json.
    
    Logo em seguida ao iniciarmos o mongo, vendo que ele esta usando o db test que vem por padrão eu executo show dbs, onde ele exibe os 2 bds que temos atualmente, e depois mudo para o bd bemean, e executo o comando db.restaurantes.find({}).count() que calcula o total de objetos dentro da collection.
    
    ´´´
## Links

- NoSQL - Arquitetura híbrida para uma rede social: [http://nomadev.com.br/nosql-arquitetura-h%C3%ADbrida-para-uma-rede-social/](http://nomadev.com.br/nosql-arquitetura-h%C3%ADbrida-para-uma-rede-social/)
- MongoDb - Como mudar seu jeito relacional de pensar - Parte 1: [http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar/](http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar/)