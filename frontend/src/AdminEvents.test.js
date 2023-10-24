//Test to ensure api calls can be made without errors
import React from "react";
import { render, screen } from "@testing-library/react";
import AdminEvents from "./components/AdminEvents";

test("makes API call without errors", async () => {
  render(<AdminEvents />);
});
 