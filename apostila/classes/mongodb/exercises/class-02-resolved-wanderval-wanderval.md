# MongoDB - Aula 02 - Exercício
autor: WANDERVAL CARVALHO

## Listagem das databases (passo 2)
    > show dbs
        be-mean            0.078GB
        be-mean-instagram  0.078GB
        local              0.078GB

## Listagem das coleções (passo 3)
    > db.createCollection("pokemon")
    { "ok" : 1 }

    > show collections
    pokemon
    system.indexes

## Cadastro dos pokemons (passo 4)
    > var pokemon  = {'name': 'Charizard', 'description': 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', 'attack': 4, 'defense': 3, 'height': 1.7}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })

    > var pokemon  = {'name': 'Mega Charizard', 'description': 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', 'attack': 7, 'defense': 5, 'height': 1.7}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })

    > var pokemon  = {'name': 'Alakazam', 'description': "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.", 'attack': 3, 'defense': 2, 'height': 1.5}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })
    
    > var pokemon  = {'name': 'Ninetales', 'description': "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.", 'attack': 4, 'defense': 3, 'height': 1.1}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })

    > var pokemon  = {'name': 'Pikachu', 'description': 'Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.', 'attack': 3, 'defense': 2, 'height': 0.4}
    > db.pokemon.insert(pokemon)
    WriteResult({ "nInserted" : 1 })


## Lista dos pokemons (passo 5)
    > db.pokemon.find()
        { "_id" : ObjectId("56439f5b2f04f7b0b63ff1fa"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 4, "defense" : 3, "height" : 1.7 }
        { "_id" : ObjectId("5643a0242f04f7b0b63ff1fb"), "name" : "Mega Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 7, "defense" : 5, "height" : 1.7 }
        { "_id" : ObjectId("5643a0332f04f7b0b63ff1fc"), "name" : "Alakazam", "description" : "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.", "attack" : 3, "defense" : 2, "height" : 1.5 }
        { "_id" : ObjectId("5643a0482f04f7b0b63ff1fd"), "name" : "Ninetales", "description" : "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.", "attack" : 4, "defense" : 3, "height" : 1.1 }
        { "_id" : ObjectId("5643a20a2f04f7b0b63ff1fe"), "name" : "Pikachu", "description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.", "attack" : 3, "defense" : 2, "height" : 0.4 }

## Pikachu (passo 6)

    > var query = {name:'Pikachu'}
    > var p = db.pokemon.find(query)
    > p
    { "_id" : ObjectId("5643a20a2f04f7b0b63ff1fe"), "name" : "Pikachu", "description" : "Nao vou colocar agora só para eu mudar depois.", "attack" : 3, "defense" : 2, "height" : 0.4 }


## Atualização do Pikachu (passo 6)

    > p.description = "Bichinho folgado amarelo, imitador do blanka do street fighter e ainda traveco usa maquiagem na cara dura"
    Bichinho folgado amarelo, imitador do blanka do street fighter e ainda traveco usa maquiagem na cara dura
    > p.description
    Bichinho folgado amarelo, imitador do blanka do street fighter e ainda traveco usa maquiagem na cara dura
    > db.pokemon.save(p)
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })