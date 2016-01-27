/**
 * custom async
 */

function sum (num1, num2, callback) {
  setTimeout(function () {
    if (typeof num1 == "number" && typeof num2 == "number") {
      var result = num1 + num2;
      callback(null, result);
    } else {
      var error = new Error("Passe o um número, por favor :)");
      return callback(error, null);
    }
  }, 30);
}

function minus (num1, num2, callback) {
  setTimeout(function () {
    if (typeof num1 == "number" && typeof num2 == "number") {
      var result = num1 - num2;
      callback(null, result);
    } else {
      var error = new Error("Passe o um número, por favor :)");
      return callback(error, null);
    }
  }, 20);
}
/*** continuation passing style */
sum(4, 4, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});


/*** continuation passing style */
minus(5, 3, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});


sum(4, 4, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("aninhado "+result);
  }
  minus(5, 3, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("aninhado " + result);
    }
  });
});
