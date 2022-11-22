// Import react router dom
import { BrowserRouter} from "react-router-dom";
// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

/**
 * Function that wraps Children props inside a Browser Router and a Theme Provider
 * @returns {React.Component}The component is being returned.
 */
const TestingComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default TestingComponent;