# MongoDB - Aula 03 - Exercício
autor: WANDERVAL CARVALHO

## Listagem todos pokemons com altura menor que 0.5 (passo 1)

   ```Resultado```
   var query = {height: {$lt: 0.5}}
    > db.pokemons.find(query)
    { "_id" : ObjectId("5643a20a2f04f7b0b63ff1fe"), "name" : "Pikachu", "description" : "Bichinho folgado amarelo, imitador do blanka do street fighter e ainda traveco usa maquiagem na cara dura", "attack" : 3, "defense" : 2, "height" : 0.4, "type" : "Eletrico" }
    > 


## Listagem todos pokemons com altura maior ou igual 0.5 (passo 2)
   
    ```Resultado```
    > var query = {height: {$gte: 0.5}}
    > db.pokemons.find(query)

    { "_id" : ObjectId("56439f5b2f04f7b0b63ff1fa"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 4, "defense" : 3, "height" : 1.7, "type" : "Fogo" }
    { "_id" : ObjectId("5643a0242f04f7b0b63ff1fb"), "name" : "Mega Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 7, "defense" : 5, "height" : 1.7, "type" : "Fogo" }
    { "_id" : ObjectId("5643a0332f04f7b0b63ff1fc"), "name" : "Alakazam", "description" : "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.", "attack" : 3, "defense" : 2, "height" : 1.5, "type" : "Psíquico" }
    { "_id" : ObjectId("5643a0482f04f7b0b63ff1fd"), "name" : "Ninetales", "description" : "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.", "attack" : 4, "defense" : 3, "height" : 1.1, "type" : "Fogo" }
    { "_id" : ObjectId("5643f3282f04f7b0b63ff200"), "name" : "Fodaomon", "description" : "Foda pra caralho, chegou todos tremem na base", "attack" : 55, "defense" : 35, "height" : 0.5, "type" : "Magnifico" }
    { "_id" : ObjectId("5643fe519e5485fb04160902"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", "attack" : 3, "defense" : 2, "height" : 0.7, "type" : "Grama" }
    { "_id" : ObjectId("5644039b9e5485fb04160903"), "name" : "Oddish", "description" : "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.", "attack" : 3, "defense" : 3, "height" : 0.5, "type" : "Grama" }



## Listagem todos pokemons com altura menor ou igual 0.5 E do tipo grama (passo 3)
    
    ```Insert```
    > var pokemon  = {'name': 'Bulbasaur', 'description': "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", 'attack': 3, 'defense': 2, 'height': 0.7, type: 'Grama'}
    > db.pokemons.insert(pokemon)
    WriteResult({ "nInserted" : 1 })

    > var pokemon  = {'name': 'Oddish', 'description': "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.", 'attack': 3, 'defense': 3, 'height': 0.5, type: 'Grama'}
    > db.pokemons.insert(pokemon)
    WriteResult({ "nInserted" : 1 })


   ```Resultado```
    var query = {$and:[{height:{$lte: 0.5}},{type:"Grama"}]}
    > db.pokemons.find(query)
    { "_id" : ObjectId("5644039b9e5485fb04160903"), "name" : "Oddish", "description" : "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.", "attack" : 3, "defense" : 3, "height" : 0.5, "type" : "Grama" }


    
## Listagem todos pokemons com name 'Pikachu' OU com attack menor OU igual que 0.5 (passo 4)

    ```Resultado```
    > var query = {$or:[{name: "Pikachu"},{attack: {$lte: 0.5}}]}
    > db.pokemons.find(query)
    { "_id" : ObjectId("5643a20a2f04f7b0b63ff1fe"), "name" : "Pikachu", "description" : "Bichinho folgado amarelo, imitador do blanka do street fighter e ainda traveco usa maquiagem na cara dura", "attack" : 3, "defense" : 2, "height" : 0.4, "type" : "Eletrico"}

## Listagem todos pokemons com attack  maior OU igual que 48  E com height menor ou igual que 0.5(passo 5)

    ```Insert```
    > var pokemon  = {'name': 'Fodaomon', 'description': 'Foda pra caralho, chegou todos tremem na base', 'attack': 55, 'defense': 35, 'height': 5.7, 'type': 'Magnifico'}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })

    ```Resultado```
    >  var query = {$and:[{attack:{$gte:48}},{height:{$lte: 0.5}}]}
    > db.pokemons.find(query)
    { "_id" : ObjectId("5643f3282f04f7b0b63ff200"), "name" : "Fodaomon", "description" : "Foda pra caralho, chegou todos tremem na base", "attack" : 55, "defense" : 35, "height" : 0.5, "type" : "Magnifico"}
    > 
    
