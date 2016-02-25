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

O Admin é o único com superoderes.

### Aluno

### Professor

## Arquitetura

### Banco

O modelo será feito no MongoDb, porém posteriormente será adicionado bancos de cache e grafos.

### Backend

Arquitetura modular atômica utilizando Eventos.

### Frontend

## Equipe
- [Michel Ferreira Souza](https://github.com/souzacristsf)

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

### Workflow

1. O professor cria a ementa e o repositório do seu curso.
2. Submete o curso no sistema.
3. Sistema envia para votação dos professores.
4. Sendo aceito ele inicia a criação de sua apostila.
5. Após a criação do: 
	- conteúdo escrito da aula
	- dos slides
	- do vídeo gravado
	- dos exercícios
	- dos testes dos exercícios
6. Submete para o sistema a aula
	6.1 O sistema precisa validar todos os dados
7. Após a aula aceita, uma notificação é enviada a todos os alunos daquele curso.
8. Quando o aluno assiste a aula 
	8.1 O sistema deve armazenar:
		- horário de inicio
		- quantidade de pausas no vídeo (se possível)
		- horário de finalização
		- quais slides acompanhados
	8.2 O aluno pode enviar uma pergunta diretamente
		8.2.1 Podendo ser quando dá um pause no vídeo
		8.2.2 A pergunta irá para um fórum onde todos alunos acessam
			8.2.2.1 Pode ir também diretamente para o Slack / Telegram / Facebook
	8.3 O aluno pode fazer anotações em cima do conteúdo escrito (like Medium)
	8.4 Só libera a próxima aula após o envio/validação dos exercícios
9. O projeto final além de submetido também deverá estar ONLINE
	9.1 Para o MongoDb o aluno pode usar o MongoLab
	9.2 Para o Node.js pesquisar
10. Após a finalização / validação do projeto final o sistema emite o Certificado.

**Como na primeira etapa teremos apenas a API os exercícios e testes devem ser enviados via link do Githib ou Gist.**

#### O Curso

Um curso pode ser criado diretamente pelo sistema onde o professor deverá enviar o link do repositório do mesmo o qual contenha no seu `README.md` a seguinte estrutura:

```markdown

# Nome do Curso

Descrição do curso.

## Ementa

- Módulo 1
	- Tópico 1
	- Tópico 2
	- Tópico 3
- Módulo 2
	- Tópico 1
	- Tópico 2

``` 

O sistema deverá pegar esses dados, armazenar e mostrar em uma lista para avaliação dos diretores de conteúdo (que serão os professores da Webschool.io) que votarão se esse curso deve ser aceito ou não e caso a resposta do profesor seja negativa o mesmo deverá comentar o porquê acha que não.

**Só assim um curso será aceito na Webschool.io ou via convite.**

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
- O aluno pode criar ou entrar em grupos de estudo (etapa 2)
