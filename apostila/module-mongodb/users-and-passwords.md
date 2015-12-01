# Usuários e Senhas

O MongoDb trabalha os usuários definindo quais seus papéis/funções (roles) no sistema.

MongoDB concede acesso a dados e comandos através de autorização baseada em funções(roles) e fornece papéis integrados que fornecem os diferentes níveis de acesso. Além disso, você pode criar papéis definidos pelo usuário.

A função concede privilégios para executar conjuntos de [ações](https://docs.mongodb.org/manual/reference/privilege-actions/#security-user-actions) sobre os [recursos](https://docs.mongodb.org/manual/reference/resource-document/#resource-document) definidos. Um papel é aplicado ao banco de dados no qual ele está definido e pode conceder acesso a um nível de coleção.

## usersInfo

Retorna informações sobre um ou mais usuários. Para corresponder a um único usuário no banco de dados, utilize o seguinte modelo:

```
{ usersInfo: { user: <name>, db: <db> },
  showCredentials: <Boolean>,
  showPrivileges: <Boolean>
}
```

#### Exemplo

Esse resultado aqui é após eu inserir o usuário **"suissa"** que está nesse conteúdo mais para frente.

Vamos ver a listagem dos usuários nessa database com `{ usersInfo: 1 }`:

```
db.runCommand( { usersInfo: 1 } )
{
  "users": [
    {
      "_id": "be-mean.suissa",
      "user": "suissa",
      "db": "be-mean",
      "customData": {
        "teacher": true
      },
      "roles": [
        {
          "role": "clusterAdmin",
          "db": "admin"
        },
        {
          "role": "readAnyDatabase",
          "db": "admin"
        },
        {
          "role": "readWrite",
          "db": "be-mean"
        }
      ]
    }
  ],
  "ok": 1
}

```

E se eu quiser ver minhas credenciais e privilégios? Basta passar `showCredentials: true` e `showPrivileges: true` como visto abaixo:

```
db.runCommand({ usersInfo: { user: "suissa", db: "be-mean" },
  showCredentials: true,
  showPrivileges: true
})
{
  "users": [
    {
      "_id": "be-mean.suissa",
      "user": "suissa",
      "db": "be-mean",
      "credentials": {
        "SCRAM-SHA-1": {
          "iterationCount": 10000,
          "salt": "dEZ9uFr0kohyUpcpLIAUxg==",
          "storedKey": "O7g9QIXYFXUNHx0X/N85GjEv5xo=",
          "serverKey": "Fl4e9/r5EHTKbPuTcLEJNqjK8L4="
        }
      },
      "customData": {
        "teacher": true
      },
      "roles": [
        {
          "role": "clusterAdmin",
          "db": "admin"
        },
        {
          "role": "readAnyDatabase",
          "db": "admin"
        },
        {
          "role": "readWrite",
          "db": "be-mean"
        }
      ],
      "inheritedRoles": [
        {
          "role": "readWrite",
          "db": "be-mean"
        },
        {
          "role": "readAnyDatabase",
          "db": "admin"
        },
        {
          "role": "clusterAdmin",
          "db": "admin"
        }
      ],
      "inheritedPrivileges": [
        {
          "resource": {
            "cluster": true
          },
          "actions": [
            "addShard",
            "appendOplogNote",
            "applicationMessage",
            "cleanupOrphaned",
            "connPoolStats",
            "connPoolSync",
            "cpuProfiler",
            "cursorInfo",
            "diagLogging",
            "flushRouterConfig",
            "fsync",
            "getCmdLineOpts",
            "getLog",
            "getParameter",
            "getShardMap",
            "hostInfo",
            "inprog",
            "invalidateUserCache",
            "killop",
            "listDatabases",
            "listShards",
            "logRotate",
            "netstat",
            "removeShard",
            "replSetConfigure",
            "replSetGetConfig",
            "replSetGetStatus",
            "replSetStateChange",
            "resync",
            "serverStatus",
            "setParameter",
            "shardingState",
            "shutdown",
            "top",
            "touch",
            "unlock"
          ]
        },
        {
          "resource": {
            "db": "",
            "collection": ""
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "dropDatabase",
            "enableSharding",
            "find",
            "getShardVersion",
            "killCursors",
            "listCollections",
            "listIndexes",
            "moveChunk",
            "planCacheRead",
            "repairDatabase",
            "splitChunk",
            "splitVector"
          ]
        },
        {
          "resource": {
            "db": "config",
            "collection": ""
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "anyResource": true
          },
          "actions": [
            "listCollections"
          ]
        },
        {
          "resource": {
            "db": "config",
            "collection": "system.indexes"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "config",
            "collection": "system.js"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "config",
            "collection": "system.namespaces"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "local",
            "collection": "system.replset"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "",
            "collection": "system.profile"
          },
          "actions": [
            "find"
          ]
        },
        {
          "resource": {
            "db": "config",
            "collection": "settings"
          },
          "actions": [
            "insert",
            "remove",
            "update"
          ]
        },
        {
          "resource": {
            "db": "",
            "collection": "system.indexes"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "",
            "collection": "system.js"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "",
            "collection": "system.namespaces"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "be-mean",
            "collection": ""
          },
          "actions": [
            "collStats",
            "convertToCapped",
            "createCollection",
            "createIndex",
            "dbHash",
            "dbStats",
            "dropCollection",
            "dropIndex",
            "emptycapped",
            "find",
            "insert",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead",
            "remove",
            "renameCollectionSameDB",
            "update"
          ]
        },
        {
          "resource": {
            "db": "be-mean",
            "collection": "system.indexes"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        },
        {
          "resource": {
            "db": "be-mean",
            "collection": "system.js"
          },
          "actions": [
            "collStats",
            "convertToCapped",
            "createCollection",
            "createIndex",
            "dbHash",
            "dbStats",
            "dropCollection",
            "dropIndex",
            "emptycapped",
            "find",
            "insert",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead",
            "remove",
            "renameCollectionSameDB",
            "update"
          ]
        },
        {
          "resource": {
            "db": "be-mean",
            "collection": "system.namespaces"
          },
          "actions": [
            "collStats",
            "dbHash",
            "dbStats",
            "find",
            "killCursors",
            "listCollections",
            "listIndexes",
            "planCacheRead"
          ]
        }
      ]
    }
  ],
  "ok": 1
}

```

Caso deseje ver vários usuários ao mesmo tempo basta passá-los em um array: `[{ user: "suissa", db: "be-mean" }, { user: "sayaman", db: "be-mean" }]`

Para você conferir todos os papéis de um banco de dados basta rodar o seguinte comando:

```
db.getRoles({ rolesInfo: 1, showBuiltinRoles: true })
[
  {
    "role": "dbAdmin",
    "db": "test",
    "isBuiltin": true,
    "roles": [ ],
    "inheritedRoles": [ ]
  },
  {
    "role": "dbOwner",
    "db": "test",
    "isBuiltin": true,
    "roles": [ ],
    "inheritedRoles": [ ]
  },
  {
    "role": "read",
    "db": "test",
    "isBuiltin": true,
    "roles": [ ],
    "inheritedRoles": [ ]
  },
  {
    "role": "readWrite",
    "db": "test",
    "isBuiltin": true,
    "roles": [ ],
    "inheritedRoles": [ ]
  },
  {
    "role": "userAdmin",
    "db": "test",
    "isBuiltin": true,
    "roles": [ ],
    "inheritedRoles": [ ]
  }
]

```

Com o `rolesInfo: 1` você traz todos os papéis criados pelo usuário, nesse caso nenhum, e `showBuiltinRoles: true` mostra os papéis já integrados bem como as definidas pelo usuário.

Tod a informação de autenticação e autorização de usuários fica na coleção `system.users` no banco de dados `admin`. Para gerenciar essa coleção o MongoDB nos provê os [comandos de gerenciamento de usuários](https://docs.mongodb.org/manual/reference/command/#user-management-commands).

## Comandos de gerenciamento de usuários

- [createUser](https://docs.mongodb.org/manual/reference/command/createUser/#dbcmd.createUser): cria um novo usuário;
- [updateUser](https://docs.mongodb.org/manual/reference/command/updateUser/#dbcmd.updateUser): atualiza os dados do usuário;
- [dropUser](https://docs.mongodb.org/manual/reference/command/dropUser/#dbcmd.dropUser): remove um único usuário;
- [dropAllUsersFromDatabase](https://docs.mongodb.org/manual/reference/command/dropAllUsersFromDatabase/#dbcmd.dropAllUsersFromDatabase): remove **todos** os usuário da *database*;
- [grantRolesToUser](https://docs.mongodb.org/manual/reference/command/grantRolesToUser/#dbcmd.grantRolesToUser): concede um papel e seus privilégios de um usuário;
- [revokeRolesFromUser](https://docs.mongodb.org/manual/reference/command/revokeRolesFromUser/#dbcmd.revokeRolesFromUser): remove um papel de um usuário;
- [usersInfo](https://docs.mongodb.org/manual/reference/command/usersInfo/#dbcmd.usersInfo): retorna a informção de um usuário específico.

### createUser

Cria um novo usuário no banco de dados onde você executa o comando. O comando `createUser` retorna um erro de usuário duplicado se o usuário existir. O comando `createUser` usa a seguinte sintaxe:

```
{ createUser: "<name>",
  pwd: "<cleartext password>",
  customData: { <any information> },
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ],
  digestPassword: boolean, //opcional
  writeConcern: { <write concern> }
}
```

#### Acesso Requerido

Para criar um novo usuário em um banco de dados, você deve ter ação `createUser` nesse banco de dados.
Para conceder funções a um usuário, você deve ter a ação `grantRole` no banco de dados onde existe esse papel.

#### Exemplo

E para executá-lo precisamos usar a função `runCommand` como visto abaixo:

```
db.runCommand( { createUser: "suissa",
  pwd: "SuisseraManoVeio",
  customData: { teacher: true },
  roles: [
     { role: "clusterAdmin", db: "admin" },
     { role: "readAnyDatabase", db: "admin" },
     "readWrite"
   ],
  writeConcern: { w: "majority" , wtimeout: 5000 }
} )
{
  "ok": 1
}
```

Perceba que usamos a função [getSiblingDB](https://docs.mongodb.org/manual/reference/method/db.getSiblingDB/), ela é apenas um atalho para `use be-mean` porém já podemos executar o comando diretamente após essa função. Ela é interessante quando você precisa dar comandos em outras databases mas não quer sair da sua atual.

Caso deseje criar um usuário sem nenhum papel ainda basta passar um array vazio para `roles`.

Os dois primeiros papéis estamos evidenciando que eles existem na *database* `admin`:

```
{ role: "clusterAdmin", db: "admin" },
{ role: "readAnyDatabase", db: "admin" }
```

E o último papel, `"readWrite"`, está evidenciando que é na *database* onde estou rodando o comando, no caso `be-mean` pois nós a escolhemos antes com `db.getSiblingDB('be-mean')`

Caso você deseje que o MongoDb gere um *hash* como senha, basta passar o `digestPassword` como `true`.



### updateUser

Atualiza o perfil do usuário no banco de dados no qual você executa o comando. Uma atualização para um campo substitui completamente os valores do campo anterior, incluindo alterações no array de papéis do usuário.

O comando `updateUser` usa a seguinte sintaxe. Para atualizar um usuário, você deve especificar o campo `updateUser` e pelo menos um outro campo, exceto writeConcern:

```
{ updateUser: "<username>",
  pwd: "<cleartext password>",
  customData: { <any information> },
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ],
  writeConcern: { <write concern> }
}
```

#### Exemplo

```
db.runCommand( { updateUser: "suissa",
  customData: { teacher: false } )
{
  "ok": 1
}
```

#### CUIDADO

Quando você atualizar o array de papéis, você substituirá completamente os valores do array anterior. Para adicionar ou remover funções sem substituir todas as funções existentes do usuário, utilize os comandos [grantRolesToUser](https://docs.mongodb.org/manual/reference/command/grantRolesToUser/#dbcmd.grantRolesToUser) ou [revokeRolesFromUser](https://docs.mongodb.org/manual/reference/command/revokeRolesFromUser/#dbcmd.revokeRolesFromUser).

### dropUser

Remove o usuário do banco de dados no qual você executa o comando. O comando `dropUser` tem a seguinte sintaxe:

```
{
  dropUser: "<user>",
  writeConcern: { <write concern> }
}
```

#### Acesso Requerido

Você deve ter a ação `dropUser` em um banco de dados para remover um usuário de banco de dados.

#### Exemplo

```
db.runCommand( { updateUser: "suissa",
   writeConcern: { w: "majority", wtimeout: 5000 }
})
{
  "ok": 1
}
```

### dropAllUsersFromDatabase

Remove todos os usuários do banco de dados no qual você executa o comando.

O comando `dropAllUsersFromDatabase` segue a seguinte sintaxe:

```
{ dropAllUsersFromDatabase: 1,
  writeConcern: { <write concern> }
}
```

#### Acesso Requerido

Você deve ter a ação `dropUser` em um banco de dados para remover um usuário de banco de dados.

#### Exemplo

```
db.runCommand( { dropAllUsersFromDatabase: 1, writeConcern: { w: "majority" } } )
{
  "n": 1,
  "ok": 1
}
```

Onde `n` é o número de usuário removidos.

### grantRolesToUser

Adiciona papéis adicionais a um usuário.

O comando `grantRolesToUser` usa a seguinte sintaxe:

```
{ grantRolesToUser: "<user>",
  roles: [ <roles> ],
  writeConcern: { <write concern> }
}
```

#### Acesso Requerido

Você deve ter a ação `grantRole` em um banco de dados para adicionar um papel a um usuário do banco de dados.

#### Exemplo

```
db.runCommand( { grantRolesToUser: "OutroUser",
  roles: [
    { role: "read", db: "be-mean"},
    "readWrite"
  ],
  writeConcern: { w: "majority" , wtimeout: 2000 }
 })
```

### revokeRolesFromUser

Remove a uma ou mais funções de um usuário no banco de dados, onde existem os papéis. O comando revokeRolesFromUser usa a seguinte sintaxe:

```
{ revokeRolesFromUser: "<user>",
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ],
  writeConcern: { <write concern> }
}
```


#### Acesso Requerido

Você deve ter a ação `grantRole` em um banco de dados para adicionar um papel a um usuário do banco de dados.

#### Exemplo

```
db.runCommand( { grantRolesToUser: "OutroUser",
  roles: [
    { role: "read", db: "be-mean"},
    "readWrite"
  ],
  writeConcern: { w: "majority" , wtimeout: 2000 }
 })
```

## Funções de banco de dados de usuários

Cada banco de dados inclui os seguintes papéis de cliente:

### read

- [dbHash](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbHash)
- [dbStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbStats)
- [find](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.find)
- [killCursors](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.killCursors)
- [listIndexes](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listIndexes)
- [listCollections](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listCollections)

### readWrite

- [collStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.collStats)
- [convertToCapped](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.convertToCapped)
- [createCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createCollection)
- [dbHash](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbHash)
- [dbStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbStats)
- [dropCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropCollection)
- [createIndex](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createIndex)
- [dropIndex](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropIndex)
- [emptycapped](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.emptycapped)
- [find](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.find)
- [insert](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.insert)
- [killCursors](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.killCursors)
- [listIndexes](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listIndexes)
- [listCollections](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listCollections)
- [remove](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.remove)
- [renameCollectionSameDB](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.renameCollectionSameDB)
- [update](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.update)

## Funções de administração de banco de dados

Cada banco de dados inclui as seguintes funções de administração de banco de dados:

### dbAdmin

- [dbHash](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbHash)
- [dbStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbStats)
- [find](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.find)
- [killCursors](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.killCursors)
- [listIndexes](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listIndexes)
- [listCollections](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.listCollections)
- [dropCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropCollection) e [createCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createCollection) em [system.profile](https://docs.mongodb.org/manual/reference/system-collections/#<database>.system.profile) apenas

*\*system.profile é uma coleção que armazena as informações dos perfis.*

### readWrite

- [collMod](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.collMod)
- [collStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.collStats)
- [compact](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.compact)
- [convertToCapped](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.convertToCapped)
- [createCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createCollection)
- [createIndex](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createIndex)
- [dbStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dbStats)
- [dropCollection](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropCollection)
- [dropDatabase](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropDatabase)
- [dropIndex](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropIndex)
- [enableProfiler](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.enableProfiler)
- [indexStats](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.indexStats)
- [reIndex](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.reIndex)
- [renameCollectionSameDB](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.renameCollectionSameDB)
- [repairDatabase](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.repairDatabase)
- [storageDetails](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.storageDetails)
- [validate](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.validate)

### dbOwner

The database owner can perform any administrative action on the database. This role combines the privileges granted by the readWrite, dbAdmin and userAdmin roles.

O **dbOwner** pode executar qualquer ação administrativa no banco de dados. Este papel combina os privilégios concedidos pelos papéis **readWrite**, **dbAdmin** e **userAdmin**.

### userAdmin

Oferece a capacidade de criar e modificar funções e usuários no banco de dados atual. Essa função também fornece indiretamente acesso de superusuário para qualquer banco de dados. O papel **userAdmin** permite aos usuários conceder qualquer privilégio para qualquer usuário, incluindo-se.

O **userAdmin** possui as seguintes ações:

- [changeCustomData](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.changeCustomData)
- [changePassword](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.changePassword)
- [createRole](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createRole)
- [createUser](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.createUser)
- [dropRole](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropRole)
- [dropUser](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.dropUser)
- [grantRole](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.grantRole)
- [revokeRole](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.revokeRole)
- [viewRole](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.viewRole)
- [viewUser](https://docs.mongodb.org/manual/reference/privilege-actions/#authr.viewUser)



## Ações de Privilégio

Ações de privilégio definem as operações que um usuário pode executar em um recurso. Um privilégio no MongoDB dispõe de um recurso e as ações permitidas. 

Como são muitas ações esse material ficaria muito grande para essa aula, **porém futuramente pretendo colocar toda a informação aqui.** Por hora veja na [documentação oficial](https://docs.mongodb.org/manual/reference/privilege-actions/#security-user-actions) o que cada ação pode fazer.



Existem **MUITO MAIS COMANDOS DE GERENCIAMENTO** [aqui em Database Commands](https://docs.mongodb.org/manual/reference/command/#user-management-commands).

