document.querySelector("form").addEventListener("submit", function (e) {
  const response = grecaptcha.getResponse();
  if (!response) {
    e.preventDefault();
    alert("Please verify you are not a robot.");
  }
});
