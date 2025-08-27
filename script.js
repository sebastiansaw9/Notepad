    function checkInput() {
      // Get the value from the input box
      var userInput = document.getElementById("Password").value;

      // Define the keyword or condition you're checking for
      if (userInput.includes("1234")) {
        // Redirect to another page if condition is met
        window.location.href = "./notepad.html";
      } else {
        // Optional: alert if condition is not met
        alert("Input doesn't contain the keyword.");
      }
    }