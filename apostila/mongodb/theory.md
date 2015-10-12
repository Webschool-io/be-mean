## Teoria

Primeiramente preciso explicar o que é um banco NoSQL, eu já me enveredo por esse meio desde 2010 quando comecei a estudar MongoDb e CouchDb, acabando por optar pelo MongoDB, uma prova que faz tempo que escrevo e ensino sobre o assunto é este artigo [NoSQL – você realmente sabe do que estamos falando?](http://imasters.com.br/artigo/17043/banco-de-dados/nosql-voce-realmente-sabe-do-que-estamos-falando/?trace=1519021197&source=author-archive) de 28 de maio de 2010, publicado no iMasters, que por sinal foi a inauguração da área de NoSQL que eu gerenciava, sendo um dos primeiros artigos sobre MongoDb escritos por aqui.

Desde lá para cá eu ja testei inúmeros bancos, porém o mais simples e adptável ao JavaScript, para mim, foi o MongoDB, por isso continuei trabalhando nele. Mas nunca deixando de estudar sempre as novidades, pior exemplo bancos de dados híbridos que são orientados tando a documento como grafo.

E eu sempre evangelizo que não devemos usar apenas **1** banco de dados NoSQL e sim alguns, pois cada um resolve um problema diferente, explico melhor esse conceito nesse artigo [NoSQL - Arquitetura híbrida para uma rede social](http://nomadev.com.br/nosql-arquitetura-h%C3%ADbrida-para-uma-rede-social/).

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

Como sabemos os bancos relacionais são de propósito geral e qualquer coisa que é muito generalista, não consegue resolver um problea específico da melhor forma, para isso nós resolvemo-os com os banco NoSQL.

#### Analogia

Eu faço uma analogia interessante sobre bancos de dados relacionais serem as cervejas de milho que encontramos aqui pelo Brasil e as cervejas artesanais.

As cervejas de milho você acha em qualquer boteco e qualquer um bebe, agora as cervejas artesanais apenas poucos com bom gosto o fazem, assim é com os bancos de daods ehhehheh.

#### Chave/Valor

![Visualização de um tipo chave-valor](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-key-value.png)

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

Um banco de dados orientado a [grafos]() possui um base na teoria matemática dos grafos, mas que não é nada difícil, precisamos apenas pensar nas entidades como pontos(vértices) e que elas podem se relacionar com com outras entidaes a partir de relações(arestas), como mostrado na imagem acima.

Esse tipo de banco é perfeito para redes sociais, caso você vá criar uma e não usar esse tipo de banco por favor **NUNCA DIGA QUE FOI MEU ALUNO**, LOL. Brincadeiras a parte, esse banco foi feito para isso.

- [Neo4J](http://neo4j.com/)
- [GraphDb](http://ontotext.com/products/ontotext-graphdb/graphdb-standard/)
- [Levelgraph](http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/)

##### Para que usar?

Dados inter-relacionados.

#### Coluna

![Visualização de um tipo coluna](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-column.png)

- [Cassandra](http://cassandra.apache.org/)
- [Hbase](http://hbase.apache.org/)

##### Para que usar?

BI.

#### Híbridos

- [ArangoDb](https://www.arangodb.com/)
- [OrienteDB]()

##### Para que usar?

Modelagem complexa e interconectada.
