// These 3 are helper data to use with the getEventDate function
const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeksArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const occurrenceNumber = { first: 1, second: 2, third: 3, last: -1 };

function getEventDate(year, month, dayOfWeek, occurrence) {
  if (occurrence > 0) {
    // If occurrence is first, second or third
    const firstWeekdayOfMonth = new Date(year, month, 1).getDay(); // Gets the weekday for the 1st day of the month
    let day = 1 + ((dayOfWeek - firstWeekdayOfMonth + 7) % 7); // Difference between day of the week and 1st day of the month's week
    day += (occurrence - 1) * 7; // Gets the date of the month
    return new Date(year, month, day, 3); // I have add the hour as 3 to avoid problems with daylight saving
  } else {
    // If occurrence is last
    const lastDayOfMonth = new Date(year, month + 1, 0); // Gets the last day of the month
    const lastDate = lastDayOfMonth.getDate(); // Gets the date from the last day of the month
    const lastDayOfWeek = lastDayOfMonth.getDay();
    let day = lastDate - ((lastDayOfWeek - dayOfWeek + 7) % 7);
    day += (occurrence + 1) * 7;
    return new Date(year, month, day, 3);
  }
}

// Example usage for Ada Lovelace Day
// getEventDate(2026, monthsArr.indexOf("October"), weeksArr.indexOf("Tuesday"), occurrenceNumber["second"]);
