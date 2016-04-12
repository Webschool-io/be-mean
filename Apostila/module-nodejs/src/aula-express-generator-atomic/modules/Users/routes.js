'use strict';

const express = require('express');
const router = express.Router();

const User = require('./organisms/organism-user');


router.get('/', User.find);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.remove);

module.exports = router;

