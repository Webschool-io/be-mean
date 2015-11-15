## Update

Para alteramos um documento no MongoDb possuímos duas formas:

- save
- update.

Recordando que para utilizar o `save` eu preciso antes buscar o documento necessário antes de poder modificá-lo, com o `update` isso não será necessário.

A função `update` recebe 4 parâmetros:

- query
- modificação
- upsert = false
- multi = false

```
db.colecao.update(query, mod, upsert, multi);
```

Para iniciarmos vamos criar um Pokemon novo:

```
var poke = {name: "Testemon", attack: 8000, defense: 8000, height: 2.1, description: "Pokemon de teste"}

suissacorp(mongod-3.0.6) be-mean-teste> db.podemons.save(poke)
Inserted 1 record(s) in 48ms
WriteResult({
  "nInserted": 1
})
```



### $set

O operador `$set` modifica um valor ou cria caso não exista.

{ $set : { campo : valor } }
db.pokemons.update( { name: 'Pikachu'}, { $set: { attack: 120
} } );
Especifica o valor do campo.




### $unset
{ $unset : { campo : 1} }
db.pokemons.update( { name: ‘Pinga’}, { $unset: { price: 1
} } );
Deleta o campo.
￼