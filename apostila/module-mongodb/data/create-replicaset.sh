#!/bin/bash
mongod --replSet replica_set --port 27117 --dbpath /data/rs1 --logpath /data/rs1/log.txt --fork
mongod --replSet replica_set --port 27118 --dbpath /data/rs2 --logpath /data/rs2/log.txt --fork
mongod --replSet replica_set --port 27119 --dbpath /data/rs3 --logpath /data/rs3/log.txt --fork