let sentence = "Bonjour, chers candidats comment vous allez aujourd'hui";
function countAcaracter(sentence,ra) {
  let compteur = 0;
  for (let r = 0; r < sentence.length; r++) {
    if (sentence[r]=== ra) {
      compteur++;
    }
  }
  return compteur;
}
console.log("Le nombre d'occurrences de 'a' est :",countAcaracter(sentence,'a')); 

module.exports = countAcaracter