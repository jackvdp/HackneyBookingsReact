import React from "react";
import { render } from "@testing-library/react";
import BookingButton from "./LHBButton";

describe("BookingButton tests", () => {
  it("should render", () => {
    expect(render(<BookingButton />)).toBeTruthy();
  });
});