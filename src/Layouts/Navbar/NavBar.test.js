import {shallow} from 'enzyme';
import { AuthProvider } from 'Features/Authentication/Contexts/Authentication';

// import Components
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    it("this is a test for Navbar Component", () => {
        expect(
          shallow(
            <AuthProvider>
              <Navbar />
            </AuthProvider>
          )
        ).toMatchSnapshot();

    });
});