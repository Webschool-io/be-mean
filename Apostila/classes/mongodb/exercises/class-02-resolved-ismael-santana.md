## MongoDb - Aula 02

Continuando nossa a aula sobre MongoDb, continuaremos utilizando o `Terminal` e faremos as primeiras funções do nosso CRUD.

O [CRUD](https://pt.wikipedia.org/wiki/CRUD) é uma silga que significa as 4 operações básicas que qualquer entidade deve ter, para ser gerenciável, em um sistema:

- Create: cria uma entidade nova;
- Retrieve/Read: busca uma entidade existente;
- Update: modifica uma entidade existente;
- Delete: excluí uma entidade existente.

Nessa aula aprenderemos como criar e buscar nossos registros.


Falar que qnd subir o `mongo` pode subir escolhendo qual database irá usar, executando assim:


### 1 = Criar uma Database 
```
ismael-pc(mongod-3.0.12) test> use be-mean-pokemons
switched to db be-mean-pokemons
```

### 2 = lista de Database 
```
ismael-pc(mongod-3.0.12) be-mean-pokemons> show dbs
be-mean           → 0.078GB
be-mean-instagram → 0.078GB
be-mean-pokemons  → 0.078GB
local             → 0.078GB
mango             → 0.078GB
```

### 3 = lista de Collections
```
ismael-pc(mongod-3.0.12) be-mean-pokemons> show collections
```

### 4 = inserir os Pokemons 
```
var artortle" ={
  "nome": "Wartortle",
  "discription": "feinho mais nem tanto",
  "attack": 3,
  "height": "1.0",
  "defende": 3,
  "type": "agua"
} 

 var Ivysaur = {
  "nome": "Ivysaur",
  "discription": "feinho",
  "attack": 4,
  "height": "1.0",
  "defende": 3,
  "type": "vidro"
}

var Blastoise =  {
  "nome": "Blastoise",
  "discription": "feinho 0 outro era pior",
  "attack": 4,
  "height": "1.6",
  "defende": 4,
  "type": "agua"
}

var Caterpie = {
  "nome": "Caterpie",
  "discription": "feinho  esse não",
  "attack": 2,
  "height": "0.3",
  "defende": 2,
  "type": "erro",
  "defense": 3
}

var Metapod {
  "nome": "Metapod",
  "discription": "bota feio nisso",
  "attack": 1,
  "height": "0.7",
  "defende": 3,
  "type": "erro"
}
```

### 5 = Pokemons  collections 
```
{
  "_id": ObjectId("575248f7b659d6b65128dc34"),
  "nome": "Wartortle",
  "discription": "feinho mais nem tanto",
  "attack": 3,
  "height": "1.0",
  "defende": 3,
  "type": "agua"
}
{
  "_id": ObjectId("575249be2ca47bbbc40e250f"),
  "nome": "Ivysaur",
  "discription": "feinho",
  "attack": 4,
  "height": "1.0",
  "defende": 3,
  "type": "vidro"
}
{
  "_id": ObjectId("57524abb2ca47bbbc40e2510"),
  "nome": "Blastoise",
  "discription": "feinho 0 outro era pior",
  "attack": 4,
  "height": "1.6",
  "defende": 4,
  "type": "agua"
}
{
  "_id": ObjectId("57524d642ca47bbbc40e2511"),
  "nome": "Caterpie",
  "discription": "feinho  esse não",
  "attack": 2,
  "height": "0.3",
  "defende": 2,
  "type": "erro",
  "defense": 3
}
{
  "_id": ObjectId("57524ddf2ca47bbbc40e2512"),
  "nome": "Metapod",
  "discription": "bota feio nisso",
  "attack": 1,
  "height": "0.7",
  "defende": 3,
  "type": "erro"
}
```

### 6 = armazenar o Pokemon na variavel poke
```
ismael-pc(mongod-3.0.12) be-mean-pokemons> poke
{
  "_id": ObjectId("57524ddf2ca47bbbc40e2512"),
  "nome": "Metapod",
  "discription": "bota feio nisso",
  "attack": 1,
  "height": "0.7",
  "defende": 3,
  "type": "erro"
}
```


### 7 = Modificar a discrição e Salvar 
```
ismael-pc(mongod-3.0.12) be-mean-pokemons> poke.discription = "nem tanto vai"
nem tanto vai
ismael-pc(mongod-3.0.12) be-mean-pokemons> db.pokemon.save(poke)
Updated 1 existing record(s) in 325ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
