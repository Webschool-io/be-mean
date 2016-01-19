/**
 * function (err, result)
 */


function sum (num1, num2, callback) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    var result = num1 + num2;
    callback(null, result);
  } else {
    var error = new Error("Passe o um número, por favor :)");
    return callback(error, null);
  }
}

/*** continuation passing style */
sum(4, 4, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

sum("heuehauaehauea", "aqui é br cara, nós bloqueia o uatis", function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
