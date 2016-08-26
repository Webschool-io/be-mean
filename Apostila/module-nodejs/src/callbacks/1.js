/**
 * function (err, result)
 */

function sayName (name, callback) {
  if (typeof name === 'string') {
    return callback(null, name);
  } else {
    var err = new Error("Vish! Deu ZICA porque você precisa passar uma STRING para name!");
    return callback(err, null);
  }
}

sayName("Suissa", function (err, name) {
  if (err) {
    console.log(err);
  } else {
    console.log(name);
  }
});

sayName(1, function (err, name) {
  if (err) {
    console.log(err);
  } else {
    console.log(name);
  }
});
