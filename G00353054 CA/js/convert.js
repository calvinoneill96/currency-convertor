function euroToPounds()[

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
function euroToUS()[

  var amount = parseInt(document.getElementById("value1").value);

  var US = amount * 1.06;
  var message = amount + ' euros converts to ' + US + ' US Dollars.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
function euroToYen()[

  var amount = parseInt(document.getElementById("value1").value);

  var Yen = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Japanese Yen.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
function euroToBitcoin()[

  var amount = parseInt(document.getElementById("value1").value);

  var Yen = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Bitcoin.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
