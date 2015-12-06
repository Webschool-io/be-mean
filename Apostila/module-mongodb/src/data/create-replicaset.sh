#!/bin/bash
mongod --replSet replica_set --port 27017 --dbpath /data/rs1 --logpath /data/rs1/log.txt --fork
mongod --replSet replica_set --port 27018 --dbpath /data/rs2 --logpath /data/rs2/log.txt --fork
mongod --replSet replica_set --port 27019 --dbpath /data/rs3 --logpath /data/rs3/log.txt --fork