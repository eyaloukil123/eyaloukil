function verif(){
	console.log("log");
	var nom = document.getElementById("nom").value;
	var nbre = document.getElementById("nbre").value;
	var lieu = document.getElementById("lieu").value;

	if((nom=="") || (nbre=="") || (lieu==""))
	{
		swal("Veuillez verifier votre choix");
		return
	}
	if((nbre>=16) || (nbre<0)){
		swal("Nombre de participants eronné");
		return
	}
	else{
		swal("sucées", "Competition ajoutée", "success");
	}


}


