# MongoDB - Aula 01 - Exercício
autor: ADRIANO VASCONCELOS

## Criar a database be-mean-pokemons

    ```
    use be-mean-pokemons;

    switched to db be-mean-pokemons
    ```

## Listar os databases

    ```
    vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> show dbs;

    be-mean-instagram → 0.078GB                                                                              
    local             → 0.078GB                                                                              
    manage-shipment   → 0.078GB                                                                              
    teste             → 0.078GB

    ```

## Listar as colections do database
	```
	vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> show collections;
	```

## Inserir 5 pokemons no padrão: name, description, attack, defense e height (eu inserir 7 :P)
	```
	var pokemons = [
		{'name': 'Butterfree', 'description': 'Its wings, covered with poisonous powders, repel water.', 'type': 'inseto', 'attack': 45, 'defense': 50, 'height': 11},
		{'name': 'Arbok', 'description': 'The frightening patterns on its belly have been studied. Six variations have been confirmed.', 'type': 'veneno', 'attack': 85, 'defense': 69, 'height': 35},
		{'name': 'Ninetales', 'description': 'Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.', 'type': 'fogo', 'attack': 76, 'defense': 75, 'height': 11},
		{'name': 'Grimer', 'description': 'Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.', 'type': 'veneno', 'attack': 80, 'defense': 50, 'height': 9},
		{'name': 'Dewgong', 'description': 'Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.', 'type': 'água', 'attack': 70, 'defense': 80, 'height': 17},
		{'name': 'Beedrill', 'description': 'It can take down any opponent with its powerful poi son stingers.', 'type': 'inseto', 'attack': 90, 'defense': 40, 'height': 10},
		{'name': 'Nidorina', 'description': 'When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other.', 'type': 'veneno', attack: 62, 'defense': 67, 'height': 8}
	];

	vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemons);
	```

## Busque o pokemon a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
	```
	vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Butterfree"});
	
	{
      "_id": ObjectId("564379f8750d5acfe9690da9"),
      "name": "Butterfree",
      "description": "Its wings, covered with poisonous powders, repel water.",
      "type": "inseto",
      "attack": 45,
      "defense": 50,
      "height": 11
    }
	```

## Modifique sua `description` e salvê-o
	```
	vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> poke.description = "In battle, it flaps its wings at high speed to release highly toxic dust into the air.";
	vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke);
	
	Updated 1 existing record(s) in 4ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })
	```
