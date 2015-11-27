# Relacionamentos

![](./images/relacionamento.jpg)

## Manual

Para fazer um relacionamento manual basta você salvar o `_id` de uma coleção em outra. Por exemplo vamos criar nosso inventário de pokemons pegos nas suas pokebolas.

```js
var pokemons = [
  {"_id": ObjectId("564220f0613f89ac53a7b5d0")},
  {"_id": ObjectId("56422345613f89ac53a7b5d2")},
  {"_id": ObjectId("56422345613f89ac53a7b5d1")}
];
var json = {
  name: "Meus pokemons",
  pokemons: pokemons
}
db.invt.insert(json)
```

Depois de inserido nossos pokemons vamos criar a busca para pegar cada um.

```js
var pokemons = []
var getPokemon = function(id){ pokemons.push(db.pokemons.findOne(id)) }
var invt = db.invt.findOne()
invt.pokemons.forEach(getPokemon)
```

O *Array* `pokemons` é onde as informações serão jogadas pela função `getPokemon`, a qual faz um `findOne` em cada item, `{"_id": ObjectId("56422345613f89ac53a7b5d1")}`, ...

## DBRef

O **DBRef** é um convenção para representar um documento relacionado, isso inclui:

- $ref: nome da coleção a ser referenciada;
- $id: o ObjectId do documento referenciado;
- $db: a database onde a coleção referenciada se encontra.

```js
{
  "pokemon" : {
    "$ref" : "pokemons",
    "$id" : ObjectId("5126bc054aed4daf9e2ab772"),
    "$db" : "be-mean-instagram"
   }
}
```

