Esse tipo de banco de dados já existe há um bom tempo, apenas não tinha essa nomenclatura, ela foi criada em 2009 em um evento sobre banco de dados não relacionais de código aberto, organizado por Johan Oskarsson da [Last.fm](Last.fm) e foi um funcionário do [Rackspace](http://www.rackspace.com/), Eric Evans, que cunhou o termo. Porém não siginifica que, não podemos usar *SQL*, até porque alguns bancos NoSQL usam um *tipo* de *SQL*, então como ele deveria ser chamado?

> Bancos NoREL: Bancos Não Relacionais

Mas foi um golpe de marketing assim como o JavaScript também tem esse nome apenas para ter pego carona no Java, quando foi lançado.

Como sabemos os bancos relacionais são de propósito geral e qualquer coisa que é muito generalista, não consegue resolver um problema específico da melhor forma, para isso nós resolvemo-os com os banco NoSQL, bastante utilizados em projetos de [Business Inteligence](https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_empresarial), pois neles você tem essas 4 características:

- Velocidade de dados alta - lotes de dados que vêm muito rapidamente, possivelmente a partir de diferentes locais.
- Variedade de dados - armazenamento de dados que está estruturado, semi-estruturado e não estruturado.
- Volume de dados - dados que envolve muitos terabytes ou petabytes em tamanho.
- A complexidade dos dados - os dados que são armazenados e gerenciados em diferentes locais ou centros de dados.

#### Analogia

Eu faço uma analogia interessante sobre bancos de dados relacionais serem as cervejas de milho que encontramos aqui pelo Brasil e as cervejas artesanais serem os NoSQL.
As cervejas de milho você acha em qualquer boteco e qualquer um bebe, agora as cervejas artesanais apenas poucos com bom gosto o fazem, assim é com os bancos de dados ehhehheh.


#### Vantagens

Normalmente as empresas utilizam os bancos NoSQL quando possuem um banco de dados em franco crescimento e precisam escalar horizontalmente com performance.

#### Tipos

Nesse universo de Banco de Dados NoSQL temos alguns grupos grandes com diversos bancos de dados e para as mais diversas finalidades, então vamos conhecer um pouco sobre eles para entender um pouco onde iremos nos enfiar. :p

Irei explicar um pouco dos seguintes grupos:

- Chave/Valor;
- Documento;
- Grafo;
- Coluna.

#### Chave/Valor

![Visualização de um tipo chave-valor](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-key-value.png)

Esse tipo de banco de dados são utilizados em sua grande maioria para resolver o problema de cache, pois a estrutura que eles usam é bem simples, é a estrutura que temos em qualquer banco como **índice**.

Sabe quando você vai criar um índice na sua tabela de banco de dados para que ela tenha maior velocidade nas buscas?

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

Agora caso estivermos em um banco de Chave/Valor nós só podemos acessar os valores dessa entidade se buscarmos pela sua chave `minha-chave-unica-malandrinha` para depois acessarmos seus valores internamente:

```js
> var busca_entidade_malandrinha = banco_chave_valor['minha-chave-unica-malandrinha']
undefined
> busca_entidade_malandrinha
{ name: 'Suissa', teacher: true }
> busca_entidade_malandrinha.name
'Suissa'
```

Bem simples esse conceito não? E como a maioria desses bancos funcionam operando apenas na RAM, para depois persistir, no caso de alguns, são largamente utilizados para **cache**, nesse meio contamos com nomes como:

- [Redis](http://redis.io/)
- [Riak](http://basho.com/products/riak-kv/)
- [LevelDb](http://leveldb.org/)

##### Para que usar?

Cache.

#### Documento

![Visualização de um tipo documento](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-document.png)

Um banco baseado em documento se assemelha bastante ao chave/valor pois também possui aquela estrutura:

```
chave: valor
```

Porém desa vez também temos a busca pelos valores internos da nossa entidade persistida e para isso o MongoDB usa uma API bem simples e fácil de aprender que veremos a frente.

O tipo de documento em que o MongoDb é baseado é o JSON.

![meme Jason](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/meme-jason.jpg)

- [MongoDB](https://www.mongodb.org/)
- [CouchDB](http://couchdb.apache.org/)

##### Para que usar?

Modelagem complexa e buscas dinâmicas.

#### Grafo

![Visualização de um grafo](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-graph.png)

Um banco de dados orientado a [grafos](https://pt.wikipedia.org/wiki/Teoria_dos_grafos) possui um base na teoria matemática dos grafos, mas que não é nada difícil, precisamos apenas pensar nas entidades como pontos(vértices) e que elas podem se relacionar com com outras entidaes a partir de relações(arestas), como mostrado na imagem acima.

Esse tipo de banco é perfeito para redes sociais, caso você vá criar uma e não usar esse tipo de banco por favor **NUNCA DIGA QUE FOI MEU ALUNO**, LOL. Brincadeiras a parte, esse banco foi feito para isso, logo espero que o usem.

Cso você queira conhecer um pouco mais de um banco de grafos feito em Node.js eu escrevi esse artigo há algum tempo atrás [Levelgraph - Um banco de dados de Grafos para Node.js - Parte 1](http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/).

- [Neo4J](http://neo4j.com/)
- [GraphDb](http://ontotext.com/products/ontotext-graphdb/graphdb-standard/)
- [Levelgraph](http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/)

##### Para que usar?

Dados inter-relacionados.

#### Coluna

![Visualização de um tipo coluna](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-column.png)

Esse é o tipo que tive menos contato, confesso, logo não posso falar muito sobre além o do que li.

Esse modelo se tornou  popular através do paper BigTable do Google, com o objetivo de montar um sistema de armazenamento de dados distribuído, projetado para ter um alto grau de escalabilidade e de volume de dados

A forma em que os dados são modelados lembra muito o relacional, porém mais complexo, é formado basicamente de 3 componentes:

- Keyspace: tem como função agrupar um conjunto de Famílias de Colunas. Semelhante a um banco de dados relacional.

- Família de Colunas:  organizas as colunas. faz o uso de uma chave única, que traz flexibilidade ao modelo sem poluir as linhas com colunas nulas. Semelhante a uma tabela no modelo relacional.

- Coluna: que é uma tupla composta por nome,timestamp e valor, onde os dados são realmente armazenados.

- [Cassandra](http://cassandra.apache.org/)
- [Hbase](http://hbase.apache.org/)

##### Para que usar?

BI.

#### Híbridos

Depois dos 4 principais grupos ainda temos mais um que vem ganhando força, o dos bancos de dados híbridos, os 2 mais conhecidos são orientados por **documento e grafo**, o que os faz muito poderosos, pois a parte de relacionamento é o que peca no MongoDB e eu sempre aconselho a utilização de um banco de grafos para auxiliar nessa missão, agora você pode fazer as 2 coisas em 1 banco só, fiquem de olho pois são bem interessantes.

- [ArangoDb](https://www.arangodb.com/)
- [OrienteDB](http://orientdb.com/orientdb/)

##### Para que usar?

Modelagem complexa e interconectada.
