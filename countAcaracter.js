let sentence = "Bonjour, chers candidats comment vous allez aujourd'hui";
function countAcaracter(sentence) {
  let compteur = 0;
  for (let r = 0; r < sentence.length; r++) {
    if (sentence[r].toLowerCase() === 'a') {
      compteur++;
    }
  }
  return compteur;
}
console.log("Le nombre d'occurrences de 'a' est :",countAcaracter(sentence)); 

module.exports = countAcaracter