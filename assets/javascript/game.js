$(function () {
	// begin with the variables
	var vtargetn = 0;
	var vrandomn = Math.floor((Math.random() * 120) + 19);
	var vwins = 0;
	var vlosses = 0;
	$("#drandomnumber").text(vrandomn);
	$("#dtargetnumber").text(vtargetn);
	$("#dwins").text(vwins);
	$("#dlosses").text(vlosses);
	// array including 4 random values for picture values between 1 and 12
	var vpicsvalues = [Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1)];
	console.log(vpicsvalues);
	// loop to create crystals for every value in the array
	faddpics();
	//the event on click applied to all the images created take as reference the css attribute name
	$(".imagesize").on("click", function() {
		//extract the value of the image using the data attribute
		//instruction $(this) will use the value of the clicked image
		//use of .attr("name of the data attribute") help us in this task
		//convert the value of the data to a number since its a string by default
		var vvalueimg = ($(this).attr("dataimgvalue"));
		console.log("vvalueimg");
		vvalueimg = Number(vvalueimg);
		//add the value of the image to the value acumulated to the target number
		vtargetn += vvalueimg;
		//display it on the doc
		$("#dtargetnumber").text(vtargetn);
		if (vtargetn == vrandomn) {
			alert("You win!");
			vwins++;
			$("#dwins").text(vwins);
			fnewvals ();
			//faddpics();
			console.log(vpicsvalues);
		} else if (vtargetn > vrandomn) {
			alert ("You lose!!");
			vlosses++;
			$("#dlosses").text(vlosses);
			fnewvals();
			//faddpics();
			console.log(vpicsvalues);
		}
	});

	function fnewvals() {
		$("#cristals").detach();
		vtargetn = 0;
		vrandomn = Math.floor((Math.random() * 120) + 19);
		$("#drandomnumber").text(vrandomn);
		$("#dtargetnumber").text(vtargetn);
		vpicsvalues = [Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1),
							Math.floor((Math.random() * 12) + 1)];
		faddpics();
	};

	function faddpics() {
		for (var i = 0; i < vpicsvalues.length; i++) {
			//creating the image value element
			var vpicscristal = $("<img>");
			// giving the class value of the css to the img see "imagesize" on css
			vpicscristal.addClass("imagesize");
			//each picture is different we assign the source/location of the pics
			if (i == 0) {
				vpicscristal.attr("src","assets/images/amber.jpg");
			} else if (i == 1) {
				vpicscristal.attr("src","assets/images/blue.jpg");
			} else if (i == 2) {
				vpicscristal.attr("src","assets/images/green.jpg");
			} else if (i == 3) {
				vpicscristal.attr("src","assets/images/purple.jpg");
			}
			//giving each image the data attribute which will be equal to the value in the array
			vpicscristal.attr("dataimgvalue",vpicsvalues[i]);
			console.log(vpicscristal)
			//each iteration a pic will be added to the div in the page
			$("#cristals").append(vpicscristal);
		}
	};

});