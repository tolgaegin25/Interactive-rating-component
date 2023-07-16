const buttons = document.querySelectorAll(".rate button");
const submitButton = document.querySelector(".submit-btn");
const container = document.getElementById("container");
const thankYouContainer = document.getElementById("selected-area");
const selectedRatingElement = document.querySelector(".selected-rating");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedRatingElement.textContent = button.textContent;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", () => {
  container.innerHTML = "";
  thankYouContainer.style.display = "flex";
  container.appendChild(thankYouContainer);
});
submitButton.disabled = true;
