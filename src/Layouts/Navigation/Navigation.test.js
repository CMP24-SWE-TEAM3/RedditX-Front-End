import {shallow} from 'enzyme';
import { AuthProvider } from 'Features/Authentication/Contexts/Authentication';

// import Components
import Navigation from "./Navigation";

describe("Navbar Component", () => {
    it("this is a test for Navbar Component", () => {
        expect(
          shallow(
            <AuthProvider>
              <Navigation />
            </AuthProvider>
          )
        ).toMatchSnapshot();

    });
});