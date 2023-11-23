import { render } from "@testing-library/react";
import Main, { initializeTimes, reducer } from "./Main";

test("initializeTimes returns the correct initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
