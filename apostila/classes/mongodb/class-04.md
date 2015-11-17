# MongoDb - Aula 04

Antes de continuar com nossos operadores, iremos aprender como alterar nossos documentos, pois precisaremos adicionar um *Array* em algum documento para posteriormente voltarmos a mais operadores de busca.

- [Update](./../../module-mongodb/update.md)


## Parte 1

Falei sobre onde enviar os exercícios oficialmente [https://github.com/Webschool-io/be-mean-instagram-mongodb-excercises](https://github.com/Webschool-io/be-mean-instagram-mongodb-excercises)

Sobre o artigo que tem prazo até dia 18 de novembro. [https://github.com/Webschool-io/be-mean-instagram-artigos](https://github.com/Webschool-io/be-mean-instagram-artigos)

Aí começamos o `update()`.

```
db.colecao.update(query, mod, options);
```

Mostrei o que acontece quando não se passa um operador de modificação para o `update`.

![](http://generator-meme.com/inc/media/memes/evil-kid.jpg)

Depois mostrei o `$set`, `$unset` e `$inc` para dai irmos para os Operadores de Array: `$push`, `$pushAll`, `$pull`, `$pullAll`.


## Parte 2

Falar sobre a documentação do MongoDb e como ela é boa. 

Comecei a aula continuando no `update`, dessa vez falando do objeto options e seus atributos internos como: `upsert`, `multi` e `writeConcern`.

Depois de trabalharmos com os Arrays, agora voltaremos para nossas buscas, onde poderemos agora testar nossos operadores de busca em Arrays.

Utilizamos os operadores: `$in`, `$nin` e `$all`.


Se der tempo mostrar como buscar em objetos embedados.

