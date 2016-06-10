

# MongoDB - Aula 02 - Exercício
autor: Lucas Futig

## Crie uma database nova, chamada be-mean-pokemons

    ```
     vahalla(mongod-3.2.7) test> use be-mean-pokemons
	switched to db be-mean-pokemons

    ```

## Liste quais databases você possui nesse servidor

    ```
    vahalla(mongod-3.2.7) be-mean-pokemons> show dbs
	be-mean           → 0.005GB
	be-mean-instagram → 0.000GB
	local             → 0.000GB

    ```

## Lista quais collections você possui nessa database

    ```
    vahalla(mongod-3.2.7) be-mean-pokemons> show collections
	pokemons → 0.002MB / 0.035MB
    ```

## Insira pelo menos 5 pokemons utilizando o mesmo padrão de campos utilizado:name,description,attack,defense e height

    ```
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Bulbasaur", description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", attack: 300, defense:200, height:0.7})
	Inserted 1 record(s) in 184ms
	WriteResult({
	  "nInserted": 1
	})
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Ivysaur",description:"There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",attack:300,defense:300,height:1.0)}
	2016-06-10T11:19:19.171-0300 E QUERY    [thread1] SyntaxError: missing } after property list @(shell):1:310

	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Ivysaur",description:"There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",attack:300,defense:300,height:1.0})
	Inserted 1 record(s) in 2ms
	WriteResult({
	  "nInserted": 1
	})
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Charmeleon",description:"Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. ",attack:300,defense:300,height:1.1})
	Inserted 1 record(s) in 2ms
	WriteResult({
	  "nInserted": 1
	})
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Metapod",description:"The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell. ",attack:100,defense:300,height:0.7})
	Inserted 1 record(s) in 3ms
	WriteResult({
	  "nInserted": 1
	})
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Blastoise",description:"Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",attack:400,defense:400,height:1.6})
	Inserted 1 record(s) in 3ms
	WriteResult({
	  "nInserted": 1
	})
	vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert({name:"Pikachu",description:"Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge. ",attack:300,defense:200,height:0.4})
	Inserted 1 record(s) in 3ms
	WriteResult({
	  "nInserted": 1
	})

    ```

## Liste os pokemons existentes em sua coleção

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("575acbfebe6e298bb5f5de07"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "attack": 300,
  "defense": 200,
  "height": 0.7
}
{
  "_id": ObjectId("575acc70be6e298bb5f5de08"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",
  "attack": 300,
  "defense": 300,
  "height": 1
}
{
  "_id": ObjectId("575accc1be6e298bb5f5de09"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. ",
  "attack": 300,
  "defense": 300,
  "height": 1.1
}
{
  "_id": ObjectId("575acd02be6e298bb5f5de0a"),
  "name": "Metapod",
  "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell. ",
  "attack": 100,
  "defense": 300,
  "height": 0.7
}
{
  "_id": ObjectId("575acd55be6e298bb5f5de0b"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}
{
  "_id": ObjectId("575acda8be6e298bb5f5de0c"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge. ",
  "attack": 300,
  "defense": 200,
  "height": 0.4
}
Fetched 6 record(s) in 8ms


    ```

## Busque o pokemon pelo nome e armazene-o em uma variável chamada 'poke'

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> var poke = {name:'Blastoise'}
vahalla(mongod-3.2.7) be-mean-pokemons> var query = db.pokemons.findOne(poke)
vahalla(mongod-3.2.7) be-mean-pokemons> query
{
  "_id": ObjectId("575acd55be6e298bb5f5de0b"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}


    ```

## Modifique sua 'description' e salvê-o

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> query.description = "Sou feio mesmo e dai??"
Sou feio mesmo e dai??
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.save(query)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
vahalla(mongod-3.2.7) be-mean-pokemons> query
{
  "_id": ObjectId("575acd55be6e298bb5f5de0b"),
  "name": "Blastoise",
  "description": "Sou feio mesmo e dai??",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}





    ```

