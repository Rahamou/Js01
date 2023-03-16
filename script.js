//localStorage.setItem("clé","valeur")
//localStorage.getItem("clé")
//localStorage.clear();


if (localStorage.getItem("montant") != null)
   h2.textContent= 'Balance FCA: ' + (localStorage.getItem("montant"));
   
   if(localStorage.getItem("titre") != null)
   h3.textContent='expenses: ' + (localStorage.getItem("titre"));
   
   
  

bouton.onclick= () => {
 localStorage.setItem("montant",montant.value);
 localStorage.setItem("titre", titre.value)
}
