# MongoDB - Aula 01 - Exercicio
autor: Antonio Marcos Alves de Lima

## Importando os restaurantes

'''
antonio@antonio:~/Documentos/projetos/projetos_javascript/curso-beMEAN$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T23:19:03.664-0200	connected to: localhost
2015-11-09T23:19:03.665-0200	dropping: be-mean.restaurantes
2015-11-09T23:19:04.905-0200	imported 25359 documents
'''


## Contando os restaurantes
db.restaurantes.find({}).count()
25359

'''
