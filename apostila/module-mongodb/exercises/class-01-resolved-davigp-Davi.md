# MongoDB - Aula 01 - Exercício
autor: Davi

## Importando os restaurantes
mongoimport --db be-mean -c restaurantes --drop --file ../data/restaurantes.json 
2015-11-11T17:23:47.320-0200	connected to: localhost
2015-11-11T17:23:47.320-0200	dropping: be-mean.restaurantes
2015-11-11T17:23:48.791-0200	imported 25359 documents

## Contando os restaurantes
SVF15213CBW(mongod-3.0.7) be-mean> db.restaurantes.find().count()
25359

## EXTRA: Procurando o lugar mais perto pra ranga manoo!

### Criando o indice espacial
SVF15213CBW(mongod-3.0.7) be-mean> db.restaurantes.ensureIndex({ 'address.coord' : "2d"})
{
  "createdCollectionAutomatically": false,
  "numIndexesBefore": 1,
  "numIndexesAfter": 2,
  "ok": 1
}

### Procurando o pico...
SVF15213CBW(mongod-3.0.7) be-mean> db.restaurantes.find( { 'address.coord' : { $near : [-27.59, -48.54], $maxDistance: 35 } } )
{
  "_id": ObjectId("564395c4e1d0032c74be8993"),
  "address": {
    "building": "0",
    "coord": [
      -40.2596146,
      -20.2102107
    ],
    "street": "Aa Terminal 8",
    "zipcode": "11430"
  },
  "borough": "Queens",
  "cuisine": "Chinese",
  "grades": [
    {
      "date": ISODate("2014-07-03T00:00:00Z"),
      "grade": "A",
      "score": 10
    },
    {
      "date": ISODate("2014-02-26T00:00:00Z"),
      "grade": "A",
      "score": 9
    },
    {
      "date": ISODate("2013-08-29T00:00:00Z"),
      "grade": "A",
      "score": 13
    },
    {
      "date": ISODate("2012-08-09T00:00:00Z"),
      "grade": "A",
      "score": 7
    },
    {
      "date": ISODate("2011-10-24T00:00:00Z"),
      "grade": "A",
      "score": 13
    }
  ],
  "name": "Wok & Roll",
  "restaurant_id": "41605284"
}
Fetched 1 record(s) in 4ms

