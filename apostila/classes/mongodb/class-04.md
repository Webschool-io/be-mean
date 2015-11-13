# MongoDb - Aula 04



Antes de continuar com nossos operadores, iremos aprender como alterar nossos documentos, pois precisaremos adicionar um *Array* em algum documento para posteriormente voltarmos a mais operadores de busca.

## Update

### $set

O operador `$set` modifica um valor ou cria caso não exista.

{ $set : { campo : valor } }
db.products.update( { name: 'Pikachu'}, { $set: { attack: 120
} } );
Seta o valor do campo.

### $unset
{ $unset : { campo : 1} }
db.products.update( { name: ‘Pinga’}, { $unset: { price: 1
} } );
Deleta o campo.
￼