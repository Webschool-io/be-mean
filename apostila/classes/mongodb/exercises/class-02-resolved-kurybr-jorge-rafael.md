# MongoDB - Aula 02 - Exercício
autor: Jorge Rafael

## Criando database be-mean-pokemons;

```
> use be-mean-pokemons
```

## Listagem das databases (passo 2)

```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)

```
> show collections
pokemons
system.indexes
>
```


## Cadastro dos pokemons (passo 4)
```
var pokemons = [
   {"height":4,"attack": 55,"defense": 40,"name" : "Pikachu","description" : "It raises its tail to check its sur roundings. The tail is sometimes struck by light ning in this pose."}
  ,{"height":7,"attack": 40,"defense": 15,"name" : "Pichu","description" : "When PICHU plays with others, it may short out electricity with another PICHU, creating a shower of sparks. In that event, this POKMON will begin crying, startled by the flash of sparks."}
  ,{"height":8,"attack": 90,"defense": 55,"name" : "Raichu","description" : "If the electric pouches in its cheeks become fully charged, both ears will stand straight up."}
  ,{"height":7,"attack": 75,"defense": 85,"name" : "Sandshrew","description" : "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall"}
  ,{"height":3,"attack": 100,"defense": 110,"name" : "Sandslash","description" : "Adept at climbing trees, it rolls into a spiny ball, then attacks its enemies from above."}
  ,{"height":4,"attack": 47,"defense": 52,"name" : "Nidoran-F","description" : "Although small, its venomous barbs render this POKMON dangerous. The female has smaller horns."}
  ,{"height":10,"attack" : 62, "defense" : 67, "name" : "Nidorina", "description" : "When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This POKMON appears to become nervous if separated from the others." }
]

```

```
> db.pokemons.insert(pokemons)
```

## Lista dos pokemons (passo 5)

```
> db.pokemons.find()
{ "_id" : ObjectId("5642951ecc052955701cf5b9"), "attack" : 55, "defense" : 40, "name" : "Pikachu", "description" : "It raises its tail to check its sur roundings. The tail is sometimes struck by light ning in this pose." }
{ "_id" : ObjectId("5642951ecc052955701cf5ba"), "attack" : 40, "defense" : 15, "name" : "Pichu", "description" : "When PICHU plays with others, it may short out electricity with another PICHU, creating a shower of sparks. In that event, this POKMON will begin crying, startled by the flash of sparks." }
{ "_id" : ObjectId("5642951ecc052955701cf5bb"), "attack" : 90, "defense" : 55, "name" : "Raichu", "description" : "If the electric pouches in its cheeks become fully charged, both ears will stand straight up." }
{ "_id" : ObjectId("5642951ecc052955701cf5bc"), "attack" : 75, "defense" : 85, "name" : "Sandshrew", "description" : "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall" }
{ "_id" : ObjectId("5642951ecc052955701cf5bd"), "attack" : 100, "defense" : 110, "name" : "Sandslash", "description" : "Adept at climbing trees, it rolls into a spiny ball, then attacks its enemies from above." }
{ "_id" : ObjectId("5642951ecc052955701cf5be"), "attack" : 47, "defense" : 52, "name" : "Nidoran-F", "description" : "Although small, its venomous barbs render this POKMON dangerous. The female has smaller horns." }
{ "_id" : ObjectId("5642951ecc052955701cf5bf"), "attack" : 62, "defense" : 67, "name" : "Nidorina", "description" : "When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This POKMON appears to become nervous if separated from the others." }
>
```

## Pichu (passo 6)
```
> var query = {name:"Pichu"};
> var p = db.pokemons.findOne(query)
```
## Atualização do Pichu (passo 6)

```

> p.description = "Pikachu miniatura"
Pikachu miniatura
> db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>
```
