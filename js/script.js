





document.getElementById("calc").onclick = function() {

	var nameUsr = document.getElementById("inputName").value;
	var ageUsr = document.getElementById("inputAge").value;
	var hpUsr = document.getElementById("inputHp").value;

	if (document.getElementById("rd1").checked == true) {
		//alert("Austria checked");
		insCost = hpUsr * 100 / ageUsr + 50;
	} else if (document.getElementById("rd2").checked == true) {
		//alert("Germany");
		insCost = hpUsr * 120 / ageUsr + 100;
	} else if (document.getElementById("rd3").checked == true) {
		//alert("Italy");
		ageUsr1 = ageUsr + 2;
		insCost = hpUsr * 150 / ageUsr1 + 150;
		console.log("inscost: " + insCost);
		console.log("ageUsr1: " + ageUsr1);
		console.log("ageUsr: " + ageUsr);
	}

	var insCost;
	var result =  "Hey " + nameUsr + ", when you are " + ageUsr + " years old and your car has " + hpUsr + " horse-power, then you have to pay " + insCost + " €.";

document.getElementById("outputName").innerHTML = result;


}
