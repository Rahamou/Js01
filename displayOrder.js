const numbers = [5,2,9,1,3];
function displayOrder() {
 numbers.sort ((a,b) => a-b ) ;
 return numbers
}
console.log(displayOrder());

module.exports = displayOrder