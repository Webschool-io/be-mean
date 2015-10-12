## Teoria

Primeiramente preciso explicar o que é um banco NoSQL.

### NoSQL

Esse tipo de banco de dados já existe há um bom tempo, apenas não tinha essa nomenclatura, ela foi criada em 2009 em um evento sobre banco de dados não relacionais de código aberto e foi um enegnheiro do [Last.fm]() que cunhou, porém não siginifica que não podemos usar *SQL*, até porque alguns bancos NoSQL usam um *tipo* de *SQL*, então como ele deveria ser chamado?

> Bancos NoREL: Bancos Não Relacionais

Mas foi um golpe de marketing assim como o JavaScript também tem esse nome apenas para ter pego carona no Java, quando foi lançado.

Nesse universo de Banco de Dados NoSQL temos alguns grupos grandes com diversos bancos de dados e para as mais diversas finalidades, então vamos conhecer um pouco sobre eles para entender um pouco onde iremos nos enfiar. :p

Irei explicar um pouco dos seguintes grupos:

- Chave/Valor;
- Documento;
- Grafo;
- Coluna.

#### Chave/Valor

Esse tipo de banco de dados são utilizados em sua grande maioria para resolver o problema de cache, pois a estrutura que eles usam é bem simples, é a estrutura que temos em qualquer banco como **índice**.

Sabe quando você vai criar umm índice na sua tabela de banco de dados para que ela tenha maior velocidade nas buscas?

Então é a mesma coisa aqui, a estrutura de uma *entidade* nesse tipo de banco segue a seguinte regra:

```
chave: valor
```

Então com uma chave específica você acessará diretamente essa entidade que pode ser apenas: um número, uma palavra, um array, um objeto, qualquer coisa. Porém você só consegue acessar essa entidade e seus **valores** a partir da **chave**, logo você não possui uma busca pelos valores internos. Vou dar um exemplo simples em JavaScript:

```js
> var banco_chave_valor = [];
undefined
> var valor = {name: "Suissa", teacher: true};
undefined
> banco_chave_valor["minha-chave-unica-malandrinha"] = valor
{ name: 'Suissa', teacher: true }
> banco_chave_valor
[ 'minha-chave-unica-malandrinha': { name: 'Suissa', teacher: true } ]
```

O que fiz foi criar um *array* vazio em `banco_chave_valor` e depois crio uma entidade chamada `valor` contendo o seguinte objeto: `{ name: 'Suissa', teacher: true }` e atribuo esse valor à minha chave `minha-chave-unica-malandrinha`.

Agora caso estivermos em um banco de Chave/Valor nós só pode acessar os valores dessa entidade se buscarmos pela sua chave `minha-chave-unica-malandrinha` para depois acessar seus valores internamente:

```js
> var busca_entidade_malandrinha = banco_chave_valor['minha-chave-unica-malandrinha']
undefined
> busca_entidade_malandrinha
{ name: 'Suissa', teacher: true }
> busca_entidade_malandrinha.name
'Suissa'
```

Bem simples esse conceito não? E como a maioria desses banco funciona operando apenas na RAM, para depois persistir, no caso de alguns, são largamente utilizados para **cache**, nesse meio contamos com nomes como:

- [Redis]()
- [Riak]()
- [LevelDb]()

#### Documento

- [MongoDB]()
- [CouchDB]()

#### Grafo

- [Neo4J]()
- [Hypergraph]()
- [Levelgraph]()

#### Coluna

- [Cassandra]()
- [Hadoop/Hbase]()

#### Híbridos

- [ArangoDb]()
