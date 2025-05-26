document.addEventListener("DOMContentLoaded", function () {
  const cookieModal = document.getElementById("cookie-modal");
  const acceptBtn = document.getElementById("accept-cookies");

  const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

  if (!hasAcceptedCookies) {
    cookieModal.classList.remove("hidden");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieModal.classList.add("hidden");
  });
});
