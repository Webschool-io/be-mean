## MongoDb Cliente

### mongo-hacker

O [mongo-hacker](https://github.com/TylerBrock/mongo-hacker) é uma extensão para seu terminal que adiciona algumas funcionalidades a mais, como por exemplo *syntax highlighter*, vou mostrar como é no meu terminal:


![Visualização do terminal rodando o mongo-hacker](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/mongo-hacker-terminal.png)

### Database

Para listarmos nossas *databases* precisamos apenas executar o seguinte comando no cliente do MongoDb:

```
show dbs
admin          (empty)
```

E aparecerá a listagem das *databases* existentes.

Agora vamos criar o nosso banco para iniciar o nosso Instagram, execute o seguinte comando:

```
use be-mean-instagram
switched to db be-mean-instagram
```

Onde `be-mean-instagram` é o nome do nosso banco e ele está referenciado na variável `db`, então se quiser ver qual banco de dados estamos usando basta você executar `db` no cliente:

```
db
be-mean-instagram
```





perceba que o banco `database-test` que possuo já possui `0.078GB` de tamanho, porém não contém **nenhum** dado.

### Collection

### Import

### Export

### Replica

### Sharding

### GridFs
