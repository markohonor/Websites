const calendarData = [
  {
    month: "January",
    events: [
      "Remnant Friday Fellowship: Friday 9th, 16th, 23rd January",
      "Serving Sunday: No serving Sunday due to Ladies Retreat",
      "2026 Vision Planning Meeting with Pastor (Leaders only): Saturday 10th January",
      "2026 Vision Presentation to Remnant: Friday 16th January",
      "Boys Mentorship: Friday 23rd January",
      "Ladies Retreat: Friday 23rd - Sunday 25th January"
    ]
  },
  {
    month: "February",
    events: [
      "Serving Sunday: Sunday 1st February",
      "Remnant Friday Fellowship: Friday 6th, 13th, 20th February",
      "Life Skills Mentorship: Friday 6th February",
      "Bibles and Bonnets: TBC (use one Fellowship Friday, include boys mentorship)",
      "Boys Mentorship: Same day as Bibles and Bonnets"
    ]
  },
  {
    month: "March",
    events: [
      "Serving Sunday: Sunday 1st March",
      "Remnant Friday Fellowship: Friday 6th, 13th, 20th March",
      "Campus Coffee Visit (plan university assignments): Saturday 7th March",
      "Girls and Boys Mentorship: Friday 13th March"
    ]
  },
  {
    month: "April",
    events: [
      "Remnant Friday Fellowship: Friday 10th, 17th April",
      "Serving Sunday: Sunday 26th April",
      "Girls and Boys Mentorship: Friday 10th April",
      "Momentum Youth Camp: TBC"
    ]
  },
  {
    month: "May",
    events: [
      "Serving Sunday: Sunday 31 May (TBC - exams)",
      "Remnant Friday Fellowship: Friday 1st, 15th, 22nd May",
      "Remnant Leaders Retreat (Dylan to confirm exam/disso timing): TBC",
      "Life Skills Mentorship: Friday 15th May (tentative)"
    ]
  },
  {
    month: "June",
    events: [
      "Remnant Friday Fellowship: Friday 5th, 19th, 26th June",
      "Serving Sunday: Sunday 28th June",
      "Street Evangelism: Saturday 13th June",
      "Girls and Boys Mentorship: Friday 19th June",
      "HHC Seamless Youth Conference: TBC"
    ]
  },
  {
    month: "July",
    events: [
      "Serving Sunday: Sunday 26th July",
      "Midweek Service Commence: Wednesday 29th July",
      "Remnant Day Trip/BBQ: TBC"
    ]
  },
  {
    month: "August",
    events: [
      "Serving Sunday: Sunday 2nd August",
      "Midweek Service: Wednesdays 5th, 12th, 19th, 26th August",
      "Remnant Conference (Saturday and Sunday): TBC",
      "Life Skills Mentorship: Wednesday 12th August"
    ]
  },
  {
    month: "September",
    events: [
      "Serving Sunday: Sunday 6th September",
      "Remnant Friday Fellowship: Friday 4th, 11th, 18th September",
      "Street Evangelism: Saturday 5th September"
    ]
  },
  {
    month: "October",
    events: [
      "Serving Sunday: Sunday 4th October",
      "Remnant Friday Fellowship: Friday 2nd, 9th, 16th October",
      "Girls and Boys Mentorship: Friday 2nd October",
      "TPC Preparation (arrange roles and responsibilities): Friday 9th October",
      "Turning Point Conference: 27th October - 1st November"
    ]
  },
  {
    month: "November",
    events: [
      "Conference Debrief with Pastor: Sunday 15th November",
      "Serving Sunday: Sunday 29th November",
      "Campus Coffee Visit: Saturday 14th November",
      "Vision of Tomorrow Conference: TBC"
    ]
  },
  {
    month: "December",
    events: [
      "Remnant Friday Fellowship: Friday 4th, 11th December",
      "BLF Christmas Party: TBC",
      "2027 Vision Planning Evening with Pastor: Friday 11th December"
    ]
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
