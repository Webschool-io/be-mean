# MongoDB - Aula 02 - Exercício
autor: Carlos Lima

## Criando uma database chamada be-mean-pokemon
```
	MacBook-de-Carlos(mongod-3.0.5) test> use be-mean-pokemon
	switched to db be-mean-pokemon
```

## Listando quais databases possuo no servidor
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> show dbs
	be-mean-instagram → 0.078GB
	be-mean           → 0.078GB
	local             → 0.078GB
	restaurantesdb    → 0.078GB
	test              → 0.078GB
```

## Listando quais coleções possuo nessa database
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> show collections
```

## Inserindo 5 pokemons
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var pokemon = {'name':'Rattata', 'description':'Roedor pequeno mas cabuloso', 'type':'Roedor', 'attack': 25, height: 0.3}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(pokemon)
	Inserted 1 record(s) in 3295ms
	WriteResult({
	  "nInserted": 1
	})

	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var pokemon = {'name':'Oddish', 'description':'Plantinha engraçada', 'type':'Planta', 'attack': 30, height: 0.5, 'defense': 10}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(pokemon)
	Inserted 1 record(s) in 189ms
	WriteResult({
	  "nInserted": 1
	})

	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var pokemon = {'name':'Meowth', 'description':'Gato feioso', 'type':'Animal', 'attack': 20, height: 0.4, 'defense': 20}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(pokemon)
	Inserted 1 record(s) in 165ms
	WriteResult({
	  "nInserted": 1
	})

	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var pokemon = {'name':'Psyduck', 'description':'Pato meio louco', 'type':'Pato', 'attack': 30, height: 0.8, 'defense': 20}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(pokemon)
	Inserted 1 record(s) in 2ms
	WriteResult({
	  "nInserted": 1
	})

	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var pokemon = {'name':'Arcanine', 'description':'Cachorro nervoso', 'type':'Cachorro de fogo', 'attack': 60, height: 1.9, 'defense': 40}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(pokemon)
	Inserted 1 record(s) in 58ms
	WriteResult({
	  "nInserted": 1
	})
```

## Listando os pokemons existentes na minha coleção
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.find()
	{
	  "_id": ObjectId("564524fe6f18e1ae072759f5"),
	  "name": "Rattata",
	  "description": "Roedor pequeno mas cabuloso",
	  "type": "Roedor",
	  "attack": 25,
	  "height": 0.3
	}
	{
	  "_id": ObjectId("564525c96f18e1ae072759f6"),
	  "name": "Oddish",
	  "description": "Plantinha engraçada",
	  "type": "Planta",
	  "attack": 30,
	  "height": 0.5,
	  "defense": 10
	}
	{
	  "_id": ObjectId("564526226f18e1ae072759f7"),
	  "name": "Meowth",
	  "description": "Gato feioso",
	  "type": "Animal",
	  "attack": 20,
	  "height": 0.4,
	  "defense": 20
	}
	{
	  "_id": ObjectId("564526536f18e1ae072759f8"),
	  "name": "Psyduck",
	  "description": "Pato meio louco",
	  "type": "Pato",
	  "attack": 30,
	  "height": 0.8,
	  "defense": 20
	}
	{
	  "_id": ObjectId("564526986f18e1ae072759f9"),
	  "name": "Arcanine",
	  "description": "Cachorro nervoso",
	  "type": "Cachorro de fogo",
	  "attack": 60,
	  "height": 1.9,
	  "defense": 40
	}
	Fetched 5 record(s) in 202ms
```

## Buscando um pokemon da minha escolha
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var query = {name: 'Arcanine'}
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> var poke = db.pokemons.findOne(query)
```

## Modificando a descrição do pokemon buscado e salvando
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> poke.description = 'Cachorro ficou calminho'
	Cachorro ficou calminho
	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> poke
	{
	  "_id": ObjectId("564526986f18e1ae072759f9"),
	  "name": "Arcanine",
	  "description": "Cachorro ficou calminho",
	  "type": "Cachorro de fogo",
	  "attack": 60,
	  "height": 1.9,
	  "defense": 40
	}

	MacBook-de-Carlos(mongod-3.0.5) be-mean-pokemon> db.pokemons.save(poke)
	Updated 1 existing record(s) in 2ms
	WriteResult({
	  "nMatched": 1,
	  "nUpserted": 0,
	  "nModified": 1
	})
```