## group

O [método group](https://docs.mongodb.org/manual/reference/method/db.collection.group/) é outra ferramenta que temos no MongoDB para extrairmos informações agrupadas da nossa coleção, tais como média, soma, etc.

A sintaxe é:
```
db.collection.group({ 
  key: <CAMPO OU CAMPOS QUE AGRUPARÃO A COLLECTION>, 
  reduce: <FUNÇÃO ONDE O AGRUPAMENTO SERÁ FEITO, RECEBE DOIS ARGUMENTOS, SENDO O DOCUMENTO ATUAL E O RESULTADO ACUMULADO>, 
  initial: <INICIALIZA OS VALORES A SEREM UTILIZADOS>,
  keyf: <FUNÇÃO PARA CRIAR UMA NOVA CHAVE AGRUPADORA DINAMICAMENTE>,
  cond: <FILTRO QUE LIMITA QUAIS DOCUMENTOS SERÃO AGRUPADOS>,
  finalize: <FUNÇÃO QUE SERÁ EXECUTADA AO FINAL DO GROUP>,
})
```
Note que se o `key` for omitido, a colleção será agrupada como um todo, retornando um único documento como resposta.
As opções `keyf`, `cond` e `finalize` são opcionais, e podem ser omitidas, se você não precisar delas.

O `group` não trabalha com colleções em shardings, então nesse caso, use o aggregation.
