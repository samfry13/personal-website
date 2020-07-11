var button = document.getElementById("flip");
var card = document.getElementById("card");
button.addEventListener("click", () => {
    card.classList.toggle("card_flipped");
});