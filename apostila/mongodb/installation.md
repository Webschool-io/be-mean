## Instalação

Instalar o MongoDb é mais fácil que mijar deitado. LOL

![Mijando deitado](https://cldup.com/N1L5PkCDOq-3000x3000.jpeg)

Primeiramente entre na página de download [https://www.mongodb.org/downloads#production](https://www.mongodb.org/downloads#production) e escolha lá embaixo o seu Sistema Operacional correto.

Depois basta descompactar e rodar.

### Linux

Quem usa Linux do tipo Ubuntu da vida pode instalar via `apt-get` seguindo esses passos, primeiro garantir a autenticidade e consistencia dos pacotes do MongoDb:

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```

Depois precisa criar uma lista de arquivos para o MongoDB, no Ubuntu 12:

```
echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Ou no Ubuntu 14:

```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Caso você use RedHat ou CentOS siga esses passos: [http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/)

### Mac

Quem usa Mac pode instalar via [brew](http://brew.sh/) e para instalar o brew é bem fácil basta executar esse comando no seu terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```



### Windows

Por incrível que pareça é bem simples no Windows, um aluno meu escreveu esse rtigo que pode lhe ajudar [https://pablojuancruz.wordpress.com/2014/09/03/configurando-ambiente-mongodb-no-windows/](https://pablojuancruz.wordpress.com/2014/09/03/configurando-ambiente-mongodb-no-windows/).

## MongoDB Servidor

Caso você não tenha instalado ele com `apt-get` ou `brew` da vida você terá que executar ele diretamente da pasta onde ele foi descompactado, por isso de preferência descompacte em uma pasta chamada `mongodb` na sua raíz, sendo ela `/` ou `C:\`.

Caso você esteja usando Windows por favor use o `PowerShell`, vai no Executar e escreve `PowerShell`, ele roda comandos de **Linux** no Windows e é melhor que aquele lixo do `Console`.

Depois que entrar na pasta basta executar o binário `mongod` que é nosso **servidor**:

```
./mongod
```

Ou no `PowerShell`:

```
.\mongod
```

Caso ele de um erro falando sobre o `dbpath` é **muito siples** de resolver, basta criarmos uma pasta na sua raíz, C:\, com o nome `data` e dentro dela `db`, se usar Linux/Mac não esqueça de dar as permissões corretas, caso queira liberar geral basta um:

```
sudo chmod 777 -R /data
```

*ps: **por favor nunca faça isso em produção**!*

Acredito que depois ele não dará mais problema.

## MongoDB Cliente

Depois de utilizarmos o MongoDB precisamos rodar seu cliente para que possamos integragir com ele via linha de comando, para isso basta executar o comando `mongo` no seu terminal:

```
mongo
```

Executando dessa forma ele irá se conectar em uma *database* chamada `test`, para que você execute o cliente diretamente em uma *database* específica, basta passaro nome dela logo após o comando:

```
mongo be-mean-instagram
```



