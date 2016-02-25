# UniversalMessenger


## O Problema

Hoje em dia no curso do Be MEAN nós temos os seguintes canais para interação e dúvidas:

- [Telegram]()
- [Slack]()
- [Facebook]()

Mas imagine se tivéssemos que nos comunicar também via:

- Email
- SMS

Além de ser obrigatório a instalação de todos os apps em questão eles não posuem integração.

**Como eu poderia gerenciar todos meus alunos em diferentes redes de contato?**

## A Solução

Imagine um sistema em que o aluno se logue uma única vez e cadastre suas redes de contato, para que eu possa criar um grupo do Be MEAN, envio o link para cada aluno para que eles entrem no grupo.

A partir daquele momento eu posso receber e enviar mensagens independente da rede de contato enviada.

O sistema deverá ter uma integração com email, sms e as redes de sociais para que se o usuário mande a mensagem pelo app original, o nosso sistema busque essa mensagem e centralize no nosso sistema.

Onde o usuário possa configurar qual a ordem de envio da mensagem em suas redes, por exemplo:

1. Telegram
2. Slack
3. Facebook
4. Email
5. SMS

Para que o sistema envie a mesma mensagem, apenas 1x por dia, na rede especificada, até que o destinatário responda.

Criação de filtros e grupos.

### Grupos

A funcionlidade de grupo será diferente da costumeira, pois o criador do grupo deverá selecionar quais são os integrantes, independente das redes sociais, e o mesmo NUNCA pode perder seu cargo de administrador, podendo criar cargos com responsabilidades diferentes, os quais o mesmo pode definir criando os cargos/papéis.

### Hashtags

As famosas hashtags `#` serivirão como etiqueta(label) da mensagem enviada para que o sistema possa gerar listas de assuntos separados pelas hashtags, podendo servir também para a geração de uma [FAQ]() automático, por exemplo:

```
// envia
#faq Como instala o Node.js no Fedora?

// responde
#faq-response http://nomadev.com.br/como-instalar-o-node-js-no-fedora/

```

O sistema irá linkar a pergunta na resposta pois o usuário que responder deverá clickar/dedar a perguntar e selecionar respoder, o próprio sistema entenderá que é uma pergunta `#faq` e já adicionará no início da mensagem (sem poder alterar) a hashtag `#faq-response`.


## Requisitos

## Arquitetura

## Equipe