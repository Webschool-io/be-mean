# MongoDB - Aula 02 - Exercício
Autor: Rodrigo Oler
## Listagem das databases (passo 2)
```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB
test               0.078GB
```
## Listagem das coleções (passo 3)
```
> show collections
pokemons
system.indexes
```
## Cadastro dos pokemons (passo 4)
```
> var pokemon1 = {
...   "abilities": [
...     {
...       "name": "chlorophyll",
...       "resource_uri": "/api/v1/ability/34/"
...     },
...     {
...       "name": "overgrow",
...       "resource_uri": "/api/v1/ability/65/"
...     }
...   ],
...   "attack": 49,
...   "catch_rate": 0,
...   "created": "2013-11-03T15:05:41.260678",
...   "defense": 49,
...   "descriptions": [
...     {
...       "name": "bulbasaur_gen_1",
...       "resource_uri": "/api/v1/description/4/"
...     },
...     {
...       "name": "bulbasaur_gen_1",
...       "resource_uri": "/api/v1/description/5/"
...     },
...     {
...       "name": "bulbasaur_gen_1",
...       "resource_uri": "/api/v1/description/6/"
...     },
...     {
...       "name": "bulbasaur_gen_2",
...       "resource_uri": "/api/v1/description/7/"
...     },
...     {
...       "name": "bulbasaur_gen_2",
...       "resource_uri": "/api/v1/description/8/"
...     },
...     {
...       "name": "bulbasaur_gen_3",
...       "resource_uri": "/api/v1/description/9/"
...     },
...     {
...       "name": "bulbasaur_gen_3",
...       "resource_uri": "/api/v1/description/10/"
...     },
...     {
...       "name": "bulbasaur_gen_3",
...       "resource_uri": "/api/v1/description/11/"
...     },
...     {
...       "name": "bulbasaur_gen_4",
...       "resource_uri": "/api/v1/description/12/"
...     },
...     {
...       "name": "bulbasaur_gen_4",
...       "resource_uri": "/api/v1/description/13/"
...     },
...     {
...       "name": "bulbasaur_gen_4",
...       "resource_uri": "/api/v1/description/14/"
...     },
...     {
...       "name": "bulbasaur_gen_5",
...       "resource_uri": "/api/v1/description/15/"
...     },
...     {
...       "name": "bulbasaur_gen_1",
...       "resource_uri": "/api/v1/description/2/"
...     },
...     {
...       "name": "bulbasaur_gen_1",
...       "resource_uri": "/api/v1/description/3/"
...     }
...   ],
...   "egg_cycles": 0,
...   "egg_groups": [
...     {
...       "name": "Plant",
...       "resource_uri": "/api/v1/egg/7/"
...     },
...     {
...       "name": "Monster",
...       "resource_uri": "/api/v1/egg/1/"
...     }
...   ],
...   "ev_yield": "1 special attack",
...   "evolutions": [
...     {
...       "level": 16,
...       "method": "level_up",
...       "resource_uri": "/api/v1/pokemon/2/",
...       "to": "Ivysaur"
...     }
...   ],
...   "exp": 64,
...   "growth_rate": "medium slow",
...   "happiness": 0,
...   "height": "7",
...   "hp": 45,
...   "male_female_ratio": "87.5/12.5",
...   "modified": "2013-11-30T13:59:47.261100",
...   "moves": [
...     {
...       "learn_type": "tutor",
...       "name": "Bind",
...       "resource_uri": "/api/v1/move/20/"
...     },
...     {
...       "learn_type": "tutor",
...       "name": "Grass-pledge",
...       "resource_uri": "/api/v1/move/520/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Echoed-voice",
...       "resource_uri": "/api/v1/move/497/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Round",
...       "resource_uri": "/api/v1/move/496/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Venoshock",
...       "resource_uri": "/api/v1/move/474/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Power-whip",
...       "resource_uri": "/api/v1/move/438/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Sludge",
...       "resource_uri": "/api/v1/move/124/"
...     },
...     {
...       "learn_type": "tutor",
...       "name": "String-shot",
...       "resource_uri": "/api/v1/move/81/"
...     },
...     {
...       "learn_type": "tutor",
...       "name": "Knock-off",
...       "resource_uri": "/api/v1/move/282/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Grass-knot",
...       "resource_uri": "/api/v1/move/447/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Captivate",
...       "resource_uri": "/api/v1/move/445/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Leaf-storm",
...       "resource_uri": "/api/v1/move/437/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Energy-ball",
...       "resource_uri": "/api/v1/move/412/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 37,
...       "name": "Seed-bomb",
...       "resource_uri": "/api/v1/move/402/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 31,
...       "name": "Worry-seed",
...       "resource_uri": "/api/v1/move/388/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Natural-gift",
...       "resource_uri": "/api/v1/move/363/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Ingrain",
...       "resource_uri": "/api/v1/move/275/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Nature-power",
...       "resource_uri": "/api/v1/move/267/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Amnesia",
...       "resource_uri": "/api/v1/move/133/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Magical-leaf",
...       "resource_uri": "/api/v1/move/345/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Bullet-seed",
...       "resource_uri": "/api/v1/move/331/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Grasswhistle",
...       "resource_uri": "/api/v1/move/320/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Secret-power",
...       "resource_uri": "/api/v1/move/290/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Facade",
...       "resource_uri": "/api/v1/move/263/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Rock-smash",
...       "resource_uri": "/api/v1/move/249/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Sludge-bomb",
...       "resource_uri": "/api/v1/move/188/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Strength",
...       "resource_uri": "/api/v1/move/70/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Sunny-day",
...       "resource_uri": "/api/v1/move/241/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Hidden-power",
...       "resource_uri": "/api/v1/move/237/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 39,
...       "name": "Synthesis",
...       "resource_uri": "/api/v1/move/235/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 25,
...       "name": "Sweet-scent",
...       "resource_uri": "/api/v1/move/230/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Safeguard",
...       "resource_uri": "/api/v1/move/219/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Frustration",
...       "resource_uri": "/api/v1/move/218/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Return",
...       "resource_uri": "/api/v1/move/216/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Sleep-talk",
...       "resource_uri": "/api/v1/move/214/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Attract",
...       "resource_uri": "/api/v1/move/213/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Fury-cutter",
...       "resource_uri": "/api/v1/move/210/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Swagger",
...       "resource_uri": "/api/v1/move/207/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Charm",
...       "resource_uri": "/api/v1/move/204/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Endure",
...       "resource_uri": "/api/v1/move/203/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Giga-drain",
...       "resource_uri": "/api/v1/move/202/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Mud-slap",
...       "resource_uri": "/api/v1/move/189/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Protect",
...       "resource_uri": "/api/v1/move/182/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Curse",
...       "resource_uri": "/api/v1/move/174/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Snore",
...       "resource_uri": "/api/v1/move/173/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Flash",
...       "resource_uri": "/api/v1/move/148/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Skull-bash",
...       "resource_uri": "/api/v1/move/130/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Light-screen",
...       "resource_uri": "/api/v1/move/113/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Defense-curl",
...       "resource_uri": "/api/v1/move/111/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Petal-dance",
...       "resource_uri": "/api/v1/move/80/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Headbutt",
...       "resource_uri": "/api/v1/move/29/"
...     },
...     {
...       "learn_type": "egg move",
...       "name": "Razor-wind",
...       "resource_uri": "/api/v1/move/13/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Substitute",
...       "resource_uri": "/api/v1/move/164/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Rest",
...       "resource_uri": "/api/v1/move/156/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Bide",
...       "resource_uri": "/api/v1/move/117/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Reflect",
...       "resource_uri": "/api/v1/move/115/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Double-team",
...       "resource_uri": "/api/v1/move/104/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Mimic",
...       "resource_uri": "/api/v1/move/102/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Rage",
...       "resource_uri": "/api/v1/move/99/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Toxic",
...       "resource_uri": "/api/v1/move/92/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 41,
...       "name": "Sleep-powder",
...       "resource_uri": "/api/v1/move/79/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 20,
...       "name": "Poisonpowder",
...       "resource_uri": "/api/v1/move/77/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 48,
...       "name": "Solarbeam",
...       "resource_uri": "/api/v1/move/76/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 27,
...       "name": "Razor-leaf",
...       "resource_uri": "/api/v1/move/75/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 34,
...       "name": "Growth",
...       "resource_uri": "/api/v1/move/74/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 7,
...       "name": "Leech-seed",
...       "resource_uri": "/api/v1/move/73/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Mega-drain",
...       "resource_uri": "/api/v1/move/72/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 1,
...       "name": "Growl",
...       "resource_uri": "/api/v1/move/45/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Double-edge",
...       "resource_uri": "/api/v1/move/38/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Take-down",
...       "resource_uri": "/api/v1/move/36/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Body-slam",
...       "resource_uri": "/api/v1/move/34/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 1,
...       "name": "Tackle",
...       "resource_uri": "/api/v1/move/33/"
...     },
...     {
...       "learn_type": "level up",
...       "level": 13,
...       "name": "Vine-whip",
...       "resource_uri": "/api/v1/move/22/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Cut",
...       "resource_uri": "/api/v1/move/15/"
...     },
...     {
...       "learn_type": "machine",
...       "name": "Swords-dance",
...       "resource_uri": "/api/v1/move/14/"
...     }
...   ],
...   "name": "Bulbasaur",
...   "national_id": 1,
...   "pkdx_id": 1,
...   "resource_uri": "/api/v1/pokemon/1/",
...   "sp_atk": 65,
...   "sp_def": 65,
...   "species": "seed pokemon",
...   "speed": 45,
...   "sprites": [
...     {
...       "name": "bulbasaur",
...       "resource_uri": "/api/v1/sprite/2/"
...     },
...     {
...       "name": "bulbasaur",
...       "resource_uri": "/api/v1/sprite/1/"
...     }
...   ],
...   "total": 0,
...   "types": [
...     {
...       "name": "poison",
...       "resource_uri": "/api/v1/type/4/"
...     },
...     {
...       "name": "grass",
...       "resource_uri": "/api/v1/type/12/"
...     }
...   ],
...   "weight": "69"
... }
> db.pokemons.save(pokemon1)
WriteResult({ "nInserted" : 1 })

> var pokemon2 = {
... "abilities": [
... {
... "name": "chlorophyll",
... "resource_uri": "/api/v1/ability/34/"
... },
... {
... "name": "overgrow",
... "resource_uri": "/api/v1/ability/65/"
... }
... ],
... "attack": 62,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.265680",
... "defense": 63,
... "descriptions": [
... {
... "name": "ivysaur_gen_1",
... "resource_uri": "/api/v1/description/20/"
... },
... {
... "name": "ivysaur_gen_2",
... "resource_uri": "/api/v1/description/21/"
... },
... {
... "name": "ivysaur_gen_2",
... "resource_uri": "/api/v1/description/22/"
... },
... {
... "name": "ivysaur_gen_1",
... "resource_uri": "/api/v1/description/16/"
... },
... {
... "name": "ivysaur_gen_1",
... "resource_uri": "/api/v1/description/17/"
... },
... {
... "name": "ivysaur_gen_1",
... "resource_uri": "/api/v1/description/18/"
... },
... {
... "name": "ivysaur_gen_1",
... "resource_uri": "/api/v1/description/19/"
... },
... {
... "name": "ivysaur_gen_3",
... "resource_uri": "/api/v1/description/23/"
... },
... {
... "name": "ivysaur_gen_3",
... "resource_uri": "/api/v1/description/24/"
... },
... {
... "name": "ivysaur_gen_5",
... "resource_uri": "/api/v1/description/29/"
... },
... {
... "name": "ivysaur_gen_3",
... "resource_uri": "/api/v1/description/25/"
... },
... {
... "name": "ivysaur_gen_4",
... "resource_uri": "/api/v1/description/26/"
... },
... {
... "name": "ivysaur_gen_4",
... "resource_uri": "/api/v1/description/27/"
... },
... {
... "name": "ivysaur_gen_4",
... "resource_uri": "/api/v1/description/28/"
... },
... {
... "name": "ivysaur_gen_6",
... "resource_uri": "/api/v1/description/30/"
... },
... {
... "name": "ivysaur_gen_6",
... "resource_uri": "/api/v1/description/31/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Plant",
... "resource_uri": "/api/v1/egg/7/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 32,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/3/",
... "to": "Venusaur"
... }
... ],
... "exp": 142,
... "growth_rate": "",
... "happiness": 0,
... "height": "10",
... "hp": 60,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.630416",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Bind",
... "resource_uri": "/api/v1/move/20/"
... },
... {
... "learn_type": "tutor",
... "name": "Grass-pledge",
... "resource_uri": "/api/v1/move/520/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Venoshock",
... "resource_uri": "/api/v1/move/474/"
... },
... {
... "learn_type": "machine",
... "name": "Safeguard",
... "resource_uri": "/api/v1/move/219/"
... },
... {
... "learn_type": "machine",
... "name": "Light-screen",
... "resource_uri": "/api/v1/move/113/"
... },
... {
... "learn_type": "tutor",
... "name": "String-shot",
... "resource_uri": "/api/v1/move/81/"
... },
... {
... "learn_type": "tutor",
... "name": "Seed-bomb",
... "resource_uri": "/api/v1/move/402/"
... },
... {
... "learn_type": "tutor",
... "name": "Knock-off",
... "resource_uri": "/api/v1/move/282/"
... },
... {
... "learn_type": "machine",
... "name": "Grass-knot",
... "resource_uri": "/api/v1/move/447/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "machine",
... "name": "Energy-ball",
... "resource_uri": "/api/v1/move/412/"
... },
... {
... "learn_type": "level up",
... "level": 36,
... "name": "Worry-seed",
... "resource_uri": "/api/v1/move/388/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Bullet-seed",
... "resource_uri": "/api/v1/move/331/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "machine",
... "name": "Sludge-bomb",
... "resource_uri": "/api/v1/move/188/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Sunny-day",
... "resource_uri": "/api/v1/move/241/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "level up",
... "level": 47,
... "name": "Synthesis",
... "resource_uri": "/api/v1/move/235/"
... },
... {
... "learn_type": "level up",
... "level": 29,
... "name": "Sweet-scent",
... "resource_uri": "/api/v1/move/230/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Fury-cutter",
... "resource_uri": "/api/v1/move/210/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Giga-drain",
... "resource_uri": "/api/v1/move/202/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Flash",
... "resource_uri": "/api/v1/move/148/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "level up",
... "level": 46,
... "name": "Sleep-powder",
... "resource_uri": "/api/v1/move/79/"
... },
... {
... "learn_type": "level up",
... "level": 22,
... "name": "Poisonpowder",
... "resource_uri": "/api/v1/move/77/"
... },
... {
... "learn_type": "level up",
... "level": 54,
... "name": "Solarbeam",
... "resource_uri": "/api/v1/move/76/"
... },
... {
... "learn_type": "level up",
... "level": 30,
... "name": "Razor-leaf",
... "resource_uri": "/api/v1/move/75/"
... },
... {
... "learn_type": "level up",
... "level": 38,
... "name": "Growth",
... "resource_uri": "/api/v1/move/74/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Leech-seed",
... "resource_uri": "/api/v1/move/73/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-drain",
... "resource_uri": "/api/v1/move/72/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... },
... {
... "learn_type": "level up",
... "level": 13,
... "name": "Vine-whip",
... "resource_uri": "/api/v1/move/22/"
... },
... {
... "learn_type": "machine",
... "name": "Cut",
... "resource_uri": "/api/v1/move/15/"
... },
... {
... "learn_type": "machine",
... "name": "Swords-dance",
... "resource_uri": "/api/v1/move/14/"
... }
... ],
... "name": "Ivysaur",
... "national_id": 2,
... "pkdx_id": 2,
... "resource_uri": "/api/v1/pokemon/2/",
... "sp_atk": 80,
... "sp_def": 80,
... "species": "",
... "speed": 60,
... "sprites": [
... {
... "name": "ivysaur",
... "resource_uri": "/api/v1/sprite/3/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "poison",
... "resource_uri": "/api/v1/type/4/"
... },
... {
... "name": "grass",
... "resource_uri": "/api/v1/type/12/"
... }
... ],
... "weight": "130"
... }
> db.pokemons.save(pokemon2)
WriteResult({ "nInserted" : 1 })
> var pokemon3 = {
... "abilities": [
... {
... "name": "chlorophyll",
... "resource_uri": "/api/v1/ability/34/"
... },
... {
... "name": "overgrow",
... "resource_uri": "/api/v1/ability/65/"
... }
... ],
... "attack": 82,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.268479",
... "defense": 83,
... "descriptions": [
... {
... "name": "venusaur_gen_1",
... "resource_uri": "/api/v1/description/35/"
... },
... {
... "name": "venusaur_gen_1",
... "resource_uri": "/api/v1/description/32/"
... },
... {
... "name": "venusaur_gen_1",
... "resource_uri": "/api/v1/description/33/"
... },
... {
... "name": "venusaur_gen_1",
... "resource_uri": "/api/v1/description/34/"
... },
... {
... "name": "venusaur_gen_1",
... "resource_uri": "/api/v1/description/36/"
... },
... {
... "name": "venusaur_gen_2",
... "resource_uri": "/api/v1/description/37/"
... },
... {
... "name": "venusaur_gen_2",
... "resource_uri": "/api/v1/description/38/"
... },
... {
... "name": "venusaur_gen_3",
... "resource_uri": "/api/v1/description/39/"
... },
... {
... "name": "venusaur_gen_3",
... "resource_uri": "/api/v1/description/40/"
... },
... {
... "name": "venusaur_gen_3",
... "resource_uri": "/api/v1/description/41/"
... },
... {
... "name": "venusaur_gen_4",
... "resource_uri": "/api/v1/description/42/"
... },
... {
... "name": "venusaur_gen_4",
... "resource_uri": "/api/v1/description/43/"
... },
... {
... "name": "venusaur_gen_4",
... "resource_uri": "/api/v1/description/44/"
... },
... {
... "name": "venusaur_gen_5",
... "resource_uri": "/api/v1/description/45/"
... },
... {
... "name": "venusaur_gen_6",
... "resource_uri": "/api/v1/description/47/"
... },
... {
... "name": "venusaur_gen_6",
... "resource_uri": "/api/v1/description/46/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Plant",
... "resource_uri": "/api/v1/egg/7/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "detail": "mega",
... "method": "other",
... "resource_uri": "/api/v1/pokemon/10033/",
... "to": "Venusaur-mega"
... }
... ],
... "exp": 236,
... "growth_rate": "",
... "happiness": 0,
... "height": "20",
... "hp": 80,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.663509",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Bind",
... "resource_uri": "/api/v1/move/20/"
... },
... {
... "learn_type": "machine",
... "name": "Bulldoze",
... "resource_uri": "/api/v1/move/523/"
... },
... {
... "learn_type": "tutor",
... "name": "Grass-pledge",
... "resource_uri": "/api/v1/move/520/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Venoshock",
... "resource_uri": "/api/v1/move/474/"
... },
... {
... "learn_type": "machine",
... "name": "Safeguard",
... "resource_uri": "/api/v1/move/219/"
... },
... {
... "learn_type": "machine",
... "name": "Light-screen",
... "resource_uri": "/api/v1/move/113/"
... },
... {
... "learn_type": "tutor",
... "name": "Block",
... "resource_uri": "/api/v1/move/335/"
... },
... {
... "learn_type": "tutor",
... "name": "String-shot",
... "resource_uri": "/api/v1/move/81/"
... },
... {
... "learn_type": "tutor",
... "name": "Seed-bomb",
... "resource_uri": "/api/v1/move/402/"
... },
... {
... "learn_type": "tutor",
... "name": "Knock-off",
... "resource_uri": "/api/v1/move/282/"
... },
... {
... "learn_type": "tutor",
... "name": "Outrage",
... "resource_uri": "/api/v1/move/200/"
... },
... {
... "learn_type": "machine",
... "name": "Grass-knot",
... "resource_uri": "/api/v1/move/447/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-climb",
... "resource_uri": "/api/v1/move/431/"
... },
... {
... "learn_type": "machine",
... "name": "Giga-impact",
... "resource_uri": "/api/v1/move/416/"
... },
... {
... "learn_type": "machine",
... "name": "Energy-ball",
... "resource_uri": "/api/v1/move/412/"
... },
... {
... "learn_type": "level up",
... "level": 39,
... "name": "Worry-seed",
... "resource_uri": "/api/v1/move/388/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "level up",
... "level": 32,
... "name": "Petal-dance",
... "resource_uri": "/api/v1/move/80/"
... },
... {
... "learn_type": "tutor",
... "name": "Frenzy-plant",
... "resource_uri": "/api/v1/move/338/"
... },
... {
... "learn_type": "machine",
... "name": "Bullet-seed",
... "resource_uri": "/api/v1/move/331/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "machine",
... "name": "Sludge-bomb",
... "resource_uri": "/api/v1/move/188/"
... },
... {
... "learn_type": "machine",
... "name": "Earthquake",
... "resource_uri": "/api/v1/move/89/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Sunny-day",
... "resource_uri": "/api/v1/move/241/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "level up",
... "level": 53,
... "name": "Synthesis",
... "resource_uri": "/api/v1/move/235/"
... },
... {
... "learn_type": "level up",
... "level": 29,
... "name": "Sweet-scent",
... "resource_uri": "/api/v1/move/230/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Fury-cutter",
... "resource_uri": "/api/v1/move/210/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Giga-drain",
... "resource_uri": "/api/v1/move/202/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Flash",
... "resource_uri": "/api/v1/move/148/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "machine",
... "name": "Roar",
... "resource_uri": "/api/v1/move/46/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "level up",
... "level": 55,
... "name": "Sleep-powder",
... "resource_uri": "/api/v1/move/79/"
... },
... {
... "learn_type": "level up",
... "level": 22,
... "name": "Poisonpowder",
... "resource_uri": "/api/v1/move/77/"
... },
... {
... "learn_type": "level up",
... "level": 65,
... "name": "Solarbeam",
... "resource_uri": "/api/v1/move/76/"
... },
... {
... "learn_type": "level up",
... "level": 30,
... "name": "Razor-leaf",
... "resource_uri": "/api/v1/move/75/"
... },
... {
... "learn_type": "level up",
... "level": 43,
... "name": "Growth",
... "resource_uri": "/api/v1/move/74/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Leech-seed",
... "resource_uri": "/api/v1/move/73/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-drain",
... "resource_uri": "/api/v1/move/72/"
... },
... {
... "learn_type": "machine",
... "name": "Hyper-beam",
... "resource_uri": "/api/v1/move/63/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Vine-whip",
... "resource_uri": "/api/v1/move/22/"
... },
... {
... "learn_type": "machine",
... "name": "Cut",
... "resource_uri": "/api/v1/move/15/"
... },
... {
... "learn_type": "machine",
... "name": "Swords-dance",
... "resource_uri": "/api/v1/move/14/"
... }
... ],
... "name": "Venusaur",
... "national_id": 3,
... "pkdx_id": 3,
... "resource_uri": "/api/v1/pokemon/3/",
... "sp_atk": 100,
... "sp_def": 100,
... "species": "",
... "speed": 80,
... "sprites": [
... {
... "name": "venusaur",
... "resource_uri": "/api/v1/sprite/4/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "poison",
... "resource_uri": "/api/v1/type/4/"
... },
... {
... "name": "grass",
... "resource_uri": "/api/v1/type/12/"
... }
... ],
... "weight": "1000"
... }
> db.pokemons.save(pokemon3)
WriteResult({ "nInserted" : 1 })
> var pokemon4 = {
... "abilities": [
... {
... "name": "blaze",
... "resource_uri": "/api/v1/ability/66/"
... },
... {
... "name": "solar-power",
... "resource_uri": "/api/v1/ability/94/"
... }
... ],
... "attack": 52,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.271082",
... "defense": 43,
... "descriptions": [
... {
... "name": "charmander_gen_1",
... "resource_uri": "/api/v1/description/48/"
... },
... {
... "name": "charmander_gen_1",
... "resource_uri": "/api/v1/description/49/"
... },
... {
... "name": "charmander_gen_1",
... "resource_uri": "/api/v1/description/50/"
... },
... {
... "name": "charmander_gen_1",
... "resource_uri": "/api/v1/description/51/"
... },
... {
... "name": "charmander_gen_1",
... "resource_uri": "/api/v1/description/52/"
... },
... {
... "name": "charmander_gen_2",
... "resource_uri": "/api/v1/description/54/"
... },
... {
... "name": "charmander_gen_3",
... "resource_uri": "/api/v1/description/55/"
... },
... {
... "name": "charmander_gen_3",
... "resource_uri": "/api/v1/description/56/"
... },
... {
... "name": "charmander_gen_3",
... "resource_uri": "/api/v1/description/57/"
... },
... {
... "name": "charmander_gen_4",
... "resource_uri": "/api/v1/description/58/"
... },
... {
... "name": "charmander_gen_4",
... "resource_uri": "/api/v1/description/59/"
... },
... {
... "name": "charmander_gen_4",
... "resource_uri": "/api/v1/description/60/"
... },
... {
... "name": "charmander_gen_5",
... "resource_uri": "/api/v1/description/61/"
... },
... {
... "name": "charmander_gen_6",
... "resource_uri": "/api/v1/description/62/"
... },
... {
... "name": "charmander_gen_6",
... "resource_uri": "/api/v1/description/63/"
... },
... {
... "name": "charmander_gen_2",
... "resource_uri": "/api/v1/description/53/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Dragon",
... "resource_uri": "/api/v1/egg/14/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 16,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/5/",
... "to": "Charmeleon"
... }
... ],
... "exp": 62,
... "growth_rate": "",
... "happiness": 0,
... "height": "6",
... "hp": 39,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.695471",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Fire-pledge",
... "resource_uri": "/api/v1/move/519/"
... },
... {
... "learn_type": "level up",
... "level": 46,
... "name": "Inferno",
... "resource_uri": "/api/v1/move/517/"
... },
... {
... "learn_type": "machine",
... "name": "Incinerate",
... "resource_uri": "/api/v1/move/510/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Flame-charge",
... "resource_uri": "/api/v1/move/488/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Flame-burst",
... "resource_uri": "/api/v1/move/481/"
... },
... {
... "learn_type": "machine",
... "name": "Hone-claws",
... "resource_uri": "/api/v1/move/468/"
... },
... {
... "learn_type": "egg move",
... "name": "Dragon-pulse",
... "resource_uri": "/api/v1/move/406/"
... },
... {
... "learn_type": "tutor",
... "name": "Heat-wave",
... "resource_uri": "/api/v1/move/257/"
... },
... {
... "learn_type": "tutor",
... "name": "Thunderpunch",
... "resource_uri": "/api/v1/move/9/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "level up",
... "level": 25,
... "name": "Fire-fang",
... "resource_uri": "/api/v1/move/424/"
... },
... {
... "learn_type": "machine",
... "name": "Shadow-claw",
... "resource_uri": "/api/v1/move/421/"
... },
... {
... "learn_type": "egg move",
... "name": "Dragon-rush",
... "resource_uri": "/api/v1/move/407/"
... },
... {
... "learn_type": "egg move",
... "name": "Flare-blitz",
... "resource_uri": "/api/v1/move/394/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "machine",
... "name": "Will-o-wisp",
... "resource_uri": "/api/v1/move/261/"
... },
... {
... "learn_type": "egg move",
... "name": "Crunch",
... "resource_uri": "/api/v1/move/242/"
... },
... {
... "learn_type": "level up",
... "level": 13,
... "name": "Metal-claw",
... "resource_uri": "/api/v1/move/232/"
... },
... {
... "learn_type": "egg move",
... "name": "Dragon-dance",
... "resource_uri": "/api/v1/move/349/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-claw",
... "resource_uri": "/api/v1/move/337/"
... },
... {
... "learn_type": "machine",
... "name": "Aerial-ace",
... "resource_uri": "/api/v1/move/332/"
... },
... {
... "learn_type": "machine",
... "name": "Overheat",
... "resource_uri": "/api/v1/move/315/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "egg move",
... "name": "Beat-up",
... "resource_uri": "/api/v1/move/251/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "egg move",
... "name": "Ancientpower",
... "resource_uri": "/api/v1/move/246/"
... },
... {
... "learn_type": "machine",
... "name": "Sunny-day",
... "resource_uri": "/api/v1/move/241/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "machine",
... "name": "Dragonbreath",
... "resource_uri": "/api/v1/move/225/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Fury-cutter",
... "resource_uri": "/api/v1/move/210/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "egg move",
... "name": "Outrage",
... "resource_uri": "/api/v1/move/200/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "egg move",
... "name": "Belly-drum",
... "resource_uri": "/api/v1/move/187/"
... },
... {
... "learn_type": "level up",
... "level": 25,
... "name": "Scary-face",
... "resource_uri": "/api/v1/move/184/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "egg move",
... "name": "Rock-slide",
... "resource_uri": "/api/v1/move/157/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "level up",
... "level": 13,
... "name": "Smokescreen",
... "resource_uri": "/api/v1/move/108/"
... },
... {
... "learn_type": "egg move",
... "name": "Bite",
... "resource_uri": "/api/v1/move/44/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-punch",
... "resource_uri": "/api/v1/move/7/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "level up",
... "level": 30,
... "name": "Slash",
... "resource_uri": "/api/v1/move/163/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Swift",
... "resource_uri": "/api/v1/move/129/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-blast",
... "resource_uri": "/api/v1/move/126/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "level up",
... "level": 22,
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "level up",
... "level": 46,
... "name": "Fire-spin",
... "resource_uri": "/api/v1/move/83/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-rage",
... "resource_uri": "/api/v1/move/82/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "level up",
... "level": 38,
... "name": "Flamethrower",
... "resource_uri": "/api/v1/move/53/"
... },
... {
... "learn_type": "level up",
... "level": 9,
... "name": "Ember",
... "resource_uri": "/api/v1/move/52/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "level up",
... "level": 15,
... "name": "Leer",
... "resource_uri": "/api/v1/move/43/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Cut",
... "resource_uri": "/api/v1/move/15/"
... },
... {
... "learn_type": "machine",
... "name": "Swords-dance",
... "resource_uri": "/api/v1/move/14/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Scratch",
... "resource_uri": "/api/v1/move/10/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Charmander",
... "national_id": 4,
... "pkdx_id": 4,
... "resource_uri": "/api/v1/pokemon/4/",
... "sp_atk": 60,
... "sp_def": 50,
... "species": "",
... "speed": 65,
... "sprites": [
... {
... "name": "charmander",
... "resource_uri": "/api/v1/sprite/5/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "fire",
... "resource_uri": "/api/v1/type/10/"
... }
... ],
... "weight": "85"
... }
> db.pokemons.save(pokemon4)
WriteResult({ "nInserted" : 1 })
> var pokemon5 = {
... "abilities": [
... {
... "name": "blaze",
... "resource_uri": "/api/v1/ability/66/"
... },
... {
... "name": "solar-power",
... "resource_uri": "/api/v1/ability/94/"
... }
... ],
... "attack": 64,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.273462",
... "defense": 58,
... "descriptions": [
... {
... "name": "charmeleon_gen_1",
... "resource_uri": "/api/v1/description/64/"
... },
... {
... "name": "charmeleon_gen_1",
... "resource_uri": "/api/v1/description/65/"
... },
... {
... "name": "charmeleon_gen_1",
... "resource_uri": "/api/v1/description/66/"
... },
... {
... "name": "charmeleon_gen_1",
... "resource_uri": "/api/v1/description/67/"
... },
... {
... "name": "charmeleon_gen_1",
... "resource_uri": "/api/v1/description/68/"
... },
... {
... "name": "charmeleon_gen_2",
... "resource_uri": "/api/v1/description/69/"
... },
... {
... "name": "charmeleon_gen_2",
... "resource_uri": "/api/v1/description/70/"
... },
... {
... "name": "charmeleon_gen_3",
... "resource_uri": "/api/v1/description/71/"
... },
... {
... "name": "charmeleon_gen_3",
... "resource_uri": "/api/v1/description/72/"
... },
... {
... "name": "charmeleon_gen_4",
... "resource_uri": "/api/v1/description/74/"
... },
... {
... "name": "charmeleon_gen_6",
... "resource_uri": "/api/v1/description/79/"
... },
... {
... "name": "charmeleon_gen_4",
... "resource_uri": "/api/v1/description/75/"
... },
... {
... "name": "charmeleon_gen_4",
... "resource_uri": "/api/v1/description/76/"
... },
... {
... "name": "charmeleon_gen_5",
... "resource_uri": "/api/v1/description/77/"
... },
... {
... "name": "charmeleon_gen_6",
... "resource_uri": "/api/v1/description/78/"
... },
... {
... "name": "charmeleon_gen_3",
... "resource_uri": "/api/v1/description/73/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Dragon",
... "resource_uri": "/api/v1/egg/14/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 36,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/6/",
... "to": "Charizard"
... }
... ],
... "exp": 142,
... "growth_rate": "",
... "happiness": 0,
... "height": "11",
... "hp": 58,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.726827",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Outrage",
... "resource_uri": "/api/v1/move/200/"
... },
... {
... "learn_type": "tutor",
... "name": "Fire-pledge",
... "resource_uri": "/api/v1/move/519/"
... },
... {
... "learn_type": "level up",
... "level": 54,
... "name": "Inferno",
... "resource_uri": "/api/v1/move/517/"
... },
... {
... "learn_type": "machine",
... "name": "Incinerate",
... "resource_uri": "/api/v1/move/510/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Flame-charge",
... "resource_uri": "/api/v1/move/488/"
... },
... {
... "learn_type": "level up",
... "level": 32,
... "name": "Flame-burst",
... "resource_uri": "/api/v1/move/481/"
... },
... {
... "learn_type": "machine",
... "name": "Hone-claws",
... "resource_uri": "/api/v1/move/468/"
... },
... {
... "learn_type": "tutor",
... "name": "Heat-wave",
... "resource_uri": "/api/v1/move/257/"
... },
... {
... "learn_type": "tutor",
... "name": "Thunderpunch",
... "resource_uri": "/api/v1/move/9/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Fire-fang",
... "resource_uri": "/api/v1/move/424/"
... },
... {
... "learn_type": "machine",
... "name": "Shadow-claw",
... "resource_uri": "/api/v1/move/421/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "machine",
... "name": "Will-o-wisp",
... "resource_uri": "/api/v1/move/261/"
... },
... {
... "learn_type": "level up",
... "level": 13,
... "name": "Metal-claw",
... "resource_uri": "/api/v1/move/232/"
... },
... {
... "learn_type": "tutor",
... "name": "Rock-slide",
... "resource_uri": "/api/v1/move/157/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-claw",
... "resource_uri": "/api/v1/move/337/"
... },
... {
... "learn_type": "machine",
... "name": "Aerial-ace",
... "resource_uri": "/api/v1/move/332/"
... },
... {
... "learn_type": "machine",
... "name": "Overheat",
... "resource_uri": "/api/v1/move/315/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "machine",
... "name": "Sunny-day",
... "resource_uri": "/api/v1/move/241/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "machine",
... "name": "Dragonbreath",
... "resource_uri": "/api/v1/move/225/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Fury-cutter",
... "resource_uri": "/api/v1/move/210/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "level up",
... "level": 27,
... "name": "Scary-face",
... "resource_uri": "/api/v1/move/184/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "level up",
... "level": 13,
... "name": "Smokescreen",
... "resource_uri": "/api/v1/move/108/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-punch",
... "resource_uri": "/api/v1/move/7/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "level up",
... "level": 33,
... "name": "Slash",
... "resource_uri": "/api/v1/move/163/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Swift",
... "resource_uri": "/api/v1/move/129/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-blast",
... "resource_uri": "/api/v1/move/126/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "level up",
... "level": 24,
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "level up",
... "level": 56,
... "name": "Fire-spin",
... "resource_uri": "/api/v1/move/83/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-rage",
... "resource_uri": "/api/v1/move/82/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "level up",
... "level": 42,
... "name": "Flamethrower",
... "resource_uri": "/api/v1/move/53/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Ember",
... "resource_uri": "/api/v1/move/52/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "level up",
... "level": 15,
... "name": "Leer",
... "resource_uri": "/api/v1/move/43/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Cut",
... "resource_uri": "/api/v1/move/15/"
... },
... {
... "learn_type": "machine",
... "name": "Swords-dance",
... "resource_uri": "/api/v1/move/14/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Scratch",
... "resource_uri": "/api/v1/move/10/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Charmeleon",
... "national_id": 5,
... "pkdx_id": 5,
... "resource_uri": "/api/v1/pokemon/5/",
... "sp_atk": 80,
... "sp_def": 65,
... "species": "",
... "speed": 80,
... "sprites": [
... {
... "name": "charmeleon",
... "resource_uri": "/api/v1/sprite/6/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "fire",
... "resource_uri": "/api/v1/type/10/"
... }
... ],
... "weight": "190"
... }
> db.pokemons.save(pokemon5)
WriteResult({ "nInserted" : 1 })
> var pokemon6 = {
... "abilities": [
... {
... "name": "blaze",
... "resource_uri": "/api/v1/ability/66/"
... },
... {
... "name": "solar-power",
... "resource_uri": "/api/v1/ability/94/"
... }
... ],
... "attack": 84,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.275724",
... "defense": 78,
... "descriptions": [
... {
... "name": "charizard_gen_1",
... "resource_uri": "/api/v1/description/80/"
... },
... {
... "name": "charizard_gen_1",
... "resource_uri": "/api/v1/description/81/"
... },
... {
... "name": "charizard_gen_1",
... "resource_uri": "/api/v1/description/82/"
... },
... {
... "name": "charizard_gen_1",
... "resource_uri": "/api/v1/description/83/"
... },
... {
... "name": "charizard_gen_1",
... "resource_uri": "/api/v1/description/84/"
... },
... {
... "name": "charizard_gen_2",
... "resource_uri": "/api/v1/description/85/"
... },
... {
... "name": "charizard_gen_2",
... "resource_uri": "/api/v1/description/86/"
... },
... {
... "name": "charizard_gen_3",
... "resource_uri": "/api/v1/description/87/"
... },
... {
... "name": "charizard_gen_3",
... "resource_uri": "/api/v1/description/88/"
... },
... {
... "name": "charizard_gen_3",
... "resource_uri": "/api/v1/description/89/"
... },
... {
... "name": "charizard_gen_4",
... "resource_uri": "/api/v1/description/92/"
... },
... {
... "name": "charizard_gen_5",
... "resource_uri": "/api/v1/description/93/"
... },
... {
... "name": "charizard_gen_6",
... "resource_uri": "/api/v1/description/94/"
... },
... {
... "name": "charizard_gen_6",
... "resource_uri": "/api/v1/description/95/"
... },
... {
... "name": "charizard_gen_4",
... "resource_uri": "/api/v1/description/90/"
... },
... {
... "name": "charizard_gen_4",
... "resource_uri": "/api/v1/description/91/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Dragon",
... "resource_uri": "/api/v1/egg/14/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "detail": "mega",
... "method": "other",
... "resource_uri": "/api/v1/pokemon/10035/",
... "to": "Charizard-mega-y"
... },
... {
... "detail": "mega",
... "method": "other",
... "resource_uri": "/api/v1/pokemon/10034/",
... "to": "Charizard-mega-x"
... }
... ],
... "exp": 240,
... "growth_rate": "",
... "happiness": 0,
... "height": "17",
... "hp": 78,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.762594",
... "moves": [
... {
... "learn_type": "machine",
... "name": "Dragon-tail",
... "resource_uri": "/api/v1/move/525/"
... },
... {
... "learn_type": "machine",
... "name": "Bulldoze",
... "resource_uri": "/api/v1/move/523/"
... },
... {
... "learn_type": "tutor",
... "name": "Fire-pledge",
... "resource_uri": "/api/v1/move/519/"
... },
... {
... "learn_type": "level up",
... "level": 62,
... "name": "Inferno",
... "resource_uri": "/api/v1/move/517/"
... },
... {
... "learn_type": "machine",
... "name": "Incinerate",
... "resource_uri": "/api/v1/move/510/"
... },
... {
... "learn_type": "machine",
... "name": "Sky-drop",
... "resource_uri": "/api/v1/move/507/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Flame-charge",
... "resource_uri": "/api/v1/move/488/"
... },
... {
... "learn_type": "level up",
... "level": 32,
... "name": "Flame-burst",
... "resource_uri": "/api/v1/move/481/"
... },
... {
... "learn_type": "machine",
... "name": "Hone-claws",
... "resource_uri": "/api/v1/move/468/"
... },
... {
... "learn_type": "tutor",
... "name": "Tailwind",
... "resource_uri": "/api/v1/move/366/"
... },
... {
... "learn_type": "tutor",
... "name": "Ominous-wind",
... "resource_uri": "/api/v1/move/466/"
... },
... {
... "learn_type": "tutor",
... "name": "Air-cutter",
... "resource_uri": "/api/v1/move/314/"
... },
... {
... "learn_type": "tutor",
... "name": "Twister",
... "resource_uri": "/api/v1/move/239/"
... },
... {
... "learn_type": "tutor",
... "name": "Outrage",
... "resource_uri": "/api/v1/move/200/"
... },
... {
... "learn_type": "tutor",
... "name": "Thunderpunch",
... "resource_uri": "/api/v1/move/9/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "machine",
... "name": "Defog",
... "resource_uri": "/api/v1/move/432/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Fire-fang",
... "resource_uri": "/api/v1/move/424/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Shadow-claw",
... "resource_uri": "/api/v1/move/421/"
... },
... {
... "learn_type": "machine",
... "name": "Giga-impact",
... "resource_uri": "/api/v1/move/416/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-blast",
... "resource_uri": "/api/v1/move/411/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-pulse",
... "resource_uri": "/api/v1/move/406/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Air-slash",
... "resource_uri": "/api/v1/move/403/"
... },
... {
... "learn_type": "level up",
... "level": 66,
... "name": "Flare-blitz",
... "resource_uri": "/api/v1/move/394/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Roost",
... "resource_uri": "/api/v1/move/355/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "machine",
... "name": "Will-o-wisp",
... "resource_uri": "/api/v1/move/261/"
... },
... {
... "learn_type": "machine",
... "name": "Solarbeam",
... "resource_uri": "/api/v1/move/76/"
... },
... {
... "learn_type": "tutor",
... "name": "Blast-burn",
... "resource_uri": "/api/v1/move/307/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Heat-wave",
... "resource_uri": "/api/v1/move/257/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Metal-claw",
... "resource_uri": "/api/v1/move/232/"
... },
... {
... "learn_type": "tutor",
... "name": "Rock-slide",
... "resource_uri": "/api/v1/move/157/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-claw",
... "resource_uri": "/api/v1/move/337/"
... },
... {
... "learn_type": "machine",
... "name": "Aerial-ace",
... "resource_uri": "/api/v1/move/332/"
... },
... {
... "learn_type": "machine",
... "name": "Overheat",
... "resource_uri": "/api/v1/move/315/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "machine",
... "name": "Sunny-day",
... "resource_uri": "/api/v1/move/241/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "machine",
... "name": "Dragonbreath",
... "resource_uri": "/api/v1/move/225/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Steel-wing",
... "resource_uri": "/api/v1/move/211/"
... },
... {
... "learn_type": "machine",
... "name": "Fury-cutter",
... "resource_uri": "/api/v1/move/210/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Sandstorm",
... "resource_uri": "/api/v1/move/201/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "level up",
... "level": 27,
... "name": "Scary-face",
... "resource_uri": "/api/v1/move/184/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Smokescreen",
... "resource_uri": "/api/v1/move/108/"
... },
... {
... "learn_type": "machine",
... "name": "Roar",
... "resource_uri": "/api/v1/move/46/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "level up",
... "level": 36,
... "name": "Wing-attack",
... "resource_uri": "/api/v1/move/17/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-punch",
... "resource_uri": "/api/v1/move/7/"
... },
... {
... "learn_type": "machine",
... "name": "Fly",
... "resource_uri": "/api/v1/move/19/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "level up",
... "level": 36,
... "name": "Slash",
... "resource_uri": "/api/v1/move/163/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Swift",
... "resource_uri": "/api/v1/move/129/"
... },
... {
... "learn_type": "machine",
... "name": "Fire-blast",
... "resource_uri": "/api/v1/move/126/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "level up",
... "level": 24,
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "machine",
... "name": "Fissure",
... "resource_uri": "/api/v1/move/90/"
... },
... {
... "learn_type": "machine",
... "name": "Earthquake",
... "resource_uri": "/api/v1/move/89/"
... },
... {
... "learn_type": "level up",
... "level": 55,
... "name": "Fire-spin",
... "resource_uri": "/api/v1/move/83/"
... },
... {
... "learn_type": "machine",
... "name": "Dragon-rage",
... "resource_uri": "/api/v1/move/82/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "machine",
... "name": "Hyper-beam",
... "resource_uri": "/api/v1/move/63/"
... },
... {
... "learn_type": "level up",
... "level": 46,
... "name": "Flamethrower",
... "resource_uri": "/api/v1/move/53/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Ember",
... "resource_uri": "/api/v1/move/52/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Leer",
... "resource_uri": "/api/v1/move/43/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Cut",
... "resource_uri": "/api/v1/move/15/"
... },
... {
... "learn_type": "machine",
... "name": "Swords-dance",
... "resource_uri": "/api/v1/move/14/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Scratch",
... "resource_uri": "/api/v1/move/10/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Charizard",
... "national_id": 6,
... "pkdx_id": 6,
... "resource_uri": "/api/v1/pokemon/6/",
... "sp_atk": 109,
... "sp_def": 85,
... "species": "",
... "speed": 100,
... "sprites": [
... {
... "name": "charizard",
... "resource_uri": "/api/v1/sprite/7/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "flying",
... "resource_uri": "/api/v1/type/3/"
... },
... {
... "name": "fire",
... "resource_uri": "/api/v1/type/10/"
... }
... ],
... "weight": "905"
... }
> db.pokemons.save(pokemon6)
WriteResult({ "nInserted" : 1 })
> var pokemon7 = {
... "abilities": [
... {
... "name": "rain-dish",
... "resource_uri": "/api/v1/ability/44/"
... },
... {
... "name": "torrent",
... "resource_uri": "/api/v1/ability/67/"
... }
... ],
... "attack": 48,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.278310",
... "defense": 65,
... "descriptions": [
... {
... "name": "squirtle_gen_1",
... "resource_uri": "/api/v1/description/96/"
... },
... {
... "name": "squirtle_gen_1",
... "resource_uri": "/api/v1/description/97/"
... },
... {
... "name": "squirtle_gen_1",
... "resource_uri": "/api/v1/description/98/"
... },
... {
... "name": "squirtle_gen_1",
... "resource_uri": "/api/v1/description/99/"
... },
... {
... "name": "squirtle_gen_1",
... "resource_uri": "/api/v1/description/100/"
... },
... {
... "name": "squirtle_gen_5",
... "resource_uri": "/api/v1/description/109/"
... },
... {
... "name": "squirtle_gen_2",
... "resource_uri": "/api/v1/description/102/"
... },
... {
... "name": "squirtle_gen_3",
... "resource_uri": "/api/v1/description/103/"
... },
... {
... "name": "squirtle_gen_3",
... "resource_uri": "/api/v1/description/104/"
... },
... {
... "name": "squirtle_gen_6",
... "resource_uri": "/api/v1/description/110/"
... },
... {
... "name": "squirtle_gen_3",
... "resource_uri": "/api/v1/description/105/"
... },
... {
... "name": "squirtle_gen_4",
... "resource_uri": "/api/v1/description/106/"
... },
... {
... "name": "squirtle_gen_4",
... "resource_uri": "/api/v1/description/107/"
... },
... {
... "name": "squirtle_gen_6",
... "resource_uri": "/api/v1/description/111/"
... },
... {
... "name": "squirtle_gen_4",
... "resource_uri": "/api/v1/description/108/"
... },
... {
... "name": "squirtle_gen_2",
... "resource_uri": "/api/v1/description/101/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Water1",
... "resource_uri": "/api/v1/egg/2/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 16,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/8/",
... "to": "Wartortle"
... }
... ],
... "exp": 63,
... "growth_rate": "",
... "happiness": 0,
... "height": "5",
... "hp": 44,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.794686",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Water-pledge",
... "resource_uri": "/api/v1/move/518/"
... },
... {
... "learn_type": "machine",
... "name": "Scald",
... "resource_uri": "/api/v1/move/503/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "egg move",
... "name": "Water-spout",
... "resource_uri": "/api/v1/move/323/"
... },
... {
... "learn_type": "tutor",
... "name": "Zen-headbutt",
... "resource_uri": "/api/v1/move/428/"
... },
... {
... "learn_type": "level up",
... "level": 34,
... "name": "Iron-defense",
... "resource_uri": "/api/v1/move/334/"
... },
... {
... "learn_type": "egg move",
... "name": "Aqua-jet",
... "resource_uri": "/api/v1/move/453/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Aqua-tail",
... "resource_uri": "/api/v1/move/401/"
... },
... {
... "learn_type": "egg move",
... "name": "Aqua-ring",
... "resource_uri": "/api/v1/move/392/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Brine",
... "resource_uri": "/api/v1/move/362/"
... },
... {
... "learn_type": "machine",
... "name": "Gyro-ball",
... "resource_uri": "/api/v1/move/360/"
... },
... {
... "learn_type": "egg move",
... "name": "Muddy-water",
... "resource_uri": "/api/v1/move/330/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "egg move",
... "name": "Fake-out",
... "resource_uri": "/api/v1/move/252/"
... },
... {
... "learn_type": "machine",
... "name": "Water-pulse",
... "resource_uri": "/api/v1/move/352/"
... },
... {
... "learn_type": "egg move",
... "name": "Mud-sport",
... "resource_uri": "/api/v1/move/300/"
... },
... {
... "learn_type": "machine",
... "name": "Dive",
... "resource_uri": "/api/v1/move/291/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "egg move",
... "name": "Refresh",
... "resource_uri": "/api/v1/move/287/"
... },
... {
... "learn_type": "egg move",
... "name": "Yawn",
... "resource_uri": "/api/v1/move/281/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Hail",
... "resource_uri": "/api/v1/move/258/"
... },
... {
... "learn_type": "machine",
... "name": "Whirlpool",
... "resource_uri": "/api/v1/move/250/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "egg move",
... "name": "Mirror-coat",
... "resource_uri": "/api/v1/move/243/"
... },
... {
... "learn_type": "level up",
... "level": 33,
... "name": "Rain-dance",
... "resource_uri": "/api/v1/move/240/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "level up",
... "level": 23,
... "name": "Rapid-spin",
... "resource_uri": "/api/v1/move/229/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Rollout",
... "resource_uri": "/api/v1/move/205/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Icy-wind",
... "resource_uri": "/api/v1/move/196/"
... },
... {
... "learn_type": "egg move",
... "name": "Foresight",
... "resource_uri": "/api/v1/move/193/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "egg move",
... "name": "Flail",
... "resource_uri": "/api/v1/move/175/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Waterfall",
... "resource_uri": "/api/v1/move/127/"
... },
... {
... "learn_type": "egg move",
... "name": "Haze",
... "resource_uri": "/api/v1/move/114/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "egg move",
... "name": "Confusion",
... "resource_uri": "/api/v1/move/93/"
... },
... {
... "learn_type": "egg move",
... "name": "Mist",
... "resource_uri": "/api/v1/move/54/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-punch",
... "resource_uri": "/api/v1/move/8/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "level up",
... "level": 8,
... "name": "Bubble",
... "resource_uri": "/api/v1/move/145/"
... },
... {
... "learn_type": "level up",
... "level": 35,
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "level up",
... "level": 28,
... "name": "Withdraw",
... "resource_uri": "/api/v1/move/110/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "machine",
... "name": "Bubblebeam",
... "resource_uri": "/api/v1/move/61/"
... },
... {
... "learn_type": "machine",
... "name": "Blizzard",
... "resource_uri": "/api/v1/move/59/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-beam",
... "resource_uri": "/api/v1/move/58/"
... },
... {
... "learn_type": "machine",
... "name": "Surf",
... "resource_uri": "/api/v1/move/57/"
... },
... {
... "learn_type": "level up",
... "level": 42,
... "name": "Hydro-pump",
... "resource_uri": "/api/v1/move/56/"
... },
... {
... "learn_type": "level up",
... "level": 15,
... "name": "Water-gun",
... "resource_uri": "/api/v1/move/55/"
... },
... {
... "learn_type": "level up",
... "level": 22,
... "name": "Bite",
... "resource_uri": "/api/v1/move/44/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tail-whip",
... "resource_uri": "/api/v1/move/39/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Squirtle",
... "national_id": 7,
... "pkdx_id": 7,
... "resource_uri": "/api/v1/pokemon/7/",
... "sp_atk": 50,
... "sp_def": 64,
... "species": "",
... "speed": 43,
... "sprites": [
... {
... "name": "squirtle",
... "resource_uri": "/api/v1/sprite/8/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "water",
... "resource_uri": "/api/v1/type/11/"
... }
... ],
... "weight": "90"
... }
> db.pokemons.save(pokemon7)
WriteResult({ "nInserted" : 1 })
> var pokemon8 = {
... "abilities": [
... {
... "name": "rain-dish",
... "resource_uri": "/api/v1/ability/44/"
... },
... {
... "name": "torrent",
... "resource_uri": "/api/v1/ability/67/"
... }
... ],
... "attack": 63,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.280718",
... "defense": 80,
... "descriptions": [
... {
... "name": "wartortle_gen_2",
... "resource_uri": "/api/v1/description/118/"
... },
... {
... "name": "wartortle_gen_3",
... "resource_uri": "/api/v1/description/119/"
... },
... {
... "name": "wartortle_gen_1",
... "resource_uri": "/api/v1/description/112/"
... },
... {
... "name": "wartortle_gen_1",
... "resource_uri": "/api/v1/description/113/"
... },
... {
... "name": "wartortle_gen_1",
... "resource_uri": "/api/v1/description/114/"
... },
... {
... "name": "wartortle_gen_1",
... "resource_uri": "/api/v1/description/115/"
... },
... {
... "name": "wartortle_gen_1",
... "resource_uri": "/api/v1/description/116/"
... },
... {
... "name": "wartortle_gen_2",
... "resource_uri": "/api/v1/description/117/"
... },
... {
... "name": "wartortle_gen_3",
... "resource_uri": "/api/v1/description/120/"
... },
... {
... "name": "wartortle_gen_4",
... "resource_uri": "/api/v1/description/124/"
... },
... {
... "name": "wartortle_gen_3",
... "resource_uri": "/api/v1/description/121/"
... },
... {
... "name": "wartortle_gen_4",
... "resource_uri": "/api/v1/description/122/"
... },
... {
... "name": "wartortle_gen_4",
... "resource_uri": "/api/v1/description/123/"
... },
... {
... "name": "wartortle_gen_5",
... "resource_uri": "/api/v1/description/125/"
... },
... {
... "name": "wartortle_gen_6",
... "resource_uri": "/api/v1/description/126/"
... },
... {
... "name": "wartortle_gen_6",
... "resource_uri": "/api/v1/description/127/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Water1",
... "resource_uri": "/api/v1/egg/2/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 36,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/9/",
... "to": "Blastoise"
... }
... ],
... "exp": 142,
... "growth_rate": "",
... "happiness": 0,
... "height": "10",
... "hp": 59,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.827572",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Water-pledge",
... "resource_uri": "/api/v1/move/518/"
... },
... {
... "learn_type": "machine",
... "name": "Scald",
... "resource_uri": "/api/v1/move/503/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "tutor",
... "name": "Zen-headbutt",
... "resource_uri": "/api/v1/move/428/"
... },
... {
... "learn_type": "level up",
... "level": 40,
... "name": "Iron-defense",
... "resource_uri": "/api/v1/move/334/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "level up",
... "level": 32,
... "name": "Aqua-tail",
... "resource_uri": "/api/v1/move/401/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Brine",
... "resource_uri": "/api/v1/move/362/"
... },
... {
... "learn_type": "machine",
... "name": "Gyro-ball",
... "resource_uri": "/api/v1/move/360/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "machine",
... "name": "Water-pulse",
... "resource_uri": "/api/v1/move/352/"
... },
... {
... "learn_type": "machine",
... "name": "Dive",
... "resource_uri": "/api/v1/move/291/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Hail",
... "resource_uri": "/api/v1/move/258/"
... },
... {
... "learn_type": "machine",
... "name": "Whirlpool",
... "resource_uri": "/api/v1/move/250/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "level up",
... "level": 37,
... "name": "Rain-dance",
... "resource_uri": "/api/v1/move/240/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "level up",
... "level": 25,
... "name": "Rapid-spin",
... "resource_uri": "/api/v1/move/229/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Rollout",
... "resource_uri": "/api/v1/move/205/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Icy-wind",
... "resource_uri": "/api/v1/move/196/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "level up",
... "level": 31,
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Waterfall",
... "resource_uri": "/api/v1/move/127/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-punch",
... "resource_uri": "/api/v1/move/8/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Bubble",
... "resource_uri": "/api/v1/move/145/"
... },
... {
... "learn_type": "level up",
... "level": 39,
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "level up",
... "level": 31,
... "name": "Withdraw",
... "resource_uri": "/api/v1/move/110/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "machine",
... "name": "Bubblebeam",
... "resource_uri": "/api/v1/move/61/"
... },
... {
... "learn_type": "machine",
... "name": "Blizzard",
... "resource_uri": "/api/v1/move/59/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-beam",
... "resource_uri": "/api/v1/move/58/"
... },
... {
... "learn_type": "machine",
... "name": "Surf",
... "resource_uri": "/api/v1/move/57/"
... },
... {
... "learn_type": "level up",
... "level": 47,
... "name": "Hydro-pump",
... "resource_uri": "/api/v1/move/56/"
... },
... {
... "learn_type": "level up",
... "level": 15,
... "name": "Water-gun",
... "resource_uri": "/api/v1/move/55/"
... },
... {
... "learn_type": "level up",
... "level": 24,
... "name": "Bite",
... "resource_uri": "/api/v1/move/44/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tail-whip",
... "resource_uri": "/api/v1/move/39/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Wartortle",
... "national_id": 8,
... "pkdx_id": 8,
... "resource_uri": "/api/v1/pokemon/8/",
... "sp_atk": 65,
... "sp_def": 80,
... "species": "",
... "speed": 58,
... "sprites": [
... {
... "name": "wartortle",
... "resource_uri": "/api/v1/sprite/9/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "water",
... "resource_uri": "/api/v1/type/11/"
... }
... ],
... "weight": "225"
... }
> db.pokemons.save(pokemon8)
WriteResult({ "nInserted" : 1 })
> var pokemon9 = {
... "abilities": [
... {
... "name": "rain-dish",
... "resource_uri": "/api/v1/ability/44/"
... },
... {
... "name": "torrent",
... "resource_uri": "/api/v1/ability/67/"
... }
... ],
... "attack": 83,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.282985",
... "defense": 100,
... "descriptions": [
... {
... "name": "blastoise_gen_1",
... "resource_uri": "/api/v1/description/128/"
... },
... {
... "name": "blastoise_gen_1",
... "resource_uri": "/api/v1/description/129/"
... },
... {
... "name": "blastoise_gen_1",
... "resource_uri": "/api/v1/description/130/"
... },
... {
... "name": "blastoise_gen_1",
... "resource_uri": "/api/v1/description/131/"
... },
... {
... "name": "blastoise_gen_1",
... "resource_uri": "/api/v1/description/132/"
... },
... {
... "name": "blastoise_gen_2",
... "resource_uri": "/api/v1/description/133/"
... },
... {
... "name": "blastoise_gen_2",
... "resource_uri": "/api/v1/description/134/"
... },
... {
... "name": "blastoise_gen_3",
... "resource_uri": "/api/v1/description/137/"
... },
... {
... "name": "blastoise_gen_4",
... "resource_uri": "/api/v1/description/138/"
... },
... {
... "name": "blastoise_gen_4",
... "resource_uri": "/api/v1/description/139/"
... },
... {
... "name": "blastoise_gen_4",
... "resource_uri": "/api/v1/description/140/"
... },
... {
... "name": "blastoise_gen_5",
... "resource_uri": "/api/v1/description/141/"
... },
... {
... "name": "blastoise_gen_6",
... "resource_uri": "/api/v1/description/142/"
... },
... {
... "name": "blastoise_gen_6",
... "resource_uri": "/api/v1/description/143/"
... },
... {
... "name": "blastoise_gen_3",
... "resource_uri": "/api/v1/description/136/"
... },
... {
... "name": "blastoise_gen_3",
... "resource_uri": "/api/v1/description/135/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Water1",
... "resource_uri": "/api/v1/egg/2/"
... },
... {
... "name": "Monster",
... "resource_uri": "/api/v1/egg/1/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "detail": "mega",
... "method": "other",
... "resource_uri": "/api/v1/pokemon/10036/",
... "to": "Blastoise-mega"
... }
... ],
... "exp": 239,
... "growth_rate": "",
... "happiness": 0,
... "height": "16",
... "hp": 79,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.865154",
... "moves": [
... {
... "learn_type": "machine",
... "name": "Dragon-tail",
... "resource_uri": "/api/v1/move/525/"
... },
... {
... "learn_type": "machine",
... "name": "Bulldoze",
... "resource_uri": "/api/v1/move/523/"
... },
... {
... "learn_type": "tutor",
... "name": "Water-pledge",
... "resource_uri": "/api/v1/move/518/"
... },
... {
... "learn_type": "machine",
... "name": "Scald",
... "resource_uri": "/api/v1/move/503/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "machine",
... "name": "Smack-down",
... "resource_uri": "/api/v1/move/479/"
... },
... {
... "learn_type": "tutor",
... "name": "Zen-headbutt",
... "resource_uri": "/api/v1/move/428/"
... },
... {
... "learn_type": "level up",
... "level": 46,
... "name": "Iron-defense",
... "resource_uri": "/api/v1/move/334/"
... },
... {
... "learn_type": "tutor",
... "name": "Signal-beam",
... "resource_uri": "/api/v1/move/324/"
... },
... {
... "learn_type": "tutor",
... "name": "Outrage",
... "resource_uri": "/api/v1/move/200/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-climb",
... "resource_uri": "/api/v1/move/431/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Flash-cannon",
... "resource_uri": "/api/v1/move/430/"
... },
... {
... "learn_type": "machine",
... "name": "Avalanche",
... "resource_uri": "/api/v1/move/419/"
... },
... {
... "learn_type": "machine",
... "name": "Giga-impact",
... "resource_uri": "/api/v1/move/416/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-blast",
... "resource_uri": "/api/v1/move/411/"
... },
... {
... "learn_type": "level up",
... "level": 32,
... "name": "Aqua-tail",
... "resource_uri": "/api/v1/move/401/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "machine",
... "name": "Brine",
... "resource_uri": "/api/v1/move/362/"
... },
... {
... "learn_type": "machine",
... "name": "Gyro-ball",
... "resource_uri": "/api/v1/move/360/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-tomb",
... "resource_uri": "/api/v1/move/317/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-slide",
... "resource_uri": "/api/v1/move/157/"
... },
... {
... "learn_type": "tutor",
... "name": "Hydro-cannon",
... "resource_uri": "/api/v1/move/308/"
... },
... {
... "learn_type": "machine",
... "name": "Water-pulse",
... "resource_uri": "/api/v1/move/352/"
... },
... {
... "learn_type": "machine",
... "name": "Dive",
... "resource_uri": "/api/v1/move/291/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Hail",
... "resource_uri": "/api/v1/move/258/"
... },
... {
... "learn_type": "machine",
... "name": "Whirlpool",
... "resource_uri": "/api/v1/move/250/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "level up",
... "level": 42,
... "name": "Rain-dance",
... "resource_uri": "/api/v1/move/240/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "level up",
... "level": 25,
... "name": "Rapid-spin",
... "resource_uri": "/api/v1/move/229/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Rollout",
... "resource_uri": "/api/v1/move/205/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Icy-wind",
... "resource_uri": "/api/v1/move/196/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "level up",
... "level": 31,
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Waterfall",
... "resource_uri": "/api/v1/move/127/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "machine",
... "name": "Roar",
... "resource_uri": "/api/v1/move/46/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-punch",
... "resource_uri": "/api/v1/move/8/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Bubble",
... "resource_uri": "/api/v1/move/145/"
... },
... {
... "learn_type": "level up",
... "level": 42,
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "level up",
... "level": 31,
... "name": "Withdraw",
... "resource_uri": "/api/v1/move/110/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "machine",
... "name": "Fissure",
... "resource_uri": "/api/v1/move/90/"
... },
... {
... "learn_type": "machine",
... "name": "Earthquake",
... "resource_uri": "/api/v1/move/89/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "machine",
... "name": "Hyper-beam",
... "resource_uri": "/api/v1/move/63/"
... },
... {
... "learn_type": "machine",
... "name": "Bubblebeam",
... "resource_uri": "/api/v1/move/61/"
... },
... {
... "learn_type": "machine",
... "name": "Blizzard",
... "resource_uri": "/api/v1/move/59/"
... },
... {
... "learn_type": "machine",
... "name": "Ice-beam",
... "resource_uri": "/api/v1/move/58/"
... },
... {
... "learn_type": "machine",
... "name": "Surf",
... "resource_uri": "/api/v1/move/57/"
... },
... {
... "learn_type": "level up",
... "level": 52,
... "name": "Hydro-pump",
... "resource_uri": "/api/v1/move/56/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Water-gun",
... "resource_uri": "/api/v1/move/55/"
... },
... {
... "learn_type": "level up",
... "level": 24,
... "name": "Bite",
... "resource_uri": "/api/v1/move/44/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tail-whip",
... "resource_uri": "/api/v1/move/39/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Blastoise",
... "national_id": 9,
... "pkdx_id": 9,
... "resource_uri": "/api/v1/pokemon/9/",
... "sp_atk": 85,
... "sp_def": 105,
... "species": "",
... "speed": 78,
... "sprites": [
... {
... "name": "blastoise",
... "resource_uri": "/api/v1/sprite/10/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "water",
... "resource_uri": "/api/v1/type/11/"
... }
... ],
... "weight": "855"
... }
> db.pokemons.save(pokemon8)
WriteResult({ "nInserted" : 1 })
> var pokemon9 = {
... "abilities": [
... {
... "name": "shield-dust",
... "resource_uri": "/api/v1/ability/19/"
... },
... {
... "name": "run-away",
... "resource_uri": "/api/v1/ability/50/"
... }
... ],
... "attack": 30,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.285736",
... "defense": 35,
... "descriptions": [
... {
... "name": "caterpie_gen_4",
... "resource_uri": "/api/v1/description/154/"
... },
... {
... "name": "caterpie_gen_4",
... "resource_uri": "/api/v1/description/155/"
... },
... {
... "name": "caterpie_gen_1",
... "resource_uri": "/api/v1/description/144/"
... },
... {
... "name": "caterpie_gen_1",
... "resource_uri": "/api/v1/description/145/"
... },
... {
... "name": "caterpie_gen_1",
... "resource_uri": "/api/v1/description/146/"
... },
... {
... "name": "caterpie_gen_1",
... "resource_uri": "/api/v1/description/147/"
... },
... {
... "name": "caterpie_gen_1",
... "resource_uri": "/api/v1/description/148/"
... },
... {
... "name": "caterpie_gen_2",
... "resource_uri": "/api/v1/description/150/"
... },
... {
... "name": "caterpie_gen_3",
... "resource_uri": "/api/v1/description/151/"
... },
... {
... "name": "caterpie_gen_3",
... "resource_uri": "/api/v1/description/152/"
... },
... {
... "name": "caterpie_gen_4",
... "resource_uri": "/api/v1/description/156/"
... },
... {
... "name": "caterpie_gen_5",
... "resource_uri": "/api/v1/description/157/"
... },
... {
... "name": "caterpie_gen_6",
... "resource_uri": "/api/v1/description/158/"
... },
... {
... "name": "caterpie_gen_6",
... "resource_uri": "/api/v1/description/159/"
... },
... {
... "name": "caterpie_gen_3",
... "resource_uri": "/api/v1/description/153/"
... },
... {
... "name": "caterpie_gen_2",
... "resource_uri": "/api/v1/description/149/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Bug",
... "resource_uri": "/api/v1/egg/3/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "level": 7,
... "method": "level_up",
... "resource_uri": "/api/v1/pokemon/11/",
... "to": "Metapod"
... }
... ],
... "exp": 39,
... "growth_rate": "",
... "happiness": 0,
... "height": "3",
... "hp": 45,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:23.898774",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Electroweb",
... "resource_uri": "/api/v1/move/527/"
... },
... {
... "learn_type": "level up",
... "level": 15,
... "name": "Bug-bite",
... "resource_uri": "/api/v1/move/450/"
... },
... {
... "learn_type": "tutor",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "String-shot",
... "resource_uri": "/api/v1/move/81/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Tackle",
... "resource_uri": "/api/v1/move/33/"
... }
... ],
... "name": "Caterpie",
... "national_id": 10,
... "pkdx_id": 10,
... "resource_uri": "/api/v1/pokemon/10/",
... "sp_atk": 20,
... "sp_def": 20,
... "species": "",
... "speed": 45,
... "sprites": [
... {
... "name": "caterpie",
... "resource_uri": "/api/v1/sprite/11/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "bug",
... "resource_uri": "/api/v1/type/7/"
... }
... ],
... "weight": "29"
... }
> db.pokemons.save(pokemon9)
WriteResult({ "nInserted" : 1 })
> var pokemon10 = {
... "abilities": [
... {
... "name": "static",
... "resource_uri": "/api/v1/ability/9/"
... },
... {
... "name": "lightningrod",
... "resource_uri": "/api/v1/ability/31/"
... }
... ],
... "attack": 55,
... "catch_rate": 0,
... "created": "2013-11-03T15:05:41.317235",
... "defense": 40,
... "descriptions": [
... {
... "name": "pikachu_gen_1",
... "resource_uri": "/api/v1/description/382/"
... },
... {
... "name": "pikachu_gen_1",
... "resource_uri": "/api/v1/description/383/"
... },
... {
... "name": "pikachu_gen_2",
... "resource_uri": "/api/v1/description/384/"
... },
... {
... "name": "pikachu_gen_1",
... "resource_uri": "/api/v1/description/379/"
... },
... {
... "name": "pikachu_gen_1",
... "resource_uri": "/api/v1/description/380/"
... },
... {
... "name": "pikachu_gen_2",
... "resource_uri": "/api/v1/description/385/"
... },
... {
... "name": "pikachu_gen_2",
... "resource_uri": "/api/v1/description/386/"
... },
... {
... "name": "pikachu_gen_3",
... "resource_uri": "/api/v1/description/387/"
... },
... {
... "name": "pikachu_gen_3",
... "resource_uri": "/api/v1/description/388/"
... },
... {
... "name": "pikachu_gen_3",
... "resource_uri": "/api/v1/description/389/"
... },
... {
... "name": "pikachu_gen_3",
... "resource_uri": "/api/v1/description/390/"
... },
... {
... "name": "pikachu_gen_3",
... "resource_uri": "/api/v1/description/391/"
... },
... {
... "name": "pikachu_gen_4",
... "resource_uri": "/api/v1/description/392/"
... },
... {
... "name": "pikachu_gen_4",
... "resource_uri": "/api/v1/description/393/"
... },
... {
... "name": "pikachu_gen_4",
... "resource_uri": "/api/v1/description/394/"
... },
... {
... "name": "pikachu_gen_5",
... "resource_uri": "/api/v1/description/395/"
... },
... {
... "name": "pikachu_gen_6",
... "resource_uri": "/api/v1/description/396/"
... },
... {
... "name": "pikachu_gen_6",
... "resource_uri": "/api/v1/description/397/"
... },
... {
... "name": "pikachu_gen_1",
... "resource_uri": "/api/v1/description/381/"
... }
... ],
... "egg_cycles": 0,
... "egg_groups": [
... {
... "name": "Fairy",
... "resource_uri": "/api/v1/egg/6/"
... },
... {
... "name": "Ground",
... "resource_uri": "/api/v1/egg/5/"
... }
... ],
... "ev_yield": "",
... "evolutions": [
... {
... "method": "stone",
... "resource_uri": "/api/v1/pokemon/26/",
... "to": "Raichu"
... }
... ],
... "exp": 105,
... "growth_rate": "",
... "happiness": 0,
... "height": "4",
... "hp": 35,
... "male_female_ratio": "",
... "modified": "2013-11-23T13:13:24.383925",
... "moves": [
... {
... "learn_type": "tutor",
... "name": "Covet",
... "resource_uri": "/api/v1/move/343/"
... },
... {
... "learn_type": "machine",
... "name": "Wild-charge",
... "resource_uri": "/api/v1/move/528/"
... },
... {
... "learn_type": "machine",
... "name": "Volt-switch",
... "resource_uri": "/api/v1/move/521/"
... },
... {
... "learn_type": "machine",
... "name": "Echoed-voice",
... "resource_uri": "/api/v1/move/497/"
... },
... {
... "learn_type": "machine",
... "name": "Round",
... "resource_uri": "/api/v1/move/496/"
... },
... {
... "learn_type": "level up",
... "level": 18,
... "name": "Electro-ball",
... "resource_uri": "/api/v1/move/486/"
... },
... {
... "learn_type": "tutor",
... "name": "Magnet-rise",
... "resource_uri": "/api/v1/move/393/"
... },
... {
... "learn_type": "tutor",
... "name": "Signal-beam",
... "resource_uri": "/api/v1/move/324/"
... },
... {
... "learn_type": "tutor",
... "name": "Knock-off",
... "resource_uri": "/api/v1/move/282/"
... },
... {
... "learn_type": "tutor",
... "name": "Helping-hand",
... "resource_uri": "/api/v1/move/270/"
... },
... {
... "learn_type": "machine",
... "name": "Charge-beam",
... "resource_uri": "/api/v1/move/451/"
... },
... {
... "learn_type": "machine",
... "name": "Grass-knot",
... "resource_uri": "/api/v1/move/447/"
... },
... {
... "learn_type": "machine",
... "name": "Captivate",
... "resource_uri": "/api/v1/move/445/"
... },
... {
... "learn_type": "level up",
... "level": 37,
... "name": "Discharge",
... "resource_uri": "/api/v1/move/435/"
... },
... {
... "learn_type": "machine",
... "name": "Fling",
... "resource_uri": "/api/v1/move/374/"
... },
... {
... "learn_type": "level up",
... "level": 29,
... "name": "Feint",
... "resource_uri": "/api/v1/move/364/"
... },
... {
... "learn_type": "machine",
... "name": "Natural-gift",
... "resource_uri": "/api/v1/move/363/"
... },
... {
... "learn_type": "tutor",
... "name": "Counter",
... "resource_uri": "/api/v1/move/68/"
... },
... {
... "learn_type": "machine",
... "name": "Shock-wave",
... "resource_uri": "/api/v1/move/351/"
... },
... {
... "learn_type": "machine",
... "name": "Secret-power",
... "resource_uri": "/api/v1/move/290/"
... },
... {
... "learn_type": "machine",
... "name": "Brick-break",
... "resource_uri": "/api/v1/move/280/"
... },
... {
... "learn_type": "machine",
... "name": "Focus-punch",
... "resource_uri": "/api/v1/move/264/"
... },
... {
... "learn_type": "machine",
... "name": "Facade",
... "resource_uri": "/api/v1/move/263/"
... },
... {
... "learn_type": "machine",
... "name": "Rock-smash",
... "resource_uri": "/api/v1/move/249/"
... },
... {
... "learn_type": "machine",
... "name": "Dig",
... "resource_uri": "/api/v1/move/91/"
... },
... {
... "learn_type": "machine",
... "name": "Rain-dance",
... "resource_uri": "/api/v1/move/240/"
... },
... {
... "learn_type": "machine",
... "name": "Hidden-power",
... "resource_uri": "/api/v1/move/237/"
... },
... {
... "learn_type": "machine",
... "name": "Iron-tail",
... "resource_uri": "/api/v1/move/231/"
... },
... {
... "learn_type": "machine",
... "name": "Dynamicpunch",
... "resource_uri": "/api/v1/move/223/"
... },
... {
... "learn_type": "machine",
... "name": "Frustration",
... "resource_uri": "/api/v1/move/218/"
... },
... {
... "learn_type": "machine",
... "name": "Return",
... "resource_uri": "/api/v1/move/216/"
... },
... {
... "learn_type": "machine",
... "name": "Sleep-talk",
... "resource_uri": "/api/v1/move/214/"
... },
... {
... "learn_type": "machine",
... "name": "Attract",
... "resource_uri": "/api/v1/move/213/"
... },
... {
... "learn_type": "machine",
... "name": "Swagger",
... "resource_uri": "/api/v1/move/207/"
... },
... {
... "learn_type": "machine",
... "name": "Rollout",
... "resource_uri": "/api/v1/move/205/"
... },
... {
... "learn_type": "machine",
... "name": "Endure",
... "resource_uri": "/api/v1/move/203/"
... },
... {
... "learn_type": "machine",
... "name": "Detect",
... "resource_uri": "/api/v1/move/197/"
... },
... {
... "learn_type": "machine",
... "name": "Zap-cannon",
... "resource_uri": "/api/v1/move/192/"
... },
... {
... "learn_type": "machine",
... "name": "Mud-slap",
... "resource_uri": "/api/v1/move/189/"
... },
... {
... "learn_type": "machine",
... "name": "Protect",
... "resource_uri": "/api/v1/move/182/"
... },
... {
... "learn_type": "machine",
... "name": "Curse",
... "resource_uri": "/api/v1/move/174/"
... },
... {
... "learn_type": "machine",
... "name": "Snore",
... "resource_uri": "/api/v1/move/173/"
... },
... {
... "learn_type": "machine",
... "name": "Defense-curl",
... "resource_uri": "/api/v1/move/111/"
... },
... {
... "learn_type": "machine",
... "name": "Strength",
... "resource_uri": "/api/v1/move/70/"
... },
... {
... "learn_type": "machine",
... "name": "Headbutt",
... "resource_uri": "/api/v1/move/29/"
... },
... {
... "learn_type": "machine",
... "name": "Thunderpunch",
... "resource_uri": "/api/v1/move/9/"
... },
... {
... "learn_type": "level up",
... "level": 50,
... "name": "Light-screen",
... "resource_uri": "/api/v1/move/113/"
... },
... {
... "learn_type": "level up",
... "level": 6,
... "name": "Tail-whip",
... "resource_uri": "/api/v1/move/39/"
... },
... {
... "learn_type": "level up",
... "level": 20,
... "name": "Slam",
... "resource_uri": "/api/v1/move/21/"
... },
... {
... "learn_type": "machine",
... "name": "Substitute",
... "resource_uri": "/api/v1/move/164/"
... },
... {
... "learn_type": "machine",
... "name": "Rest",
... "resource_uri": "/api/v1/move/156/"
... },
... {
... "learn_type": "machine",
... "name": "Flash",
... "resource_uri": "/api/v1/move/148/"
... },
... {
... "learn_type": "machine",
... "name": "Skull-bash",
... "resource_uri": "/api/v1/move/130/"
... },
... {
... "learn_type": "level up",
... "level": 26,
... "name": "Swift",
... "resource_uri": "/api/v1/move/129/"
... },
... {
... "learn_type": "machine",
... "name": "Bide",
... "resource_uri": "/api/v1/move/117/"
... },
... {
... "learn_type": "machine",
... "name": "Reflect",
... "resource_uri": "/api/v1/move/115/"
... },
... {
... "learn_type": "machine",
... "name": "Double-team",
... "resource_uri": "/api/v1/move/104/"
... },
... {
... "learn_type": "machine",
... "name": "Mimic",
... "resource_uri": "/api/v1/move/102/"
... },
... {
... "learn_type": "machine",
... "name": "Rage",
... "resource_uri": "/api/v1/move/99/"
... },
... {
... "learn_type": "level up",
... "level": 16,
... "name": "Quick-attack",
... "resource_uri": "/api/v1/move/98/"
... },
... {
... "learn_type": "level up",
... "level": 33,
... "name": "Agility",
... "resource_uri": "/api/v1/move/97/"
... },
... {
... "learn_type": "machine",
... "name": "Toxic",
... "resource_uri": "/api/v1/move/92/"
... },
... {
... "learn_type": "level up",
... "level": 43,
... "name": "Thunder",
... "resource_uri": "/api/v1/move/87/"
... },
... {
... "learn_type": "level up",
... "level": 9,
... "name": "Thunder-wave",
... "resource_uri": "/api/v1/move/86/"
... },
... {
... "learn_type": "machine",
... "name": "Thunderbolt",
... "resource_uri": "/api/v1/move/85/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Thundershock",
... "resource_uri": "/api/v1/move/84/"
... },
... {
... "learn_type": "machine",
... "name": "Seismic-toss",
... "resource_uri": "/api/v1/move/69/"
... },
... {
... "learn_type": "machine",
... "name": "Submission",
... "resource_uri": "/api/v1/move/66/"
... },
... {
... "learn_type": "other",
... "name": "Surf",
... "resource_uri": "/api/v1/move/57/"
... },
... {
... "learn_type": "level up",
... "level": 1,
... "name": "Growl",
... "resource_uri": "/api/v1/move/45/"
... },
... {
... "learn_type": "machine",
... "name": "Double-edge",
... "resource_uri": "/api/v1/move/38/"
... },
... {
... "learn_type": "machine",
... "name": "Take-down",
... "resource_uri": "/api/v1/move/36/"
... },
... {
... "learn_type": "machine",
... "name": "Body-slam",
... "resource_uri": "/api/v1/move/34/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-kick",
... "resource_uri": "/api/v1/move/25/"
... },
... {
... "learn_type": "machine",
... "name": "Pay-day",
... "resource_uri": "/api/v1/move/6/"
... },
... {
... "learn_type": "machine",
... "name": "Mega-punch",
... "resource_uri": "/api/v1/move/5/"
... }
... ],
... "name": "Pikachu",
... "national_id": 25,
... "pkdx_id": 25,
... "resource_uri": "/api/v1/pokemon/25/",
... "sp_atk": 50,
... "sp_def": 50,
... "species": "",
... "speed": 90,
... "sprites": [
... {
... "name": "pikachu",
... "resource_uri": "/api/v1/sprite/26/"
... }
... ],
... "total": 0,
... "types": [
... {
... "name": "electric",
... "resource_uri": "/api/v1/type/13/"
... }
... ],
... "weight": "60"
... }
> db.pokemons.save(pokemon10)
WriteResult({ "nInserted" : 1 })
```
## Lista dos pokemons (passo 5)
```
> db.pokemons.find()
{ "_id" : ObjectId("5642c13753c28dfca9bfb18b"), "abilities" : [ { "name" : "shield-dust", "resource_uri" : "/api/v1/ability/19/" }, { "name" : "run-away", "resource_uri" : "/api/v1/ability/50/" } ], "attack" : 30, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.285736", "defense" : 35, "descriptions" : [ { "name" : "caterpie_gen_4", "resource_uri" : "/api/v1/description/154/" }, { "name" : "caterpie_gen_4", "resource_uri" : "/api/v1/description/155/" }, { "name" : "caterpie_gen_1", "resource_uri" : "/api/v1/description/144/" }, { "name" : "caterpie_gen_1", "resource_uri" : "/api/v1/description/145/" }, { "name" : "caterpie_gen_1", "resource_uri" : "/api/v1/description/146/" }, { "name" : "caterpie_gen_1", "resource_uri" : "/api/v1/description/147/" }, { "name" : "caterpie_gen_1", "resource_uri" : "/api/v1/description/148/" }, { "name" : "caterpie_gen_2", "resource_uri" : "/api/v1/description/150/" }, { "name" : "caterpie_gen_3", "resource_uri" : "/api/v1/description/151/" }, { "name" : "caterpie_gen_3", "resource_uri" : "/api/v1/description/152/" }, { "name" : "caterpie_gen_4", "resource_uri" : "/api/v1/description/156/" }, { "name" : "caterpie_gen_5", "resource_uri" : "/api/v1/description/157/" }, { "name" : "caterpie_gen_6", "resource_uri" : "/api/v1/description/158/" }, { "name" : "caterpie_gen_6", "resource_uri" : "/api/v1/description/159/" }, { "name" : "caterpie_gen_3", "resource_uri" : "/api/v1/description/153/" }, { "name" : "caterpie_gen_2", "resource_uri" : "/api/v1/description/149/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Bug", "resource_uri" : "/api/v1/egg/3/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 7, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/11/", "to" : "Metapod" } ], "exp" : 39, "growth_rate" : "", "happiness" : 0, "height" : "3", "hp" : 45, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.898774", "moves" : [ { "learn_type" : "tutor", "name" : "Electroweb", "resource_uri" : "/api/v1/move/527/" }, { "learn_type" : "level up", "level" : 15, "name" : "Bug-bite", "resource_uri" : "/api/v1/move/450/" }, { "learn_type" : "tutor", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "level up", "level" : 1, "name" : "String-shot", "resource_uri" : "/api/v1/move/81/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" } ], "name" : "Caterpie", "national_id" : 10, "pkdx_id" : 10, "resource_uri" : "/api/v1/pokemon/10/", "sp_atk" : 20, "sp_def" : 20, "species" : "", "speed" : 45, "sprites" : [ { "name" : "caterpie", "resource_uri" : "/api/v1/sprite/11/" } ], "total" : 0, "types" : [ { "name" : "bug", "resource_uri" : "/api/v1/type/7/" } ], "weight" : "29" }
{ "_id" : ObjectId("5642bf5653c28dfca9bfb182"), "abilities" : [ { "name" : "chlorophyll", "resource_uri" : "/api/v1/ability/34/" }, { "name" : "overgrow", "resource_uri" : "/api/v1/ability/65/" } ], "attack" : 49, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.260678", "defense" : 49, "descriptions" : [ { "name" : "bulbasaur_gen_1", "resource_uri" : "/api/v1/description/4/" }, { "name" : "bulbasaur_gen_1", "resource_uri" : "/api/v1/description/5/" }, { "name" : "bulbasaur_gen_1", "resource_uri" : "/api/v1/description/6/" }, { "name" : "bulbasaur_gen_2", "resource_uri" : "/api/v1/description/7/" }, { "name" : "bulbasaur_gen_2", "resource_uri" : "/api/v1/description/8/" }, { "name" : "bulbasaur_gen_3", "resource_uri" : "/api/v1/description/9/" }, { "name" : "bulbasaur_gen_3", "resource_uri" : "/api/v1/description/10/" }, { "name" : "bulbasaur_gen_3", "resource_uri" : "/api/v1/description/11/" }, { "name" : "bulbasaur_gen_4", "resource_uri" : "/api/v1/description/12/" }, { "name" : "bulbasaur_gen_4", "resource_uri" : "/api/v1/description/13/" }, { "name" : "bulbasaur_gen_4", "resource_uri" : "/api/v1/description/14/" }, { "name" : "bulbasaur_gen_5", "resource_uri" : "/api/v1/description/15/" }, { "name" : "bulbasaur_gen_1", "resource_uri" : "/api/v1/description/2/" }, { "name" : "bulbasaur_gen_1", "resource_uri" : "/api/v1/description/3/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Plant", "resource_uri" : "/api/v1/egg/7/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "1 special attack", "evolutions" : [ { "level" : 16, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/2/", "to" : "Ivysaur" } ], "exp" : 64, "growth_rate" : "medium slow", "happiness" : 0, "height" : "7", "hp" : 45, "male_female_ratio" : "87.5/12.5", "modified" : "2013-11-30T13:59:47.261100", "moves" : [ { "learn_type" : "tutor", "name" : "Bind", "resource_uri" : "/api/v1/move/20/" }, { "learn_type" : "tutor", "name" : "Grass-pledge", "resource_uri" : "/api/v1/move/520/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Venoshock", "resource_uri" : "/api/v1/move/474/" }, { "learn_type" : "egg move", "name" : "Power-whip", "resource_uri" : "/api/v1/move/438/" }, { "learn_type" : "egg move", "name" : "Sludge", "resource_uri" : "/api/v1/move/124/" }, { "learn_type" : "tutor", "name" : "String-shot", "resource_uri" : "/api/v1/move/81/" }, { "learn_type" : "tutor", "name" : "Knock-off", "resource_uri" : "/api/v1/move/282/" }, { "learn_type" : "machine", "name" : "Grass-knot", "resource_uri" : "/api/v1/move/447/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "egg move", "name" : "Leaf-storm", "resource_uri" : "/api/v1/move/437/" }, { "learn_type" : "machine", "name" : "Energy-ball", "resource_uri" : "/api/v1/move/412/" }, { "learn_type" : "level up", "level" : 37, "name" : "Seed-bomb", "resource_uri" : "/api/v1/move/402/" }, { "learn_type" : "level up", "level" : 31, "name" : "Worry-seed", "resource_uri" : "/api/v1/move/388/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "egg move", "name" : "Ingrain", "resource_uri" : "/api/v1/move/275/" }, { "learn_type" : "egg move", "name" : "Nature-power", "resource_uri" : "/api/v1/move/267/" }, { "learn_type" : "egg move", "name" : "Amnesia", "resource_uri" : "/api/v1/move/133/" }, { "learn_type" : "egg move", "name" : "Magical-leaf", "resource_uri" : "/api/v1/move/345/" }, { "learn_type" : "machine", "name" : "Bullet-seed", "resource_uri" : "/api/v1/move/331/" }, { "learn_type" : "egg move", "name" : "Grasswhistle", "resource_uri" : "/api/v1/move/320/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Sludge-bomb", "resource_uri" : "/api/v1/move/188/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "level up", "level" : 39, "name" : "Synthesis", "resource_uri" : "/api/v1/move/235/" }, { "learn_type" : "level up", "level" : 25, "name" : "Sweet-scent", "resource_uri" : "/api/v1/move/230/" }, { "learn_type" : "egg move", "name" : "Safeguard", "resource_uri" : "/api/v1/move/219/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "egg move", "name" : "Charm", "resource_uri" : "/api/v1/move/204/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Giga-drain", "resource_uri" : "/api/v1/move/202/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Flash", "resource_uri" : "/api/v1/move/148/" }, { "learn_type" : "egg move", "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "egg move", "name" : "Light-screen", "resource_uri" : "/api/v1/move/113/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "egg move", "name" : "Petal-dance", "resource_uri" : "/api/v1/move/80/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "egg move", "name" : "Razor-wind", "resource_uri" : "/api/v1/move/13/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "level up", "level" : 41, "name" : "Sleep-powder", "resource_uri" : "/api/v1/move/79/" }, { "learn_type" : "level up", "level" : 20, "name" : "Poisonpowder", "resource_uri" : "/api/v1/move/77/" }, { "learn_type" : "level up", "level" : 48, "name" : "Solarbeam", "resource_uri" : "/api/v1/move/76/" }, { "learn_type" : "level up", "level" : 27, "name" : "Razor-leaf", "resource_uri" : "/api/v1/move/75/" }, { "learn_type" : "level up", "level" : 34, "name" : "Growth", "resource_uri" : "/api/v1/move/74/" }, { "learn_type" : "level up", "level" : 7, "name" : "Leech-seed", "resource_uri" : "/api/v1/move/73/" }, { "learn_type" : "machine", "name" : "Mega-drain", "resource_uri" : "/api/v1/move/72/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "level up", "level" : 13, "name" : "Vine-whip", "resource_uri" : "/api/v1/move/22/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" } ], "name" : "Bulbasaur", "national_id" : 1, "pkdx_id" : 1, "resource_uri" : "/api/v1/pokemon/1/", "sp_atk" : 65, "sp_def" : 65, "species" : "seed pokemon", "speed" : 45, "sprites" : [ { "name" : "bulbasaur", "resource_uri" : "/api/v1/sprite/2/" }, { "name" : "bulbasaur", "resource_uri" : "/api/v1/sprite/1/" } ], "total" : 0, "types" : [ { "name" : "poison", "resource_uri" : "/api/v1/type/4/" }, { "name" : "grass", "resource_uri" : "/api/v1/type/12/" } ], "weight" : "69" }
{ "_id" : ObjectId("5642c08b53c28dfca9bfb183"), "abilities" : [ { "name" : "chlorophyll", "resource_uri" : "/api/v1/ability/34/" }, { "name" : "overgrow", "resource_uri" : "/api/v1/ability/65/" } ], "attack" : 62, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.265680", "defense" : 63, "descriptions" : [ { "name" : "ivysaur_gen_1", "resource_uri" : "/api/v1/description/20/" }, { "name" : "ivysaur_gen_2", "resource_uri" : "/api/v1/description/21/" }, { "name" : "ivysaur_gen_2", "resource_uri" : "/api/v1/description/22/" }, { "name" : "ivysaur_gen_1", "resource_uri" : "/api/v1/description/16/" }, { "name" : "ivysaur_gen_1", "resource_uri" : "/api/v1/description/17/" }, { "name" : "ivysaur_gen_1", "resource_uri" : "/api/v1/description/18/" }, { "name" : "ivysaur_gen_1", "resource_uri" : "/api/v1/description/19/" }, { "name" : "ivysaur_gen_3", "resource_uri" : "/api/v1/description/23/" }, { "name" : "ivysaur_gen_3", "resource_uri" : "/api/v1/description/24/" }, { "name" : "ivysaur_gen_5", "resource_uri" : "/api/v1/description/29/" }, { "name" : "ivysaur_gen_3", "resource_uri" : "/api/v1/description/25/" }, { "name" : "ivysaur_gen_4", "resource_uri" : "/api/v1/description/26/" }, { "name" : "ivysaur_gen_4", "resource_uri" : "/api/v1/description/27/" }, { "name" : "ivysaur_gen_4", "resource_uri" : "/api/v1/description/28/" }, { "name" : "ivysaur_gen_6", "resource_uri" : "/api/v1/description/30/" }, { "name" : "ivysaur_gen_6", "resource_uri" : "/api/v1/description/31/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Plant", "resource_uri" : "/api/v1/egg/7/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 32, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/3/", "to" : "Venusaur" } ], "exp" : 142, "growth_rate" : "", "happiness" : 0, "height" : "10", "hp" : 60, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.630416", "moves" : [ { "learn_type" : "tutor", "name" : "Bind", "resource_uri" : "/api/v1/move/20/" }, { "learn_type" : "tutor", "name" : "Grass-pledge", "resource_uri" : "/api/v1/move/520/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Venoshock", "resource_uri" : "/api/v1/move/474/" }, { "learn_type" : "machine", "name" : "Safeguard", "resource_uri" : "/api/v1/move/219/" }, { "learn_type" : "machine", "name" : "Light-screen", "resource_uri" : "/api/v1/move/113/" }, { "learn_type" : "tutor", "name" : "String-shot", "resource_uri" : "/api/v1/move/81/" }, { "learn_type" : "tutor", "name" : "Seed-bomb", "resource_uri" : "/api/v1/move/402/" }, { "learn_type" : "tutor", "name" : "Knock-off", "resource_uri" : "/api/v1/move/282/" }, { "learn_type" : "machine", "name" : "Grass-knot", "resource_uri" : "/api/v1/move/447/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "machine", "name" : "Energy-ball", "resource_uri" : "/api/v1/move/412/" }, { "learn_type" : "level up", "level" : 36, "name" : "Worry-seed", "resource_uri" : "/api/v1/move/388/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Bullet-seed", "resource_uri" : "/api/v1/move/331/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Sludge-bomb", "resource_uri" : "/api/v1/move/188/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "level up", "level" : 47, "name" : "Synthesis", "resource_uri" : "/api/v1/move/235/" }, { "learn_type" : "level up", "level" : 29, "name" : "Sweet-scent", "resource_uri" : "/api/v1/move/230/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Giga-drain", "resource_uri" : "/api/v1/move/202/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Flash", "resource_uri" : "/api/v1/move/148/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "level up", "level" : 46, "name" : "Sleep-powder", "resource_uri" : "/api/v1/move/79/" }, { "learn_type" : "level up", "level" : 22, "name" : "Poisonpowder", "resource_uri" : "/api/v1/move/77/" }, { "learn_type" : "level up", "level" : 54, "name" : "Solarbeam", "resource_uri" : "/api/v1/move/76/" }, { "learn_type" : "level up", "level" : 30, "name" : "Razor-leaf", "resource_uri" : "/api/v1/move/75/" }, { "learn_type" : "level up", "level" : 38, "name" : "Growth", "resource_uri" : "/api/v1/move/74/" }, { "learn_type" : "level up", "level" : 1, "name" : "Leech-seed", "resource_uri" : "/api/v1/move/73/" }, { "learn_type" : "machine", "name" : "Mega-drain", "resource_uri" : "/api/v1/move/72/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "level up", "level" : 13, "name" : "Vine-whip", "resource_uri" : "/api/v1/move/22/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" } ], "name" : "Ivysaur", "national_id" : 2, "pkdx_id" : 2, "resource_uri" : "/api/v1/pokemon/2/", "sp_atk" : 80, "sp_def" : 80, "species" : "", "speed" : 60, "sprites" : [ { "name" : "ivysaur", "resource_uri" : "/api/v1/sprite/3/" } ], "total" : 0, "types" : [ { "name" : "poison", "resource_uri" : "/api/v1/type/4/" }, { "name" : "grass", "resource_uri" : "/api/v1/type/12/" } ], "weight" : "130" }
{ "_id" : ObjectId("5642c0a553c28dfca9bfb184"), "abilities" : [ { "name" : "chlorophyll", "resource_uri" : "/api/v1/ability/34/" }, { "name" : "overgrow", "resource_uri" : "/api/v1/ability/65/" } ], "attack" : 82, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.268479", "defense" : 83, "descriptions" : [ { "name" : "venusaur_gen_1", "resource_uri" : "/api/v1/description/35/" }, { "name" : "venusaur_gen_1", "resource_uri" : "/api/v1/description/32/" }, { "name" : "venusaur_gen_1", "resource_uri" : "/api/v1/description/33/" }, { "name" : "venusaur_gen_1", "resource_uri" : "/api/v1/description/34/" }, { "name" : "venusaur_gen_1", "resource_uri" : "/api/v1/description/36/" }, { "name" : "venusaur_gen_2", "resource_uri" : "/api/v1/description/37/" }, { "name" : "venusaur_gen_2", "resource_uri" : "/api/v1/description/38/" }, { "name" : "venusaur_gen_3", "resource_uri" : "/api/v1/description/39/" }, { "name" : "venusaur_gen_3", "resource_uri" : "/api/v1/description/40/" }, { "name" : "venusaur_gen_3", "resource_uri" : "/api/v1/description/41/" }, { "name" : "venusaur_gen_4", "resource_uri" : "/api/v1/description/42/" }, { "name" : "venusaur_gen_4", "resource_uri" : "/api/v1/description/43/" }, { "name" : "venusaur_gen_4", "resource_uri" : "/api/v1/description/44/" }, { "name" : "venusaur_gen_5", "resource_uri" : "/api/v1/description/45/" }, { "name" : "venusaur_gen_6", "resource_uri" : "/api/v1/description/47/" }, { "name" : "venusaur_gen_6", "resource_uri" : "/api/v1/description/46/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Plant", "resource_uri" : "/api/v1/egg/7/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "detail" : "mega", "method" : "other", "resource_uri" : "/api/v1/pokemon/10033/", "to" : "Venusaur-mega" } ], "exp" : 236, "growth_rate" : "", "happiness" : 0, "height" : "20", "hp" : 80, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.663509", "moves" : [ { "learn_type" : "tutor", "name" : "Bind", "resource_uri" : "/api/v1/move/20/" }, { "learn_type" : "machine", "name" : "Bulldoze", "resource_uri" : "/api/v1/move/523/" }, { "learn_type" : "tutor", "name" : "Grass-pledge", "resource_uri" : "/api/v1/move/520/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Venoshock", "resource_uri" : "/api/v1/move/474/" }, { "learn_type" : "machine", "name" : "Safeguard", "resource_uri" : "/api/v1/move/219/" }, { "learn_type" : "machine", "name" : "Light-screen", "resource_uri" : "/api/v1/move/113/" }, { "learn_type" : "tutor", "name" : "Block", "resource_uri" : "/api/v1/move/335/" }, { "learn_type" : "tutor", "name" : "String-shot", "resource_uri" : "/api/v1/move/81/" }, { "learn_type" : "tutor", "name" : "Seed-bomb", "resource_uri" : "/api/v1/move/402/" }, { "learn_type" : "tutor", "name" : "Knock-off", "resource_uri" : "/api/v1/move/282/" }, { "learn_type" : "tutor", "name" : "Outrage", "resource_uri" : "/api/v1/move/200/" }, { "learn_type" : "machine", "name" : "Grass-knot", "resource_uri" : "/api/v1/move/447/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "machine", "name" : "Rock-climb", "resource_uri" : "/api/v1/move/431/" }, { "learn_type" : "machine", "name" : "Giga-impact", "resource_uri" : "/api/v1/move/416/" }, { "learn_type" : "machine", "name" : "Energy-ball", "resource_uri" : "/api/v1/move/412/" }, { "learn_type" : "level up", "level" : 39, "name" : "Worry-seed", "resource_uri" : "/api/v1/move/388/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "level up", "level" : 32, "name" : "Petal-dance", "resource_uri" : "/api/v1/move/80/" }, { "learn_type" : "tutor", "name" : "Frenzy-plant", "resource_uri" : "/api/v1/move/338/" }, { "learn_type" : "machine", "name" : "Bullet-seed", "resource_uri" : "/api/v1/move/331/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Sludge-bomb", "resource_uri" : "/api/v1/move/188/" }, { "learn_type" : "machine", "name" : "Earthquake", "resource_uri" : "/api/v1/move/89/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "level up", "level" : 53, "name" : "Synthesis", "resource_uri" : "/api/v1/move/235/" }, { "learn_type" : "level up", "level" : 29, "name" : "Sweet-scent", "resource_uri" : "/api/v1/move/230/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Giga-drain", "resource_uri" : "/api/v1/move/202/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Flash", "resource_uri" : "/api/v1/move/148/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "machine", "name" : "Roar", "resource_uri" : "/api/v1/move/46/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "level up", "level" : 55, "name" : "Sleep-powder", "resource_uri" : "/api/v1/move/79/" }, { "learn_type" : "level up", "level" : 22, "name" : "Poisonpowder", "resource_uri" : "/api/v1/move/77/" }, { "learn_type" : "level up", "level" : 65, "name" : "Solarbeam", "resource_uri" : "/api/v1/move/76/" }, { "learn_type" : "level up", "level" : 30, "name" : "Razor-leaf", "resource_uri" : "/api/v1/move/75/" }, { "learn_type" : "level up", "level" : 43, "name" : "Growth", "resource_uri" : "/api/v1/move/74/" }, { "learn_type" : "level up", "level" : 1, "name" : "Leech-seed", "resource_uri" : "/api/v1/move/73/" }, { "learn_type" : "machine", "name" : "Mega-drain", "resource_uri" : "/api/v1/move/72/" }, { "learn_type" : "machine", "name" : "Hyper-beam", "resource_uri" : "/api/v1/move/63/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "level up", "level" : 1, "name" : "Vine-whip", "resource_uri" : "/api/v1/move/22/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" } ], "name" : "Venusaur", "national_id" : 3, "pkdx_id" : 3, "resource_uri" : "/api/v1/pokemon/3/", "sp_atk" : 100, "sp_def" : 100, "species" : "", "speed" : 80, "sprites" : [ { "name" : "venusaur", "resource_uri" : "/api/v1/sprite/4/" } ], "total" : 0, "types" : [ { "name" : "poison", "resource_uri" : "/api/v1/type/4/" }, { "name" : "grass", "resource_uri" : "/api/v1/type/12/" } ], "weight" : "1000" }
{ "_id" : ObjectId("5642c0ba53c28dfca9bfb185"), "abilities" : [ { "name" : "blaze", "resource_uri" : "/api/v1/ability/66/" }, { "name" : "solar-power", "resource_uri" : "/api/v1/ability/94/" } ], "attack" : 52, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.271082", "defense" : 43, "descriptions" : [ { "name" : "charmander_gen_1", "resource_uri" : "/api/v1/description/48/" }, { "name" : "charmander_gen_1", "resource_uri" : "/api/v1/description/49/" }, { "name" : "charmander_gen_1", "resource_uri" : "/api/v1/description/50/" }, { "name" : "charmander_gen_1", "resource_uri" : "/api/v1/description/51/" }, { "name" : "charmander_gen_1", "resource_uri" : "/api/v1/description/52/" }, { "name" : "charmander_gen_2", "resource_uri" : "/api/v1/description/54/" }, { "name" : "charmander_gen_3", "resource_uri" : "/api/v1/description/55/" }, { "name" : "charmander_gen_3", "resource_uri" : "/api/v1/description/56/" }, { "name" : "charmander_gen_3", "resource_uri" : "/api/v1/description/57/" }, { "name" : "charmander_gen_4", "resource_uri" : "/api/v1/description/58/" }, { "name" : "charmander_gen_4", "resource_uri" : "/api/v1/description/59/" }, { "name" : "charmander_gen_4", "resource_uri" : "/api/v1/description/60/" }, { "name" : "charmander_gen_5", "resource_uri" : "/api/v1/description/61/" }, { "name" : "charmander_gen_6", "resource_uri" : "/api/v1/description/62/" }, { "name" : "charmander_gen_6", "resource_uri" : "/api/v1/description/63/" }, { "name" : "charmander_gen_2", "resource_uri" : "/api/v1/description/53/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Dragon", "resource_uri" : "/api/v1/egg/14/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 16, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/5/", "to" : "Charmeleon" } ], "exp" : 62, "growth_rate" : "", "happiness" : 0, "height" : "6", "hp" : 39, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.695471", "moves" : [ { "learn_type" : "tutor", "name" : "Fire-pledge", "resource_uri" : "/api/v1/move/519/" }, { "learn_type" : "level up", "level" : 46, "name" : "Inferno", "resource_uri" : "/api/v1/move/517/" }, { "learn_type" : "machine", "name" : "Incinerate", "resource_uri" : "/api/v1/move/510/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Flame-charge", "resource_uri" : "/api/v1/move/488/" }, { "learn_type" : "level up", "level" : 28, "name" : "Flame-burst", "resource_uri" : "/api/v1/move/481/" }, { "learn_type" : "machine", "name" : "Hone-claws", "resource_uri" : "/api/v1/move/468/" }, { "learn_type" : "egg move", "name" : "Dragon-pulse", "resource_uri" : "/api/v1/move/406/" }, { "learn_type" : "tutor", "name" : "Heat-wave", "resource_uri" : "/api/v1/move/257/" }, { "learn_type" : "tutor", "name" : "Thunderpunch", "resource_uri" : "/api/v1/move/9/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "level up", "level" : 25, "name" : "Fire-fang", "resource_uri" : "/api/v1/move/424/" }, { "learn_type" : "machine", "name" : "Shadow-claw", "resource_uri" : "/api/v1/move/421/" }, { "learn_type" : "egg move", "name" : "Dragon-rush", "resource_uri" : "/api/v1/move/407/" }, { "learn_type" : "egg move", "name" : "Flare-blitz", "resource_uri" : "/api/v1/move/394/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "machine", "name" : "Will-o-wisp", "resource_uri" : "/api/v1/move/261/" }, { "learn_type" : "egg move", "name" : "Crunch", "resource_uri" : "/api/v1/move/242/" }, { "learn_type" : "level up", "level" : 13, "name" : "Metal-claw", "resource_uri" : "/api/v1/move/232/" }, { "learn_type" : "egg move", "name" : "Dragon-dance", "resource_uri" : "/api/v1/move/349/" }, { "learn_type" : "machine", "name" : "Dragon-claw", "resource_uri" : "/api/v1/move/337/" }, { "learn_type" : "machine", "name" : "Aerial-ace", "resource_uri" : "/api/v1/move/332/" }, { "learn_type" : "machine", "name" : "Overheat", "resource_uri" : "/api/v1/move/315/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "egg move", "name" : "Beat-up", "resource_uri" : "/api/v1/move/251/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "egg move", "name" : "Ancientpower", "resource_uri" : "/api/v1/move/246/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "machine", "name" : "Dragonbreath", "resource_uri" : "/api/v1/move/225/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "egg move", "name" : "Outrage", "resource_uri" : "/api/v1/move/200/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "egg move", "name" : "Belly-drum", "resource_uri" : "/api/v1/move/187/" }, { "learn_type" : "level up", "level" : 25, "name" : "Scary-face", "resource_uri" : "/api/v1/move/184/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "egg move", "name" : "Rock-slide", "resource_uri" : "/api/v1/move/157/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "level up", "level" : 13, "name" : "Smokescreen", "resource_uri" : "/api/v1/move/108/" }, { "learn_type" : "egg move", "name" : "Bite", "resource_uri" : "/api/v1/move/44/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Fire-punch", "resource_uri" : "/api/v1/move/7/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "level up", "level" : 30, "name" : "Slash", "resource_uri" : "/api/v1/move/163/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Swift", "resource_uri" : "/api/v1/move/129/" }, { "learn_type" : "machine", "name" : "Fire-blast", "resource_uri" : "/api/v1/move/126/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "level up", "level" : 22, "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "level up", "level" : 46, "name" : "Fire-spin", "resource_uri" : "/api/v1/move/83/" }, { "learn_type" : "machine", "name" : "Dragon-rage", "resource_uri" : "/api/v1/move/82/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "level up", "level" : 38, "name" : "Flamethrower", "resource_uri" : "/api/v1/move/53/" }, { "learn_type" : "level up", "level" : 9, "name" : "Ember", "resource_uri" : "/api/v1/move/52/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "level up", "level" : 15, "name" : "Leer", "resource_uri" : "/api/v1/move/43/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" }, { "learn_type" : "level up", "level" : 1, "name" : "Scratch", "resource_uri" : "/api/v1/move/10/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Charmander", "national_id" : 4, "pkdx_id" : 4, "resource_uri" : "/api/v1/pokemon/4/", "sp_atk" : 60, "sp_def" : 50, "species" : "", "speed" : 65, "sprites" : [ { "name" : "charmander", "resource_uri" : "/api/v1/sprite/5/" } ], "total" : 0, "types" : [ { "name" : "fire", "resource_uri" : "/api/v1/type/10/" } ], "weight" : "85" }
{ "_id" : ObjectId("5642c0d253c28dfca9bfb186"), "abilities" : [ { "name" : "blaze", "resource_uri" : "/api/v1/ability/66/" }, { "name" : "solar-power", "resource_uri" : "/api/v1/ability/94/" } ], "attack" : 64, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.273462", "defense" : 58, "descriptions" : [ { "name" : "charmeleon_gen_1", "resource_uri" : "/api/v1/description/64/" }, { "name" : "charmeleon_gen_1", "resource_uri" : "/api/v1/description/65/" }, { "name" : "charmeleon_gen_1", "resource_uri" : "/api/v1/description/66/" }, { "name" : "charmeleon_gen_1", "resource_uri" : "/api/v1/description/67/" }, { "name" : "charmeleon_gen_1", "resource_uri" : "/api/v1/description/68/" }, { "name" : "charmeleon_gen_2", "resource_uri" : "/api/v1/description/69/" }, { "name" : "charmeleon_gen_2", "resource_uri" : "/api/v1/description/70/" }, { "name" : "charmeleon_gen_3", "resource_uri" : "/api/v1/description/71/" }, { "name" : "charmeleon_gen_3", "resource_uri" : "/api/v1/description/72/" }, { "name" : "charmeleon_gen_4", "resource_uri" : "/api/v1/description/74/" }, { "name" : "charmeleon_gen_6", "resource_uri" : "/api/v1/description/79/" }, { "name" : "charmeleon_gen_4", "resource_uri" : "/api/v1/description/75/" }, { "name" : "charmeleon_gen_4", "resource_uri" : "/api/v1/description/76/" }, { "name" : "charmeleon_gen_5", "resource_uri" : "/api/v1/description/77/" }, { "name" : "charmeleon_gen_6", "resource_uri" : "/api/v1/description/78/" }, { "name" : "charmeleon_gen_3", "resource_uri" : "/api/v1/description/73/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Dragon", "resource_uri" : "/api/v1/egg/14/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 36, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/6/", "to" : "Charizard" } ], "exp" : 142, "growth_rate" : "", "happiness" : 0, "height" : "11", "hp" : 58, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.726827", "moves" : [ { "learn_type" : "tutor", "name" : "Outrage", "resource_uri" : "/api/v1/move/200/" }, { "learn_type" : "tutor", "name" : "Fire-pledge", "resource_uri" : "/api/v1/move/519/" }, { "learn_type" : "level up", "level" : 54, "name" : "Inferno", "resource_uri" : "/api/v1/move/517/" }, { "learn_type" : "machine", "name" : "Incinerate", "resource_uri" : "/api/v1/move/510/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Flame-charge", "resource_uri" : "/api/v1/move/488/" }, { "learn_type" : "level up", "level" : 32, "name" : "Flame-burst", "resource_uri" : "/api/v1/move/481/" }, { "learn_type" : "machine", "name" : "Hone-claws", "resource_uri" : "/api/v1/move/468/" }, { "learn_type" : "tutor", "name" : "Heat-wave", "resource_uri" : "/api/v1/move/257/" }, { "learn_type" : "tutor", "name" : "Thunderpunch", "resource_uri" : "/api/v1/move/9/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "level up", "level" : 28, "name" : "Fire-fang", "resource_uri" : "/api/v1/move/424/" }, { "learn_type" : "machine", "name" : "Shadow-claw", "resource_uri" : "/api/v1/move/421/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "machine", "name" : "Will-o-wisp", "resource_uri" : "/api/v1/move/261/" }, { "learn_type" : "level up", "level" : 13, "name" : "Metal-claw", "resource_uri" : "/api/v1/move/232/" }, { "learn_type" : "tutor", "name" : "Rock-slide", "resource_uri" : "/api/v1/move/157/" }, { "learn_type" : "machine", "name" : "Dragon-claw", "resource_uri" : "/api/v1/move/337/" }, { "learn_type" : "machine", "name" : "Aerial-ace", "resource_uri" : "/api/v1/move/332/" }, { "learn_type" : "machine", "name" : "Overheat", "resource_uri" : "/api/v1/move/315/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "machine", "name" : "Dragonbreath", "resource_uri" : "/api/v1/move/225/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "level up", "level" : 27, "name" : "Scary-face", "resource_uri" : "/api/v1/move/184/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "level up", "level" : 13, "name" : "Smokescreen", "resource_uri" : "/api/v1/move/108/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Fire-punch", "resource_uri" : "/api/v1/move/7/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "level up", "level" : 33, "name" : "Slash", "resource_uri" : "/api/v1/move/163/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Swift", "resource_uri" : "/api/v1/move/129/" }, { "learn_type" : "machine", "name" : "Fire-blast", "resource_uri" : "/api/v1/move/126/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "level up", "level" : 24, "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "level up", "level" : 56, "name" : "Fire-spin", "resource_uri" : "/api/v1/move/83/" }, { "learn_type" : "machine", "name" : "Dragon-rage", "resource_uri" : "/api/v1/move/82/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "level up", "level" : 42, "name" : "Flamethrower", "resource_uri" : "/api/v1/move/53/" }, { "learn_type" : "level up", "level" : 1, "name" : "Ember", "resource_uri" : "/api/v1/move/52/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "level up", "level" : 15, "name" : "Leer", "resource_uri" : "/api/v1/move/43/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" }, { "learn_type" : "level up", "level" : 1, "name" : "Scratch", "resource_uri" : "/api/v1/move/10/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Charmeleon", "national_id" : 5, "pkdx_id" : 5, "resource_uri" : "/api/v1/pokemon/5/", "sp_atk" : 80, "sp_def" : 65, "species" : "", "speed" : 80, "sprites" : [ { "name" : "charmeleon", "resource_uri" : "/api/v1/sprite/6/" } ], "total" : 0, "types" : [ { "name" : "fire", "resource_uri" : "/api/v1/type/10/" } ], "weight" : "190" }
{ "_id" : ObjectId("5642c0e753c28dfca9bfb187"), "abilities" : [ { "name" : "blaze", "resource_uri" : "/api/v1/ability/66/" }, { "name" : "solar-power", "resource_uri" : "/api/v1/ability/94/" } ], "attack" : 84, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.275724", "defense" : 78, "descriptions" : [ { "name" : "charizard_gen_1", "resource_uri" : "/api/v1/description/80/" }, { "name" : "charizard_gen_1", "resource_uri" : "/api/v1/description/81/" }, { "name" : "charizard_gen_1", "resource_uri" : "/api/v1/description/82/" }, { "name" : "charizard_gen_1", "resource_uri" : "/api/v1/description/83/" }, { "name" : "charizard_gen_1", "resource_uri" : "/api/v1/description/84/" }, { "name" : "charizard_gen_2", "resource_uri" : "/api/v1/description/85/" }, { "name" : "charizard_gen_2", "resource_uri" : "/api/v1/description/86/" }, { "name" : "charizard_gen_3", "resource_uri" : "/api/v1/description/87/" }, { "name" : "charizard_gen_3", "resource_uri" : "/api/v1/description/88/" }, { "name" : "charizard_gen_3", "resource_uri" : "/api/v1/description/89/" }, { "name" : "charizard_gen_4", "resource_uri" : "/api/v1/description/92/" }, { "name" : "charizard_gen_5", "resource_uri" : "/api/v1/description/93/" }, { "name" : "charizard_gen_6", "resource_uri" : "/api/v1/description/94/" }, { "name" : "charizard_gen_6", "resource_uri" : "/api/v1/description/95/" }, { "name" : "charizard_gen_4", "resource_uri" : "/api/v1/description/90/" }, { "name" : "charizard_gen_4", "resource_uri" : "/api/v1/description/91/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Dragon", "resource_uri" : "/api/v1/egg/14/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "detail" : "mega", "method" : "other", "resource_uri" : "/api/v1/pokemon/10035/", "to" : "Charizard-mega-y" }, { "detail" : "mega", "method" : "other", "resource_uri" : "/api/v1/pokemon/10034/", "to" : "Charizard-mega-x" } ], "exp" : 240, "growth_rate" : "", "happiness" : 0, "height" : "17", "hp" : 78, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.762594", "moves" : [ { "learn_type" : "machine", "name" : "Dragon-tail", "resource_uri" : "/api/v1/move/525/" }, { "learn_type" : "machine", "name" : "Bulldoze", "resource_uri" : "/api/v1/move/523/" }, { "learn_type" : "tutor", "name" : "Fire-pledge", "resource_uri" : "/api/v1/move/519/" }, { "learn_type" : "level up", "level" : 62, "name" : "Inferno", "resource_uri" : "/api/v1/move/517/" }, { "learn_type" : "machine", "name" : "Incinerate", "resource_uri" : "/api/v1/move/510/" }, { "learn_type" : "machine", "name" : "Sky-drop", "resource_uri" : "/api/v1/move/507/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Flame-charge", "resource_uri" : "/api/v1/move/488/" }, { "learn_type" : "level up", "level" : 32, "name" : "Flame-burst", "resource_uri" : "/api/v1/move/481/" }, { "learn_type" : "machine", "name" : "Hone-claws", "resource_uri" : "/api/v1/move/468/" }, { "learn_type" : "tutor", "name" : "Tailwind", "resource_uri" : "/api/v1/move/366/" }, { "learn_type" : "tutor", "name" : "Ominous-wind", "resource_uri" : "/api/v1/move/466/" }, { "learn_type" : "tutor", "name" : "Air-cutter", "resource_uri" : "/api/v1/move/314/" }, { "learn_type" : "tutor", "name" : "Twister", "resource_uri" : "/api/v1/move/239/" }, { "learn_type" : "tutor", "name" : "Outrage", "resource_uri" : "/api/v1/move/200/" }, { "learn_type" : "tutor", "name" : "Thunderpunch", "resource_uri" : "/api/v1/move/9/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "machine", "name" : "Defog", "resource_uri" : "/api/v1/move/432/" }, { "learn_type" : "level up", "level" : 28, "name" : "Fire-fang", "resource_uri" : "/api/v1/move/424/" }, { "learn_type" : "level up", "level" : 1, "name" : "Shadow-claw", "resource_uri" : "/api/v1/move/421/" }, { "learn_type" : "machine", "name" : "Giga-impact", "resource_uri" : "/api/v1/move/416/" }, { "learn_type" : "machine", "name" : "Focus-blast", "resource_uri" : "/api/v1/move/411/" }, { "learn_type" : "machine", "name" : "Dragon-pulse", "resource_uri" : "/api/v1/move/406/" }, { "learn_type" : "level up", "level" : 1, "name" : "Air-slash", "resource_uri" : "/api/v1/move/403/" }, { "learn_type" : "level up", "level" : 66, "name" : "Flare-blitz", "resource_uri" : "/api/v1/move/394/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Roost", "resource_uri" : "/api/v1/move/355/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "machine", "name" : "Will-o-wisp", "resource_uri" : "/api/v1/move/261/" }, { "learn_type" : "machine", "name" : "Solarbeam", "resource_uri" : "/api/v1/move/76/" }, { "learn_type" : "tutor", "name" : "Blast-burn", "resource_uri" : "/api/v1/move/307/" }, { "learn_type" : "level up", "level" : 1, "name" : "Heat-wave", "resource_uri" : "/api/v1/move/257/" }, { "learn_type" : "level up", "level" : 1, "name" : "Metal-claw", "resource_uri" : "/api/v1/move/232/" }, { "learn_type" : "tutor", "name" : "Rock-slide", "resource_uri" : "/api/v1/move/157/" }, { "learn_type" : "machine", "name" : "Dragon-claw", "resource_uri" : "/api/v1/move/337/" }, { "learn_type" : "machine", "name" : "Aerial-ace", "resource_uri" : "/api/v1/move/332/" }, { "learn_type" : "machine", "name" : "Overheat", "resource_uri" : "/api/v1/move/315/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Sunny-day", "resource_uri" : "/api/v1/move/241/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "machine", "name" : "Dragonbreath", "resource_uri" : "/api/v1/move/225/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Steel-wing", "resource_uri" : "/api/v1/move/211/" }, { "learn_type" : "machine", "name" : "Fury-cutter", "resource_uri" : "/api/v1/move/210/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Sandstorm", "resource_uri" : "/api/v1/move/201/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "level up", "level" : 27, "name" : "Scary-face", "resource_uri" : "/api/v1/move/184/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "level up", "level" : 1, "name" : "Smokescreen", "resource_uri" : "/api/v1/move/108/" }, { "learn_type" : "machine", "name" : "Roar", "resource_uri" : "/api/v1/move/46/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "level up", "level" : 36, "name" : "Wing-attack", "resource_uri" : "/api/v1/move/17/" }, { "learn_type" : "machine", "name" : "Fire-punch", "resource_uri" : "/api/v1/move/7/" }, { "learn_type" : "machine", "name" : "Fly", "resource_uri" : "/api/v1/move/19/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "level up", "level" : 36, "name" : "Slash", "resource_uri" : "/api/v1/move/163/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Swift", "resource_uri" : "/api/v1/move/129/" }, { "learn_type" : "machine", "name" : "Fire-blast", "resource_uri" : "/api/v1/move/126/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "level up", "level" : 24, "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "machine", "name" : "Fissure", "resource_uri" : "/api/v1/move/90/" }, { "learn_type" : "machine", "name" : "Earthquake", "resource_uri" : "/api/v1/move/89/" }, { "learn_type" : "level up", "level" : 55, "name" : "Fire-spin", "resource_uri" : "/api/v1/move/83/" }, { "learn_type" : "machine", "name" : "Dragon-rage", "resource_uri" : "/api/v1/move/82/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "machine", "name" : "Hyper-beam", "resource_uri" : "/api/v1/move/63/" }, { "learn_type" : "level up", "level" : 46, "name" : "Flamethrower", "resource_uri" : "/api/v1/move/53/" }, { "learn_type" : "level up", "level" : 1, "name" : "Ember", "resource_uri" : "/api/v1/move/52/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "level up", "level" : 1, "name" : "Leer", "resource_uri" : "/api/v1/move/43/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Cut", "resource_uri" : "/api/v1/move/15/" }, { "learn_type" : "machine", "name" : "Swords-dance", "resource_uri" : "/api/v1/move/14/" }, { "learn_type" : "level up", "level" : 1, "name" : "Scratch", "resource_uri" : "/api/v1/move/10/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Charizard", "national_id" : 6, "pkdx_id" : 6, "resource_uri" : "/api/v1/pokemon/6/", "sp_atk" : 109, "sp_def" : 85, "species" : "", "speed" : 100, "sprites" : [ { "name" : "charizard", "resource_uri" : "/api/v1/sprite/7/" } ], "total" : 0, "types" : [ { "name" : "flying", "resource_uri" : "/api/v1/type/3/" }, { "name" : "fire", "resource_uri" : "/api/v1/type/10/" } ], "weight" : "905" }
{ "_id" : ObjectId("5642c0f953c28dfca9bfb188"), "abilities" : [ { "name" : "rain-dish", "resource_uri" : "/api/v1/ability/44/" }, { "name" : "torrent", "resource_uri" : "/api/v1/ability/67/" } ], "attack" : 48, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.278310", "defense" : 65, "descriptions" : [ { "name" : "squirtle_gen_1", "resource_uri" : "/api/v1/description/96/" }, { "name" : "squirtle_gen_1", "resource_uri" : "/api/v1/description/97/" }, { "name" : "squirtle_gen_1", "resource_uri" : "/api/v1/description/98/" }, { "name" : "squirtle_gen_1", "resource_uri" : "/api/v1/description/99/" }, { "name" : "squirtle_gen_1", "resource_uri" : "/api/v1/description/100/" }, { "name" : "squirtle_gen_5", "resource_uri" : "/api/v1/description/109/" }, { "name" : "squirtle_gen_2", "resource_uri" : "/api/v1/description/102/" }, { "name" : "squirtle_gen_3", "resource_uri" : "/api/v1/description/103/" }, { "name" : "squirtle_gen_3", "resource_uri" : "/api/v1/description/104/" }, { "name" : "squirtle_gen_6", "resource_uri" : "/api/v1/description/110/" }, { "name" : "squirtle_gen_3", "resource_uri" : "/api/v1/description/105/" }, { "name" : "squirtle_gen_4", "resource_uri" : "/api/v1/description/106/" }, { "name" : "squirtle_gen_4", "resource_uri" : "/api/v1/description/107/" }, { "name" : "squirtle_gen_6", "resource_uri" : "/api/v1/description/111/" }, { "name" : "squirtle_gen_4", "resource_uri" : "/api/v1/description/108/" }, { "name" : "squirtle_gen_2", "resource_uri" : "/api/v1/description/101/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Water1", "resource_uri" : "/api/v1/egg/2/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 16, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/8/", "to" : "Wartortle" } ], "exp" : 63, "growth_rate" : "", "happiness" : 0, "height" : "5", "hp" : 44, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.794686", "moves" : [ { "learn_type" : "tutor", "name" : "Water-pledge", "resource_uri" : "/api/v1/move/518/" }, { "learn_type" : "machine", "name" : "Scald", "resource_uri" : "/api/v1/move/503/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "egg move", "name" : "Water-spout", "resource_uri" : "/api/v1/move/323/" }, { "learn_type" : "tutor", "name" : "Zen-headbutt", "resource_uri" : "/api/v1/move/428/" }, { "learn_type" : "level up", "level" : 34, "name" : "Iron-defense", "resource_uri" : "/api/v1/move/334/" }, { "learn_type" : "egg move", "name" : "Aqua-jet", "resource_uri" : "/api/v1/move/453/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "level up", "level" : 28, "name" : "Aqua-tail", "resource_uri" : "/api/v1/move/401/" }, { "learn_type" : "egg move", "name" : "Aqua-ring", "resource_uri" : "/api/v1/move/392/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Brine", "resource_uri" : "/api/v1/move/362/" }, { "learn_type" : "machine", "name" : "Gyro-ball", "resource_uri" : "/api/v1/move/360/" }, { "learn_type" : "egg move", "name" : "Muddy-water", "resource_uri" : "/api/v1/move/330/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "egg move", "name" : "Fake-out", "resource_uri" : "/api/v1/move/252/" }, { "learn_type" : "machine", "name" : "Water-pulse", "resource_uri" : "/api/v1/move/352/" }, { "learn_type" : "egg move", "name" : "Mud-sport", "resource_uri" : "/api/v1/move/300/" }, { "learn_type" : "machine", "name" : "Dive", "resource_uri" : "/api/v1/move/291/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "egg move", "name" : "Refresh", "resource_uri" : "/api/v1/move/287/" }, { "learn_type" : "egg move", "name" : "Yawn", "resource_uri" : "/api/v1/move/281/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Hail", "resource_uri" : "/api/v1/move/258/" }, { "learn_type" : "machine", "name" : "Whirlpool", "resource_uri" : "/api/v1/move/250/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "egg move", "name" : "Mirror-coat", "resource_uri" : "/api/v1/move/243/" }, { "learn_type" : "level up", "level" : 33, "name" : "Rain-dance", "resource_uri" : "/api/v1/move/240/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "level up", "level" : 23, "name" : "Rapid-spin", "resource_uri" : "/api/v1/move/229/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Rollout", "resource_uri" : "/api/v1/move/205/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Icy-wind", "resource_uri" : "/api/v1/move/196/" }, { "learn_type" : "egg move", "name" : "Foresight", "resource_uri" : "/api/v1/move/193/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "level up", "level" : 28, "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "egg move", "name" : "Flail", "resource_uri" : "/api/v1/move/175/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Waterfall", "resource_uri" : "/api/v1/move/127/" }, { "learn_type" : "egg move", "name" : "Haze", "resource_uri" : "/api/v1/move/114/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "egg move", "name" : "Confusion", "resource_uri" : "/api/v1/move/93/" }, { "learn_type" : "egg move", "name" : "Mist", "resource_uri" : "/api/v1/move/54/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Ice-punch", "resource_uri" : "/api/v1/move/8/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "level up", "level" : 8, "name" : "Bubble", "resource_uri" : "/api/v1/move/145/" }, { "learn_type" : "level up", "level" : 35, "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "level up", "level" : 28, "name" : "Withdraw", "resource_uri" : "/api/v1/move/110/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "machine", "name" : "Bubblebeam", "resource_uri" : "/api/v1/move/61/" }, { "learn_type" : "machine", "name" : "Blizzard", "resource_uri" : "/api/v1/move/59/" }, { "learn_type" : "machine", "name" : "Ice-beam", "resource_uri" : "/api/v1/move/58/" }, { "learn_type" : "machine", "name" : "Surf", "resource_uri" : "/api/v1/move/57/" }, { "learn_type" : "level up", "level" : 42, "name" : "Hydro-pump", "resource_uri" : "/api/v1/move/56/" }, { "learn_type" : "level up", "level" : 15, "name" : "Water-gun", "resource_uri" : "/api/v1/move/55/" }, { "learn_type" : "level up", "level" : 22, "name" : "Bite", "resource_uri" : "/api/v1/move/44/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tail-whip", "resource_uri" : "/api/v1/move/39/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Squirtle", "national_id" : 7, "pkdx_id" : 7, "resource_uri" : "/api/v1/pokemon/7/", "sp_atk" : 50, "sp_def" : 64, "species" : "", "speed" : 43, "sprites" : [ { "name" : "squirtle", "resource_uri" : "/api/v1/sprite/8/" } ], "total" : 0, "types" : [ { "name" : "water", "resource_uri" : "/api/v1/type/11/" } ], "weight" : "90" }
{ "_id" : ObjectId("5642c10c53c28dfca9bfb189"), "abilities" : [ { "name" : "rain-dish", "resource_uri" : "/api/v1/ability/44/" }, { "name" : "torrent", "resource_uri" : "/api/v1/ability/67/" } ], "attack" : 63, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.280718", "defense" : 80, "descriptions" : [ { "name" : "wartortle_gen_2", "resource_uri" : "/api/v1/description/118/" }, { "name" : "wartortle_gen_3", "resource_uri" : "/api/v1/description/119/" }, { "name" : "wartortle_gen_1", "resource_uri" : "/api/v1/description/112/" }, { "name" : "wartortle_gen_1", "resource_uri" : "/api/v1/description/113/" }, { "name" : "wartortle_gen_1", "resource_uri" : "/api/v1/description/114/" }, { "name" : "wartortle_gen_1", "resource_uri" : "/api/v1/description/115/" }, { "name" : "wartortle_gen_1", "resource_uri" : "/api/v1/description/116/" }, { "name" : "wartortle_gen_2", "resource_uri" : "/api/v1/description/117/" }, { "name" : "wartortle_gen_3", "resource_uri" : "/api/v1/description/120/" }, { "name" : "wartortle_gen_4", "resource_uri" : "/api/v1/description/124/" }, { "name" : "wartortle_gen_3", "resource_uri" : "/api/v1/description/121/" }, { "name" : "wartortle_gen_4", "resource_uri" : "/api/v1/description/122/" }, { "name" : "wartortle_gen_4", "resource_uri" : "/api/v1/description/123/" }, { "name" : "wartortle_gen_5", "resource_uri" : "/api/v1/description/125/" }, { "name" : "wartortle_gen_6", "resource_uri" : "/api/v1/description/126/" }, { "name" : "wartortle_gen_6", "resource_uri" : "/api/v1/description/127/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Water1", "resource_uri" : "/api/v1/egg/2/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "level" : 36, "method" : "level_up", "resource_uri" : "/api/v1/pokemon/9/", "to" : "Blastoise" } ], "exp" : 142, "growth_rate" : "", "happiness" : 0, "height" : "10", "hp" : 59, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.827572", "moves" : [ { "learn_type" : "tutor", "name" : "Water-pledge", "resource_uri" : "/api/v1/move/518/" }, { "learn_type" : "machine", "name" : "Scald", "resource_uri" : "/api/v1/move/503/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "tutor", "name" : "Zen-headbutt", "resource_uri" : "/api/v1/move/428/" }, { "learn_type" : "level up", "level" : 40, "name" : "Iron-defense", "resource_uri" : "/api/v1/move/334/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "level up", "level" : 32, "name" : "Aqua-tail", "resource_uri" : "/api/v1/move/401/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Brine", "resource_uri" : "/api/v1/move/362/" }, { "learn_type" : "machine", "name" : "Gyro-ball", "resource_uri" : "/api/v1/move/360/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "machine", "name" : "Water-pulse", "resource_uri" : "/api/v1/move/352/" }, { "learn_type" : "machine", "name" : "Dive", "resource_uri" : "/api/v1/move/291/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Hail", "resource_uri" : "/api/v1/move/258/" }, { "learn_type" : "machine", "name" : "Whirlpool", "resource_uri" : "/api/v1/move/250/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "level up", "level" : 37, "name" : "Rain-dance", "resource_uri" : "/api/v1/move/240/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "level up", "level" : 25, "name" : "Rapid-spin", "resource_uri" : "/api/v1/move/229/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Rollout", "resource_uri" : "/api/v1/move/205/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Icy-wind", "resource_uri" : "/api/v1/move/196/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "level up", "level" : 31, "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Waterfall", "resource_uri" : "/api/v1/move/127/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Ice-punch", "resource_uri" : "/api/v1/move/8/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "level up", "level" : 1, "name" : "Bubble", "resource_uri" : "/api/v1/move/145/" }, { "learn_type" : "level up", "level" : 39, "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "level up", "level" : 31, "name" : "Withdraw", "resource_uri" : "/api/v1/move/110/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "machine", "name" : "Bubblebeam", "resource_uri" : "/api/v1/move/61/" }, { "learn_type" : "machine", "name" : "Blizzard", "resource_uri" : "/api/v1/move/59/" }, { "learn_type" : "machine", "name" : "Ice-beam", "resource_uri" : "/api/v1/move/58/" }, { "learn_type" : "machine", "name" : "Surf", "resource_uri" : "/api/v1/move/57/" }, { "learn_type" : "level up", "level" : 47, "name" : "Hydro-pump", "resource_uri" : "/api/v1/move/56/" }, { "learn_type" : "level up", "level" : 15, "name" : "Water-gun", "resource_uri" : "/api/v1/move/55/" }, { "learn_type" : "level up", "level" : 24, "name" : "Bite", "resource_uri" : "/api/v1/move/44/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tail-whip", "resource_uri" : "/api/v1/move/39/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Wartortle", "national_id" : 8, "pkdx_id" : 8, "resource_uri" : "/api/v1/pokemon/8/", "sp_atk" : 65, "sp_def" : 80, "species" : "", "speed" : 58, "sprites" : [ { "name" : "wartortle", "resource_uri" : "/api/v1/sprite/9/" } ], "total" : 0, "types" : [ { "name" : "water", "resource_uri" : "/api/v1/type/11/" } ], "weight" : "225" }
{ "_id" : ObjectId("5642c12253c28dfca9bfb18a"), "abilities" : [ { "name" : "rain-dish", "resource_uri" : "/api/v1/ability/44/" }, { "name" : "torrent", "resource_uri" : "/api/v1/ability/67/" } ], "attack" : 83, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.282985", "defense" : 100, "descriptions" : [ { "name" : "blastoise_gen_1", "resource_uri" : "/api/v1/description/128/" }, { "name" : "blastoise_gen_1", "resource_uri" : "/api/v1/description/129/" }, { "name" : "blastoise_gen_1", "resource_uri" : "/api/v1/description/130/" }, { "name" : "blastoise_gen_1", "resource_uri" : "/api/v1/description/131/" }, { "name" : "blastoise_gen_1", "resource_uri" : "/api/v1/description/132/" }, { "name" : "blastoise_gen_2", "resource_uri" : "/api/v1/description/133/" }, { "name" : "blastoise_gen_2", "resource_uri" : "/api/v1/description/134/" }, { "name" : "blastoise_gen_3", "resource_uri" : "/api/v1/description/137/" }, { "name" : "blastoise_gen_4", "resource_uri" : "/api/v1/description/138/" }, { "name" : "blastoise_gen_4", "resource_uri" : "/api/v1/description/139/" }, { "name" : "blastoise_gen_4", "resource_uri" : "/api/v1/description/140/" }, { "name" : "blastoise_gen_5", "resource_uri" : "/api/v1/description/141/" }, { "name" : "blastoise_gen_6", "resource_uri" : "/api/v1/description/142/" }, { "name" : "blastoise_gen_6", "resource_uri" : "/api/v1/description/143/" }, { "name" : "blastoise_gen_3", "resource_uri" : "/api/v1/description/136/" }, { "name" : "blastoise_gen_3", "resource_uri" : "/api/v1/description/135/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Water1", "resource_uri" : "/api/v1/egg/2/" }, { "name" : "Monster", "resource_uri" : "/api/v1/egg/1/" } ], "ev_yield" : "", "evolutions" : [ { "detail" : "mega", "method" : "other", "resource_uri" : "/api/v1/pokemon/10036/", "to" : "Blastoise-mega" } ], "exp" : 239, "growth_rate" : "", "happiness" : 0, "height" : "16", "hp" : 79, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:23.865154", "moves" : [ { "learn_type" : "machine", "name" : "Dragon-tail", "resource_uri" : "/api/v1/move/525/" }, { "learn_type" : "machine", "name" : "Bulldoze", "resource_uri" : "/api/v1/move/523/" }, { "learn_type" : "tutor", "name" : "Water-pledge", "resource_uri" : "/api/v1/move/518/" }, { "learn_type" : "machine", "name" : "Scald", "resource_uri" : "/api/v1/move/503/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "machine", "name" : "Smack-down", "resource_uri" : "/api/v1/move/479/" }, { "learn_type" : "tutor", "name" : "Zen-headbutt", "resource_uri" : "/api/v1/move/428/" }, { "learn_type" : "level up", "level" : 46, "name" : "Iron-defense", "resource_uri" : "/api/v1/move/334/" }, { "learn_type" : "tutor", "name" : "Signal-beam", "resource_uri" : "/api/v1/move/324/" }, { "learn_type" : "tutor", "name" : "Outrage", "resource_uri" : "/api/v1/move/200/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "machine", "name" : "Rock-climb", "resource_uri" : "/api/v1/move/431/" }, { "learn_type" : "level up", "level" : 1, "name" : "Flash-cannon", "resource_uri" : "/api/v1/move/430/" }, { "learn_type" : "machine", "name" : "Avalanche", "resource_uri" : "/api/v1/move/419/" }, { "learn_type" : "machine", "name" : "Giga-impact", "resource_uri" : "/api/v1/move/416/" }, { "learn_type" : "machine", "name" : "Focus-blast", "resource_uri" : "/api/v1/move/411/" }, { "learn_type" : "level up", "level" : 32, "name" : "Aqua-tail", "resource_uri" : "/api/v1/move/401/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "machine", "name" : "Brine", "resource_uri" : "/api/v1/move/362/" }, { "learn_type" : "machine", "name" : "Gyro-ball", "resource_uri" : "/api/v1/move/360/" }, { "learn_type" : "machine", "name" : "Rock-tomb", "resource_uri" : "/api/v1/move/317/" }, { "learn_type" : "machine", "name" : "Rock-slide", "resource_uri" : "/api/v1/move/157/" }, { "learn_type" : "tutor", "name" : "Hydro-cannon", "resource_uri" : "/api/v1/move/308/" }, { "learn_type" : "machine", "name" : "Water-pulse", "resource_uri" : "/api/v1/move/352/" }, { "learn_type" : "machine", "name" : "Dive", "resource_uri" : "/api/v1/move/291/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Hail", "resource_uri" : "/api/v1/move/258/" }, { "learn_type" : "machine", "name" : "Whirlpool", "resource_uri" : "/api/v1/move/250/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "level up", "level" : 42, "name" : "Rain-dance", "resource_uri" : "/api/v1/move/240/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "level up", "level" : 25, "name" : "Rapid-spin", "resource_uri" : "/api/v1/move/229/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Rollout", "resource_uri" : "/api/v1/move/205/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Icy-wind", "resource_uri" : "/api/v1/move/196/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "level up", "level" : 31, "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Waterfall", "resource_uri" : "/api/v1/move/127/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "machine", "name" : "Roar", "resource_uri" : "/api/v1/move/46/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Ice-punch", "resource_uri" : "/api/v1/move/8/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "level up", "level" : 1, "name" : "Bubble", "resource_uri" : "/api/v1/move/145/" }, { "learn_type" : "level up", "level" : 42, "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "level up", "level" : 31, "name" : "Withdraw", "resource_uri" : "/api/v1/move/110/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "machine", "name" : "Fissure", "resource_uri" : "/api/v1/move/90/" }, { "learn_type" : "machine", "name" : "Earthquake", "resource_uri" : "/api/v1/move/89/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "machine", "name" : "Hyper-beam", "resource_uri" : "/api/v1/move/63/" }, { "learn_type" : "machine", "name" : "Bubblebeam", "resource_uri" : "/api/v1/move/61/" }, { "learn_type" : "machine", "name" : "Blizzard", "resource_uri" : "/api/v1/move/59/" }, { "learn_type" : "machine", "name" : "Ice-beam", "resource_uri" : "/api/v1/move/58/" }, { "learn_type" : "machine", "name" : "Surf", "resource_uri" : "/api/v1/move/57/" }, { "learn_type" : "level up", "level" : 52, "name" : "Hydro-pump", "resource_uri" : "/api/v1/move/56/" }, { "learn_type" : "level up", "level" : 1, "name" : "Water-gun", "resource_uri" : "/api/v1/move/55/" }, { "learn_type" : "level up", "level" : 24, "name" : "Bite", "resource_uri" : "/api/v1/move/44/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tail-whip", "resource_uri" : "/api/v1/move/39/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "level up", "level" : 1, "name" : "Tackle", "resource_uri" : "/api/v1/move/33/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Blastoise", "national_id" : 9, "pkdx_id" : 9, "resource_uri" : "/api/v1/pokemon/9/", "sp_atk" : 85, "sp_def" : 105, "species" : "", "speed" : 78, "sprites" : [ { "name" : "blastoise", "resource_uri" : "/api/v1/sprite/10/" } ], "total" : 0, "types" : [ { "name" : "water", "resource_uri" : "/api/v1/type/11/" } ], "weight" : "855" }
{ "_id" : ObjectId("5642c17053c28dfca9bfb18c"), "abilities" : [ { "name" : "static", "resource_uri" : "/api/v1/ability/9/" }, { "name" : "lightningrod", "resource_uri" : "/api/v1/ability/31/" } ], "attack" : 55, "catch_rate" : 0, "created" : "2013-11-03T15:05:41.317235", "defense" : 40, "descriptions" : [ { "name" : "pikachu_gen_1", "resource_uri" : "/api/v1/description/382/" }, { "name" : "pikachu_gen_1", "resource_uri" : "/api/v1/description/383/" }, { "name" : "pikachu_gen_2", "resource_uri" : "/api/v1/description/384/" }, { "name" : "pikachu_gen_1", "resource_uri" : "/api/v1/description/379/" }, { "name" : "pikachu_gen_1", "resource_uri" : "/api/v1/description/380/" }, { "name" : "pikachu_gen_2", "resource_uri" : "/api/v1/description/385/" }, { "name" : "pikachu_gen_2", "resource_uri" : "/api/v1/description/386/" }, { "name" : "pikachu_gen_3", "resource_uri" : "/api/v1/description/387/" }, { "name" : "pikachu_gen_3", "resource_uri" : "/api/v1/description/388/" }, { "name" : "pikachu_gen_3", "resource_uri" : "/api/v1/description/389/" }, { "name" : "pikachu_gen_3", "resource_uri" : "/api/v1/description/390/" }, { "name" : "pikachu_gen_3", "resource_uri" : "/api/v1/description/391/" }, { "name" : "pikachu_gen_4", "resource_uri" : "/api/v1/description/392/" }, { "name" : "pikachu_gen_4", "resource_uri" : "/api/v1/description/393/" }, { "name" : "pikachu_gen_4", "resource_uri" : "/api/v1/description/394/" }, { "name" : "pikachu_gen_5", "resource_uri" : "/api/v1/description/395/" }, { "name" : "pikachu_gen_6", "resource_uri" : "/api/v1/description/396/" }, { "name" : "pikachu_gen_6", "resource_uri" : "/api/v1/description/397/" }, { "name" : "pikachu_gen_1", "resource_uri" : "/api/v1/description/381/" } ], "egg_cycles" : 0, "egg_groups" : [ { "name" : "Fairy", "resource_uri" : "/api/v1/egg/6/" }, { "name" : "Ground", "resource_uri" : "/api/v1/egg/5/" } ], "ev_yield" : "", "evolutions" : [ { "method" : "stone", "resource_uri" : "/api/v1/pokemon/26/", "to" : "Raichu" } ], "exp" : 105, "growth_rate" : "", "happiness" : 0, "height" : "4", "hp" : 35, "male_female_ratio" : "", "modified" : "2013-11-23T13:13:24.383925", "moves" : [ { "learn_type" : "tutor", "name" : "Covet", "resource_uri" : "/api/v1/move/343/" }, { "learn_type" : "machine", "name" : "Wild-charge", "resource_uri" : "/api/v1/move/528/" }, { "learn_type" : "machine", "name" : "Volt-switch", "resource_uri" : "/api/v1/move/521/" }, { "learn_type" : "machine", "name" : "Echoed-voice", "resource_uri" : "/api/v1/move/497/" }, { "learn_type" : "machine", "name" : "Round", "resource_uri" : "/api/v1/move/496/" }, { "learn_type" : "level up", "level" : 18, "name" : "Electro-ball", "resource_uri" : "/api/v1/move/486/" }, { "learn_type" : "tutor", "name" : "Magnet-rise", "resource_uri" : "/api/v1/move/393/" }, { "learn_type" : "tutor", "name" : "Signal-beam", "resource_uri" : "/api/v1/move/324/" }, { "learn_type" : "tutor", "name" : "Knock-off", "resource_uri" : "/api/v1/move/282/" }, { "learn_type" : "tutor", "name" : "Helping-hand", "resource_uri" : "/api/v1/move/270/" }, { "learn_type" : "machine", "name" : "Charge-beam", "resource_uri" : "/api/v1/move/451/" }, { "learn_type" : "machine", "name" : "Grass-knot", "resource_uri" : "/api/v1/move/447/" }, { "learn_type" : "machine", "name" : "Captivate", "resource_uri" : "/api/v1/move/445/" }, { "learn_type" : "level up", "level" : 37, "name" : "Discharge", "resource_uri" : "/api/v1/move/435/" }, { "learn_type" : "machine", "name" : "Fling", "resource_uri" : "/api/v1/move/374/" }, { "learn_type" : "level up", "level" : 29, "name" : "Feint", "resource_uri" : "/api/v1/move/364/" }, { "learn_type" : "machine", "name" : "Natural-gift", "resource_uri" : "/api/v1/move/363/" }, { "learn_type" : "tutor", "name" : "Counter", "resource_uri" : "/api/v1/move/68/" }, { "learn_type" : "machine", "name" : "Shock-wave", "resource_uri" : "/api/v1/move/351/" }, { "learn_type" : "machine", "name" : "Secret-power", "resource_uri" : "/api/v1/move/290/" }, { "learn_type" : "machine", "name" : "Brick-break", "resource_uri" : "/api/v1/move/280/" }, { "learn_type" : "machine", "name" : "Focus-punch", "resource_uri" : "/api/v1/move/264/" }, { "learn_type" : "machine", "name" : "Facade", "resource_uri" : "/api/v1/move/263/" }, { "learn_type" : "machine", "name" : "Rock-smash", "resource_uri" : "/api/v1/move/249/" }, { "learn_type" : "machine", "name" : "Dig", "resource_uri" : "/api/v1/move/91/" }, { "learn_type" : "machine", "name" : "Rain-dance", "resource_uri" : "/api/v1/move/240/" }, { "learn_type" : "machine", "name" : "Hidden-power", "resource_uri" : "/api/v1/move/237/" }, { "learn_type" : "machine", "name" : "Iron-tail", "resource_uri" : "/api/v1/move/231/" }, { "learn_type" : "machine", "name" : "Dynamicpunch", "resource_uri" : "/api/v1/move/223/" }, { "learn_type" : "machine", "name" : "Frustration", "resource_uri" : "/api/v1/move/218/" }, { "learn_type" : "machine", "name" : "Return", "resource_uri" : "/api/v1/move/216/" }, { "learn_type" : "machine", "name" : "Sleep-talk", "resource_uri" : "/api/v1/move/214/" }, { "learn_type" : "machine", "name" : "Attract", "resource_uri" : "/api/v1/move/213/" }, { "learn_type" : "machine", "name" : "Swagger", "resource_uri" : "/api/v1/move/207/" }, { "learn_type" : "machine", "name" : "Rollout", "resource_uri" : "/api/v1/move/205/" }, { "learn_type" : "machine", "name" : "Endure", "resource_uri" : "/api/v1/move/203/" }, { "learn_type" : "machine", "name" : "Detect", "resource_uri" : "/api/v1/move/197/" }, { "learn_type" : "machine", "name" : "Zap-cannon", "resource_uri" : "/api/v1/move/192/" }, { "learn_type" : "machine", "name" : "Mud-slap", "resource_uri" : "/api/v1/move/189/" }, { "learn_type" : "machine", "name" : "Protect", "resource_uri" : "/api/v1/move/182/" }, { "learn_type" : "machine", "name" : "Curse", "resource_uri" : "/api/v1/move/174/" }, { "learn_type" : "machine", "name" : "Snore", "resource_uri" : "/api/v1/move/173/" }, { "learn_type" : "machine", "name" : "Defense-curl", "resource_uri" : "/api/v1/move/111/" }, { "learn_type" : "machine", "name" : "Strength", "resource_uri" : "/api/v1/move/70/" }, { "learn_type" : "machine", "name" : "Headbutt", "resource_uri" : "/api/v1/move/29/" }, { "learn_type" : "machine", "name" : "Thunderpunch", "resource_uri" : "/api/v1/move/9/" }, { "learn_type" : "level up", "level" : 50, "name" : "Light-screen", "resource_uri" : "/api/v1/move/113/" }, { "learn_type" : "level up", "level" : 6, "name" : "Tail-whip", "resource_uri" : "/api/v1/move/39/" }, { "learn_type" : "level up", "level" : 20, "name" : "Slam", "resource_uri" : "/api/v1/move/21/" }, { "learn_type" : "machine", "name" : "Substitute", "resource_uri" : "/api/v1/move/164/" }, { "learn_type" : "machine", "name" : "Rest", "resource_uri" : "/api/v1/move/156/" }, { "learn_type" : "machine", "name" : "Flash", "resource_uri" : "/api/v1/move/148/" }, { "learn_type" : "machine", "name" : "Skull-bash", "resource_uri" : "/api/v1/move/130/" }, { "learn_type" : "level up", "level" : 26, "name" : "Swift", "resource_uri" : "/api/v1/move/129/" }, { "learn_type" : "machine", "name" : "Bide", "resource_uri" : "/api/v1/move/117/" }, { "learn_type" : "machine", "name" : "Reflect", "resource_uri" : "/api/v1/move/115/" }, { "learn_type" : "machine", "name" : "Double-team", "resource_uri" : "/api/v1/move/104/" }, { "learn_type" : "machine", "name" : "Mimic", "resource_uri" : "/api/v1/move/102/" }, { "learn_type" : "machine", "name" : "Rage", "resource_uri" : "/api/v1/move/99/" }, { "learn_type" : "level up", "level" : 16, "name" : "Quick-attack", "resource_uri" : "/api/v1/move/98/" }, { "learn_type" : "level up", "level" : 33, "name" : "Agility", "resource_uri" : "/api/v1/move/97/" }, { "learn_type" : "machine", "name" : "Toxic", "resource_uri" : "/api/v1/move/92/" }, { "learn_type" : "level up", "level" : 43, "name" : "Thunder", "resource_uri" : "/api/v1/move/87/" }, { "learn_type" : "level up", "level" : 9, "name" : "Thunder-wave", "resource_uri" : "/api/v1/move/86/" }, { "learn_type" : "machine", "name" : "Thunderbolt", "resource_uri" : "/api/v1/move/85/" }, { "learn_type" : "level up", "level" : 1, "name" : "Thundershock", "resource_uri" : "/api/v1/move/84/" }, { "learn_type" : "machine", "name" : "Seismic-toss", "resource_uri" : "/api/v1/move/69/" }, { "learn_type" : "machine", "name" : "Submission", "resource_uri" : "/api/v1/move/66/" }, { "learn_type" : "other", "name" : "Surf", "resource_uri" : "/api/v1/move/57/" }, { "learn_type" : "level up", "level" : 1, "name" : "Growl", "resource_uri" : "/api/v1/move/45/" }, { "learn_type" : "machine", "name" : "Double-edge", "resource_uri" : "/api/v1/move/38/" }, { "learn_type" : "machine", "name" : "Take-down", "resource_uri" : "/api/v1/move/36/" }, { "learn_type" : "machine", "name" : "Body-slam", "resource_uri" : "/api/v1/move/34/" }, { "learn_type" : "machine", "name" : "Mega-kick", "resource_uri" : "/api/v1/move/25/" }, { "learn_type" : "machine", "name" : "Pay-day", "resource_uri" : "/api/v1/move/6/" }, { "learn_type" : "machine", "name" : "Mega-punch", "resource_uri" : "/api/v1/move/5/" } ], "name" : "Pikachu", "national_id" : 25, "pkdx_id" : 25, "resource_uri" : "/api/v1/pokemon/25/", "sp_atk" : 50, "sp_def" : 50, "species" : "", "speed" : 90, "sprites" : [ { "name" : "pikachu", "resource_uri" : "/api/v1/sprite/26/" } ], "total" : 0, "types" : [ { "name" : "electric", "resource_uri" : "/api/v1/type/13/" } ], "weight" : "60" }
>
```
## Pokemon (passo 6)
```
> var poke = db.pokemons.findOne({'name': 'Pikachu'})
> poke
{
        "_id" : ObjectId("5642c17053c28dfca9bfb18c"),
        "abilities" : [
                {
                        "name" : "static",
                        "resource_uri" : "/api/v1/ability/9/"
                },
                {
                        "name" : "lightningrod",
                        "resource_uri" : "/api/v1/ability/31/"
                }
        ],
        "attack" : 55,
        "catch_rate" : 0,
        "created" : "2013-11-03T15:05:41.317235",
        "defense" : 40,
        "descriptions" : [
                {
                        "name" : "pikachu_gen_1",
                        "resource_uri" : "/api/v1/description/382/"
                },
                {
                        "name" : "pikachu_gen_1",
                        "resource_uri" : "/api/v1/description/383/"
                },
                {
                        "name" : "pikachu_gen_2",
                        "resource_uri" : "/api/v1/description/384/"
                },
                {
                        "name" : "pikachu_gen_1",
                        "resource_uri" : "/api/v1/description/379/"
                },
                {
                        "name" : "pikachu_gen_1",
                        "resource_uri" : "/api/v1/description/380/"
                },
                {
                        "name" : "pikachu_gen_2",
                        "resource_uri" : "/api/v1/description/385/"
                },
                {
                        "name" : "pikachu_gen_2",
                        "resource_uri" : "/api/v1/description/386/"
                },
                {
                        "name" : "pikachu_gen_3",
                        "resource_uri" : "/api/v1/description/387/"
                },
                {
                        "name" : "pikachu_gen_3",
                        "resource_uri" : "/api/v1/description/388/"
                },
                {
                        "name" : "pikachu_gen_3",
                        "resource_uri" : "/api/v1/description/389/"
                },
                {
                        "name" : "pikachu_gen_3",
                        "resource_uri" : "/api/v1/description/390/"
                },
                {
                        "name" : "pikachu_gen_3",
                        "resource_uri" : "/api/v1/description/391/"
                },
                {
                        "name" : "pikachu_gen_4",
                        "resource_uri" : "/api/v1/description/392/"
                },
                {
                        "name" : "pikachu_gen_4",
                        "resource_uri" : "/api/v1/description/393/"
                },
                {
                        "name" : "pikachu_gen_4",
                        "resource_uri" : "/api/v1/description/394/"
                },
                {
                        "name" : "pikachu_gen_5",
                        "resource_uri" : "/api/v1/description/395/"
                },
                {
                        "name" : "pikachu_gen_6",
                        "resource_uri" : "/api/v1/description/396/"
                },
                {
                        "name" : "pikachu_gen_6",
                        "resource_uri" : "/api/v1/description/397/"
                },
                {
                        "name" : "pikachu_gen_1",
                        "resource_uri" : "/api/v1/description/381/"
                }
        ],
        "egg_cycles" : 0,
        "egg_groups" : [
                {
                        "name" : "Fairy",
                        "resource_uri" : "/api/v1/egg/6/"
                },
                {
                        "name" : "Ground",
                        "resource_uri" : "/api/v1/egg/5/"
                }
        ],
        "ev_yield" : "",
        "evolutions" : [
                {
                        "method" : "stone",
                        "resource_uri" : "/api/v1/pokemon/26/",
                        "to" : "Raichu"
                }
        ],
        "exp" : 105,
        "growth_rate" : "",
        "happiness" : 0,
        "height" : "4",
        "hp" : 35,
        "male_female_ratio" : "",
        "modified" : "2013-11-23T13:13:24.383925",
        "moves" : [
                {
                        "learn_type" : "tutor",
                        "name" : "Covet",
                        "resource_uri" : "/api/v1/move/343/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Wild-charge",
                        "resource_uri" : "/api/v1/move/528/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Volt-switch",
                        "resource_uri" : "/api/v1/move/521/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Echoed-voice",
                        "resource_uri" : "/api/v1/move/497/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Round",
                        "resource_uri" : "/api/v1/move/496/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 18,
                        "name" : "Electro-ball",
                        "resource_uri" : "/api/v1/move/486/"
                },
                {
                        "learn_type" : "tutor",
                        "name" : "Magnet-rise",
                        "resource_uri" : "/api/v1/move/393/"
                },
                {
                        "learn_type" : "tutor",
                        "name" : "Signal-beam",
                        "resource_uri" : "/api/v1/move/324/"
                },
                {
                        "learn_type" : "tutor",
                        "name" : "Knock-off",
                        "resource_uri" : "/api/v1/move/282/"
                },
                {
                        "learn_type" : "tutor",
                        "name" : "Helping-hand",
                        "resource_uri" : "/api/v1/move/270/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Charge-beam",
                        "resource_uri" : "/api/v1/move/451/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Grass-knot",
                        "resource_uri" : "/api/v1/move/447/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Captivate",
                        "resource_uri" : "/api/v1/move/445/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 37,
                        "name" : "Discharge",
                        "resource_uri" : "/api/v1/move/435/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Fling",
                        "resource_uri" : "/api/v1/move/374/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 29,
                        "name" : "Feint",
                        "resource_uri" : "/api/v1/move/364/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Natural-gift",
                        "resource_uri" : "/api/v1/move/363/"
                },
                {
                        "learn_type" : "tutor",
                        "name" : "Counter",
                        "resource_uri" : "/api/v1/move/68/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Shock-wave",
                        "resource_uri" : "/api/v1/move/351/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Secret-power",
                        "resource_uri" : "/api/v1/move/290/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Brick-break",
                        "resource_uri" : "/api/v1/move/280/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Focus-punch",
                        "resource_uri" : "/api/v1/move/264/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Facade",
                        "resource_uri" : "/api/v1/move/263/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Rock-smash",
                        "resource_uri" : "/api/v1/move/249/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Dig",
                        "resource_uri" : "/api/v1/move/91/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Rain-dance",
                        "resource_uri" : "/api/v1/move/240/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Hidden-power",
                        "resource_uri" : "/api/v1/move/237/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Iron-tail",
                        "resource_uri" : "/api/v1/move/231/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Dynamicpunch",
                        "resource_uri" : "/api/v1/move/223/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Frustration",
                        "resource_uri" : "/api/v1/move/218/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Return",
                        "resource_uri" : "/api/v1/move/216/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Sleep-talk",
                        "resource_uri" : "/api/v1/move/214/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Attract",
                        "resource_uri" : "/api/v1/move/213/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Swagger",
                        "resource_uri" : "/api/v1/move/207/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Rollout",
                        "resource_uri" : "/api/v1/move/205/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Endure",
                        "resource_uri" : "/api/v1/move/203/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Detect",
                        "resource_uri" : "/api/v1/move/197/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Zap-cannon",
                        "resource_uri" : "/api/v1/move/192/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Mud-slap",
                        "resource_uri" : "/api/v1/move/189/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Protect",
                        "resource_uri" : "/api/v1/move/182/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Curse",
                        "resource_uri" : "/api/v1/move/174/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Snore",
                        "resource_uri" : "/api/v1/move/173/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Defense-curl",
                        "resource_uri" : "/api/v1/move/111/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Strength",
                        "resource_uri" : "/api/v1/move/70/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Headbutt",
                        "resource_uri" : "/api/v1/move/29/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Thunderpunch",
                        "resource_uri" : "/api/v1/move/9/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 50,
                        "name" : "Light-screen",
                        "resource_uri" : "/api/v1/move/113/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 6,
                        "name" : "Tail-whip",
                        "resource_uri" : "/api/v1/move/39/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 20,
                        "name" : "Slam",
                        "resource_uri" : "/api/v1/move/21/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Substitute",
                        "resource_uri" : "/api/v1/move/164/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Rest",
                        "resource_uri" : "/api/v1/move/156/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Flash",
                        "resource_uri" : "/api/v1/move/148/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Skull-bash",
                        "resource_uri" : "/api/v1/move/130/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 26,
                        "name" : "Swift",
                        "resource_uri" : "/api/v1/move/129/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Bide",
                        "resource_uri" : "/api/v1/move/117/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Reflect",
                        "resource_uri" : "/api/v1/move/115/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Double-team",
                        "resource_uri" : "/api/v1/move/104/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Mimic",
                        "resource_uri" : "/api/v1/move/102/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Rage",
                        "resource_uri" : "/api/v1/move/99/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 16,
                        "name" : "Quick-attack",
                        "resource_uri" : "/api/v1/move/98/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 33,
                        "name" : "Agility",
                        "resource_uri" : "/api/v1/move/97/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Toxic",
                        "resource_uri" : "/api/v1/move/92/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 43,
                        "name" : "Thunder",
                        "resource_uri" : "/api/v1/move/87/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 9,
                        "name" : "Thunder-wave",
                        "resource_uri" : "/api/v1/move/86/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Thunderbolt",
                        "resource_uri" : "/api/v1/move/85/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 1,
                        "name" : "Thundershock",
                        "resource_uri" : "/api/v1/move/84/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Seismic-toss",
                        "resource_uri" : "/api/v1/move/69/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Submission",
                        "resource_uri" : "/api/v1/move/66/"
                },
                {
                        "learn_type" : "other",
                        "name" : "Surf",
                        "resource_uri" : "/api/v1/move/57/"
                },
                {
                        "learn_type" : "level up",
                        "level" : 1,
                        "name" : "Growl",
                        "resource_uri" : "/api/v1/move/45/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Double-edge",
                        "resource_uri" : "/api/v1/move/38/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Take-down",
                        "resource_uri" : "/api/v1/move/36/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Body-slam",
                        "resource_uri" : "/api/v1/move/34/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Mega-kick",
                        "resource_uri" : "/api/v1/move/25/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Pay-day",
                        "resource_uri" : "/api/v1/move/6/"
                },
                {
                        "learn_type" : "machine",
                        "name" : "Mega-punch",
                        "resource_uri" : "/api/v1/move/5/"
                }
        ],
        "name" : "Pikachu",
        "national_id" : 25,
        "pkdx_id" : 25,
        "resource_uri" : "/api/v1/pokemon/25/",
        "sp_atk" : 50,
        "sp_def" : 50,
        "species" : "",
        "speed" : 90,
        "sprites" : [
                {
                        "name" : "pikachu",
                        "resource_uri" : "/api/v1/sprite/26/"
                }
        ],
        "total" : 0,
        "types" : [
                {
                        "name" : "electric",
                        "resource_uri" : "/api/v1/type/13/"
                }
        ],
        "weight" : "60"
}
>
```
## Atualização do Pokemon (passo 6)
```
> poke.attack = Math.pow(9,99)
2.9512665430652752e+94
> poke.attack
2.9512665430652752e+94
>
```
