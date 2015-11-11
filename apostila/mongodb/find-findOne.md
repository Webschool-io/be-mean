## find


### Operadores de Aritmética

#### < é $lt - less than

db.collection.find({ "campo" : { $lt: value } } );
Retorna objetos com valores menores que value.

#### <= ou $lte - less than or equal

db.collection.find({ "campo" : { $lte: value } } );
Retorna objetos com valores menores ou igual que value.

#### > ou $gt - greater than

db.collection.find({ "campo" : { $gt: value } } );
Retorna objetos com valores maiores que value.

#### >= ou $gte - greater than or equal

db.collection.find({ "campo" : { $gte: value } } );
Retorna objetos com valores maiores ou igual que value.

### Operadores Lógicos

$or
db.collection.find( { $or : [ { a : 1 } , { b : 2 } ] } )
db.foo.find( { name : "bob" , $or : [ { a : 1 } , { b : 2 } ] } )
Retorna objetos caso a cláusula OU for verdadeira.

$nor
db.collection.find( { $nor : [ { a : 1 } , { b : 2 } ] } )
Retorna objetos caso a cláusula negação do OU for verdadeira, ou seja, não pode encontrar nenhuma cláusula verdadeira.

$and
db.foo.insert( { a: [ 1, 10 ] } )
db.foo.find( { $and: [ { a: 1 }, { a: { $gt: 5 } } ] } )
Retorna objetos caso a cláusula E for verdadeira.


### Operadores "Existênciais"

$exists
db.collection.find( { campo : { $exists : true } } );
Retorna o objeto caso o campo exista.


### Operadores de Array

$in
db.collection.find( { campo : { $in : array } } );
db.products.find( { tags : { $in : [‘marvada’, ‘teste’] } } );
Retorna objetos se o valor foi encontrado.

$nin
db.collection.find({ tags : { $nin :[ ‘teste’] } } );
Retorna objetos se nenhum dos valores foi encontrado.

### Operadores de Negação

$ne
db.collection.find( { name : { $ne : ‘Pinga’} } );
Retorna objetos se o valor não for igual.


$not
db.collection.find( { campo : { $not : { $gt: 666 } } } );
Retorna o objeto que não satisfaz a condição do campo, isso inclui documentos que não possuem o campo.
