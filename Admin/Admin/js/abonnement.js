function valid(){
var reference = document.getElementById("Ref").value;
var duree = document.getElementById("Durée").value;
var Prix = document.getElementById("Prix").value;

if ((reference=="") || (duree=="") || (Prix=="")) {
	alert("veuillez verifier votre choix")
}
else if ((duree<=0) || (Prix<=0)){
		console.log("negative");
		alert("Parametre ne peut pas etre negatif");

	}
else{
	console.log("valider");
	alert("Abonnement ajouté avec Succès");
}

/*
var nom;
nom = log1.substring(0,log1.indexOf("."))
console.log(nom);

var prenom;
prenom = log1.substring(log1.indexOf(".")+1,log1.indexOf("@"));
console.log(prenom);


console.log(pass);
//console.log(f.mail.value);


alert("Bienvenue " + prenom +" "+ nom);
window.location="sondage.html";
}*/

}