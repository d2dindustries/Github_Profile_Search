import React from "react"
import { render } from "@testing-library/react"

import Header from "../header"

// You have to write data-testid

test("Displays the correct header", () => {
  const { getByTestId } = render(<Header data-testid="app-header" siteTitle="Github Challenge"/>)
  // Assertion
  expect(getByTestId("app-header")).toBeInTheDocument()
  // --> Test will pass
})