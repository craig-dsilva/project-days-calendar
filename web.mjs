// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { monthsArr } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

// Track current month/year

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// DOM references

const calendarDiv = document.getElementById("calendar");
const monthHeader = document.getElementById("current-month");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const monthDropdown = document.getElementById("month-select");
const yearDropdown = document.getElementById("year-select");

// populate year/month dropdown
function populateDropdowns() {
  // Months

  monthDropdown.innerHTML = "";
  monthsArr.forEach((monthName, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = monthName;
    monthDropdown.appendChild(option);
  });

  monthDropdown.value = currentMonth;
  // Years

  yearDropdown.innerHTML = "";
  for (let y = 1900; y <= 2100; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearDropdown.appendChild(option);
  }
  yearDropdown.value = currentYear;
}

// Render the calendar grid

function renderCalendar(month, year) {
  calendarDiv.innerHTML = ""; // clear old calendar
  monthHeader.textContent = `${monthsArr[month]} ${year}`;

  // how many days in this month

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Convert Sunday=0 to Sunday=6 so Monday=0

  const startDay = firstDay // Adjust start day for Sunday-first calendar

  let date = 1; // intialize day counter

  // loop through weeks and days
  for (let week = 0; week < 6; week++) {
    const row = document.createElement("div");
    row.className = "calendar-row";
    row.style.display = "flex"; // make row a flex container
    row.style.marginBottom = "2px"; // spacing between rows

    // 7 days in a week
    for (let day = 0; day < 7; day++) {
      const cell = document.createElement("div");
      cell.className = "calendar-cell";
      cell.style.border = "1px solid black"; // minimal style
      cell.style.width = "80px";
      cell.style.height = "80px";
      cell.style.textAlign = "center";
      cell.style.verticalAlign = "middle";
      cell.style.lineHeight = "80px";

      // Fill empty cells before first day

      if (week === 0 && day < startDay) {
        cell.textContent = "";
      } else if (date > daysInMonth) {
        cell.textContent = "";
      } else {
        cell.textContent = date;
        date++;
      }

      row.appendChild(cell);
    }

    calendarDiv.appendChild(row);
    if (date > daysInMonth) break; // stop creating rows once all days rendered
  }
}
// initial setup
populateDropdowns();
renderCalendar(currentMonth, currentYear);
