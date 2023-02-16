const numbers = [5,2,9,1,3];
function displayOrder() {
 numbers.sort ((a,b) => a-b ) ;
 
  { console.log(numbers); }
}
displayOrder ();
module.exports = displayOrder