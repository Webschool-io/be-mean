## pagination

A paginação no MongoDB é conseguida através do uso de duas outras funções: `.limit()` e `.skip()`.

### limit
O método limit, como o próprio nome indica, **limita** o retorno de documentos. Recebe um inteiro como argumento, e devolve essa quantidade de documentos de uma coleção.


### skip
O método skip, **pula** um número `n` de documentos, ou seja, retorna apenas os próximos, pulando os `n` primeiros. Também recebe um inteiro como argumento.


Utilizando os dois métodos acima juntos, conseguimos paginar, ou seja, retornar uma quantidade limitada de documentos a cada interação.
Para paginar de 10 em 10, utilizamos assim:
```
.limit(10).skip(0 * 10); //primeira página
.limit(10).skip(1 * 10); //segunda página
.limit(10).skip(2 * 10); //terceira página
```
E para paginar de 5 em 5:
```
.limit(5).skip(0 * 5); //primeira página
.limit(5).skip(1 * 5); //segunda página
.limit(5).skip(2 * 5); //terceira página
```

Pois se fizermos as contas, ao pular 0 * 5 documentos, não estamos pulando ninguém, então retornarmos os primeiros documentos, ao pular 1 * 5, pulamos, os 5 primeiros, ou seja, pulamos a quantidade que já foi vista na primeira página, e ao pularmos 2 * 5, pulamos 10 documentos, que são aqueles da primeira e segunda página, trazendo assim apenas os da terceira página, e assim por diante.

