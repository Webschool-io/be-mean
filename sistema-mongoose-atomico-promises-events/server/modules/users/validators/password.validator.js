const field = 'password';

// var ValidateMSG = '{VALUE} não é um '+ field +' aceitável';
// var Validator = function(pass) {
//   return (pass.length > 6 );
// }

var Validate = {
  validator:  function(pass) {
    return (pass.length > 8 );
  },
  message: '{VALUE} não é um '+ field +' aceitável'
};



// function checkPassStrength(pass) {
//   var score = Validator(pass);
//   if (score > 80)
//       return true;
//   if (score > 60)
//       return true;
//   if (score >= 30)
//       return false;

//   return false;
// }

// function Validator(pass) {

//     var score = 0;
//     if (!pass)
//         return score;

//     // award every unique letter until 5 repetitions
//     var letters = new Object();
//     for (var i=0; i<pass.length; i++) {
//         letters[pass[i]] = (letters[pass[i]] || 0) + 1;
//         score += 5.0 / letters[pass[i]];
//     }

//     // bonus points for mixing it up
//     var variations = {
//         digits: /\d/.test(pass),
//         lower: /[a-z]/.test(pass),
//         upper: /[A-Z]/.test(pass),
//         nonWords: /\W/.test(pass),
//     }

//     variationCount = 0;
//     for (var check in variations) {
//         variationCount += (variations[check] == true) ? 1 : 0;
//     }
//     score += (variationCount - 1) * 10;

//     return checkPassStrength(parseInt(score));
// }

module.exports = Validate