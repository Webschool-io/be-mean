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
- criação da API REST com autenticação;
- criação da tradução para Inglês;
- exercícios com testes integrados ao Github;
- A aula 
  - busca o vídeo do Youtube
  - mostra slides do Google Slides
  - linka conteúdo da apostila
  - aba com exercícios

#### A Aula

Quando o aluno entrar em alguma aula essa *view* deve mostrar:

- O vídeo do Youtube;
- Os slides do Google Slides;
- O conteúdo escrito do Github;
- Os exercícios (em outra aba);

#### O Professor

Esse deve cadastrar os links de:

- O vídeo do Youtube;
- Os slides do Google Slides;
- O conteúdo escrito do Github;

E para cada aula ele deve subir o código de **teste** para validar os exercícios, para um exercício ser aceito o professor **necessita enviar tanto o teste como o código para validar o exercício**, para que o sistema valide e aceite o mesmo. 

#### Gameficação

### Etapa 2

- adição do Frontend.