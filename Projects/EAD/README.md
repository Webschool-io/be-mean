# EAD

Sistema de EAD a ser utilizado ela Webschool.io

Basear-se no Khan Academy.

## O Problema

Um EAD para programadores onde seja completamente integrado com o Github.

## A Solução

Um sistema gameficado que integre com o Github onde o aluno possa escrever a resposta de algum exercício e o proprio sistema testar a solução e aceitar ou não o exercício enviando-o para o repositório correto, onde o professor envie seu exercício e também o teste para o mesmo.

## Requisitos

- Integração com Github
- TDD
- Envio de Emails
- Autenticação com Github
- Gameficação

### Admin

### Aluno

### Professor

## Arquitetura

### Banco

O modelo será feito no MongoDb, porém posteriormente será adicionado bancos de cache e grafos.

### Backend

Arquitetura modular atômica utilizando Eventos.

### Frontend

## Equipe

## Planejamento

### Etapa 1

- criação da arquitetura de Banco e Backend;
- criação dos *Models* do MongoDB;
- criação da API REST com autenticação

### Etapa 2

- adição do Frontend.