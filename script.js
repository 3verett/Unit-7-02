// Connects the function "indentify" to the "Check" button.
document.getElementById('button').addEventListener('click', indentify)
let numberInput = 0

function indentify () {
  // Gets the number typed by user and converts to an integer.
  numberInput = document.getElementById('input').value
  numberInput = parseInt(numberInput)

  // Checks the users number.
  if (numberInput > 0) {
    // If the users number was positive it will display "This is a positive number."
    document.getElementById('answer').innerHTML = 'This is a positive number.'
  }

  else if (numberInput < 0) {
    // If the users number is negative it will display "This is a negative number"
    document.getElementById('answer').innerHTML = 'This is a negative number.'
  }

  else if (numberInput === 0) {
    // If the users number is 0 then it will display "This is 0."
    document.getElementById('answer').innerHTML = 'This is 0.'
  }

  else {
    // If the user did not input a valid interger then it will display "Please enter a valid interger"
    document.getElementById('answer').innerHTML = 'Please enter a valid integer.'
  }
}
