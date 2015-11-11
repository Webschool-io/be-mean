Microsoft Windows [versão 10.0.10240]
(c) 2015 Microsoft Corporation. Todos os direitos reservados.

C:\Users\Tiago>cd c:/MongoDB/Server/3.0/bin

c:\MongoDB\Server\3.0\bin>mongoimport --db test --collection restaurantes --drop --file c:/restaurantes.json
2015-11-10T11:01:06.260-0200    connected to: localhost
2015-11-10T11:01:06.261-0200    dropping: test.restaurantes
2015-11-10T11:01:07.571-0200    imported 25359 documents

c:\MongoDB\Server\3.0\bin>

MongoDB shell version: 3.0.5
connecting to: test

show collections
restaurantes
system.indexes

db.restaurantes.find({}).count()
25359
