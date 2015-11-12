# MongoDB - Aula 02 - Exercício
autor: Lucas Bento da Silva

## Listagem das databases (passo 2)
```
> show dbs
admin             (empty)
be-mean           0.078GB
be-mean-pokemons  0.078GB
local             0.078GB
test              (empty)
```

## Listagem das coleções (passo 3)
```
> show collections
pokemons
system.indexes
teste
```

## Cadastro dos pokemons (passo 4)
```
> var pokemons = [{
... name: 'Charizard',
... description: 'Dragão com fogo no rabo',
... type: 'fogo',
... attack: 84,
... defense: 78,
... height: 17
... }, {
... name: 'Bulbasaur',
... description: 'Parece um sapo fofinho',
... type: 'planta',
... attack: 63,
... defense: 80,
... height: 10
... }, {
... name: 'Blastoise',
... description: 'Tartaruga com armas',
... type: 'água',
... attack: 83,
... defense: 100,
... height: 16
... }, {
... name: 'Butterfree',
... description: 'Borboletinha',
... type: 'inseto',
... attack: 45,
... defense: 50,
... height: 11
... }, {
... name: 'Pidgey',
... description: 'Cabelo bonitão',
... type: 'ave',
... attack: 45,
... defense: 40,
... height: 3
... }]
> db.pokemons.insert(pokemons)
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 5,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```


## Lista dos pokemons (passo 5)
```
> var cursor = db.pokemons.find();
> while(cursor.hasNext()){ print(tojson(cursor.next())) }
{
        "_id" : ObjectId("5644860450339ebb379c812e"),
        "name" : "Charizard",
        "description" : "Dragão com fogo no rabo",
        "type" : "fogo",
        "attack" : 84,
        "defense" : 78,
        "height" : 17
}
{
        "_id" : ObjectId("5644860450339ebb379c812f"),
        "name" : "Bulbasaur",
        "description" : "Parece um sapo fofinho",
        "type" : "planta",
        "attack" : 63,
        "defense" : 80,
        "height" : 10
}
{
        "_id" : ObjectId("5644860450339ebb379c8130"),
        "name" : "Blastoise",
        "description" : "Tartaruga com armas",
        "type" : "água",
        "attack" : 83,
        "defense" : 100,
        "height" : 16
}
{
        "_id" : ObjectId("5644860450339ebb379c8131"),
        "name" : "Butterfree",
        "description" : "Borboletinha",
        "type" : "inseto",
        "attack" : 45,
        "defense" : 50,
        "height" : 11
}
{
        "_id" : ObjectId("5644860450339ebb379c8132"),
        "name" : "Pidgey",
        "description" : "Cabelo bonitão",
        "type" : "ave",
        "attack" : 45,
        "defense" : 40,
        "height" : 3
}
```

## Pikachu (passo 6)
```
> var pokemon = {
... name: 'Pikachu',
... description: 'Rato fofo com eletricidade',
... type: 'elétrico',
... attack: 55,
... defense: 40,
... height: 4
... };
> db.pokemons.insert(pokemon);
WriteResult({ "nInserted" : 1 })
```

## Atualização do Pikachu (passo 6)
```
> var poke = db.pokemons.findOne({name: 'Pikachu'})
> poke
{
        "_id" : ObjectId("5644881a50339ebb379c8133"),
        "name" : "Pikachu",
        "description" : "Rato fofo com eletricidade",
        "type" : "elétrico",
        "attack" : 55,
        "defense" : 40,
        "height" : 4
}
> poke.description = 'Rato zica'
Rato zica
> db.pokemons.save(poke);
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
