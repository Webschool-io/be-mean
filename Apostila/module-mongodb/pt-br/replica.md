# Replica

Possuímos *Replicas* na maioria dos bancos de dados relacionais também, ela faz o espelhamento dos seus dados de um servidor para outro, no MongoDb uma *ReplicaSet* pode conter 50 membros, ou seja, 50 *Replicas* contando com os árbitros.

![](https://docs.mongodb.org/manual/_images/replica-set-read-write-operations-primary.png)

Todas as operações de escrita são feitas no primário e replicada para os secundários, no MongoDb devemos também replicar os *Shards*.

![](./../src/images/replica-sharding.png)

A replicação ocorre em 2 etapas:

- Initial Sync;
- Replication.

## Initial Sync

O Initial Syn ocorre no início, quando uma *Replica* copia todos os dados de outra. Uma *Replica* utiliza-se do Initial Sync quando ela é nova ou não tem nenhum dado ou possui dados mas está faltando o histórico de replicação.

Quando a *Replica* executa um *Initial Sync* o MongoDb irá:

- Clonar todos os bancos de dados. Para clonar, o mongod consulta cada coleção em cada banco de dados de origem e insere todos os dados em suas próprias cópias dessas coleções. Neste momento, os índices _id também são construídos. O processo de clonagem apenas copia os dados válidos, omitindo documentos inválidos.
- Aplicar todas as alterações para o conjunto de dados. Usando o *oplog* a partir da fonte, o mongod atualiza seus dados para refletir o estado atual do conjunto de *Replicas*.
- Construir todos os índices em todas as coleções (exceto índices _id, que já foram concluídos).
- Quando o mongod acabar de construir todos os índices, o membro pode fazer a transição para um estado normal, ou seja secundário.

## Replication

Membros do conjunto de *Replicas* replicam os dados continuamente após a sincronização inicial. Este processo mantém os membros atualizados com todas as alterações para os dados do conjunto de *Replicas*. Na maioria dos casos, secundários sincronizam a partir do primário. Secundários podem mudar automaticamente os seus alvos de sincronização, se necessário com base em mudanças no tempo de ping e estado de replicação de outros membros.

## oplog

O **oplog** (log de operações) é uma *[capped collection](https://docs.mongodb.org/manual/reference/glossary/#term-capped-collection)* especial que mantém os registros de todas as operações de modificação de dados.

MongoDB aplica as operações no primário e, em seguida, registra as operações no oplog do primário. Os membros secundários, em seguida, copiam e aplicam essas operações em um processo assíncrono.

Todos os membros do conjunto de *Replicas* contém uma cópia do oplog, na coleção [local.oplog.rs](https://docs.mongodb.org/manual/reference/local-database/#local.oplog.rs), o que lhes permite manter o estado atual da base de dados.

Para facilitar a replicação, todos os membros do conjunto de *Replicas* enviam batimentos cardíacos (pings) para todos os outros membros. Qualquer membro pode importar entradas oplog de qualquer outro membro.

## Por que usar?

Porque sempre devemos ter uma garantia dos nossos dados e uma *Replica* serve exatamente para isso, garantir que seus dados existam em outro lugar também, caso o seu servidor principal caia você poderá levantar outro com os dados da sua *Replica*.

## Quando usar?

**SEMPRE!** Pois você sempre precisa de uma segurança adicional para seus dados, nenhum servidor é 100% a prova de falhas por isso **sempre** se garanta.

## Como usar?

Vou demonstrar localmente como fazer um conjunto de 3 *Replicas* bem simples, inicie criando 3 pastas novas dentro de `data`, as quais armazenarão os dados das *Replicas*.

```
mkdir /data/rs1
mkdir /data/rs2
mkdir /data/rs3
```

Agora vamos iniciar nossos processos do `mongod`, pare todos que você estiver rodando antes, só precisamos levantar o `mongod` com `--replSet` como visto abaixo:

```
mongod --replSet replica_set --port 27017 --dbpath /data/rs1
mongod --replSet replica_set --port 27018 --dbpath /data/rs2
mongod --replSet replica_set --port 27019 --dbpath /data/rs3
```

Caso você queira rodar eles em *background* basta passar o artibuto `--fork` como viso no script [create-replicaset.sh](https://github.com/Webschool-io/be-mean-instagram/blob/master/apostila/module-mongodb/data/create-replicaset.sh):

Executando cada linha acima em um terminal diferente você podderá ver algo assim:

```
2015-11-20T13:12:48.187-0200 I CONTROL  [initandlisten] options: {
  net: { port: 27019 },
  replication: { replSet: "replica_set" },
  storage: { dbPath: "/data/rs3" }
}
2015-11-20T13:12:48.209-0200 I NETWORK  [initandlisten] waiting for connections on port 27019
```

### Configurando e iniciando

Depois você deve conectar em cada uma para iniciar o serviço de *Replica* com [rs.initiate()](https://docs.mongodb.org/manual/reference/method/rs.initiate/#rs.initiate), com uma configuração:

```
rsconf = {
   _id: "replica_set",
   members: [
    {
     _id: 0,
     host: "127.0.0.1:27017"
    }
  ]
}
rs.initiate(rsconf)
```

O objeto de configuração segue o seguinte modelo:

```
{
  _id: <string>,
  version: <int>,
  members: [
    {
      _id: <int>,
      host: <string>,
      arbiterOnly: <boolean>,
      buildIndexes: <boolean>,
      hidden: <boolean>,
      priority: <number>,
      tags: <document>,
      slaveDelay: <int>,
      votes: <number>
    },
    ...
  ],
  settings: {
    getLastErrorDefaults : <document>,
    chainingAllowed : <boolean>,
    getLastErrorModes : <document>,
    heartbeatTimeoutSecs: <int>
  }
}

```

Após a execução desse comando vá até o terminal que está rodando o `rs1` e você verá algo assim:

```
2015-11-27T12:04:22.801-0200 I REPL     [conn1] replSet replSetInitiate config object with 1 members parses ok
2015-11-27T12:04:22.817-0200 I REPL     [ReplicationExecutor] New replica set config in use: { _id: "replica_set", version: 1, members: [ { _id: 0, host: "127.0.0.1:27017", arbiterOnly: false, buildIndexes: true, hidden: false, priority: 1.0, tags: {}, slaveDelay: 0, votes: 1 } ], settings: { chainingAllowed: true, heartbeatTimeoutSecs: 10, getLastErrorModes: {}, getLastErrorDefaults: { w: 1, wtimeout: 0 } } }
2015-11-27T12:04:22.817-0200 I REPL     [ReplicationExecutor] This node is 127.0.0.1:27017 in the config
2015-11-27T12:04:22.817-0200 I REPL     [ReplicationExecutor] transition to STARTUP2
2015-11-27T12:04:22.817-0200 I REPL     [conn1] ******
2015-11-27T12:04:22.817-0200 I REPL     [conn1] creating replication oplog of size: 192MB...
2015-11-27T12:04:22.817-0200 I STORAGE  [FileAllocator] allocating new datafile /data/rs1/local.1, filling with zeroes...
2015-11-27T12:04:53.404-0200 I STORAGE  [FileAllocator] done allocating datafile /data/rs1/local.1, size: 256MB,  took 30.586 secs
2015-11-27T12:04:53.429-0200 I STORAGE  [conn1] MmapV1ExtentManager took 30 seconds to open: /data/rs1/local.1
2015-11-27T12:04:53.440-0200 I REPL     [conn1] ******
2015-11-27T12:04:53.440-0200 I REPL     [conn1] Starting replication applier threads
2015-11-27T12:04:53.440-0200 I COMMAND  [conn1] command admin.$cmd command: replSetInitiate { replSetInitiate: { _id: "replica_set", members: [ { _id: 0.0, host: "127.0.0.1:27017" } ] } } keyUpdates:0 writeConflicts:0 numYields:0 reslen:37 locks:{ Global: { acquireCount: { r: 5, w: 3, W: 2 }, acquireWaitCount: { W: 1 }, timeAcquiringMicros: { W: 31 } }, MMAPV1Journal: { acquireCount: { w: 7 }, acquireWaitCount: { w: 1 }, timeAcquiringMicros: { w: 62 } }, Database: { acquireCount: { w: 1, W: 2 } }, Metadata: { acquireCount: { W: 3 } }, oplog: { acquireCount: { w: 1 } } } 30639ms
2015-11-27T12:04:53.440-0200 I REPL     [ReplicationExecutor] transition to RECOVERING
2015-11-27T12:04:53.441-0200 I REPL     [ReplicationExecutor] transition to SECONDARY
2015-11-27T12:04:53.441-0200 I REPL     [ReplicationExecutor] transition to PRIMARY
2015-11-27T12:04:54.443-0200 I REPL     [rsSync] transition to primary complete; database writes are now permitted
2015-11-27T12:06:55.711-0200 I INDEX    [conn1] allocating new ns file /data/rs1/test.ns, filling with zeroes...
2015-11-27T12:06:57.202-0200 I STORAGE  [FileAllocator] allocating new datafile /data/rs1/test.0, filling with zeroes...
2015-11-27T12:07:05.268-0200 I STORAGE  [FileAllocator] done allocating datafile /data/rs1/test.0, size: 64MB,  took 8.065 secs
2015-11-27T12:07:05.521-0200 I STORAGE  [conn1] MmapV1ExtentManager took 8 seconds to open: /data/rs1/test.0
2015-11-27T12:07:05.557-0200 I WRITE    [conn1] insert test.teste query: { _id: ObjectId('5658637f0df85f6f6c694148'), name: "Suissa" }
```


### Adicionando *Replicas*

Depois de termos iniciado nossa *Replica* primária vamos adicionar as outras *Replicas* nessa *ReplicaSet*:

```
rs.add("127.0.0.1:27018")
rs.add("127.0.0.1:27019")
```

Após nossas *Replicas* estarem rodando, vamos conectar em cada uma:

```
mongo --port 27017
MongoDB shell version: 3.0.6
connecting to: 127.0.0.1:27017/test
Mongo-Hacker 0.0.3
Server has startup warnings:
2015-11-20T10:34:58.383-0200 I CONTROL  [initandlisten]
2015-11-20T10:34:58.383-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
suissacorp(mongod-3.0.6)[PRIMARY] test>
```

Vamos para a segunda que deve ser `SECONDARY` já que o servidor da porta `27017` é o `PRIMARY`.

```
mongo --port 27018
MongoDB shell version: 3.0.6
connecting to: 127.0.0.1:27018/test
Mongo-Hacker 0.0.3
Server has startup warnings:
2015-11-20T10:34:58.472-0200 I CONTROL  [initandlisten]
2015-11-20T10:34:58.472-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
suissacorp(mongod-3.0.6)[SECONDARY] test>
```

E para confirmar que o terceiro também é `SECONDARY`.

```
mongo --port 27019
MongoDB shell version: 3.0.6
connecting to: 127.0.0.1:27019/test
Mongo-Hacker 0.0.3
Server has startup warnings:
2015-11-20T10:34:58.556-0200 I CONTROL  [initandlisten]
2015-11-20T10:34:58.557-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
suissacorp(mongod-3.0.6)[SECONDARY] test>
```

### Gerenciando

#### Status da ReplicaSet

Para vermos o *status* de cada instância executamos o seguinte comando no `mongo`:

```js
rs.status()
{
  "set": "replica_set",
  "date": ISODate("2015-11-20T12:37:19.505Z"),
  "myState": 1,
  "members": [
    {
      "_id": 0,
      "name": "localhost:27017",
      "health": 1,
      "state": 1,
      "stateStr": "PRIMARY",
      "uptime": 141,
      "optime": Timestamp(1448023002, 1),
      "optimeDate": ISODate("2015-11-20T12:36:42Z"),
      "electionTime": Timestamp(1448023005, 1),
      "electionDate": ISODate("2015-11-20T12:36:45Z"),
      "configVersion": 1,
      "self": true
    },
    {
      "_id": 1,
      "name": "localhost:27018",
      "health": 1,
      "state": 2,
      "stateStr": "SECONDARY",
      "uptime": 53,
      "optime": Timestamp(1448023002, 1),
      "optimeDate": ISODate("2015-11-20T12:36:42Z"),
      "lastHeartbeat": ISODate("2015-11-20T12:37:17.799Z"),
      "lastHeartbeatRecv": ISODate("2015-11-20T12:37:18.015Z"),
      "pingMs": 0,
      "configVersion": 1
    },
    {
      "_id": 2,
      "name": "localhost:27019",
      "health": 1,
      "state": 2,
      "stateStr": "SECONDARY",
      "uptime": 53,
      "optime": Timestamp(1448023002, 1),
      "optimeDate": ISODate("2015-11-20T12:36:42Z"),
      "lastHeartbeat": ISODate("2015-11-20T12:37:17.830Z"),
      "lastHeartbeatRecv": ISODate("2015-11-20T12:37:18.015Z"),
      "pingMs": 0,
      "configVersion": 1
    }
  ],
  "ok": 1
}
```

Para conhecer mais sobre as configuração da *ReplicaSet* [entre aqui no - replSetGetConfig](https://docs.mongodb.org/manual/reference/command/replSetGetConfig/#replsetgetconfig-output).

#### Status do oplog

Também possuímos a função `rs.printReplicationInfo()` que mostra um relatório do *oplog* da sua *ReplicaSet*:

```
rs.printReplicationInfo()
configured oplog size:   192MB
log length start to end: 1796secs (0.5hrs)
oplog first event time:  Fri Nov 27 2015 00:17:37 GMT-0200 (BRST)
oplog last event time:   Fri Nov 27 2015 00:47:33 GMT-0200 (BRST)
now:                     Fri Nov 27 2015 11:00:30 GMT-0200 (BRST)
```

#### Rebaixando a Replica Primária

Caso você deseje rebaixar a *Replica Primária* basta executar o comando `rs.stepDown()` como visto abaixo, forçando o MongoDb a eleger uma Secundária como Primária:

```
suissacorp(mongod-3.0.6)[PRIMARY] test> rs.stepDown()
2015-11-27T11:03:56.373-0200 I NETWORK  DBClientCursor::init call() failed
2015-11-27T11:03:56.376-0200 E QUERY    Error: error doing query: failed
    at DBQuery._exec (src/mongo/shell/query.js:83:36)
    at DBQuery.hasNext (src/mongo/shell/query.js:240:10)
    at DBCollection.findOne (src/mongo/shell/collection.js:187:19)
    at DB.runCommand (src/mongo/shell/db.js:58:41)
    at DB.adminCommand (src/mongo/shell/db.js:66:41)
    at Function.rs.stepDown (src/mongo/shell/utils.js:1006:15)
    at (shell):1:4 at src/mongo/shell/query.js:83
2015-11-27T11:03:56.378-0200 I NETWORK  trying reconnect to 127.0.0.1:27119 (127.0.0.1) failed
2015-11-27T11:03:56.378-0200 I NETWORK  reconnect 127.0.0.1:27119 (127.0.0.1) ok
suissacorp(mongod-3.0.6)[SECONDARY] test> 
```

Logo após a execução do comando o `mongo` desconecta e conecta novamente, porém dessa vez como `SECONDARY`, como visto na última linha acima.

#### Sincronizando de outro servidor

Caso queira mudar de qual *Replica* a sincronização é feita deves usar o comando `rs.syncFrom()`, por exemplo:

```
suissacorp(mongod-3.0.6)[SECONDARY] test> rs.syncFrom("127.0.0.1:27119")
{
  "syncFromRequested": "127.0.0.1:27119",
  "ok": 1
}

```

Isso é interessante para você testar diferentes padrões e situações onde uma *Replica* não esteja replicando do *host* desejado.

### Recapitulando

1. Criar um diretório em `/data` para cada *Replica*.
2. Levantar cada *Replica* com `--replSet nome_ReplicaSet` em uma porta diferente.
3. Criar um JSON de configuração.
4. Conectar no **primário** e executar `rs.initiate(JSON_de_config)`.
5. Adicionar as outras *Replicas* caso não tenha as colocado no JSON de configuração.
6. Pronto.

## Árbitro

É um serviço que não possui a réplica dos dados e nem pode virar primário,mas tem poder do voto de Minerva, onde ele terá um poder decisivo na votação de qual *Replica* secundária deve virar primária.

### Comunicação

A única comunicação entre os árbitros e os outros membros da *ReplicaSet* são:

- votar durante eleições;
- heartbeats;
- dados de configuração.


###Por que usar?

Porque quando uma **Replica primária** cair o MongoDb deverá eleger uma **Replica secundária** para virar primária.

### Quando usar?

**Só adicione um árbitro em uma *ReplicaSet* com um número PAR de membros, para que o árbitro seja o desempate.**

![](https://docs.mongodb.org/manual/_images/replica-set-four-members-add-arbiter.png)

### Como usar?

Primeiramente crie um diretório que conterá os dados de configuração.

```
mkdir /data/arb
```

Depois precisa levantar o `mongod` utilizando `--replSet nomeDaReplicaSet` com seu diretório anteriormente criado.

```
mongod --port 30000 --dbpath /data/arb --replSet replica_set
```

Após levantar seu árbitro, conecte na *Replica* primária e adicione o árbitro criado com [rs.addArb()](https://docs.mongodb.org/manual/reference/method/rs.addArb/#rs.addArb):

```
rs.addArb("127.0.0.1:30000")
```


