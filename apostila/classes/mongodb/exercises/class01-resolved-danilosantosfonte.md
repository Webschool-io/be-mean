# MongoDB - Aula 01 - Exercício
autor: Danilo dos Santos da Fonte

## Importando os restaurantes

    ```
    danilo@danilo-VirtualBox:~/Área de Trabalho/aulas/arquivos json$ mongoimport -d be-mean -c restaurantes --drop --file restaurantes.json
    2015-11-11T20:30:50.123-0200    connected to: localhost
    2015-11-11T20:30:50.125-0200    dropping: be-mean.restaurantes
    2015-11-11T20:30:51.871-0200    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    danilo@danilo-VirtualBox:~/Área de Trabalho/aulas/arquivos json$ mongo
    MongoDB shell version: 3.0.7
    connecting to: test
    Welcome to the MongoDB shell.
    For interactive help, type "help".
    For more comprehensive documentation, see
    http://docs.mongodb.org/
    Questions? Try the support group
    http://groups.google.com/group/mongodb-user
    Server has startup warnings: 
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] 
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] 
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
    2015-11-11T20:30:27.800-0200 I CONTROL  [initandlisten] 
    > use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25359
    > 
    ```