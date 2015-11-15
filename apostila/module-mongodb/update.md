## Update

Para alteramos um documento no MongoDb possuímos duas formas:

- save
- update.

Recordando que para utilizar o `save` eu preciso antes buscar o documento necessário antes de poder modificá-lo, com o `update` isso não será necessário.

A função `update` recebe 3 parâmetros:

- query
- modificação
- options

```
db.colecao.update(query, mod, options);
```

Para iniciarmos vamos criar um Pokemon novo:

```
var poke = {name: "Testemon", attack: 8000, defense: 8000, height: 2.1, description: "Pokemon de teste"}
db.pokemons.save(poke)

Inserted 1 record(s) in 48ms
WriteResult({
  "nInserted": 1
})
```

Após inserido, vamos buscar esse documento para termos a certeza e já pegarmos seu `_id`, já já você entenderá o porquê.

```
var query = {name: /testemon/i}
db.pokemons.find(query)
{
  "_id": ObjectId("5648970669bd5df270cc7e01"),
  "name": "Testemon",
  "attack": 8000,
  "defense": 8000,
  "height": 2.1,
  "description": "Pokemon de teste"
}
Fetched 1 record(s) in 1ms
```

Depois de inserido vamos tentar fazer o nosso primeiro `update`, para isso iremos criar uma `query` para buscar nosso Pokemon e posteriormente, modificá-lo:

```
var query = {"_id": ObjectId("5648970669bd5df270cc7e01")}
var mod = {description: "Mudei aqui mermaoooo"}
db.pokemons.update(query, mod)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Opa mas olha que simples, já alterou. Então vamos buscar novamente nosso documento pelo seu `_id`:

```
db.pokemons.find(query)
{
  "_id": ObjectId("5648970669bd5df270cc7e01"),
  "description": "Mudei aqui mermaoooo"
}
Fetched 1 record(s) in 1ms
```

**PORRA SUISSA C FODEU O BAGUIO MANOOOOO C EH LOCO CACHORRERA??**

Então, fiz de propósito hihihihihi.

![](https://imgflip.com/s/meme/Evil-Toddler.jpg)

Para evitarmos que o nosso docuemno seja sobrescrito pelo objeto de cmodificação nós deveremos utilizar os **operadores** de modificação.

### $set

O operador `$set` modifica um valor ou cria caso não exista.

```
{ $set : { campo : valor } }
db.pokemons.update( { name: 'Pikachu'}, { $set: { attack: 120
} } );
```

Então vamos reaproveitar nossa `query` que já possui nosso `_id` e vamos adicionar agora os campos faltantes e arrumar a `description`:

```
var mod = {$set: {name: 'Testemon', attack: 8000, defense: 8000, height: 2.1, description: "Pokemon de teste"}}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Então vamos buscar novamente nosso documento reaproveitando a `query`:

```
db.pokemons.find(query)
{
  "_id": ObjectId("5648970669bd5df270cc7e01"),
  "description": "Pokemon de teste",
  "name": "Testemon",
  "attack": 8000,
  "defense": 8000,
  "height": 2.1
}
Fetched 1 record(s) in 1ms
```

Perceba que além dele modificar o valor já existente de `description` ele também criou os campos faltantes.

### $unset

Bom se temos um operador para modificar e criar campos novos, obviamente temos um operador para remover os campos, que é o caso do `$unset`.

A sintaxe desse operador é a seguinte:

```
{ $unset : { campo : 1} }
```

Então vamos eliminar um campo do nosso `Testemon`:

```
var mod = {$unset: {height: 1}}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 3ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
￼
Bem simples a alteração de documentos no MongoDb não?

### $inc

O operador `$inc` incrementa um valor no campo com a quantidade desejada. 
Caso o campo não exista, ele irá criar o campo e setar o valor. Para decrementar, basta passar um valor negativo.

```
{ $inc : { campo : valor } }
db.pokemons.update( { name: 'Pikachu'}, { $inc: { attack: 1 } } );
```

Então vamos utilizar o nosso pokemon de teste modificado anteriormente para incrementar seu *attack*.

```
var mod = {$inc: { attack: 1 }}

db.pokemons.update(query, mod)
```

Bem simples né? E podemos passar o valor que quisermos, não apenas incrementar de 1 em 1.

Por exemplo, quando algum Pokemon for evoluir ele ganhará 100 de attack, então para criar esse cenário nós fazemos:

```
var mod = {$inc: { attack: 100 }}

db.pokemons.update(query, mod)
```

E para decrementar o valor basta que passemos um valor negativo para o operador `$inc`.

## Operadores de Arrays

Para iniciarmos a alteração em arrays vamos modificar o **Pikachu** para adicionar ao seu documento um *Array* de movimentos/ataques.

```
var query = {name: /pikachu/i}
var mod = {$set: { moves: ['investida'] }}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 7ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Para conferirmos nossa modificação vamos fazer a busca pelo Pikachu.

```
db.pokemons.find({name: /pikachu/i})
{
  "_id": ObjectId("56422c36613f89ac53a7b5d5"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4,
  "moves": [
    "investida"
  ]
}
Fetched 1 record(s) in 1ms
```

Pronto agora temos um *Array* para nossos ataques.

### $push

O operador `$push` adiciona um valor ao campo, caso o **campo seja um *Array* existente**. Caso **não exista irá criar o campo novo, do tipo *Array* com o valor passado** no `$push`.
Caso o **campo exista e não for um *Array*, irá retornar um erro**.

#### Sintaxe

```
{ $push : { campo : valor } }
```

#### Uso

Então vamos adicionar o **Choque do Trovão** ao Pikachu:

```
var mod = {$push: {moves: 'choque do trovão'}}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Após a modificação vamos buscar o Pikachu e ver se alteramos corretamente:

```
db.pokemons.find(query)
{
  "_id": ObjectId("56422c36613f89ac53a7b5d5"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4,
  "moves": [
    "investida",
    "choque do trovão"
  ]
}
Fetched 1 record(s) in 0ms
```

### $pushAll

O operador `$pushAll` adiciona cada valor do `[Array_de_valores]`, caso o **campo seja um *Array* existente**. Caso **não exista irá criar o campo novo, do tipo *Array* com o valor passado** no `$pushAll`.
Caso o **campo exista e não for um *Array*, irá retornar um erro**.

#### Sintaxe

```
{ $pushAll : { campo : valor } }
```

#### Uso

Agora vamos adicionar 3 ataques novos ao Pikachu, para isso criamos um *Array* para seus valores e logo após passamos ele para o `$pushAll`:

```
var attacks = ['choque elétrico', 'ataque rápido', 'bola elétrica']
var mod = {$pushAll: {moves: attacks}}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 24ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Vamos conferir a modificação.

```
db.pokemons.find(query)
{
  "_id": ObjectId("56422c36613f89ac53a7b5d5"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4,
  "moves": [
    "investida",
    "choque do trovão",
    "choque elétrico",
    "ataque rápido",
    "bola elétrica"
  ]
}
```

### $pull

O operador `$pull` retira um valor do campo, caso o **campo seja um *Array* existente**. Caso **não exista irá criar o campo novo, do tipo *Array* com o valor passado** no `$pull`.
Caso o **campo exista e não for um *Array*, irá retornar um erro**.

#### Sintaxe

```
{ $pull : { campo : valor } }
```

#### Uso

Dessa vez iremos retirar um ataque do Pikachu.

```
var mod = {$pull: {moves: 'bola elétrica'}}
db.pokemons.update(query, { $pull: { moves: 'bola elétrica'} } )

Updated 1 existing record(s) in 17ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Consultando o Pikachu conferimos que o ataque `bola elétrica` foi removido.

```
db.pokemons.find(query)
{
  "_id": ObjectId("56422c36613f89ac53a7b5d5"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4,
  "moves": [
    "investida",
    "choque do trovão",
    "choque elétrico",
    "ataque rápido"
  ]
}
```


### $pullAll

O operador `$pullAll` retira cada valor do `[Array_de_valores]`, caso o **campo seja um *Array* existente**. Caso **não exista irá criar o campo novo, do tipo *Array* com o valor passado** no `$pullAll`.
Caso o **campo exista e não for um *Array*, irá retornar um erro**.

#### Sintaxe

```
{ $pullALl : { campo : valor } }
```

#### Uso

Vamos remover 2 ataques de uma só vez: Choque Elétrico e Choque do Trovão.

```
var attacks = ['choque elétrico', 'bola elétrica']
var mod = {$pullAll: {moves: attacks}}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 24ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

### options

Mas peraí ainda temos mais 1 parâmetro no `update` o `options`.
Então para que eles serve?

#### upsert

O parâmetro `upsert` serve para caso o docuemnto não seja encontrado pela `query` ele insira o objeto que está sendo passado como modificação.

##### $setOnInsert

#### multi