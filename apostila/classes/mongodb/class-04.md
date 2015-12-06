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


## Exercício

1. **Adicionar** 2 ataques ao mesmo tempo para os seguintes pokemons: Pikachu, Squirtle, Bulbassauro e Charmander.
2. **Adicionar** 1 movimento em todos os pokemons: `desvio`.
3. **Adicionar** o pokemon `AindaNaoExisteMon` caso ele não exista com todos os dados com o valor `null` e a descrição: "Sem maiores informações".
4. Pesquisar todos o pokemons que possuam o ataque `investida` e mais um que você adicionou, escolha seu pokemon favorito.
5. Pesquisar **todos** os pokemons que possuam os ataques que você adicionou, escolha seu pokemon favorito.
6. Pesquisar **todos** os pokemons que não são do tipo `elétrico`.
7. Pesquisar **todos** pokemons que tenham o ataque `investida` **E** tenham a defesa **não menor ou igual** a 49.
8. Remova **todos** os pokemons do tipo água e com attack menor que 50.


