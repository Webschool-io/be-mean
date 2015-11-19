# Sharding

Precisamos entender como é a arquitetura de um cluster com MongoDB, nele possuímos 3 serviços diferentes que são:

- shards
- config servers
- router

![](https://camo.githubusercontent.com/602f5193c627a0314bd8695ac3ba07d3d866d18a/687474703a2f2f646f63732e6d6f6e676f64622e6f72672f6d616e75616c2f5f696d616765732f736861726465642d636c75737465722e706e67)

## Shards

Cada shard é uma instância do MongoDb que guarda um pedaço dos dados da coleção.

## Config Servers

Cada config server é uma instância do MongoDb que guarda os metadados sobre o cluster. Os metadados mapeiam os pedaços de dados para os shards.

## Router

Cada router é uma instância mongos que faz o roteamento das escritas e leituras para os shards. A aplicação não acessa diretamente os shards.

