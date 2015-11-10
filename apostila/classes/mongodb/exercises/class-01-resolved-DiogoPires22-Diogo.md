 # MongoDB - Aula 01 - Exercício
autor: Diogo Pires Caires Silva (conta: Taise Feijo)

## Importando os restaurantes

    ```
     iMac-de-Diogo-3:desktop usuario$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
     2015-11-10T12:27:28.441-0200	connected to: localhost
     2015-11-10T12:27:28.441-0200	dropping: be-mean.restaurantes
     2015-11-10T12:27:30.636-0200	imported 25362 documents

    ```

## Contando os restaurantes

    ```
    use be-mean
    switched to db be-mean
    > db.restaurantes.find({}).count()
    25362

    ```
 
 
 


