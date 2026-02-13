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
    description: "Remnant Service at 6:00pm",
    items: [
      "Worshiping together.",
      "Praying together.",
      "Listening to the word together.",
      "Games like Bible trivia."
    ]
  }
];

const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const cardItems = document.getElementById("card-items");
const toggleButton = document.getElementById("toggle-card-btn");
const joinWeekendButton = document.getElementById("join-weekend-btn");

let activeCardIndex = 0;

function renderCard(card) {
  if (!cardTitle || !cardDescription || !cardItems) {
    return;
  }

  cardTitle.textContent = card.title;
  cardDescription.textContent = card.description;
  cardItems.innerHTML = "";

  card.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    cardItems.appendChild(listItem);
  });
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    activeCardIndex = activeCardIndex === 0 ? 1 : 0;
    renderCard(cardStates[activeCardIndex]);
  });
}

if (joinWeekendButton) {
  joinWeekendButton.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

renderCard(cardStates[activeCardIndex]);
