# MongoDB - Aula 01 - Exercício
autor: MARCOS SANTOS

## Importando os restaurantes 

    ```
    mongoimport --db be-mean --collection restaurantes --drop --file /home/marcos/Documentos/bemean/mongodb/restaurantes.json
    2015-11-10T14:15:34.100-0300	connected to: localhost
    2015-11-10T14:15:34.111-0300	dropping: be-mean.restaurantes
    2015-11-10T14:15:37.079-0300	[###################.....] be-mean.restaurantes	9.0 MB/11.3 MB (79.3%)
    2015-11-10T14:15:38.346-0300	imported 25359 documents

    ```

### Contando os restaurantes

    ```
    > db.restaurantes.find({}).count()
    25359

    ```
