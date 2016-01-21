normal(); // NORMAL
arrow(); // TypeError: arrow is not a function

function normal() { console.log("NORMAL"); }
const arrow = () => { console.log("ARROW"); };

// () => {} // undefined
// () => ({}) // {}