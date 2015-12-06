# Sharding

Sharding é o processo de armazenamento de registros de dados em várias máquinas, é a abordagem que o MongoDB faz para atender o crescimento dos dados.

À medida que o tamanho dos dados aumenta, uma única máquina pode não ser suficiente para armazenar os dados, nem proporcionar uma leitura aceitável e rendimento na escrita, o Sharding resolve o problema com a escalabilidade horizontal, com sharding, você deve adicionar mais máquinas para suportar o crescimento de dados e as demandas de leitura e escrita.

**Qual diferença entre escalabilidade horizontal e vertical?**

## Por que usar?

Porque o seu servidor não aguentará quando alguma coleção sua for maior que sua memória RAM, fazendo com que o MongoDb tenha que paginar os dados quando for ler, impactando na performance.

## Quando usar?

Quando você analisar seu banco de dados e verificar que uma coleção está chegando perto do tamanho que o servidor tem de memória disponível para o MongoDb.

## Como usar?

Para usar precisamos entender como é a arquitetura de um cluster com MongoDB, nele possuímos 3 serviços diferentes que são:

- shards
- config servers
- router

![](https://camo.githubusercontent.com/602f5193c627a0314bd8695ac3ba07d3d866d18a/687474703a2f2f646f63732e6d6f6e676f64622e6f72672f6d616e75616c2f5f696d616765732f736861726465642d636c75737465722e706e67)

## Shards

Cada shard é uma instância do MongoDb que guarda um pedaço dos dados da coleção.

## Config Servers

Cada config server é uma instância do MongoDb que guarda os metadados sobre o cluster. Os metadados mapeiam os *chunks* de dados para os shards.

## Router

Cada router é uma instância `mongos` que faz o roteamento das escritas e leituras para os shards. A aplicação não acessa diretamente os shards.

Para verificar todas as conexões do seu `mongos` basta conectar nele e rodar o seguinte comando:

```js
db._adminCommand("connPoolStats");
```

## Criando um cluster local

### Criando o Config Server

Primeiramente criamos um *Config Server* utilizando o próprio `mongod`, porém usando o atributo `--configsvr` e setando a porta `27010`.

```js
 mkdir \data\configdb
$ mongod --configsvr --port 27010
```

Como estamos fazendo para testar iremos criar apenas 1, **porém a indicação oficial é de criar pelo menos 3 Config Server para não ter 1 ponto único de falha.**

### Criando o Router

Depois disso precisamos criar o *Router* utilizando o `mongos`, setando o *Config Server* que ele acessará para ter as informações dos *Shards*.

```
mongos -c-onfigdb localhost:27010 --port 27011
```

Quando rodar você verá o começo das mensagens assim:

```js
2015-11-23T19:53:38.849-0200 W SHARDING running with 1 config server should be done only for testing purposes and is not recommended for production
2015-11-23T19:53:38.922-0200 I SHARDING [mongosMain] MongoS version 3.0.6 starting: pid=13236 port=27011 64-bit host=suissacorp.local (--help for usage)
2015-11-23T19:53:38.922-0200 I CONTROL  [mongosMain] db version v3.0.6
```

Para você configurar mais de 1 *Config Server* basta passar seu `ip:porta` separado por vírgula após o `--configdb`, por exemplo:

```
mongos --configdb localhost:27010,190.1.1.10:666,190.1.1.11:666, --port 27011
```

### Criando os Shards

Agora vamos criar 3 *Shards* que conterão nossos dados, por favor abra 3 terminais separados, podemos colocar os processos em background com `&` mas eu quero que vocês vejam o que acontece em cada.

Antes de tudo vamos criar as pastas onde os *Shards* irão persistir nossos dados:

```
mkdir /data/shard1 && mkdir /data/shard2 && mkdir /data/shard3
```

Depois de criado nossos diretórios rode cada comando em um terminal diferente.

**Shard 1**

```js
mongod --port 27012 --dbpath /data/shard1
```

**Shard 2**

```js
mongod --port 27013 --dbpath /data/shard2
```

**Shard 3**

```js
mongod --port 27014 --dbpath /data/shard3
```

### Resgistrando os Shards no Router

Vamos conectar no *Router* para poder registrar os *Shards*.

```js
mongo --port 27011 --host localhost
MongoDB shell version: 3.0.6
connecting to: localhost:27011/test
Mongo-Hacker 0.0.3
mongos> sh.addShard("localhost:27012")
{ "shardAdded" : "shard0000", "ok" : 1 }
mongos> sh.addShard("localhost:27013")
{ "shardAdded" : "shard0001", "ok" : 1 }
suissacorp(mongos-3.0.6)[mongos] test> sh.addShard("localhost:27014")
{
  "shardAdded": "shard0002",
  "ok": 1
}

/***
mongos> sh.enableSharding("students")
{ "ok" : 1 }
mongos> sh.shardCollection("students.grades", {"student_id" : 1})
{ "collectionsharded" : "students.grades", "ok" : 1 }
***/
```

Depois disso vamos especificar qual *database* iremos *shardear*:

```
sh.enableSharding("be-mean")
{
  "ok": 1
}
```

E depois especificamos qual **coleção** dessa *database* será *shardeada* com `sh.shardCollection`:

```
sh.shardCollection("be-mean.notas", {"_id" : 1})
{
  "collectionsharded": "be-mean.notas",
  "ok": 1
}
```

### Enviando os dados para o Router

Vamos conectar no *Router* e adicionar dados na nossa *database* e coleção:

```
for ( i = 1; i < 100000; i++ ) {
  db.notas.insert({tipo: "prova", nota : Math.random() * 100, estudante_id: i, active: true, date_created: Date.now(), date_created: Date.now(), escola: "Webschool", país: "Brasil", rg: i*3 });
}
```

Lembrando que devemos enviar os dados sempre para o *Router* para ele decidir o que fazer.

## DICA

O tamanho padrão do *chunk* de cada *shard* é 64MB, logo a coleção precisar **ser maior que 64MB** para que ocorra a divisão dos seus dados pela `shard key`.

Dependendo do número de *shards* do seu *cluster* o MongoDb pode esperar que tenha pelo menos 10 *chunks* para disparar a migração.

Você pode rodar `db.printShardingStatus()` para ver todos os *chunks* presentes no servidor.
