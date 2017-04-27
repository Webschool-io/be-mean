'use strict';

const fs = require('fs');

fs.readFile('./modules/persons.json','utf-8',function(err, persons){
  let todos = [];
  if(!err){
    fs.readFile('./modules/friends.json','utf-8',function(err, friends){
      if(!err){
        todos.push(JSON.parse(persons));
        todos.push(JSON.parse(friends));
      } 
      sendFiles(todos);
    });
  } 
});

function sendFiles(files){
  var arr = files.map(function(person) {
    return person.concat(person)
  });
  console.log(arr[0]);
}
