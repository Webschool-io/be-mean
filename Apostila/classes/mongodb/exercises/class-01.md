## MongoDb - Aula 01

Nessa primeira aula veremos um pouco sobre a teoria do MongoDb e sobre os bancos de dados NoSQL e o que essa sigla que tanto vemos significa.

## Slides

[https://docs.google.com/presentation/d/1KXxmcwd47x4v2SymyiBPK7ucn80PruSvcw4mZ5S3nWc/edit?usp=sharing](https://docs.google.com/presentation/d/1KXxmcwd47x4v2SymyiBPK7ucn80PruSvcw4mZ5S3nWc/edit?usp=sharing)

## Arquivos necessário

[https://github.com/Webschool-io/MongoDb-ebook/tree/6e4007d73d5b25b7218ef0b9c4f8eb700bb5f104/src/data](https://github.com/Webschool-io/MongoDb-ebook/tree/6e4007d73d5b25b7218ef0b9c4f8eb700bb5f104/src/data)

## Teoria

### NoSQL

Falarei um pouco sobre a teoria de [NoSQL](./../../module-mongodb/theory-nosql.md).

### MongoDb

Entrando na teoria do [MongoDB](./../../module-mongodb/theory-mongodb.md)

Abrangendo:

- [Instalação](./../../module-mongodb/installation.md)
- [Cliente](./../../module-mongodb/mongodb-client.md)
  - [Import](./../../module-mongodb/export_import.md#mongoimport)
  - [Export](./../../module-mongodb/export_import.md#mongoexport)

#### Exercício

Como ainda não temos muitos dados para usarmos o `mongoexport` iremos trabalhar apenas com o `mongoimport` nesse momento. Para fazermos isso primeiramente baixe [esse JSON](https://raw.githubusercontent.com/vitormarcal/MongoDb-ebook/master/src/data/restaurantes.json).

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

## Explicar como funcionarão os exercícios e as aulas subsequentes.

## Links

- NoSQL - Arquitetura híbrida para uma rede social: [http://nomadev.com.br/nosql-arquitetura-h%C3%ADbrida-para-uma-rede-social/](http://nomadev.com.br/nosql-arquitetura-h%C3%ADbrida-para-uma-rede-social/)
- MongoDb - Como mudar seu jeito relacional de pensar - Parte 1: [http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar/](http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar/)
