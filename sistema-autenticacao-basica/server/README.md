# Sistema de auth básica
O sistema gera token com criptografia em base64 o que aumenta a segurança do mesmo. O base64 é nada mais que a codificação do buffer.
Ele é gerado após o usuário se autentica e armazena localmente no localStorage (tecnologia usada nos broswers mais novos). O angular faz isso usando **ngstorage**.  
Para fazer uso do sistema você vai ter que rodar os comandos:   

    npm install && bower install.  
O que é bem legal por que o sistema já está configurado para uso.
Para executar os testes de unidade, basta executar no terminal o comando:

    grunt test


O que foi criado nesse projeto:

1. Um controle responsável login gerando uma session de 7 dias   
2. Um service de intercepção que valida o login com token, ele decodifica e valida o usuários ao acessar as rotas de estudante. Seu arquivo se chama interceptor.js.
3. Criei um controler de estudantes
4. Criei o front end com angular e bootstrap
5. Não usei view-engine, deixei o angular responsável pelas views.  
6. Criei models de students e users e suas respectivas rotas.
7. As views estão organizadas no diretório public.

Para roda o projeto, basta executar o seguinte comando:  

    grunt serve

**ps: você tem que estar no diretório server do sistema-autenticação-básica para rodar estes comandos listados, caso contrário eles irão te retornar um erro.**
