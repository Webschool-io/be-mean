'use strict';

const MODEL_NAME = 'User';
const mongoose = require('mongoose');
const skeleton = require('./user_schema');
const Schema = new mongoose.Schema(skeleton);
const Model = mongoose.model(MODEL_NAME, Schema);

module.exports = Model;
