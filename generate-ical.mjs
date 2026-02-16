import { getEventDate } from "./common.mjs";

import daysData from "./days.json" with { type: "json" };

console.log(daysData[0]);
console.log(
  getEventDate(
    2026,
    daysData[0].monthName,
    daysData[0].dayName,
    daysData[0].occurrence,
  ),
);
