function copyEmail() {
  let inputElement = "salman.mohammed.vlr@gmail.com";

  let notification = document.getElementById("notification");
  navigator.clipboard.writeText(inputElement);
  notification.innerText = "Email copied";
  notification.style.color = "white";

  // Get the mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Set the position of the notification near the cursor
  notification.style.left = mouseX + 20 + "px"; // Adjust for spacing
  notification.style.top = mouseY + "px";
  notification.style.display = "block";

  // Hide the notification after 2 seconds (adjust as needed)
  setTimeout(function () {
    notification.style.display = "none";
  }, 500);
}

// Attach the copyEmail function to the input element click event
document.getElementById("input").addEventListener("click", copyEmail);




