# Sistema de Vagas de Trabalho

Um sistema que será usado apenas pelos alunos certificados da Webschool.io, onde a empresa irá selecionar os requisitos da vaga e o sistema entregará os perfis dos alunos mais compatíveis.

## O Problema

As vagas criadas por pessoas que não são dessa área técnica volta e meia criam aquela vaga **ridícula** pedindo tudo que é possível para um estagiário.

O problema está na falta de conhecimento técnico do RH.

## A Solução

Para resolvermos esse problema faremos um sistema onde a vaga criada poderá apenas selecionar quais são os requisitos da vaga, esses que só apareceriam se forem daquela área específica e de preferência que tenha sido ensinada em algum curso da Webschool.

O sistema não iria mostrar quais são as vagas em aberto, em vez disso, o sistema irá procurar um número x de profissionais que possuam o máximo possível dos requisitos pedidos na vaga.

Nesse caso entregaremos para a empresa, por exemplo, 5 perfis de alunos que mais possuem os requisitos.

A ideia principal é que esse sistema agilize a entrevista técnica e só entregue os perfis dos profissionais que realmente sabem cada competência listada no seu perfil.

Além dos projetos open source que você contribui.

O sistema inicialmente deverá criar um perfil para todos os alunos certificados, pois será por esse perfil que o sistema indicará os profissionais para a vaga.

### A Vaga

Ele será montada a partir das escolhas do RH:

1. Escolhe o tipo da vaga:
  - frontend
  - backend
  - banco
  - mobile
  - desktop
2. Escolhe o nível:
  - júnior
  - pleno
  - sênior
3. Escolhe os requisitos obrigatórios
4. Escolhe os requisitos opcionais

Após finalizada a vaga o sistema irá entregar no máximo 5 perfis que mais se encaixam no perfil, levando em conta a pontuação do desenvolvedor dentro do sistema de EAD da Webschool.

### A Empresa

A empresa poderá ver o perfil do aluno e para cada requisito que o aluno possui, a empresa poderá clickar no requisito o qual a levará para o exercício feito pelo aluno sobre esse requisito.

Para essa empresa poder entrar nesse sistema ela deverá fazer parte do sistema de doação, doando no mínimo R$200 (valor a ser definido) por mês, dos quais 30% serão destinados para projetos **OPEN SOURCE** que essa empresa utiliza.

Como só queremos empresas que se importem com o **OPEN SOURCE**, esse sistema não será aberto para qualquer empresa!

### O Aluno

O aluno terá um perfil dele com todos os requisitos e ações que ele já fez dentro da Webschool.io, e logicamente iremos entregar os perfis dos alunos que possuem mais pontos na gameficação.

Essa gameficação irá contar:

- exercícios;
- artigos;
- aulas;
- blog;
- palestras;
- projetos finais;
- projetos open source;
- entre outros.

### A Entrevista

A entrevista, ou uma pré-entrevista, poderá ser feita via sistema utilizando WebRTC.

## Requisitos


## Arquitetura

- Banco de grafos

## Equipe
-Paulo Roberto da Silva (paulosilva92)
