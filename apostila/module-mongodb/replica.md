# Replica

Possuímos *Replicas* na maioria dos bancos de dados relacionais também, ela faz o espelhamento dos seus dados de um servidor para outro.

No MongoDb funciona da mesma forma, porém podemos replicar também os *Shards*.

![](./images/replica-sharding.png)

A replicação ocorre em 2 etapas:

- Initial Sync;
- Replication.

## Initial Sync

O Initial Syn ocorre no início, quando uma *Replica* copia todos os dados de outra. Uma *Replica* utiliza-se do Initial Sync quando ela é nova ou não tem nenhum dado ou possui dados mas está faltando o histórico de replicação.

Quando você executa um *Initial Sync* o MongoDb irá:

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

Agora vamos iniciar nossos processos do `mongod`, pare todos que você estiver rodando antes, com  os atributos do nosso servidor de *Replica*:

- --replSet: é o nome do nosso servidor

```
mongod --replSet replica_set --port 27017 --dbpath /data/rs1 --logpath /data/rs1/log.txt --fork
mongod --replSet replica_set --port 27018 --dbpath /data/rs2 --logpath /data/rs1/log.txt --fork
mongod --replSet replica_set --port 27019 --dbpath /data/rs3 --logpath /data/rs1/log.txt --fork
```

Eu executei os comandos acima de um script em shell:

```
./create-replicaset.sh
about to fork child process, waiting until server is ready for connections.
forked process: 8770
child process started successfully, parent exiting
about to fork child process, waiting until server is ready for connections.
forked process: 8773
child process started successfully, parent exiting
about to fork child process, waiting until server is ready for connections.
forked process: 8776
child process started successfully, parent exiting

```

Depois disso nossas *Replicas* estão rodando, para conferirmos vamos conectar em cada um e com isso já veremos qual é a primária e quais são as secundárias.

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

