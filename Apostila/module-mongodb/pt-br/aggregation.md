## Aggregation

No MongoDb podemos utilizar o [Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-pipeline/) para agruparmos valores para alguma finalidade, por exemplo fazer uma query que retorne a média salarial dos seus funcionários.

Um agrupamento pode ser feito com um [operador aritimético](https://docs.mongodb.org/manual/reference/operator/aggregation-arithmetic/):
* Valor absoluto `$abs`
* Adição `$add`
* Arredondamento "para baixo" `$ceil`
* Arredondamento "para cima" `$floor`
* Truncar para inteiro `$trunc` sem arredondar
* dentre outros

Com um [acumulador](https://docs.mongodb.org/manual/reference/operator/aggregation-group/):
* Soma `$sum`
* Média `$avg`
* Mínimo `$min`
* Máximo `$max`
* Desvio padrão `$stdDevPop`
* dentre outros

Com [strings](https://docs.mongodb.org/manual/reference/operator/aggregation-string/)
* Concatenação `$concat`
* Retornar parte de uma string `$substr`
* Converter para minúsculas `$toLower`
* Converter para maiúsculas `$toUpper`
* Comparar `$strcasecmp`

Com [arrays](https://docs.mongodb.org/manual/reference/operator/aggregation-array/):
* Junta arrays e retorna um novo com todos os elementos `$concatArrays`
* Retornar o número de elementos de um array `$size`
* Reparte um array, retirando um pedaço dele `$slice`
* dentre outros

Com [datas](https://docs.mongodb.org/manual/reference/operator/aggregation-date/):
* Dia do ano de uma data (de 1 a 366) `$dayOfYear`
* Número de milisegundos (de 0 a 999) `$millisecond`
* dentre outros

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


Basicamente, agregações mais simples podem ser feitas utilizando o método `.group()`, com uma sintaxe bem diferente, e um pouco mais manualmente, já que no group, recorremos a estratégia de map/reduce, em vez de termos operadores prontos que fazem o trabalho de média por exemplo para nós.
