## Aggregation

No MongoDb podemos utilizar o [Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-pipeline/) para conseguirmos agrupar valores para alguma finalidade, por exemplo fazer uma query que retorne a média salarial dos seus funcionários.

Um agrupamento pode ser:
* Soma `$sum`
* Média `$avg`
* 
Vamos dar uma olhada na sintaxe geral do método **aggregate**:

### pipeline
```
db.collection.aggregate(pipeline, options)
```
Sendo estas abaixo todas as [instruções do pipeline](https://docs.mongodb.org/manual/reference/operator/aggregation-pipeline/):

```
[
 { $project: <RETORNA UM DOCUMENTO ADICIONANDO OU REMOVENDO CAMPOS PARA A STREAM DO PIPELINE> },
 { $match: <CONDIÇÃO DE FILTRO> },
 { $redact: <RETORNA O DOCUMENTO PARA A STREAM DO PIPELINE> },
 { $limit: <LIMITA A QUANTIDADE DE DOCUMENTOS A SEREM CONSIDERADOS> },
 { $skip: <PULA OS PRIMEIROS n DOCUMENTOS> },
 { $unwind <DESCONTROI UM ARRAY EM UM DOCUMENTO> },
 { $group: { _id: <KEY AGRUPADORA>, <OUTROS CAMPOS A SEREM AGRUPADOS> },
 { $sample: <AMOSTRA ALEATÓRIA> },
 { $sort: <ORDENAÇÃO A SER CONSIDERADA> },
 { $geoNear: <BUSCA UTILIZANDO LATITUDE E LONGITUDE> },
 { $lookup: <REALIZA UM 'left outer join' COM OUTRA COLEÇÃO DO MESMO BANCO DE DADOS> },
 { $out: <ESCREVE O RESULTADO EM UMA COLLECTION> },
 { $indexStats: <INDICA SE ALGUM ÍNDICE FOI UTILIZADO> }
]
```
Como o próprio nome `pipeline` indica, a **order** das declarações importa e modifica o resultado do aggregate. Então, se você quer por exemplo, ordenar o retorno, deixe o parâmetro `sort` por último, e não antes do `group`, entendeu?

Não vamos utilizar todas as opções disponíveis de uma só vez, e podemos fazer qualquer combinação delas, enquanto estamos construindo a nossa agregação, para atingirmos o resultado esperado.
 
### options
E os options (argumento opcional que não precisa ser enviado):
```
{ 
  explain: boolean,
  allowDiskUse: boolean,
  cursor: boolean,
  bypassDocumentValidation: boolean,
  readConcern: boolean
}
```
