> use be-mean-pokemons
switched to db be-mean-pokemons

> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB

> show collections

> var pokemon = {'name':'Articuno','description':'Pokemon lendario que controla do Gelo','type': 'Gelo/Voador', attack: 85, defense:100, height: 1.7 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Charizard','description':'Pika das galaxias','type': 'Fogo', attack: 84, defense:78, height: 1.7 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Snorlax','description':'Gordo, dorme, come, e regassa tudo','type': 'Normal', attack: 110, defense:65, height: 2.1 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Dragonite','description':'Dragão mega bolado','type': 'Dragao/Voador', attack: 134, defense:95, height: 2.2 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Mewtwo','description':'Esse é pica','type': 'Psiquico', attack:90, defense:95, height: 2.0 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Alakazam','description':'Da TP','type': 'Psiquico', attack:50, defense:45, height: 1.5 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var p = db.pokemons.findOne(query)

> var p = db.pokemons.findOne(query)

> p.description='Passa fogo em tudo'
Passa fogo em tudo

> db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })