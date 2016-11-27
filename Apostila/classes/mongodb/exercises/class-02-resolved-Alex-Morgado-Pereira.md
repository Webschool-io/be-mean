# MongoDB - Aula 02 - Exercício
autor: Alex Morgado Pereira

## Criar database chamada be-mean-pokemons

```
alex-morgado(mongod-3.2.6) test> use be-mean-pokemons
switched to db be-mean-pokemons

```

## Listagem de todas dbs

```
be-mean           → 0.078GB
be-mean-instagram → 0.078GB
local             → 0.078GB

```

## Listagem de todas as collections

```
show collections

```

## Criar cinco pokemons

```
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.insert({name: "Arcanine", tipo: "fogo", hp: 90, ataque: 110, defesa: 80,ataqueEspecial: 100, defesaEspecial: 80, velocidade: 95, total: 555})
Inserted 1 record(s) in 64ms
WriteResult({
"nInserted": 1
})
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.insert({name: "Archeops",tipo: "Rocha / Voador",hp: 75, ataque: 140, defesa: 65, ataqueEspecial: 112, defesaEspecial: 65, velocidade: 110, total: 567})
Inserted 1 record(s) in 1ms
WriteResult({
"nInserted": 1
})
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.insert({name: "Goodra",tipo: "Dragão",hp: 90, ataque: 100,defesa: 70, ataqueEspecial: 110,defesaEspecial: 150, velocidade:80, total: 600})
Inserted 1 record(s) in 0ms
WriteResult({
"nInserted": 1
})
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.insert({name: "Hydreigon",tipo: "Noturno/Dragão",hp: 92, ataque: 105, defesa: 90,ataqueEspecial: 125, defesaEspecial: 90,velocidade:98,total: 600})
Inserted 1 record(s) in 1ms
WriteResult({
"nInserted": 1
})
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.insert({name: "Garchomp", tipo: "Dragão/Terra", hp: 108, ataque: 170, defesa: 115, ataqueEspecial: 120, defesaEspecial: 95, velocidade: 92, total: 700})
Inserted 1 record(s) in 0ms
WriteResult({
"nInserted": 1
})

```

## Listar todos os pokemons

```
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.find()
{
	"_id": ObjectId("57a54f5f1f8da2cc48912f26"),
	"name": "Arcanine",
	"tipo": "fogo",
	"hp": 90,
	"ataque": 110,
	"defesa": 80,
	"ataqueEspecial": 100,
	"defesaEspecial": 80,
	"velocidade": 95,
	"total": 555
}
{
	"_id": ObjectId("57a54fee1f8da2cc48912f27"),
	"name": "Archeops",
	"tipo": "Rocha / Voador",
	"hp": 75,
	"ataque": 140,
	"defesa": 65,
	"ataqueEspecial": 112,
	"defesaEspecial": 65,
	"velocidade": 110,
	"total": 567
}
{
	"_id": ObjectId("57a550301f8da2cc48912f28"),
	"name": "Goodra",
	"tipo": "Dragão",
	"hp": 90,
	"ataque": 100,
	"defesa": 70,
	"ataqueEspecial": 110,
	"defesaEspecial": 150,
	"velocidade": 80,
	"total": 600
}
{
	"_id": ObjectId("57a550771f8da2cc48912f29"),
	"name": "Hydreigon",
	"tipo": "Noturno/Dragão",
	"hp": 92,
	"ataque": 105,
	"defesa": 90,
	"ataqueEspecial": 125,
	"defesaEspecial": 90,
	"velocidade": 98,
	"total": 600
}
{
	"_id": ObjectId("57a550c61f8da2cc48912f2a"),
	"name": "Garchomp",
	"tipo": "Dragão/Terra",
	"hp": 108,
	"ataque": 170,
	"defesa": 115,
	"ataqueEspecial": 120,
	"defesaEspecial": 95,
	"velocidade": 92,
	"total": 700
}
Fetched 5 record(s) in 18ms


```

## Buscar um pokemon

```
alex-morgado(mongod-3.2.6) be-mean-pokemons> var query = {name: "Garchomp"};
alex-morgado(mongod-3.2.6) be-mean-pokemons> var get = db.pokemons.findOne(query);
alex-morgado(mongod-3.2.6) be-mean-pokemons> get
{
	"_id": ObjectId("57a550c61f8da2cc48912f2a"),
	"name": "Garchomp",
	"tipo": "Dragão/Terra",
	"hp": 108,
	"ataque": 170,
	"defesa": 115,
	"ataqueEspecial": 120,
	"defesaEspecial": 95,
	"velocidade": 92,
	"total": 700
}


```

## Editar a description do pokemon escolhido

```
alex-morgado(mongod-3.2.6) be-mean-pokemons> get.descricao = "Ele voa com uma velocidade igual a de um jato. Ele nunca permite que sua presa escape."
Ele voa com uma velocidade igual a de um jato. Ele nunca permite que sua presa escape.
alex-morgado(mongod-3.2.6) be-mean-pokemons> db.pokemons.save(get)
Updated 1 existing record(s) in 10ms
WriteResult({
"nMatched": 1,
"nUpserted": 0,
"nModified": 1
})

```