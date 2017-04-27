# Como contribuir?
Embora pareça ser algo impossível e que somente os ***"fodões"*** podem fazer, você pode perceber que há coisas simples que podem ser feitas como correções de links que apontam para um url inválida, erros de digitação, caminhos de imagens, coorcordância e demais regras gramaticais.

Sabe quando você encontra algum conteúdo que não está legal? Então! Ao invés de reclamar faça melhor, contribua. Vai que a sua contribuição é aceita?

## Por onde começar?
1. Acesse a url do projeto: [https://github.com/Webschool-io/be-mean-instagram](https://github.com/Webschool-io/be-mean-instagram)
2. Fork o projeto
3. Clone o projeto `be-mean-instagram` do seu github   
```
git clone https://github.com/seunomedeusuario/be-mean-instagram.git
```   
> Obs: Substitua `seunomedeusuario` pelo seu usuário do GitHub   

 Exemplo utilizando o meu github.   
```
git clone https://github.com/adrianoavelino/be-mean-instagram.git
```

4. Faça referência ao repositório oficial
```
git remote add upstream https://github.com/Webschool-io/be-mean-instagram/
```   
Como já sabemos, o seu fork não é atualizado automaticamente com o repositório oficial, para resolver esse problema criamos um novo repositório com o comando `git remote add upstream https://github.com/Webschool-io/be-mean-instagram/`, que será utilizado para sincronizar, no passso 5, o conteúdo da Webschool-io (upstream) com o seu fork (origin), que está localmente.

5. Sincronize o seu fork com o repositório oficial
```
git fetch upstream
git rebase upstream/master
```
Na primeira linha atualizamos o nosso repositório `upstream`, criado no passo 4, com o repositório oficial, Webschool-io.
<p><p>
Na terceira linha atualizamos o nosso branch master do repositório `origin` com as atualizações do `upstream`.

> Lembrando que todas as alterações realizadas no repositório oficial somente serão sincronizadas com os comandos acima.   

## Fluxo da contribuição
O fluxo da contribuição funciona da seguinte maneira: com o seu repositório sincronizado com o oficial crie uma nova `branch`, realize as alterações, adicione o arquivo e commit, sincronize as alterações do seu branch com o master, envie as alterações para o seu fork no GitHub e envie um `new pull request` para o repositório oficial do projeto. Não entendeu nada do que foi dito aqui? Calma, calma! Mostrarei o passo a passo aqui abaixo:

### 1º passo - crie uma nova branch
```
git checkout -b nomedobranch
```   
Exemplo:
```
git checkout -b corrigindo-link
```
> Esse passo não é obrigatório, mas é uma boa prática sempre criar um branch para cada alteração

### 2º passo - realize as alterações, adicione o arquivo e commit
Com as alterações realizadas, siga os seguintes passos:
```
git add --all
git commit -am ‘corrige o caminho do link’
```
### 3º passo - sincronize as alterações do seu branch com o master
```
git checkout master
git merge upstream/master master
git branch -D nomedobranch
```
Exemplo:
```
git checkout master
git merge corrigindo-link master
git branch -D corrigindo-link
```

### 4º passo - envie as alterações para o seu fork
```
git fetch upstream
git rebase upstream/master
git push origin master

```

### 5º passo - Envie um new pull request
Confira no seu fork do GitHub se as alterações ficaram corretas, então envie um `new pull request` com uma mensagem bem descritiva e aguarde para que seja aceita a sua contribuição.

### Quando iniciar uma nova contribuição inicie pelo 1º passo.
