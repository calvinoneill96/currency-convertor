//Pounds button
function euroToPounds()[

  var amount = parseInt(document.getElementById("value1").value);
//Pounds exchange rate 
  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
//US Dollars button
function euroToUS()[

  var amount = parseInt(document.getElementById("value1").value);
//Us exchange rate
  var US = amount * 1.06;
  var message = amount + ' euros converts to ' + US + ' US Dollars.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
//Yen button
function euroToYen()[

  var amount = parseInt(document.getElementById("value1").value);
//Yen exchange rate
  var Yen = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Japanese Yen.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
//Bitcoin button 
function euroToBitcoin()[

  var amount = parseInt(document.getElementById("value1").value);
//Bitcoin exchange rate
  var Bitcoin = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Bitcoin.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;

]
