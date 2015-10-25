This kind of database exists for a while now, it just didn't have this name. The term was created in 2009 by Eric Evans, a former worker at [Rackspace](http://www.rackspace.com/), in an event organized by Johan Oskarsson from [Last.fm](Last.fm).
It doesn't mean that we can't use *SQL* in NoSQL. Some NoSQL database uses a *kind* of *SQL*. So how should we call? A better term would be:

> NoREL database: No Relational database

Historically NoSql was a good term because gave visibility to this kind of database. It was a good marketing, like JavaScript be named after Java.

As we know, relationals database have broad perspective, and everything that is generalist can't solve a specific problem in the best way possible. For this kind of specific problem we use NoSQL database, widely used in business intelligence projects.
NoSQL have 4 main characteristics.

- High Speed Data: lots of data coming very quickly, possibly from different locations.
- Different kind of data: data storage that is structured, semi-structured and unstructured.
- Data Volume: data involving many terabytes or petabytes in size.
- High Complexity of Data: Data is stored and managed in different locations or data centers.

#### Analogy

I do an interesting analogy about relationals database are the corn beer we find here in Brazil and handmade beers are the
NoSQL database.
Corn beer you find in any pub and anyone can drink, now the handmade beers only a few tastefully do, so it is with the databases. hehehehe.

#### Advantages

Usually companies use NoSQL when they have a database growing real fast and need to scale horizontally with perfomance.

#### Groups

Divisions inside NoSQL database is made by its core, how it handle the data. Let's learn about some of them to understand where we are getting into. :P

I'm going to explain a little about the following groups:

- Key/Value pair store
- Documents store
- Graph store
- Collumn store

#### Key/Value Pair Store

![image key-value type](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-key-value.png)

This type of database is used mostly to solve cache problems, because the structure they use is so simple. Is the structure we have in any database as **index**.

You know when when you will create an index in your database table so that it has greater speed in searches?
So it's the same here! The rule of an *entity* in this kind of database follows the following rule:

```
key: value
```

So with a particular key you will access directly the entity that can only be: ANYTHING! A number, a word, an array, an object, etc. But you can only access this entity and its values **value** from his **key**, so you don't have to search in-depth for inner values. I will give a simple example in JavaScript.

```js
> var database_key_value = [];
undefined
> var value = {name: "Suissa", teacher: true};
undefined
> database_key_value['my-unique-smartass-key'] = value  
{ name: 'Suissa', teacher: true }
> database_key_value
[ 'my-unique-smartass-key': { name: 'Suissa', teacher: true } ]
```

What i did was create an empty *array* named 'my-unique-smartass-key' and then create an entity called 'value' containing the following object '{ name: 'Suissa', teacher: true }' and assign this value to my key 'my-unique-smartass-key'.

Now if we are in a key/value database we can only access the values of that entity is seeking for its key 'my-unique-smartass-key' and then we access its internal values.

```js
> var get_my-unique-smartass-key = database_key_value['my-unique-smartass-key']
undefined
> get_my-unique-smartass-key
{ name: 'Suissa', teacher: true }
> get_my-unique-smartass-key.name
'Suissa'
```
Pretty simple this concept right? Most of this database operate only using RAM, only then they persist. In some cases they are widely used for **cache**.

Some examples:

- [Redis](http://redis.io/)
- [Riak](http://basho.com/products/riak-kv/)
- [LevelDb](http://leveldb.org/)

##### What for?

Cache.

#### Document Store

![image document type](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-document.png)

A document based database is quite similar to the key/value because it also has this structure:

```
key: value
```

But this time we also have to search to inner values of our persisted entity. For this MongoDB use a simple API and easy to learn.
MongoDB is based in a kind of document type, JSON.

![meme Jason](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/meme-jason.jpg)

- [MongoDB](https://www.mongodb.org/)
- [CouchDB](http://couchdb.apache.org/)

##### What for?

Complex modelling and dinamic search.

#### Graph

![image of graph](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-graph.png)

A  graph oriented database  has a base in mathematical graph theory, but that is not at all difficult, we need only to think of entities as points (vertices) and that they can relate to others entities from relationships (edges) as shown in the image above.

This kind of database is perfect for social network, if you will create one and don't use this kind of database please **NEVER SAY YOU WERE MY STUDENT**, Lol. Jokes aside, this database was made for this, so I hope you use it.

If you want to know a little more about a graph dataase made in Node.js, I wrote this article some time ago  [Levelgraph - Um banco de dados de Grafos para Node.js - Parte 1](http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/).

- [Neo4J](http://neo4j.com/)
- [GraphDb](http://ontotext.com/products/ontotext-graphdb/graphdb-standard/)
- [Levelgraph](http://nomadev.com.br/levelgraph-um-banco-de-dados-de-grafos-para-node-js/)

##### What for?

Interrelated data.

#### Collumn Store

![image collumn type](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/nosql-type-column.png)

I confess that that's the kind I had less contact, so I can't say much about it.
This model became popular through the Google BigTable paper aiming setting up a data storage distributed system, designed to have a high degree of scalability and data volume.

The manner in which the data is modeled closely resembles the relational but more complex, it is basically formed of three components:

- Keyspace: his function is to group a set of columns for Families. Similar to a relational database.

- Collumns Family: you organize the columns. It makes use of a single key, which brings flexibility to the design without polluting the rows with zero columns. Similar to a table in the relational model.

- Column: which is a tuple consisting of name, and timestamp value, where the data is actually stored.

- [Cassandra](http://cassandra.apache.org/)
- [Hbase](http://hbase.apache.org/)

##### What for?

BI.

#### Hybrids

After the four main groups still have another that has been gaining strength. Hybrid databases, the two best known are **document and graph** oriented. Which makes them very powerful, because the relationship part is the disadvantage in MongoDB and I always advise the use of a graph database to assist in this mission. Now you can do 2 things in one database alone, keep an eye because they are very interesting

- [ArangoDb](https://www.arangodb.com/)
- [OrienteDB](http://orientdb.com/orientdb/)

##### What for?

Complex and interconnected modeling.
