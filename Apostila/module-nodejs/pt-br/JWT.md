# JWT - JSON Web Token

Antes de começar a falar de *tokens* precisamos entender melhor os sistemas de autenticação tradicionais primeiro, **basicamente** é isso:

1. Quando o usuário for fazer login irá preencher seu email e senha.
2. Chagando no backend seus dados são validados consultando sua existência no banco de dados.
3. Caso encontre esse usuário o sistema cria uma sessão e retorna o ID dessa sessão no cabeçalho de resposta para ser usado no Frontend.
4. Esse ID deve ser enviado, de preferência, em todas as requisições no seu cabeçalho para que o Backend possa validar se o usuário tem acesso àquela área que está requisitando.

![](./../src/images/traditional-authentication-system-png.png)
