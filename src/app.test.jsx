
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the blog name", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: "John's Tech Journal" })
  ).toBeInTheDocument();
});
