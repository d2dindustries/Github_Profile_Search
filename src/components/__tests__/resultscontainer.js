import React from "react"
import { render } from "@testing-library/react"
import ResultsContainer from "../resultscontainer"

test("Displays the correct ResultsContainer", () => {
  const { getByTestId } = render(<ResultsContainer data-testid="search-results" className="search-results" />)
  // Assertion
  // TODO: Add Test
  // --> Test will pass
})