function valid(){

console.clear();


var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var mail = document.getElementById("mail").value;
var trouv="faux";

for (var i = mail.length - 1; i >= 0; i--) {
	if(mail[i]=='@'){
		trouv="vrai";
	}
}

if (trouv!="vrai") {
	alert("l'adresse doit contenir '@'");

}


if ((nom=="") || (prenom=="") || (mail=="") || (trouv=="faux")) {
	alert("veuillez verifier votre choix")
}
else{
	console.log("valider");
	alert("Coach ajouté avec Succès");
}


}