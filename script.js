const cardStates = [
  {
    title: "This Week",
    description: "The girls will be having bible and bonets event",
    items: [
      "Small group discussions",
      "Bible study",
      "Worship Experience.",
      "Games"
    ]
  },
  {
    title: "Next Week",
    description: "Community Outreach Saturday at 10:00 AM. Meet at the church lot at 9:30 AM.",
    items: [
      "Neighborhood cleanup teams.",
      "Care package prep for families.",
      "Post-event lunch and prayer."
    ]
  }
];

const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const cardItems = document.getElementById("card-items");
const toggleButton = document.getElementById("toggle-card-btn");

let activeCardIndex = 0;

function renderCard(card) {
  cardTitle.textContent = card.title;
  cardDescription.textContent = card.description;
  cardItems.innerHTML = "";

  card.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    cardItems.appendChild(listItem);
  });
}

toggleButton.addEventListener("click", () => {
  activeCardIndex = activeCardIndex === 0 ? 1 : 0;
  renderCard(cardStates[activeCardIndex]);
});

renderCard(cardStates[activeCardIndex]);
