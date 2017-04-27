# Gerenciador de Doações

O sistema servirá para qualquer tipo de doações, utilizando o nosso meio de pagamento.

Para uma ONG ou projeto social poder receber doações ele deverá colocar seu orçamento do mês no sistema, o qual ficará transparente.

> Toda a doação feita poderá ser rastreada pelo seu doador até onde aquele dinheiro foi gasto.

Todo o dinheiro que entrar irá direto para pagar o fornecedor especificado no orçamento, ou seja, **ninguém irá receber o dinheiro** na mão.

O doador precisará ter uma conta no nosso meio de pagamento, pois ele doará de lá, o projeto social que receberá as doações também precisa ter e além disso seus fornecedores também.

Iremos retirar apenas a % que o meio de pagamento recebe, sem precisar adicionar mais uma taxa para a utilização desse sistema, ou quem sabe algo em torno de 3% para dar 5% ao total.

## O Problema



## A Solução

### Doações para ONGs ou Projetos Sociais


### Doações para projetos Open Source

A empresa terá um perfil dela onde falará quais as tecnologias **OPEN SOURCE** que ela usa, a cada doação mensal destinamos 70% para os projetos, onde cada projeto recebe o proporcional pelo seu uso na empresa.

O projeto **OPEN SOURCE** para receber também precisará de uma conta no nosso meio de pagamento, se for gringo precisamos pensar no meio mais fácil para enviar esse dinheiro.

Sempre ouvi que projeto **OPEN SOURCE** não dá dinheiro, realmente não dá dinheiro porque ninguém cobra, mas é por isso que o Wordpress conseguiu a marca de 25% dos sites DA INTERNET usarem ele.

Agora eu te pergunto:

> Você acha correto ganhar uma grana fazendo sistemas com códigos gratuitos e não retornar nada para eles?

**Bom eu não acho!**

Por isso a Webschool.io será a primeira a usar esse sistema para retornar algo para a comunidade.

Claro que não precisamos doar para Angular, React, MySQL e outros que são mantidos por empresas, iremos doar apenas para projetos/módulos que não sejam mantidos por nenhuma empresa. 

### Gameficação

## Requisitos

## Arquitetura

## Entidades

- Projeto
  + Orçamento
  + Equipe
- Doador
  + Pessoa Física
  + Pessoa Jurídica
- Fornecedor
- Doação


### Projeto

A entidade Projeto representa qualquer projeto social que necessite de doações.


## Equipe

- [Carlos Machel](https://github.com/carlosmachel)
- [Ednilson Amaral](https://github.com/ednilsonamaral)
- [Eliel - Hc3](https://github.com/hc3)

## Modelagem


## Planejamento

O planejamento é separado em etapas mensais.

### Etapa 1

Na primeira etapa criaremos a API REST do CRUD das entidades com integração com Pagseguro.

[https://github.com/Webschool-io/Project-Donations](https://github.com/Webschool-io/Project-Donations)


