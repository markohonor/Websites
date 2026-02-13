// For adding events add commas afterwards
const calendarData = [
  {
    month: "January",
    events: ["Prayer + Fast Week"]
  },
  {
    month: "February",
    events: ["Nothing"]
  },
  {
    month: "March",
    events: ["Nothing"]
  },
  {
    month: "April",
    events: ["Youth Camp 10th-12th"]
  },
  {
    month: "May",
    events: ["Nothing"]
  },
  {
    month: "June",
    events: ["Nothing"]
  },
  {
    month: "July",
    events: ["Nothing"]
  },
  {
    month: "August",
    events: ["Nothing"]
  },
  {
    month: "September",
    events: ["Nothing"]
  },
  {
    month: "October",
    events: ["Nothing"]
  },
  {
    month: "November",
    events: ["Nothing"]
  },
  {
    month: "December",
    events: ["Nothing"]
  }
];

const calendarGrid = document.getElementById("calendar-grid");

function renderCalendar(months) {
  if (!calendarGrid) {
    return;
  }

  calendarGrid.innerHTML = "";

  months.forEach(({ month, events }) => {
    const card = document.createElement("article");
    card.className = "month-card";

    const heading = document.createElement("h2");
    heading.textContent = month;

    const list = document.createElement("ul");

    events.forEach((eventName) => {
      const listItem = document.createElement("li");
      listItem.textContent = eventName;
      list.appendChild(listItem);
    });

    card.append(heading, list);
    calendarGrid.appendChild(card);
  });
}

renderCalendar(calendarData);
