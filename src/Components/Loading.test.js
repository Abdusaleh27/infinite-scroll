import Loading from "./Loading";
import { render, screen } from "@testing-library/react";
import React from "react";
//smoke test
it("Loading component renders", () => {
  render(<Loading />);
});

//snapshot test
it("Loading component snapshot test", () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});

//contains the loading indicators tests

test("Loading component contains loading indicators", () => {
  render(<Loading />);
  expect(screen.getByRole("status")).toBeInTheDocument();
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
