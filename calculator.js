$(document).ready(function() {
    $(".button").click(function() {
		getValue(this.value);
	});
	$(".operator").click(function() {
        operate(this.value);
	});
	 $("#equal").click(function() {
		equals();
	});
    $("#percent").click(function() {
		percent();
	});
 

var num1 = "";
var num2 = "";
var symbol = "";
var display = document.getElementById("calc_display");


function getValue(digit){
    num1 += digit;
	display.innerHTML = num1;
};

function operate(mathSign) {
    symbol = mathSign;  
    num2 = num1;
    display.innerHTML = " ";
	num1 = "";
};

function percent() {
    num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
    var percentage = num2 * (num1/100);
    display.innerHTML = percentage;
}
function equals() {
	var total = "";
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	
	switch(symbol) {
        case "/":
		total = num2 / num1;
        break;
        case "x":
		total = num2 * num1;
        break;
        case "+": 
		total = num2 + num1;
        break;
        case "-": 
        total = num2 - num1;
        break;
        case "C":
        num2 = "";
        break;
        case "AC":
        num1 = "";
        num2 = "";
        break;
  } 
    
	display.innerHTML = total;
}; 


});
