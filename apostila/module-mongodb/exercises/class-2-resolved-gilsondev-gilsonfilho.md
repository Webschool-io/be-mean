# MongoDB - Aula 02 - Exercício

Autor: Gilson Filho


## 1. Criando database *be-mean-pokemons*

```bash
test> use be-mean-pokemons
switched to db be-mean-pokemons
be-mean-pokemons>
```

## 2. Listando os database disponíveis localmente

```bash
be-mean-pokemons> show dbs
test               0.078GB
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
```

## 3. Listando collections no database selecionado

```bash
be-mean-pokemons> show collections
be-mean-pokemons>

be-mean-pokemons> use be-mean-instagram
switched to db be-mean-instagram
be-mean-instagram> show collections
collection_resized  0.000MB / 0.008MB
other               0.000MB / 0.008MB
pokemons            0.000MB / 0.008MB
system.indexes      0.000MB / 0.008MB
test                0.000MB / 0.008MB
```

## 4. Inserindo 5 pokemons de sua escolha, usando o mesmo padrão

O padrão é:

 - name
 - description
 - attack
 - defense
 - height

```bash
be-mean-pokemons> var pokemon = {name: "Bulbasaur", description: "Pokemon monstro", attack: 65, defense: 65, height: 15.21}
be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 54ms
WriteResult({
  "nInserted": 1
})

be-mean-pokemons> var pokemon = {name: "Weedle", description: "Larva venenosa", attack: 35, defense: 30, height: 32}
be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

be-mean-pokemons> var pokemon = {name: "Pikachu", description: "Bicho eletrico", attack: 35, defense: 30, height: 15}
be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

be-mean-pokemons> var pokemon = {name: "Ekans", description: "Cobrinha pokemon", attack: 60, defense: 44, height: 69}
be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

be-mean-pokemons> var pokemon = {name: "Wigglytuff", description: "Pokemon cantora", attack: 70, defense: 45, height: 10}
be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
```

## Listando os pokemons existentes na coleção

```bash
be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643b3a651c49d83153a4bf5"),
  "name": "Bulbasaur",
  "description": "Pokemon monstro",
  "attack": 65,
  "defense": 65,
  "height": 15.21
}
{
  "_id": ObjectId("5643b42f51c49d83153a4bf6"),
  "name": "Weedle",
  "description": "Larva venenosa",
  "attack": 35,
  "defense": 30,
  "height": 32
}
{
  "_id": ObjectId("5643b55451c49d83153a4bf7"),
  "name": "Pikachu",
  "description": "Bicho eletrico",
  "attack": 35,
  "defense": 30,
  "height": 15
}
{
  "_id": ObjectId("5643b55d51c49d83153a4bf8"),
  "name": "Ekans",
  "description": "Cobrinha pokemon",
  "attack": 60,
  "defense": 44,
  "height": 69
}
{
  "_id": ObjectId("5643b56351c49d83153a4bf9"),
  "name": "Wigglytuff",
  "description": "Pokemon cantora",
  "attack": 70,
  "defense": 45,
  "height": 10
}
```

## 6. Busque o pokemon de sua escolha, pelo nome, e coloque na variavel *poke*

```bash
be-mean-pokemons> var poke = db.pokemons.find({name: "Pikachu"})
be-mean-pokemons> poke
{
  "_id": ObjectId("5643b55451c49d83153a4bf7"),
  "name": "Pikachu",
  "description": "Bicho eletrico",
  "attack": 35,
  "defense": 30,
  "height": 15
}
Fetched 1 record(s) in 1ms
```

## 7. Modifique sua *description* e salve

```bash
be-mean-pokemons> var poke = db.pokemons.findOne({name: "Pikachu"})
be-mean-pokemons> poke.description = "Bicho amarelo eletrico"
Bicho amarelo eletrico

be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
