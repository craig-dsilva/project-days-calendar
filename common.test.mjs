import { describe, it } from "node:test";
import assert from "node:assert";
import { getEventDate } from "./common.mjs";

describe("getEventDate", () => {
  const event_ = {
    name: "Ada Lovelace Day",
    monthName: "October",
    dayName: "Tuesday",
    occurrence: "second",
    descriptionURL: "https://codeyourfuture.github.io/The-Piscine/days/ada.txt",
  };

  it("ada lovelace day should return 13th October for 2026", () => {
    const getAdaLovelaceDay = getEventDate(
      2026,
      event_.monthName,
      event_.dayName,
      event_.occurrence,
    );
    assert.match(getAdaLovelaceDay.toISOString(), /2026-10-13/);
  });

  it("ada lovelace day should return 12th October for 2027", () => {
    const getAdaLovelaceDay = getEventDate(
      2027,
      event_.monthName,
      event_.dayName,
      event_.occurrence,
    );
    assert.match(getAdaLovelaceDay.toISOString(), /2027-10-12/);
  });
});
