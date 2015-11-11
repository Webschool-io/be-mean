# MongoDB - Aula 02 - Exercício
autor: Adejair Júnior

## Listagem das databases 
```
show databases
```

## Listagem das coleções 
```
show collections
```

## Cadastro dos pokemons 
``` JavaScript
var registerPokemon = [
	{name: "Charizard", description: "Fire", attack: 84, defense: 78, heigth: 1.70}, 
	{name: "Butterfree", description: "Flying", attack: 45, defense: 50, heigth: 1.09},
	{name: "Pidgeot", description: "Flying", attack: 80, defense: 75, heigth: 1.50},
	{name: "Rattatá", description: "Normal", attack: 56, defense: 35, heigth: 0.30},
	{name: "Raticate", description: "Normal", attack: 81, defense: 60, heigth: 0.71} 
]
```
```

db.pokemons.insert(registerPokemon)
```

## Lista dos pokemons
``` JavaScript
db.pokemons.find()
```

## Procurando Pokemon
### Usando o seletor para poder mudar a propiedade :)
``` JavaScript
var poke = db.pokemons.findOne({name: "Butterfree"})
```

## Atualização da propiedade
``` JavaScript
poke.description = "Alterado"
db.pokemons.save(poke)
```
