function checkNumber(a){
    if(a<5){
        console.log('Faible');
    } else
    {
        console.log('Moyen');
    }
}
checkNumber(3);
checkNumber(5);
checkNumber(6);
module.exports = checkNumber;