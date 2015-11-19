# GridFS
GridFS é o sistema de arquivos do MongoDb, ele irá armazenar os binários diretamente no banco.

Por que usar?

Você pode querer guardar algum binário no banco porém o limite de cada documento [BSON](https://docs.mongodb.org/manual/reference/glossary/#term-bson) é de 16 Mb, logo se você quiser armazenar algo maior o GridFS é a ferramenta correta pro serviço.

Quando usar?

**Tudo bem entendi que é para usar para armazenar arquivos maiores que 16 Mb, mas quando vou usar?**

![](./images/meme-greate-question.jpg)

Para utilizar o GridFS usaremos o mongofiles:

```
mongofiles -d database put my_music.mp3

mongofiles -d myfiles put my_music.mp3
connected to: 127.0.0.1

added file: {
  _id: ObjectId('4ce9ddcb45d74ecaa7f5a029'),
  filename: "my_music.mp3",
  chunkSize: 262144,
  uploadDate: new Date(1290395084166),
  md5: "7872291d4e67ae8b8bf7aea489ab52c1",
  length: 1419631 }

```

Ele automaticamente irá gerar 2 coleções dentro do database informado:

- fs.chunks
- fs.files

Na coleção fs.chunks fica nosso arquivo binário divido em pequenas partes, chamadas de chunks, e na coleção fs.files temos os metadados do arquivo armazenado, como:


- _id
- filename
- chunkSize
- uploadDate
- md5
- lenght

Você deve ter notado que temos o campo md5, para que o md5 do arquivo pode ser interessante nesse caso?

Bom, você pode fazer uma busca pelo md5 e caso encontre mais de 1 registro, é porque existem arquivos duplicados, ai você decide o que fazer com ele.
