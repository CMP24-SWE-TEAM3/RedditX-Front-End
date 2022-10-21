// Import react (for jsdoc)
import React from "react";

// Import Images
import logo from "./logo.svg";

// Import css
import "App.css";

// Import bootstrap
import { Button } from "react-bootstrap";

import SignUp from './Features/Authentication/Layouts/SignUp/SignUp';

import VerticalModal from "Features/Authentication/Components/Modal/VerticalModal";

import TestHome from "Features/Authentication/Pages/TestHome";

/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  return (
    <TestHome/>
  );
}

export default App;
