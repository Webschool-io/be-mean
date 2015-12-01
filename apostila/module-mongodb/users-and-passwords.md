# Usuários e Senhas

O MongoDb trabalha os usuários definindo quais seus papéis/funções (roles) no sistema.

MongoDB concede acesso a dados e comandos através de autorização baseada em funções(roles) e fornece papéis integrados que fornecem os diferentes níveis de acesso. Além disso, você pode criar papéis definidos pelo usuário.

A função concede privilégios para executar conjuntos de [ações](https://docs.mongodb.org/manual/reference/privilege-actions/#security-user-actions) sobre os [recursos](https://docs.mongodb.org/manual/reference/resource-document/#resource-document) definidos. Um papel é aplicado ao banco de dados no qual ele está definido e pode conceder acesso a um nível de coleção.

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
- [grantRolesToUser](): concede um papel e seus privilégios de um usuário;
- [revokeRolesFromUser](): remove um papel de um usuário;
- [usersInfo](): retorna a informção de um usuário específico.

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

## Funções de Administração de Cluster


## Ações Privilegiadas



