import React from "react"
import { render } from "@testing-library/react"
import ProfileContainer from "../profilecontainer"

test("Displays the correct ProfileContainer", () => {
  const { getByTestId } = render(<ProfileContainer data-testid="profile-container" className="profile-container"/>)
  // Assertion
  // TODO: Add Test
  // --> Test will pass
})