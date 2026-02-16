import { fetchDescription, getEventDate } from "./common.mjs";

import daysData from "./days.json" with { type: "json" };

const events = [];

for (let i = 2024; i <= 2026; i++) {
  // Loop through days.json
  for (const event_ of daysData) {
    // Gets the date of events every year
    const eventDate = getEventDate(
      i,
      event_.monthName,
      event_.dayName,
      event_.occurrence,
    );
    // Converts the date to string and turns it into an array
    const dateArr = eventDate.toISOString().slice(0, 10).split("-");
    const description = await fetchDescription(event_.descriptionURL);
    events.push({ title: event_.name, start: dateArr, description });
  }
}
