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

Para evitarmos que o nosso documento seja sobrescrito pelo objeto de modificação nós deveremos utilizar os **operadores** de modificação.

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
```

Então vamos utilizar o nosso pokemon de teste modificado anteriormente para incrementar seu *attack*.

```
var mod = {$inc: { attack: 1 }}
db.pokemons.update(query, mod)

Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
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

#### Erro

```
The field 'type' must be an array but is of type String in document {_id: ObjectId('564220f0613f89ac53a7b5d0')}
WriteResult({
  "nMatched": 0,
  "nUpserted": 0,
  "nModified": 0,
  "writeError": {
    "code": 16837,
    "errmsg": "The field 'type' must be an array but is of type String in document {_id: ObjectId('564220f0613f89ac53a7b5d0')}"
  }
})
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

O operador `$pull` retira um valor do campo, caso o **campo seja um *Array* existente**. Caso **não exista** ele não fará nada.
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

O operador `$pullAll` retira cada valor do `[Array_de_valores]`, caso o **campo seja um *Array* existente**. Caso **não exista** ele não fará nada.
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

Para que eles serve?

O objeto `options` servirá para configurarmos alguns valores diferentes do padrão para o `update`.

#### Sintaxe

```
{
  upsert: boolean,
  multi: boolean,
  writeConcern: document
}
```

#### upsert

O parâmetro `upsert` serve para caso o documento não seja encontrado pela `query` ele insira o objeto que está sendo passado como modificação.

**Ele por padrão é `FALSE.**

Imagine que precisamos ativar, para ler suas informações, os Pokemons na nossa pokeagenda.

```
var query = {name: /squirtle/i}
var mod = {$set: {active: true}}
var options = {upsert: true}
db.pokemons.update(query, mod, options)

Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

Então perceba que se o Pokemon existir ele só fará a alteração, agora vamos ver com um Pokemon que não exista na pokeagenda.

```
var query = {name: /PokemonInexistente/i}
var mod = {$set: {active: true}}
var options = {upsert: true}
db.pokemons.update(query, mod, options)

Updated 1 new record(s) in 3ms
WriteResult({
  "nMatched": 0,
  "nUpserted": 1,
  "nModified": 0,
  "_id": ObjectId("564a94aa3888e5da82899ccc")
})
```

Agora como percebemos no `WriteResult` ele não achou nenhum `"nMatched": 0` e inseriu 1 `"nUpserted": 1`. Retornando o _id do documento inserido.

```
db.pokemons.find(query)
{
  "_id": ObjectId("56422345613f89ac53a7b5d3"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "active": true
}
```

##### $setOnInsert

Com esse operador você pode definir valores que serão adicionados apenas se ocorrer um **upsert**, ou seja, se o objeto for inserido pois não foi achado pela **query**.

Vamos pegar um cenário onde buscaremos um pokemon em nossa pokeagenda, porém o mesmo não se encontra nos registros, então inserimos ele com valores padrões.

```
var query = {name: /NaoExisteMon/i}
var mod = {
  $set: {active: true},
  $setOnInsert: {name: "NaoExisteMon", attack: null, defense: null, height: null, description: "Sem maiores informações"}
}
var options = {upsert: true}
db.pokemons.update(query, mod, options)

Updated 1 new record(s) in 90ms
WriteResult({
  "nMatched": 0,
  "nUpserted": 1,
  "nModified": 0,
  "_id": ObjectId("564a89f33888e5da82899ccb")
})


db.pokemons.find(query)
{
  "_id": ObjectId("564a89f33888e5da82899ccb"),
  "active": true,
  "name": "NaoExisteMon",
  "attack": null,
  "defense": null,
  "height": null,
  "description": "Sem maiores informações"
}
```

#### multi

**Quem nunca de um UPDATE SEM WHERE na vida que atire a primeira pedra** ehhehehehe.

![](http://i.imgur.com/dxETX56.png)

Não, não é o [canal Update Sem Where](https://www.youtube.com/watch?v=vOAikPAYPQY), é dar um **UPDATE** na sua tabela sem ter passado um **WHERE** na sua SQL.

Ué mas por que isso é ruim?

Se você se perguntou isso nunca deve ter trabalho com bancos de dados relacionais.

Pois quando você não passa a cláusula do **WHERE** o banco entende que você quer atualizar **TODOS** os registros.

Então imagine que você só ia atualizar a o email de um usuário, não passando o **WHERE** você vai atualizar **TODOS OS EMAILS DE TODOS OS USUÁRIOS** para aquele email específico.

![Holy Shit MEME](http://www.quickmeme.com/img/0c/0c81cb4eab2202c9d1453353cf36a6b100192d31bd61d3fc08e594acb4f45ca8.jpg)

O MongoDB não deixa você fazer essa cagada, pois ele por padrão só deixa você alterar um documento por vez, caso você realmente deseje alterar **vários** de uma só vez, terá que passar esse parâmetro como `true`.

Vamos adicionar o campo `active: false` para todos os Pokemons.

```
var query = {}
var mod = {$set: {active: false}}
var options = {multi: true}
db.pokemons.update(query, mod, options)

Updated 8 existing record(s) in 3ms
WriteResult({
  "nMatched": 8,
  "nUpserted": 0,
  "nModified": 8
})
```

#### writeConcern

O `writeConcern` descreve a garantia de que MongoDB fornece ao relatar o sucesso de uma operação de escrita.

A força dos *write concerns* determinam o nível de garantia. Quando inserções, atualizações e exclusões têm um *write concern* fraco, operações de escrita retornam rapidamente.

Em alguns casos de falha, as operações de gravação emitidas com *write concerns* fracos podem não persistir.

Com os *write concerns* mais fortes, os clientes esperam após o envio de uma operação de escrita para o MongoDB confirmar as operações de escrita.

Caso queira saber mais como criar o documento a ser passado nessa opção [leia mais aqui](https://docs.mongodb.org/manual/reference/write-concern/).
