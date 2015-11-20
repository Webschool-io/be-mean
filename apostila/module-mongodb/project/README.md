# Projeto Final

No projeto final desse módulo você terá que achar qual a melhor forma de modelagem a partir de uma já previamente feita.

A ideia surgiu de um post do [Jorge Rafael](https://www.facebook.com/kurybr?fref=nf) no grupo do Facebook com a seguinte modelagem relacional.

![](./modeling/relational.jpg)

Logo após o [Herbert Pimentel](https://www.facebook.com/herbertpferreira?fref=ufi) postou a seguinte modelagem que irá servir de base para nosso projeto final.

![](./modeling/mongodb-start.jpg)

Perceba que falta a coleção de `user` que será **seu trabalho criar uma** a partir dos dados da modelagem relacional.

Além de criar a coleção `user` e achar uma modelagem melhor da proposta, **terá que explicar o porquê daquela escolha** e terá que executar as seguintes ações em suas coleções:

## Create - cadastro

1. Cadastre 10 usuários diferentes.
2. Cadastre 5 projetos diferentes, 
    - cada um com 5 membros, sempre diferentes dentro dos projetos
    - cada um com pelo menos 3 tags diferentes
        - escolha 1 tag onde deva ficar em 2 projetos
        - escolha 1 tag onde deva ficar em 3 projetos
    - cada um com pelo menos 2 atividades

## Retrieve - busca

1. Liste as informações dos membros de 1 projeto específico que deve ser buscado pelo seu nome de forma a não ligar para maiúsculas e minúsculas.
2. Liste todos os projetos com a tag que você escolheu para os 3 projetos em comum.
3. Liste apenas os nomes de todas as atividades para todos os projetos


## Update - alteração

## Delete - remoção


## Estrutura

```markdown
# MongoDb - Projeto Final
**Autor:** Nome Completo
**Data** Data da entrega

## Para qual sistema você usaria o MogoDB (diferente desse)?

## Qual a modelagem da sua coleção de `users`?

## Qual a modelagem da sua coleção de `projects`?

## Create - cadastro

## Retrieve - busca

## Update - alteração

## Delete - remoção

```
