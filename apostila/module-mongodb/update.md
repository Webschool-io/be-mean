# MongoDb - Aula 04

Na aula passada conhecemos alguns operadores de busca, antes de continuar com esses operadores, iremos aprender como alterar nossos documentos, pois precisaremos adicionar um *Array* em algum documento para posteriormente voltarmos a mais operadores de busca.

## Update

Para alteramos um documento no MongoDb possuímos


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