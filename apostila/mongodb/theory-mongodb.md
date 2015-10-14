> **MongoDB** (do inglês humongous, "gigantesco") é uma aplicação de código aberto, de alta performance, sem esquemas, orientado a documentos. Foi escrito na linguagem de programação C++.[1] Além de orientado a documentos, é formado por um conjunto de documentos JSON. Muitas aplicações podem, dessa forma, modelar informações de modo muito mais natural, pois os dados podem ser aninhados em hierarquias complexas e continuar a ser indexáveis e fáceis de buscar.
O desenvolvimento de MongoDB começou em outubro de 2007 pela 10gen. A primeira versão pública foi lançada em fevereiro de 2009.[2]

fonte: [https://pt.wikipedia.org/wiki/MongoDB](https://pt.wikipedia.org/wiki/MongoDB)

Acho que essa explicação da Wikipedia é bem clara e simples, porém também podemos adicionar que ele foi criado sendo pensado em escalar horizontalmente.

#### Escalabilidade Horizontal

Existem 2 tipos de escalabilidade, nesse caso, a horizotal e a vertical. Qual suas diferenças?

É bem simples, normalmente quando você utiliza bancos de dados relacionais sua performance do banco aumenta quando você aumenta o **poder do servidor** como adicionar mais memória RAM, HDs SSD, etc. Nesse caso você faz ele crescer para cima.

#### Schemaless

#### Capped Collection


#### Memmory-mapped files


[AJUDA NA TRADUÇÃO PARA PORTUGUES]
What are memory mapped files?
A memory-mapped file is a file with data that the operating system places in memory by way of the mmap() system call. mmap() thus maps the file to a region of virtual memory. Memory-mapped files are the critical piece of the MMAPv1 storage engine in MongoDB. By using memory mapped files, MongoDB can treat the contents of its data files as if they were in memory. This provides MongoDB with an extremely fast and simple method for accessing and manipulating data.

How do memory mapped files work?
MongoDB uses memory mapped files for managing and interacting with all data.

Memory mapping assigns files to a block of virtual memory with a direct byte-for-byte correlation. MongoDB memory maps data files to memory as it accesses documents. Unaccessed data is not mapped to memory.

Once mapped, the relationship between file and memory allows MongoDB to interact with the data in the file as if it were memory.


fone: [http://docs.mongodb.org/manual/faq/storage/#mmapv1-storage-engine](http://docs.mongodb.org/manual/faq/storage/#mmapv1-storage-engine)