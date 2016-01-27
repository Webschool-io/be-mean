// ES5
// [1,2,3].map(function(x) { return x * x });
// console.log([1,2,3].map(function(x) { return x * x }));
// ES6
// [1,2,3].map(x => x * x);
// console.log([1,2,3].map(x => x * x));

// [2,true].map(x => { if (typeof x === 'number') return x * x; else return x; })
// console.log([2,true].map(x => { if (typeof x === 'number') return x * x; else return x; }));

// [2,true, 3].map(x => { 
//   if (typeof x === 'number') {
//     if (x % 2 === 0) return x;
//     return x * x;
//   }
// });
console.log([2,true, 3].map(x => { 
  if (typeof x === 'number') {
    if (x % 2 === 0) return x; // par
    return x * x; // impar
  }
  else return x;
}));