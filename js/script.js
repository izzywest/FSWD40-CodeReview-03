





document.getElementById("calc").onclick = function() {

	var nameUsr = document.getElementById("inputName").value;
	var ageUsr = document.getElementById("inputAge").value;
	var hpUsr = document.getElementById("inputHp").value;

	if (document.getElementById("rd1").checked == true) {
		insCost = hpUsr * 100 / ageUsr + 50;
	} else if (document.getElementById("rd2").checked == true) {
		insCost = hpUsr * 120 / ageUsr + 100;
	} else if (document.getElementById("rd3").checked == true) {
		ageUsr1 = parseFloat(ageUsr) + parseFloat(2);
		insCost = hpUsr * 150 / ageUsr1 + 150;
	}

	var insCost;
	insCost1 = Math.round(insCost * 100) / 100;
	var result =  "Hey " + nameUsr + ", when you are " + ageUsr 
	+ " years old and your car has " + hpUsr 
	+ " horse-power, then you have to pay " + insCost1 + " €.";

document.getElementById("outputName").innerHTML = result;

}
