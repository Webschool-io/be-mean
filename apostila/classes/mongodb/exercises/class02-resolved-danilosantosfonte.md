# MongoDB - Aula 02 - Exercício
autor: Danilo dos Santos da Fonte

## Listagem das databases (passo 2)

	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> show dbs
  be-mean-instagram → 0.078GB
  be-mean-pokemons  → 0.078GB
  local             → 0.078GB
  be-mean           → 0.078GB
  be-mean-teste     → 0.078GB



## Listagem das coleções (passo 3)

	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> show collections
  pokemons       → 0.012MB / 0.039MB
  system.indexes → 0.000MB / 0.008MB



## Cadastro dos pokemons (passo 4)

	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var bulbassaur = {
  "name" : "Bulbassaur",
  "species": "Seed",
  "type": "Grass/Poison",
  "height": "2'04",
  "weight": "15.2",
  "pokedex": [
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.",
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      "The bulb-like pouch on its back grows larger as it ages. The pouch is filled with numerous seeds.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back."
    ]
  }

  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var ivysaur = {
  "name" : "Ivysaur",
  "species": "Seed",
  "type": "Grass/Poison",
  "height": "3'03",
  "weight": "28.7",
  "pokedex": [
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "If the bud on its back starts to smell sweet, it is evidence that the large flower will soon bloom.",
      "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.",
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "To support its bulb, Ivysaur's legs grow sturdy. If it spends more time lying in the sunlight, the bud will soon bloom into a large flower.",
      "There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.",
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      "The bud on its back apparently draws energy from its body. The bud is said to open into a large flower when fully grown.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "If the bud on its back starts to smell sweet, it is evidence that the large flower will soon bloom.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom."
    ]
  }
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var venusaur = {
  "name" : "Venusaur",
  "species": "Seed",
  "type": "Grass/Poison",
  "height": "6'07",
  "weight": "220.5",
  "pokedex": [
      "The plant blooms when it is asorbing solar energy. It stays on the move to seek sunlight. ",
      "The flower on its back catches the sun's rays. The sunlight is then absorbed and used for energy.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
      "As it warms itself and absorbs the sunlight, its flower petals release a pleasant fragrance.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "Venusaur's flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      "Absorbs solar energy as nutrition. When it is catching the sun's rays, it often remains quiet and still.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon."
    ]
  }
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var charmander = {
  "name" : "Charmander",
  "species": "Lizard",
  "type": "Fire",
  "height": "2'00",
  "weight": "18.7",
  "pokedex": [
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
      "If it's healthy, the flame on the tip of its tail will burn vigorously, even if it gets a bit wet.",
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is happy, and blazes when it is enraged.",
      "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      "Even the newborns have flaming tails. Unfamiliar with fire, babies are said to accidentally burn themselves.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely."
    ]
  }
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var charmeleon = {
  "name" : "Charmeleon",
  "species": "Flame",
  "type": "Fire",
  "height": "3'07",
  "weight": "41.9",
  "pokedex": [
      "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      "Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames.",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "Without pity, its sharp claws destroy foes. If it encounters a strong enemy, it becomes agitated, and the flame on its tail flares with a bluish white color.",
      "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
      "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
      "It appears to be very vicious. It attacks with razor-sharp claws and won't stop until the enemy is defeated.",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars. ",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars. ",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars."
    ]
  }
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var charizard = {
  "name" : "Charizard",
  "species": "Flame",
  "type": "Fire/Flying",
  "height": "5'07",
  "weight": "199.5",
  "pokedex": [
      "It spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.",
      "Its fiery breath reaches incredible temperatures. It can quickly melt glaciers weighing 10,000 tons.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It uses its wings to fly high. The temperature of its fire increases as it gains experience in battle.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "A Charizard flies about in search of strong opponents. It breathes intense flames that can melt any material. However, it will never torch a weaker foe.",
      "Its wings can carry this Pokémon close to an altitude of {{tt|4,600 feet|1400m}}. It blows out fire at very high temperatures.",
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles."
    ]
  }
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> db.pokemons.save([bulbassaur,ivysaur,venusaur,charmander,charmeleon,charizard])
  Inserted 1 record(s) in 445ms
  BulkWriteResult({
    "writeErrors": [ ],
    "writeConcernErrors": [ ],
    "nInserted": 6,
    "nUpserted": 0,
    "nMatched": 0,
    "nModified": 0,
    "nRemoved": 0,
    "upserted": [ ]
  })



## Lista dos pokemons (passo 5)
	
	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
  {
    "_id": ObjectId("5643d5a1360ecea43fea882b"),
    "name": "Bulbassaur",
    "species": "Seed",
    "type": "Grass/Poison",
    "height": "2'04",
    "weight": "15.2",
    "pokedex": [
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.",
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      "The bulb-like pouch on its back grows larger as it ages. The pouch is filled with numerous seeds.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      "For some time after its birth, it grows by gaining nourishment from the seed on its back."
    ]
  }
  {
    "_id": ObjectId("5643d5a1360ecea43fea882c"),
    "name": "Ivysaur",
    "species": "Seed",
    "type": "Grass/Poison",
    "height": "3'03",
    "weight": "28.7",
    "pokedex": [
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "If the bud on its back starts to smell sweet, it is evidence that the large flower will soon bloom.",
      "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.",
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "To support its bulb, Ivysaur's legs grow sturdy. If it spends more time lying in the sunlight, the bud will soon bloom into a large flower.",
      "There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.",
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      "The bud on its back apparently draws energy from its body. The bud is said to open into a large flower when fully grown.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
      "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
      "If the bud on its back starts to smell sweet, it is evidence that the large flower will soon bloom.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
      "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom."
    ]
  }
  {
    "_id": ObjectId("5643d5a1360ecea43fea882d"),
    "name": "Venusaur",
    "species": "Seed",
    "type": "Grass/Poison",
    "height": "6'07",
    "weight": "220.5",
    "pokedex": [
      "The plant blooms when it is asorbing solar energy. It stays on the move to seek sunlight. ",
      "The flower on its back catches the sun's rays. The sunlight is then absorbed and used for energy.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
      "As it warms itself and absorbs the sunlight, its flower petals release a pleasant fragrance.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "Venusaur's flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      "Absorbs solar energy as nutrition. When it is catching the sun's rays, it often remains quiet and still.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
      "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon."
    ]
  }
  {
    "_id": ObjectId("5643d5a1360ecea43fea882e"),
    "name": "Charmander",
    "species": "Lizard",
    "type": "Fire",
    "height": "2'00",
    "weight": "18.7",
    "pokedex": [
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
      "If it's healthy, the flame on the tip of its tail will burn vigorously, even if it gets a bit wet.",
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is happy, and blazes when it is enraged.",
      "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      "Even the newborns have flaming tails. Unfamiliar with fire, babies are said to accidentally burn themselves.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
      "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
      "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely."
    ]
  }
  {
    "_id": ObjectId("5643d5a1360ecea43fea882f"),
    "name": "Charmeleon",
    "species": "Flame",
    "type": "Fire",
    "height": "3'07",
    "weight": "41.9",
    "pokedex": [
      "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      "Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames.",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "Without pity, its sharp claws destroy foes. If it encounters a strong enemy, it becomes agitated, and the flame on its tail flares with a bluish white color.",
      "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
      "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
      "It appears to be very vicious. It attacks with razor-sharp claws and won't stop until the enemy is defeated.",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars. ",
      "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars. ",
      "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars."
    ]
  }
  {
    "_id": ObjectId("5643d5a1360ecea43fea8830"),
    "name": "Charizard",
    "species": "Flame",
    "type": "Fire/Flying",
    "height": "5'07",
    "weight": "199.5",
    "pokedex": [
      "It spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.",
      "Its fiery breath reaches incredible temperatures. It can quickly melt glaciers weighing 10,000 tons.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It uses its wings to fly high. The temperature of its fire increases as it gains experience in battle.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "A Charizard flies about in search of strong opponents. It breathes intense flames that can melt any material. However, it will never torch a weaker foe.",
      "Its wings can carry this Pokémon close to an altitude of {{tt|4,600 feet|1400m}}. It blows out fire at very high temperatures.",
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles."
    ]
  }
  Fetched 6 record(s) in 4ms



## Charizard (passo 6)

	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({"name":"Charizard"})
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> poke
  {
    "_id": ObjectId("5643d5a1360ecea43fea8830"),
    "name": "Charizard",
    "species": "Flame",
    "type": "Fire/Flying",
    "height": "5'07",
    "weight": "199.5",
    "pokedex": [
      "It spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.",
      "Its fiery breath reaches incredible temperatures. It can quickly melt glaciers weighing 10,000 tons.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It uses its wings to fly high. The temperature of its fire increases as it gains experience in battle.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "A Charizard flies about in search of strong opponents. It breathes intense flames that can melt any material. However, it will never torch a weaker foe.",
      "Its wings can carry this Pokémon close to an altitude of {{tt|4,600 feet|1400m}}. It blows out fire at very high temperatures.",
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.",
      "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      "It is said that Charizard's fire burns hotter if it has experienced harsh battles."
    ]
  }
  Fetched 1 record(s) in 0ms


## Atualização do Charizard (passo 6)

	danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> poke.Species = "Dragon/Flame"
  Dragon/Flame
  danilo-VirtualBox(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke);
  Updated 1 existing record(s) in 27ms
  WriteResult({
    "nMatched": 1,
    "nUpserted": 0,
    "nModified": 1
  })


