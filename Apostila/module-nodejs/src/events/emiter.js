'use strict';

const em  = require('./events');

setInterval(( function() {
  let i = 1;
  return function () {
    if(i % 3 === 0) {
      em.emit('mod:three',i++);
    } else {
      em.emit('time:event', i++);
    }
  };
})(),1000);
