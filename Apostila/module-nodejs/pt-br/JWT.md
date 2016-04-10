# JWT - JSON Web Token

Antes de começar a falar de *tokens* precisamos entender melhor os sistemas de autenticação tradicionais primeiro, **basicamente** é isso:

1. Quando o usuário for fazer login irá preencher seu email e senha.
2. Chagando no backend seus dados são validados consultando sua existência no banco de dados.
3. Caso encontre esse usuário o sistema cria uma sessão e retorna o ID dessa sessão no cabeçalho de resposta para ser usado no Frontend.