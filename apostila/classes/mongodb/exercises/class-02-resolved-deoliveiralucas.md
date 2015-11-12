# MongoDB - Aula 02 - Exercício
autor: Lucas de Oliveira

## Criando a database chamada be-mean-pokemon

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando quais databases possuo no servidor

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> show dbs
local              0.078GB
be-mean-instagram  0.203GB
be-mean            0.203GB
```

## Listando quais coleções possuo nessa database

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> show collections
pokemons        0.000MB / 0.012MB
system.indexes  0.000MB / 0.008MB
```

## Inserindo 5 pokemons

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save({
...     name: "Golduck",
...     description: "Often seen swim ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
...     attack: 82,
...     defense: 78,
...     height: "17"
... })
Inserted 1 record(s) in 0ms
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save({
...     name: "Mankey",
...     description: "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
...     attack: 80,
...     defense: 35,
...     height: "5"
... })
Inserted 1 record(s) in 0ms
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save({
...     name: "Primeape",
...     description: "When it becomes furious, its blood circulation becomes more robust, and its muscles are made stronger. But it also becomes much less intelligent.",
...     attack: 105,
...     defense: 60,
...     height: "10"
... })
Inserted 1 record(s) in 1ms
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save({
...     name: "Growlithe",
...     description: "A POKMON with a friendly nature. However, it will bark fiercely at anything invading its territory.",
...     attack: 70,
...     defense: 45,
...     height: "7"
... }
... )
Inserted 1 record(s) in 1ms
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save({
...     name: "Arcanine",
...     description: "This legendary Chinese POKEMON is considered magnif icent. Many people are enchanted by its grand mane.",
...     attack: 110,
...     defense: 80,
...     height: "19"
... })
Inserted 1 record(s) in 1ms
```

## Listando os pokemons existentes na coleção

```
-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56427d3334289cd2f8f7c21e"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56427d7534289cd2f8f7c21f"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56427d8734289cd2f8f7c220"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56427e8634289cd2f8f7c223"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("5642826f34289cd2f8f7c224"),
  "name": "Golduck",
  "description": "Often seen swim ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
  "attack": 82,
  "defense": 78,
  "height": "17"
}
{
  "_id": ObjectId("5642828534289cd2f8f7c225"),
  "name": "Mankey",
  "description": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
  "attack": 80,
  "defense": 35,
  "height": "5"
}
{
  "_id": ObjectId("5642829a34289cd2f8f7c226"),
  "name": "Primeape",
  "description": "When it becomes furious, its blood circulation becomes more robust, and its muscles are made stronger. But it also becomes much less intelligent.",
  "attack": 105,
  "defense": 60,
  "height": "10"
}
{
  "_id": ObjectId("564282b134289cd2f8f7c227"),
  "name": "Growlithe",
  "description": "A POKMON with a friendly nature. However, it will bark fiercely at anything invading its territory.",
  "attack": 70,
  "defense": 45,
  "height": "7"
}
{
  "_id": ObjectId("564282c234289cd2f8f7c228"),
  "name": "Arcanine",
  "description": "This legendary Chinese POKEMON is considered magnif icent. Many people are enchanted by its grand mane.",
  "attack": 110,
  "defense": 80,
  "height": "19"
}
Fetched 9 record(s) in 3ms
```

## Buscando o pokemons e adicionando na variável `poke`

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> var poke = db.pokemons.findOne({name: 'Golduck'});
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> poke
{
  "_id": ObjectId("5642826f34289cd2f8f7c224"),
  "name": "Golduck",
  "description": "Often seen swim ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
  "attack": 82,
  "defense": 78,
  "height": "17"
}
```

## Modificando a `description` e salvando

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> poke.description = 'This legendary jamaican POKEMON smokes weed everyday'
This legendary jamaican POKEMON smokes weed everyday
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.findOne({name: 'Golduck'});
{
  "_id": ObjectId("5642826f34289cd2f8f7c224"),
  "name": "Golduck",
  "description": "This legendary jamaican POKEMON smokes weed everyday",
  "attack": 82,
  "defense": 78,
  "height": "17"
}
```
