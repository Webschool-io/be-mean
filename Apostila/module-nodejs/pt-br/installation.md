# Instalação

Você pode baixar os instaladores em [nodejs.org/en/download/](https://nodejs.org/en/download/)


Ou utilizando o [brew](http://brew.sh/), para Mac, ou [apt-get](https://www.debian.org/doc/manuals/apt-howto/ch-apt-get.pt-br.html)/[yum](https://fedoraproject.org/wiki/Yum) para Linux.

## apt-get

```
sudo apt-get update
sudo apt-get install nodejs
```

Teste para ver se o [npm]() também foi instalado:

```
npm -v
```

Caso o terminal mostre um erro então instale-o:

```
sudo apt-get install npm
```

Caso tenha vindo uma versão antiga, a atual é a 5, você pode fazer é adicionar um PPA (arquivo de pacotes pessoais) mantido pelo NodeSource.

Primeiro, você precisa instalar o PPA de modo a obter acesso ao seu conteúdo:

```
curl -sL https://deb.nodesource.com/setup | sudo bash -
```

## yum

```
sudo yum install nodejs npm --enablerepo=epel
```

A opção `--enablerepo=epel` faz o `yum` procurar por pacotes no repositório EPEL.

> EPEL (Extra Packages for Enterprise Linux) is open source and free community based repository project from Fedora team which provides 100% high quality add-on software packages for Linux distribution including RHEL (Red Hat Enterprise Linux), CentOS, and Scientific Linux. Epel project is not a part of RHEL/Cent OS but it is designed for major Linux distributions by providing lots of open source packages like networking, sys admin, programming, monitoring and so on. Most of the epel packages are maintained by Fedora repo.

Via http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/

## brew

Tendo o `brew` instalado basta executar:

```
brew install nodejs
```






