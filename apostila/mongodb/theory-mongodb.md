> **MongoDB** (do inglês humongous, "gigantesco") é uma aplicação de código aberto, de alta performance, sem esquemas, orientado a documentos. Foi escrito na linguagem de programação C++.[1] Além de orientado a documentos, é formado por um conjunto de documentos JSON. Muitas aplicações podem, dessa forma, modelar informações de modo muito mais natural, pois os dados podem ser aninhados em hierarquias complexas e continuar a ser indexáveis e fáceis de buscar.
O desenvolvimento de MongoDB começou em outubro de 2007 pela 10gen. A primeira versão pública foi lançada em fevereiro de 2009.[2]

fonte: [https://pt.wikipedia.org/wiki/MongoDB](https://pt.wikipedia.org/wiki/MongoDB)

Acho que essa explicação da Wikipedia é bem clara e simples, porém também podemos adicionar que ele foi criado sendo pensado em escalar horizontalmente.

#### Escalabilidade Horizontal

Existem 2 tipos de escalabilidade, nesse caso, a horizotal e a vertical. Qual suas diferenças?

É bem simples, normalmente quando você utiliza bancos de dados relacionais sua performance do banco aumenta quando você aumenta o **poder do servidor** como adicionar mais memória RAM, HDs SSD, etc. Nesse caso você faz ele crescer para cima.

#### Schemaless

#### Capped Collection

Capped Collection são coleções de tamanho fixo que suportam as operações de alto rendimento que inserem e recuperam documentos com base em ordem de inserção. Capped Collection trabalham de uma forma semelhante ao buffers circulares: uma vez que uma coleção preenche o seu espaço alocado, ele abre espaço para novos documentos, substituindo os documentos mais antigos na coleção.

 - **Capped Collection tem os seguintes comportamentos:**

     - Capped Collection garanti a preservação da ordem de inserção. Como resultado, as consultas não precisam de um índice para devolver os documentos em ordem de inserção. Sem essa sobrecarga de indexação, eles podem apoiar um maior rendimento de inserção.
     - Capped Collection garanti que a ordem de inserção é idêntica à ordem no disco (ordem natural) e faz isso através da proibição de atualizações que aumentam o tamanho do documento. Capped Collection só permite atualizações que se encaixam no tamanho do documento original, o que garante que o documento não altere a sua localização no disco.
     - Capped Collection remove automaticamente os documentos mais antigos da coleção sem a necessidade de scripts ou operações de remoção explícitas.

fonte: [http://docs.mongodb.org/manual/core/capped-collections](http://docs.mongodb.org/manual/core/capped-collections)

#### Memmory-mapped files

O que são arquivos de memória mapeados ? 

Um arquivo de memória mapeada é um arquivo com dados, que o sistema operacional coloca em memória através da chamada do mmap(). mmap() então mapeia o arquivo para uma região da memória virtual. Arquivos de memória mapeada são a peça fundamental do mecanismo de armazenamento 
MMAPv1 no MongoDB. Ao usar arquivos de memória mapeada, o MongoDB consegue tratar os conteúdos dos arquivos como se eles estivessem em memória. Isso proporciona um método extremamente rápido e simples para acessar e manipular dados.

Como funcionam os arquivos de memória mapeada?

O MongoDB usa arquivos de memória mapeada para gerenciar e interagir com todos os dados.

O mapeamento de memória atribui arquivos para um bloco de memória com uma correlação direta byte a byte. O MongoDB mapeia para os arquivos para a memória assim acessados os documentos. Dados não acessados não são mapeados para a memória.

Uma vez mapeados, a relação entre arquivos e memória permite MongoDB para interagir com os dados no arquivo, como se fosse memória.

fonte: [http://docs.mongodb.org/manual/faq/storage/#mmapv1-storage-engine](http://docs.mongodb.org/manual/faq/storage/#mmapv1-storage-engine)

#### Auto-sharding

#### Replica

#### Cluster

#### GridFS

#### Geolocation

#### Modelagem

#### MongoDb University

Nossa querida [10gen]() criou uma "Universidade" online para aprender MongoDB, a [MongoDB University](https://university.mongodb.com/).

Lá eles possuem cursos para:

- Node.js
- .Net
- Java
- DBAs

Então tem para todos os gostos, se você quiser se aprofundar **mais** no MongoDb eu aconselho a você ver essas aulas, se souber inglês.