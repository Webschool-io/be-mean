# JWT - JSON Web Token

Antes de começar a falar de *tokens* precisamos entender melhor os sistemas de autenticação tradicionais primeiro, **basicamente** é isso:

1. Quando o usuário for fazer login irá preencher seu email e senha.
2. Chagando no backend seus dados são validados consultando sua existência no banco de dados.
3. Caso encontre esse usuário o sistema cria uma sessão e retorna o ID dessa sessão no cabeçalho de resposta para ser usado no Frontend.

![](./images/traditional-authentication-system-png.png)


O JWT é uma tecnologia frequentemente usada para **transmissão de dados** e **autenticação**.

A definição do mesmo trás duas palavras chaves que estão destacadas, vamos dá uma lida juntos:

O JWT é um padrão aberto [RFC](https://tools.ietf.org/html/rfc7519) que define uma forma segura, *autocontida* e *compacta* de envio de dados entre partes, esta informação pode ser verificada e confiável pois é assinada digitalmente. O JWT pode ser assinado usando um algoritmo (HMAC) ou uma chave pública/privada usando **RSA**.

![Screenshot](http://memesvault.com/wp-content/uploads/What-Meme-09.jpg)

Bom... após uma breve risada dessa imagem, vamos para as definições:  
***compacta***: Por ser extremamente leve o JWT é perfeito para API então, obviamente a sua transmissão na rede é bem rápida, o que também significa dizer que para dispositivos que demandam uma banda limitada de rede, o consumo de dados para autenticar um cliente é sumariamente reduzido em relação ao outra abordagem.

***autocontida***: O definicão trás um termo chamado **payload** que contém os dados do usuário, por exemplo:
```json
{
  "name":"Jean Mestre da Treta Nascimento",
  "nick":"suissa",
  "admin":true
}
```

Outro termo usado no payload são as *claims* (ou reenvidicações) que são usadas para autorizar o envio de mensagem atráves do token, as *claims* são os dados do usuário, por isso o termo usado no payload é autocontido, porque contém por si só os dados que precisam ser usados.

A estrutura de jwt web token é semelhante a essa:

```
xxxxx.yyyyy.zzzzz
```
Essa estrutura é basicamente separada por ponts "." (como uma chamada de objeto, por que não? rsrsrs) e cada ponto indica uma coisa, mostrada aqui abaixo, olha só:
```sh

    cabeçalho-->xxxxx;
    payload-->yyyyy;
    signature-->zzzzz;
```

E assinatura? o que ela significa pra gente?

A assinatura é um agoritmo baseado no *secret* que é definido seguramente no *Backend* da sua aplicação e criptografado randomicamente em base-64, com surpa-citado, você pode usar outra forma de criptografar essa assinatura, como HMAC-SHA256, inclusive. A grande importância da assinatura é que ela permite que o token seja imodificável durante sua transmissão pela rede, legal né?
![hue](http://cdn.meme.am/instances/37690835.jpg)  

```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```  
*Esse trecho mostra como fazer uma assinatura baseado na secret e no forma sha-256*


### Colocando tudo junto  
Bem, senhores essa imagem representa um token como exemplo:

![token-image](https://cdn.auth0.com/content/jwt/encoded-jwt3.png)

Aqui nós temos a clara separação entre cabeçalho, payload, sigature.

No diretório ``` Systems/angular-token-auth ``` da nossa estrutura aqui do github, já tem o exemplo usado em vídeo de como por na sua aplicação, nesse diretório foi usado o node e alguns módulos do express, não deixe ver a aula :)

![thats-all-folks](http://vignette2.wikia.nocookie.net/looneytunes/images/e/e1/All.jpg/revision/latest?cb=20150313020828)
