// Get references to the input, select, and output elements
const inputElement = document.getElementById('inputter');
const fromValueElement = document.getElementById('fromValue');
const toValueElement = document.getElementById('toValue');
const outputElement = document.getElementById('opSection');
const convertButton = document.getElementById('convertButton'); // Add an ID to the button element

// Function to perform the temperature conversion
function convertTemperature() {

  // Get the selected units and input value
  const fromUnit = fromValueElement.value;
  const toUnit = toValueElement.value;
  const inputValue = parseFloat(inputElement.value);

  // Check if the input is a valid number
  if (!isNaN(inputValue)) {
    // Perform the conversion
    let result;

    if (fromUnit === 'celcius' && toUnit === 'farenheit') {
      result = (inputValue * 9/5) + 32;
    } else if (fromUnit === 'farenheit' && toUnit === 'celcius') {
      result = (inputValue - 32) * 5/9;
    } else if (fromUnit === 'celcius' && toUnit === 'kelvin') {
      result = inputValue + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celcius') {
      result = inputValue - 273.15;
    } else if (fromUnit === 'farenheit' && toUnit === 'kelvin') {
      result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'farenheit') {
      result = (inputValue - 273.15) * 9/5 + 32;
    } else {
      // If no conversion is needed (same units), result is the same as input
      result = inputValue;
    }

    // Display the result
    outputElement.innerHTML = `Ans = ${result.toFixed(2)} ${toUnit}`;
  } else {
    // Display an error message if the input is not a valid number
    outputElement.innerHTML = 'Invalid input. Please enter a valid number.';
  }
}

convertButton.addEventListener('click', convertTemperature);