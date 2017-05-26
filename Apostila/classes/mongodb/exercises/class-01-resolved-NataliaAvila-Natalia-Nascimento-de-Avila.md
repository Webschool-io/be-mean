# MongoDB - Aula 01 - Exercício
autor: Natália Nascimento de Ávila

## Importando os restaurantes

    ```
    ./mongoimport.exe --db be-mean --collection restaurantes D:\projetos\Plugins\Estudos\MongoDB\Exercicios\Aula01\restaurantes.json 
    2016-03-14T17:51:52.335-0300    connected to: localhost
    2016-03-14T17:51:54.643-0300    imported 25359 documents

    ```

## Contando os restaurantes

    ```
    db.restaurantes.find({}).count()
    25359

    ```