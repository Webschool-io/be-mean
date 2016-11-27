

# MongoDB - Aula 03 - Exercício
autor: Lucas Futig

## Liste todos os Pokemons com a altura menor que 0.5

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.find({height:{$lt:0.5}})
{
  "_id": ObjectId("575acda8be6e298bb5f5de0c"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge. ",
  "attack": 300,
  "defense": 200,
  "height": 0.4,
  "type": "electric"
}
Fetched 1 record(s) in 4ms


    ```

## Liste todos Pokemons com a altura maior ou igual que 0.5

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.find({height:{$gte:0.5}})
{
  "_id": ObjectId("575acbfebe6e298bb5f5de07"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "attack": 300,
  "defense": 200,
  "height": 0.7,
  "type": "grass, poison"
}
{
  "_id": ObjectId("575acc70be6e298bb5f5de08"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",
  "attack": 300,
  "defense": 300,
  "height": 1,
  "type": "grass,poison"
}
{
  "_id": ObjectId("575accc1be6e298bb5f5de09"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. ",
  "attack": 300,
  "defense": 300,
  "height": 1.1,
  "type": "fire"
}
{
  "_id": ObjectId("575acd02be6e298bb5f5de0a"),
  "name": "Metapod",
  "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell. ",
  "attack": 100,
  "defense": 300,
  "height": 0.7,
  "type": "bug"
}
{
  "_id": ObjectId("575acd55be6e298bb5f5de0b"),
  "name": "Blastoise",
  "description": "Sou feio mesmo e dai??",
  "attack": 400,
  "defense": 400,
  "height": 1.6,
  "type": "water"
}
Fetched 5 record(s) in 2ms



    ```

## Liste todos os Pokemons com a altura menor ou igual que 0.5 e tipo grama

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.find({$and: [{type:'grass'}, {height:{$lte: 0.5}}]})
Fetched 0 record(s) in 1ms

    ```

## Liste todos os Pokemons com o name 'Pikachu' Ou com o attack menor ou igual que 0.5

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> var or = db.pokemons.find({$or: [{name:'Pikachu'},{height:{$lte:0.5}}]})
vahalla(mongod-3.2.7) be-mean-pokemons> or
{
  "_id": ObjectId("575acda8be6e298bb5f5de0c"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge. ",
  "attack": 300,
  "defense": 200,
  "height": 0.4,
  "type": "electric"
}
Fetched 1 record(s) in 3ms


    ```

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5

    ```
vahalla(mongod-3.2.7) be-mean-pokemons> var e = db.pokemons.find({$and:[{attack:{$gte:400}},{height:{$lte:0.5}}]})
vahalla(mongod-3.2.7) be-mean-pokemons> e
Fetched 0 record(s) in 1ms



    ```

