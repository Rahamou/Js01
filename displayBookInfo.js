//objet et échappement 
let book = {
  "titre" : "L'Enfant Noir",
  "auteur" : "Camara Laye",
  "année" : 1953
}
 
 
function displayBookInfo(book){
  
    console.log("Titre: " ,book.titre,);
    console.log("Auteur: ", book.auteur);
    console.log("année: ", book.année );
}

displayBookInfo (book)