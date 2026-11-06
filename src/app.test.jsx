import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the blog name", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "John's Tech Journal"
    })
  ).toBeInTheDocument();
});

test("renders blog articles", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "My Journey into Software Engineering"
    })
  ).toBeInTheDocument();
});