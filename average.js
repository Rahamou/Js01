

function average () {
  
const notes =[20,12,8,9];
let sum= 0;
let moyenne=0;
for (let r=0; r<notes.length; r++) {
sum += notes[r];
}
moyenne = sum / notes.length
return moyenne

}
console.log(average());

module.exports = average