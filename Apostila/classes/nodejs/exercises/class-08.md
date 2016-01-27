# Node.js - Aula 08 - Exercício

1. Insira 5 pokemons novos, na coleção `pokemons`, escolha 3 e os adicione em um array e uma nova coleção chamada `meus-pokemons`, utilizando o `ObjectId`. Adicione o `required` em campos que ache obrigatório no *Schema* do `Pokemon`.
2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um *Schema* separado):
    - email
    - cpf
    - cnpj
    - url
    - ip
3. Dê 3 exemplos **diferentes**, de cada, utilizando as funções:
    - findAndModify
    - findOneAndUpdate
    - findOneAndRemove
4. Crie 1 *Schema* com todo CRUD funcional e métodos especiais, que agrupe:
    - virtuals
    - getters & setters
    - method & static
    - embedded document
    - plugins
    - middlewares
5. Crie 1 *Schema* para `password` com criptografia e arquitetura atômica.
    - use SHA256 com SALT como criptografia;
    - use *middleware* com `pre save`;
    - use *methods*.

## Estrutura

```md
# Node.js - Aula 08 - Exercício 

**user:** [SEU Github User](Link para seu Github)

**autor:** SEU NOME COMPLETO

// COLOCAR AQUI TODOS OS EXERCÍCIOS DE TODAS AS PARTES
```


## Envio

[Veja na nossa Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-nodejs
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-X-resolved-githubuser-Nome-Completo-Com-Hifens-Nos-Espaços.md`
3. Dê um `fork` no repositório oficial [https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises)
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Execute um `git add NOME_DO_SEU_ARQUIVO.md` depois o `git commit -m 'SEU NOME - Node.js - Exercicio X resolvido'`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Na mensagem do commit/pull request favor seguir o padrão: Nome Completo - Node.js - Exercicio X resolvido
7. Levante as mão para o céu e agradeça se acaso tiver ... #brinks
