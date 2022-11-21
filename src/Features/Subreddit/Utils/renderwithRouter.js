// Helper function
// import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
export function renderWithRouterMatch(
    ui,
    {
      path = "/",
      route = "/",
      
    } = {}
  ) {
    return {
      ...render(
        <Router >
          <Route path={path} component={<ui com = {[]} subscribed = {[]}/>} />
        </Router>
      )
    };
  }