# GridFS

GridFS é o sistema de arquivos do MongoDb, ele irá armazenar os binários diretamente no banco.

## Por que usar?

Você pode querer guardar algum binário no banco porém o limite de cada documento [BSON](https://docs.mongodb.org/manual/reference/glossary/#term-bson) é de 16 MB, logo se você quiser armazenar algo maior o GridFS é a ferramenta correta pro serviço.

E também **se você não quiser que todo o arquivo vá para a memória RAM**, isso é algo muito importante quando você está trabalhando com uma coleção grande de arquivos.

## Quando usar?

**Tudo bem entendi que é para usar para armazenar arquivos maiores que 16 MB e que não vão para a memória, mas quando vou usar?**

![](./images/meme-greate-question.jpg)

Em algumas situações, o armazenamento de arquivos grandes podem ser mais eficiente no MongoDB do que em um sistema de arquivos.

- Se seu sistema de arquivos limita o número de arquivos em um diretório, você pode usar GridFS para armazenar tquantos arquivos quiser.
- Quando você quiser manter seus arquivos e metadados automaticamente sincronizados. Ao usar réplicas distribuídas geograficamente o MongoDB pode distribuir arquivos e seus metadados automaticamente.
- Quando você quiser acessar informações de partes de arquivos grandes sem ter que carregar todos os arquivos em memória, você pode usar GridFS buscar seções dos arquivos sem ler o arquivo inteiro na memória.

Não use GridFS se você precisa atualizar o conteúdo de todo o arquivo atomicamente. Como alternativa, você pode armazenar várias versões de cada arquivo e especificar a versão atual do arquivo nos metadados. Você pode atualizar o campo de metadados que indica o status de "último" em uma atualização atômica após o upload de uma nova versão do arquivo, e depois remover versões anteriores, se necessário.

Além disso, se seus arquivos são todos menores de 16MB, considere armazenar o arquivo manualmente dentro de um único documento. Você pode usar o tipo de dados `BinData` para armazenar os dados binários. Consulte a documentação de drivers para detalhes sobre como usar [BinData](https://docs.mongodb.org/manual/reference/mongodb-extended-json/#binary). Pois se vc armazenar um arquivo pequeno, só para ele retornar esses 16MB o MongoDb irá retornar 65 documentos pelo menos de 255Kb, logo nada aconselhável né?



## Como usar?

Para utilizar o GridFS, no terminal, usaremos o `mongofiles` passando o atributo `-d nome_database` para o nome da database onde iremos inserir o arquivo e `put nome_do_arquivo` para enviarmos o arquivo selecionado. Além disso pode ser necessário passar `-h 127.0.0.1` para definir nosso host como local.

Vamos fazer isso então na pasta `apostila/module-mongodb/data` onde se encontra o vídeo `Os_Raios_do_Pikachu.mp4` que iremos inserir no GridFS.

```
mongofiles -d be-mean-files put Os_Raios_do_Pikachu.mp4 -h 127.0.0.1
2015-11-19T15:44:38.964-0200    connected to: 127.0.0.1
added file: Os_Raios_do_Pikachu.mp4
```

O GridFS irá automaticamente irá gerar 2 coleções dentro do database informado:

- fs.chunks
- fs.files

Na coleção `fs.chunks` fica nosso arquivo binário divido em pequenas partes, chamadas de `chunks`, cada *chunk* é um documento contendo 255Kb de dados seguindo essa estrutura:

```js
{
  "_id" : <ObjectId>,
  "files_id" : <ObjectId>,
  "n" : <num>,
  "data" : <binary>
}
```

Na coleção `fs.files` temos os metadados do arquivo armazenado, como:

```js
{
  "_id" : <ObjectId>,
  "length" : <num>,
  "chunkSize" : <num>,
  "uploadDate" : <timestamp>,
  "md5" : <hash>,
  "filename" : <string>,
}
```

Caso você queira inserir seus arquivo com mais metadados terá que usar algum driver do MongoDB na sua programação que suporte o GridFS.

Você deve ter notado que temos o campo `md5`, para que o `md5` do arquivo pode ser interessante nesse caso?

Bom, você pode fazer uma busca pelo `md5` e caso encontre mais de 1 registro, é porque existem arquivos duplicados, ai você decide o que fazer com ele, como por exemplo removê-los.

**[ DICA ] Se for usar o GridFS, utilize-o em um servidor próprio para configurá-lo da melhor forma possível.**