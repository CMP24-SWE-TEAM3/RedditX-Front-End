import {shallow} from 'enzyme';
import { BrowserRouter, Routes } from 'react-router-dom/dist';

// import Components
import Post from "./Post";

describe("Post Button Component", () => {
    it("this is a test for Post Button", () => {
        expect(
          shallow(
            <BrowserRouter>
              <Routes>
                <Post />
              </Routes>
            </BrowserRouter>
          )
        ).toMatchSnapshot();

    });
});
