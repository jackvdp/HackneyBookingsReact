import React from "react";
import { render } from "@testing-library/react";
import BookingButton from "./BookingButton";

describe("BookingButton tests", () => {
  it("should render", () => {
    expect(render(<BookingButton />)).toBeTruthy();
  });
});