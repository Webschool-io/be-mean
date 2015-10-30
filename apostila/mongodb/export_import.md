## mongoexport

Para exportarmos os dados de uma coleção no MongoDb usaremos o binário `mongoexport` da seguinte forma:

```
mongoexport --db nome_do_database --collection nome_da_colecao --out minha_colecao.json
```

Guarde bem esse comando pois será necessário para o nosso exercício.


```
mongoexport --db test --collection traffic --out traffic.json
```


## mongoimport

```
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
```

**CUIDADO**

> Evite usar mongoimport e mongoexport para backups de instância de produção. Eles não preservarão de forma confiável todos os tipos de dados ricos do BSON, porque JSON só pode representar um subconjunto dos tipos suportados pelo BSON. Use mongodump e mongorestore como descrito em [MongoDB Backup Methods](https://docs.mongodb.org/manual/core/backups/) para esse tipo de funcionalidade.
