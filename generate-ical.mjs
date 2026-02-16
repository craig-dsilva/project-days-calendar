import { getEventDate } from "./common.mjs";

import daysData from "./days.json" with { type: "json" };

for (let i = 2020; i <= 2030; i++) {
  // Loop through days.json
  daysData.forEach((event_) => {
    // Gets the date of events every year
    const eventDate = getEventDate(
      i,
      event_.monthName,
      event_.dayName,
      event_.occurrence,
    );
    // Converts the date to string and turns it into an array
    const dateArr = eventDate.toISOString().slice(0, 10).split("-");
    fetch(event_.descriptionURL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}
