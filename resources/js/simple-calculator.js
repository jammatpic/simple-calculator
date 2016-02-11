//CHANGE BACKGROUND COLOUR, ADD COMMENTS

var displayValue;
var numValue = 0;
var previousEntry;
var operation = null;
var equation = "";

function isNumber(n) {
	return n != isNaN && isFinite(n);
}

$(document).ready(function() {
    $(".btn").on("click", function() {
        displayValue = $(this).text();

        if (isNumber(displayValue) || displayValue == ".") {
            if (isNumber(previousEntry)) { // builds up numbers with two or more digits
                displayValue = previousEntry + "" + displayValue;
            }
            numValue = displayValue; // stores value of current number for future
            $("#output").text(displayValue); // displays value of current number

        } else if (displayValue == "Clear") { // resets all
            operation = null;
            numValue = 0;
            equation = "";
            $("#output").text("");

        } else if (displayValue == "+" || displayValue == "-" ||
            displayValue == "X" || displayValue == "÷" || displayValue == "%") {
            equation = equation.concat(numValue); // add number to equation
            if (displayValue == "+") { // add operator to equation
                equation = equation.concat("+");
            } else if (displayValue == "-") {
                equation = equation.concat("-");
            } else if (displayValue == "X") {
                equation = equation.concat("*");
            } else if (displayValue == "÷") {
                equation = equation.concat("/");
            } else if (displayValue == "%") {
                equation = equation.concat("%");
            }
            operation = displayValue;
        } else if (displayValue == "=") {
            equation = equation.concat(numValue);
            operation = null;
            $("#output").text(eval(equation));
        }

        previousEntry = displayValue;
    });
});