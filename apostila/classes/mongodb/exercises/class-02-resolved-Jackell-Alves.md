MondoDb - Aula 02 - Exercício
autor: Jackell Alves

Criando uma database be-mean-pokemons
use be-mean-pokemons switched to db be-mean-pokemons

Listagem das databases
show dbs
be-mean-teste     → 0.078GB
teste             → 0.078GB
local             → 0.078GB
be-mean-pokemons  → 0.078GB
be-mean-instagram → 0.078GB
bancoteste        → 0.078GB
be-mean           → 0.078GB

Listagem das coleções
show collections

Cadastro dos pokemons
var pokemon = {'name':'Arbok','description':'Este Pokémon é terrivelmente forte, a fim de contrair coisas com seu corpo.','type':'cobra', attack: 85, defense: 69, height: 3.5}
var pokemon = {'name':'Sandshrew','description':'Este Pokémon se enrola para se proteger de seus inimigos.','type':'Mouse', attack: 75, defense: 85, height: 0.6}
var pokemon = {'name':'Nidoqueen','description':'Este Pokémon está mais forte quando se está defendendo seus filhotes.','type':'Drill', attack: 92, defense: 87, height: 1.3}
var pokemon = {'name':'Clefairy','description':'Em cada noite de lua cheia, grupos deste Pokémon sair para jogar.','type':'fada', attack: 45, defense: 48, height: 0.6}
var pokemon = {'name':'Golbat','description':'Golbat ama beber o sangue de seres vivos.','type':'Bat', attack: 80, defense: 70, height: 1.6}
var pokemon = {'name':'Paras','description':'Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.','type':'Mushroom', attack: 70, defense: 55, height: 0.3}

Listagem dos pokemons
db.pokemon.find()
{
  "_id": ObjectId("56437284821ac90657925b7b"),
  "name": "Paras",
  "description": "Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.",
  "type": "Mushroom",
  "attack": 70,
  "height": 0.3,
  "defense": 55
}
{
  "_id": ObjectId("564373da821ac90657925b7d"),
  "name": "Golbat",
  "description": "Golbat ama beber o sangue de seres vivos.",
  "type": "Bat",
  "attack": 80,
  "defense": 70,
  "height": 1.6
}
{
  "_id": ObjectId("5643741c821ac90657925b7e"),
  "name": "Clefairy",
  "description": "Em cada noite de lua cheia, grupos deste Pokémon sair para jogar.",
  "type": "fada",
  "attack": 45,
  "defense": 48,
  "height": 0.6
}
{
  "_id": ObjectId("5643745a821ac90657925b7f"),
  "name": "Nidoqueen",
  "description": "Este Pokémon está mais forte quando se está defendendo seus filhotes.",
  "type": "Drill",
  "attack": 92,
  "defense": 87,
  "height": 1.3
}
{
  "_id": ObjectId("5643748f821ac90657925b80"),
  "name": "Sandshrew",
  "description": "Este Pokémon se enrola para se proteger de seus inimigos.",
  "type": "Mouse",
  "attack": 75,
  "defense": 85,
  "height": 0.6
}
{
  "_id": ObjectId("564374d1821ac90657925b81"),
  "name": "Arbok",
  "description": "Este Pokémon é terrivelmente forte, a fim de contrair coisas com seu corpo.",
  "type": "cobra",
  "attack": 85,
  "defense": 69,
  "height": 3.5
}
Fetched 7 record(s) in 7ms

Buscar pokemon
var p = db.pokemon.findOne(query)

p
{
  "_id": ObjectId("56437284821ac90657925b7b"),
  "name": "Paras",
  "description": "Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.",
  "type": "Mushroom",
  "attack": 70,
  "height": 0.3,
  "defense": 55
}

Alterando descriptions do pokemon
p.descriptions = 'Eles crescem grande desenhando nutrientes a partir deste host Bug Pokémon.'

p
{
  "_id": ObjectId("56437284821ac90657925b7b"),
  "name": "Paras",
  "descriptions": "Eles crescem grande desenhando nutrientes a partir deste host Bug 	      Pokémon."
  "type": "Mushroom",
  "attack": 70,
  "height": 0.3,
  "defense": 55
}

