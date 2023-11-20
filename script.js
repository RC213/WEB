// Get the product list element
var productList = document.querySelector("ul");

// Add a click event listener
productList.addEventListener("click", function(event) {
  // Get the text content of the clicked list item
  var selectedProduct = event.target.textContent;
  
  // Log the selected product to the console
  console.log("Selected Product: " + selectedProduct);
});

// Show submission message when the form is submitted
function displayMessage(event) {
  event.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;

  var message = "Contact Information:\n\n";
  message += "First Name: " + firstName + "\n";
  message += "Last Name: " + lastName + "\n";
  message += "Email: " + email + "\n";

  alert(message);
}

// Confirmation prompt for the cancel button
function confirmCancel() {
  var confirmCancel = confirm("Are you sure you want to cancel? Any entered data will be lost.");

  if (confirmCancel) {
    clearFields();
  }
}

// Clear form fields
function clearFields() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
}