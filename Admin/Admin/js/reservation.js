function valid(){
var radio = "faux";

var choix1 = document.getElementById("sexe1").checked;
var choix2 = document.getElementById("sexe2").checked;



var nom = document.getElementById("nom").value;
var etat = document.getElementById("etat").value;
var type = document.getElementById("type").value;
var age = document.getElementById("age").value;



	if ((choix1==true) || (choix2==true)) {
		radio = "vrai";
		console.log(radio);
	}
	else{
		console.log(radio);
	}

	

if ((nom=="") || (etat=="") || (radio=="faux") || (type=="") || (age=="")) {
	alert("veuillez verifier votre choix")
}
else{



if  ((age<=0) || (age>61)) 
{
	alert("Age invalide");
	return
}

if ((nom.length)>=10) {
	alert("Nom invalide Veuillez saisir un nom moins long");
	return
}




	alert("Validé")

}




	console.log("valider");



}

