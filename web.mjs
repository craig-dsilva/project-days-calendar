// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
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

//Populate month/year dropdowns

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  function populateDropdowns () {
    // Months

    monthDropdown.innerHTML = "";
    months.forEach((name, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = name;
      monthDropdown.appendChild(option); 
    });

    monthDropdown.value = currentMonth;
    // Years

    yearDropDown.innerHTML = "";
    for (let y = 1900; y<= 2100 ; y++){
      const option = document.createElement("option");
      option.value = index;
      option.textContent = name;
      yearDropdown.appendChild(option);
    }
    yearDropdown.value = currentYear;
  }

  // Render the calendar grid
  function renderCalendar(month, year){
    calendarDiv.innerHTML = ""; // clear old calendar
    monthHeader.textContent = `${months[month]} ${year}`;

    // days in moth

    const daysInMonth = new Date(year, month +1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

     // Convert Sunday=0 to Sunday=6 so Monday=0

     const startDay = (firstDay + 6) % 7; // Adjust start day for Monday-first calendar

     let date = 0; // intialise day counter
     
 // loop through weeks and days
  for (let week = 0 ; week < 6 ; week++) {
    const row = document.createElement("div");
    row.className = "calendar-row";

    for (let day = 0; day < 7; day++){
      const cell = document.createElement("div");
      cell.className = "calendar-cell";
    }
  }

  }