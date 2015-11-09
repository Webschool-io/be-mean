## mongoexport

Para exportarmos os dados de uma coleção no MongoDb usaremos o comando `mongoexport` da seguinte forma:

```
mongoexport --db nome_do_database --collection nome_da_colecao --out minha_colecao.json
```

Guarde bem esse comando pois será necessário para o nosso exercício.


```
mongoexport --db test --collection traffic --out traffic.json
```

Onde:

- --db ou -d: especifica a database a ser usada/criada;
- --collection: especifica a coleção a ser usada/criada;
- --out: especifica qual arquivo receberá os dados.

## mongoimport

O `mongoimport` é o comando utilizado para importar dados para o MongoDb, para isso você deverá usar um arquivo: [Extended JSON](https://docs.mongodb.org/manual/reference/mongodb-extended-json/), CSV, ou TSV export criado pelo mongoexport.

```
mongoimport --db database --collection collection --drop --file data.json
```

Onde:

- --db ou -d: especifica a database a ser usada/criada;
- --collection: especifica a coleção a ser usada/criada;
- --drop: apaga a coleção antes de inserir os novos dados;
- --file: especifica o caminho do arquivo a ser importado.

## Exercício

> Esse exercício se encontra no conteúdo da aula.

Como ainda não temos muitos dados para usarmos o `mongoexport` iremos trabalhar apenas com o `mongoimport` nesse momento. Para fazermos isso primeiramente baixe [esse JSON](https://raw.githubusercontent.com/Webschool-io/be-mean-instagram/master/apostila/mongodb/data/restaurantes.json).

Após importar ele para uma coleção chamada `restaurantes`, no banco `be-mean`, copie o que foi escrito no seu terminal, por exemplo:

```
 mongoimport [AQUI VEM O COMANDO]
2015-10-29T23:34:49.494-0200    connected to: 127.0.0.1:27017
2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
2015-10-29T23:34:52.487-0200    [##########..............] be-mean.restaurantes   5.2 MB/11.3 MB (45.5%)
2015-10-29T23:34:54.732-0200    imported X documents

```

Quero ver se com isso você conseguiu importar todos os documentos com sucesso, depois entre no console do `mongo` e execute a seguinte query, após selecionar o banco `be-mean`:

```
db.restaurantes.find({}).count()
```

Com isso você deverá criar um documento com a extensão `.md` chamado:

```
mongodb-aula-01-exercicio.md
```

Esse documento deverá conter a seguinte estrutura:

```md
# MongoDB - Aula 01 - Exercício
autor: SEU NOME

## Importando os restaurantes

    ```
     mongoimport [AQUI VEM O COMANDO]
    2015-10-29T23:34:49.494-0200    connected to: 127.0.0.1:27017
    2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
    2015-10-29T23:34:52.487-0200    [##########..............] be-mean.restaurantes   5.2 MB/11.3 MB (45.5%)
    2015-10-29T23:34:54.732-0200    imported X documents

    ```

## Contando os restaurantes

    ```
    suissacorp(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    X

    ```

```


**CUIDADO**

> Evite usar mongoimport e mongoexport para backups de instância de produção. Eles não preservarão de forma confiável todos os tipos de dados ricos do BSON, porque JSON só pode representar um subconjunto dos tipos suportados pelo BSON. Use mongodump e mongorestore como descrito em [MongoDB Backup Methods](https://docs.mongodb.org/manual/core/backups/) para esse tipo de funcionalidade.
