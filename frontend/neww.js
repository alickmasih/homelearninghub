// Get the elements
const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".close-btn");

// Show the pop-up when login button is clicked
loginButton.addEventListener("click", () => {
  loginPopup.style.display = "flex";
});

// Hide the pop-up when close button is clicked
closeBtn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

// Hide the pop-up when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});
