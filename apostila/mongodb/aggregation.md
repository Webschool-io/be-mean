## Aggregation

Como o MongoDb não possui JOINS utilizamos uma ferramenta diferente para conseguirmos agregar valores para alguma finalidade, por exemplo fazer uma query que retorne a média salarial dos seus funcionários.

Em um banco relacional você usaria operações como:

- JOIN
- AVG
- SUM

No MongoDB usaremos o [Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-pipeline/), ele utiliza-se de operações de agregação que processam registros e retorna um resultado computado.
