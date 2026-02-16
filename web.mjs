// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

// current date for initial render 

let currentDate = new Date;
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear(); 

// months names for displaying header

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  function renderCalendar(currentMonth, currentYear){

    // get the calendar container
    const calendarDiv = document.getElementById("calendar");

    // cleat any existing content so we can redraw..

    calendarDiv.innerHTML = "";

    // update the month/year header

    document.getElementById("current-month").innerText = `${monthNames[currentMonth]} ${currentYear}`;
}

  