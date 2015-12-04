# Erros comuns

## Detected unclean shutdown - /data/db/mongod.lock is not empty

Quando você for iniciar o `mongod` e acontecer o erro do `/data/db/mongod.lock` não estiver vazio, provavelmente você verá o erro abaixo:

```
➜  repo-oficial git:(master) ✗ mongod
2015-11-15T11:51:35.227-0200 E NETWORK  [initandlisten] listen(): bind() failed errno:48 Address already in use for socket: 0.0.0.0:27017
2015-11-15T11:51:35.228-0200 E NETWORK  [initandlisten]   addr already in use
2015-11-15T11:51:35.228-0200 W -        [initandlisten] Detected unclean shutdown - /data/db/mongod.lock is not empty.
2015-11-15T11:51:35.287-0200 I STORAGE  [initandlisten] exception in initAndListen: 98 Unable to lock file: /data/db/mongod.lock errno:35 Resource temporarily unavailable. Is a mongod instance already running?, terminating
2015-11-15T11:51:35.287-0200 I CONTROL  [initandlisten] dbexit:  rc: 100
```

O passo mais simples para resolver esse problema é remover o `mongod.lock`:

```
sudo rm -f /data/db/mongod.lock
```

Beleza agora vamos tentar levantar novamente o `mongod`:

```
 mongod
2015-11-15T11:55:37.256-0200 E NETWORK  [initandlisten] listen(): bind() failed errno:48 Address already in use for socket: 0.0.0.0:27017
2015-11-15T11:55:37.256-0200 E NETWORK  [initandlisten]   addr already in use
2015-11-15T11:55:37.269-0200 I JOURNAL  [initandlisten] journal dir=/data/db/journal
2015-11-15T11:55:37.270-0200 I JOURNAL  [initandlisten] recover begin
2015-11-15T11:55:37.270-0200 I JOURNAL  [initandlisten] recover lsn: 0
2015-11-15T11:55:37.270-0200 I JOURNAL  [initandlisten] recover /data/db/journal/j._0
2015-11-15T11:55:37.276-0200 I JOURNAL  [initandlisten] recover cleaning up
2015-11-15T11:55:37.276-0200 I JOURNAL  [initandlisten] removeJournalFiles
2015-11-15T11:55:37.276-0200 I JOURNAL  [initandlisten] recover done
2015-11-15T11:55:37.276-0200 I JOURNAL  [initandlisten] preallocating a journal file /data/db/journal/prealloc.0
2015-11-15T11:55:40.042-0200 I -        [initandlisten]   File Preallocator Progress: 146800640/268435456 54%
2015-11-15T11:55:42.644-0200 I JOURNAL  [durability] Durability thread started
2015-11-15T11:55:42.644-0200 I JOURNAL  [journal writer] Journal writer thread started
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] MongoDB starting : pid=3109 port=27017 dbpath=/data/db 64-bit host=suissacorp.local
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] 
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] db version v3.0.6
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] git version: nogitversion
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] build info: Darwin yosemitevm.local 14.5.0 Darwin Kernel Version 14.5.0: Wed Jul 29 02:26:53 PDT 2015; root:xnu-2782.40.9~1/RELEASE_X86_64 x86_64 BOOST_LIB_VERSION=1_49
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] allocator: system
2015-11-15T11:55:42.644-0200 I CONTROL  [initandlisten] options: {}
2015-11-15T11:55:42.717-0200 I CONTROL  [initandlisten] now exiting
2015-11-15T11:55:42.717-0200 I NETWORK  [initandlisten] shutdown: going to close listening sockets...
2015-11-15T11:55:42.717-0200 I NETWORK  [initandlisten] shutdown: going to flush diaglog...
2015-11-15T11:55:42.717-0200 I NETWORK  [initandlisten] shutdown: going to close sockets...
2015-11-15T11:55:42.717-0200 I STORAGE  [initandlisten] shutdown: waiting for fs preallocator...
2015-11-15T11:55:42.717-0200 I STORAGE  [initandlisten] shutdown: final commit...
2015-11-15T11:55:42.730-0200 I JOURNAL  [initandlisten] journalCleanup...
2015-11-15T11:55:42.730-0200 I JOURNAL  [initandlisten] removeJournalFiles
2015-11-15T11:55:42.731-0200 I JOURNAL  [initandlisten] Terminating durability thread ...
2015-11-15T11:55:42.825-0200 I JOURNAL  [journal writer] Journal writer thread stopped
2015-11-15T11:55:42.825-0200 I JOURNAL  [durability] Durability thread stopped
2015-11-15T11:55:42.825-0200 I STORAGE  [initandlisten] shutdown: closing all files...
2015-11-15T11:55:42.829-0200 I STORAGE  [initandlisten] closeAllFiles() finished
2015-11-15T11:55:42.829-0200 I STORAGE  [initandlisten] shutdown: removing fs lock...
2015-11-15T11:55:42.829-0200 I CONTROL  [initandlisten] dbexit:  rc: 48
```

Dessa vez o erro foi outro, perceba lá no começo:

```
2015-11-15T11:55:37.256-0200 E NETWORK  [initandlisten] listen(): bind() failed errno:48 Address already in use for socket: 0.0.0.0:27017
2015-11-15T11:55:37.256-0200 E NETWORK  [initandlisten]   addr already in use
```

## Address already in use for socket: 0.0.0.0:27017

Esse erro acontece quando uma instância do `mongod` já está rodando no mesmo endereço e porta que você deseja, para resolver esse problema em **Sistemas Operacionais de verdade** é bem simples, confira comigo abaixo:

```
ps aux | grep mongod
jeancarlonascimento  3061   0.1  1.0  3864468 165864 s000  S+   11:51AM   0:01.90 mongod
jeancarlonascimento  3125   0.0  0.0  2423356    200 s001  R+   12:00PM   0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn mongod
```

Para isso utilizamos o comando [ps](http://www.uniriotec.br/~morganna/guia/ps.html) com as opções:

- a : mostra os processos de todos os usuários;
- u : fornece o nome do usuário e a hora de início do processo;
- x : mostra os processos que não foram iniciados no console.

E logo após executamos um [grep](http://elias.praciano.com/2013/02/linux-como-usar-o-comando-grep/) nesse resultado para buscar apenas os processos do `mongod`.

Analisando nossa saída acima podemos notar que temos 2 processos do `mongod` porém o último é exatamente o nosso `grep`:

```
jeancarlonascimento  3125   0.0  0.0  2423356    200 s001  R+   12:00PM   0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn mongod
```

Logo o processo que procuramos é o primeiro:

```
jeancarlonascimento  3061   0.1  1.0  3864468 165864 s000  S+   11:51AM   0:01.90 mongod
```

Para matarmos nosso processo usaremos o comando [kill](http://www.vivaolinux.com.br/artigo/Como-matar-um-processo-kill-killall-pkill-e-xkill) com o parâmetro -9

```
 sudo kill -9 3061
➜  repo-oficial git:(master) ✗ ps aux | grep mongod           
jeancarlonascimento  3261   0.0  0.0  2432772    648 s001  S+   12:06PM   0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn mongod
```


Para você conhecer mais sobre os comando de Linux, pode utilizar o comando `man nome_do_comando`, por exemplo:

```
man kill
```

Foi do manual do `kill` que eu tirei s informações abaixo:

```
Some of the more commonly used signals:
     1       HUP (hang up)
     2       INT (interrupt)
     3       QUIT (quit)
     6       ABRT (abort)
     9       KILL (non-catchable, non-ignorable kill)
     14      ALRM (alarm clock)
     15      TERM (software termination signal)

```

Então agora você já sabe para que serve o `kill -9`.

Mas também temos outro comando que pode nos ajudar, o `killall`. Porém ele mata **TODOS** os processos com aquele nome. Por exemplo:


```
killall mongo
```

Agora você já sabe duas forma de resolver esse problema.

