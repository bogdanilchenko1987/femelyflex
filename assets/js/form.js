document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");
  const inputs = form.querySelectorAll("input, textarea");
  const button = form.querySelector("button");
  const modal = document.getElementById("success-modal");

  button.addEventListener("click", () => {
   
    inputs.forEach((field) => (field.value = ""));


    modal.classList.remove("hidden");

  
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 1500);
  });
});
