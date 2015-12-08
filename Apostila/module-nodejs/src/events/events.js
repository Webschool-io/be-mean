'use strict';

const events  = require('events');
const em      = new events.EventEmitter();

em.on("time:event", timeEvent);
em.on("mod:three", mod3Event);

function timeEvent(interval) {
  console.log('timeEvent '+interval);
}

function mod3Event(mod3) {
  console.log('3 mod %s === 0 ',mod3);
}

module.exports = em;
