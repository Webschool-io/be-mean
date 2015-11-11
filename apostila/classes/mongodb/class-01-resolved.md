## MongoDb - Aula 01 - Exercício

Como ainda não temos muitos dados para usarmos o `mongoexport` iremos trabalhar apenas com o `mongoimport` nesse momento. Para fazermos isso primeiramente baixe [esse JSON](https://raw.githubusercontent.com/Webschool-io/be-mean-instagram/master/apostila/mongodb/data/restaurantes.json).

Após importar ele para uma coleção chamada `restaurantes`, no banco `be-mean`, copie o que foi escrito no seu terminal, por exemplo:

```
 mongoimport [AQUI VEM O COMANDO]
2015-10-29T23:34:49.494-0200    connected to: 127.0.0.1:27017
2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
2015-10-29T23:34:52.487-0200    [##########..............] be-mean.restaurantes   5.2 MB/11.3 MB (45.5%)
2015-10-29T23:34:54.732-0200    imported X documents

```

Quero ver se com isso você conseguiu importar todos os documentos com sucesso, depois entre no console do `mongo` e execute a seguinte query, após selecionar o banco `be-mean`:

```
db.restaurantes.find({}).count()
```

Com isso você deverá criar um documento com a extensão `.md` chamado:

```
mongodb-aula-01-exercicio.md
```

Esse documento deverá conter a seguinte estrutura:

```md
# MongoDB - Aula 01 - Exercício
autor: SEU NOME

## Importando os restaurantes

    ```
     mongoimport [AQUI VEM O COMANDO]
    2015-10-29T23:34:49.494-0200    connected to: 127.0.0.1:27017
    2015-10-29T23:34:49.495-0200    dropping: be-mean.restaurantes
    2015-10-29T23:34:52.487-0200    [##########..............] be-mean.restaurantes   5.2 MB/11.3 MB (45.5%)
    2015-10-29T23:34:54.732-0200    imported X documents

    ```

## Contando os restaurantes

    ```
    suissacorp(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
    X

    ```

```

Crie um repositório chamado `be-mean-instagram-mongodb` e dentro um arquivo `.md` nomeado dessa forma:

```
class-01-resolved-githuser-nome.md
// exemplo
class-01-resolved-suissa-jean-nascimento.md
```

E dar um **Pull Request** nesse repositório enviando seu arquivo resolvido para esse repositório, não esquecendo que o mesmo deve existir **no seu** repositório.

**NÃO ESQUEÇA DE NOMEAR A PORRA DO ARQUIVO DO JEITO CERTO!!!!**
<<<<<<< HEAD

```
class-01-resolved-suissa-jean-nascimento.md
```

E depois apenas COLOQUE esse arquivo na pasta `EXERCISES`, onde estão os arquivos `class-*.md`!

**NÃO ESQUEÇA DE MANDAR NA PASTA EXERCISES O SEU ARQUIVO COM SEU NOME!!!!**

## Como enviar seu exercício passo-a-passo

Quando você for enviar algum exrcício de qualquer módulo por favor siga os seguintes passos:

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-mongodb
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-x-resolved-githubuser-nome.md`
3. Dê um `fork` no repositório oficial https://github.com/Webschool-io/be-mean-instagram/
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Levante as mão para o céu e agradeça se acaso tiver ... #brinks

<<<<<<< HEAD
- [Jean Nascimento - Suissa](https://github.com/suissa/be-mean-instagram-mongodb/class-01-resolved.md)
- [Jorge Rafael - Kurybr](https://github.com/kurybr/be-mean-modulo-mongodb/blob/master/exercises/mongodb-aula-01-exercicio.md)
- [Victor Gomes - VictorGbaby](https://github.com/VictorGBaby/be-mean-modulo-mongodb/blob/master/mongodb-aula-01-exercicio.md)
=======
>>>>>>> Webschool-io/master
=======

```
class-01-resolved-suissa-jean-nascimento.md
```

E depois apenas COLOQUE esse arquivo na pasta `EXERCISES`, onde estão os arquivos `class-*.md`!

**NÃO ESQUEÇA DE MANDAR NA PASTA EXERCISES O SEU ARQUIVO COM SEU NOME!!!!**

## Como enviar seu exercício passo-a-passo

Quando você for enviar algum exrcício de qualquer módulo por favor siga os seguintes passos:

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-mongodb
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-x-resolved-githubuser-nome.md`
3. Dê um `fork` no repositório oficial https://github.com/Webschool-io/be-mean-instagram/
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Levante as mão para o céu e agradeça se acaso tiver ... #brinks

>>>>>>> Webschool-io/master
