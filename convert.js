//convert Euro to Pounds
function euroToPounds() {

 var amount = parseInt(document.getElementById("value1").value);
  var pounds = amount * 0.86;
  var message = amount + 'euros converts to ' + pounds + 'sterling';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
  
  //Convert Euro To  US Dollars
    function euroTodollars() {
	  
  var amount = parseInt(document.getElementById("value2").value);
  var pounds = amount * 1.06;
  var message = amount + 'euros converts to' + dollars + 'dollars';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message
  }

  //Convert Euro to Japanese Yen
  function euroToyen() {
var amount = parseInt(document.getElementById("value3").value);
var pounds = amount * 121.12;
var message = amount + 'euros converts to' + yen + 'yen';
console.log(message);
document.getElementById("resultsentence").innerHTML = message;
  }
  
  //Convert Euro to Bitcoin
  function euroToPounds() {
  var amount = parseInt(document.getElementById("value4").value);
  var pounds = amount * 0.00082;
  var message = amount + 'euros converts to' + bitcoin + 'bitcoin';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  }
  
