// JavaScript for Calculator

// Function to update the calculator screen
function liveScreen(value) {
  document.getElementById('result').value += value;
}

// Function to perform the calculation
function calculate(expression) {
  try {
    // Use eval to calculate the result of the expression
    var result = eval(expression);

    // Display the result on the calculator screen
    document.getElementById('result').value = result;
  } catch (error) {
    // Handle any errors that may occur during the calculation
    document.getElementById('result').value = 'Error';
  }
}

// Function to clear the calculator screen
function clearScreen() {
  document.getElementById('result').value = '';
}

// Function to handle the backspace button
function deleteCharacter() {
  var currentInput = document.getElementById('result').value;
  document.getElementById('result').value = currentInput.slice(0, -1);
}

// Function to change the theme (dark/light mode)
function changeTheme() {
  var themeLink = document.getElementById('theme');
  var currentTheme = themeLink.getAttribute('href');
  var newTheme = currentTheme === 'styles/dark.css' ? 'styles/light.css' : 'styles/dark.css';

  // Update the theme by changing the stylesheet link
  themeLink.setAttribute('href', newTheme);

  // Display a toast notification about the theme change
  var toastElement = document.getElementById('toast');
  toastElement.textContent = 'Theme changed!';
  setTimeout(function () {
    toastElement.textContent = 'Calculator';
  }, 2000);
}

// Event listener for the theme button
document.querySelector('.theme-button').addEventListener('click', changeTheme);
