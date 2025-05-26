document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const input = document.getElementById("UserEmail");
  const message = document.getElementById("thank-you-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = input.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
      form.classList.add("hidden");
      message.classList.remove("hidden");
    } else {
      input.classList.add("ring-2", "ring-red-400");
      setTimeout(() => {
        input.classList.remove("ring-2", "ring-red-400");
      }, 2000);
    }
  });
});
