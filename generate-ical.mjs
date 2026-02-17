import * as ics from "ics";
import { writeFileSync } from "fs";

import { fetchDescription, getEventDate } from "./common.mjs";

import daysData from "./days.json" with { type: "json" };

const events = [];

for (let i = 2020; i <= 2030; i++) {
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
    const dateString = eventDate.toISOString().slice(0, 10).split("-");
    // Converts all data in date to numbers for ics function
    const dateArr = dateString.map((number) => Number(number));
    const description = await fetchDescription(event_.descriptionURL);
    events.push({ title: event_.name, start: dateArr, description });
  }
}

// ics
// This generates value or error when creating ics data
const { error, value } = ics.createEvents(events);

// Prints an error message if an error occurs when creating events
if (error) console.error(error);

try {
  // Generates the ics file
  writeFileSync("event.ics", value);
} catch (error) {
  console.error;
}
