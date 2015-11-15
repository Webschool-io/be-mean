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


### options

Mas peraí ainda temos mais 1 parâmetro no `update` o `options`.
Então para que eles serve?

#### upsert

O parâmetro `upsert` serve para caso o docuemnto não seja encontrado pela `query` ele insira o objeto que está sendo passado como modificação.

##### $setOnInsert

#### multi