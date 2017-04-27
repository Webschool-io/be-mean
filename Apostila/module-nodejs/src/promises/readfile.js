'use strict';

const fs = require('fs');

fs.readFile('./resouces/persons.json','utf-8',function(err, file){
  if(!err) console.log(file);
});
