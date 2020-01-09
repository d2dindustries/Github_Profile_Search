import React from "react"
import { render } from "@testing-library/react"

// You have to write data-testid

test("Displays the correct footer", () => {
  const { getByTestId } = render(<footer data-testid="app-footer" className="app-footer"/>)
  // Assertion
  expect(getByTestId("app-footer")).toBeInTheDocument();
  expect(getByTestId("app-footer")).toHaveClass("app-footer");
  // --> Test will pass
})