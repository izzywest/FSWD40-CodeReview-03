// function to get the result after click on button
// calculate insurance
document.getElementById("calc").onclick = function() {

// save the variables (Usr = inputted data by user), if name, age and/or hp is empty, alert!
	var nameUsr = document.getElementById("inputName").value;
		if (nameUsr == "") {
			alert("Please enter your name");
		}
	var ageUsr = document.getElementById("inputAge").value;
		if (ageUsr == "") {
			alert("Please enter your age (only numbers!");
		}
	var hpUsr = document.getElementById("inputHp").value;
		if (hpUsr == "") {
			alert("Please enter a value for HP");
		}

// calculate the cost (check which radio btn is selected)
	if (document.getElementById("rd1").checked == true) {
		insCost = hpUsr * 100 / ageUsr + 50;
	} else if (document.getElementById("rd2").checked == true) {
		insCost = hpUsr * 120 / ageUsr + 100;
	} else if (document.getElementById("rd3").checked == true) {
		ageUsr1 = parseFloat(ageUsr) + parseFloat(2);
		insCost = hpUsr * 150 / ageUsr1 + 150;
	}

// save result in var insCost, round the result and display the sentence with the values
	var insCost;
	insCost = Math.round(insCost * 100) / 100;
	var result =  "Hey " + nameUsr + ", you are " + ageUsr 
	+ " years old and your car has " + hpUsr 
	+ " horsepower, you have to pay " + insCost + " €.";

	var sP = "This price is not guaranteed.<br>Information provided without guarantee."

	document.getElementById("outputName").innerHTML = result;

	document.getElementById("smallPrint").innerHTML = sP;
}