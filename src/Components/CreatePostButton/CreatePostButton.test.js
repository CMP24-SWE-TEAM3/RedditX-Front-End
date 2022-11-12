import {shallow} from 'enzyme';
import { BrowserRouter, Routes } from "react-router-dom/dist";

// import Components
import CreatePostButton from "./CreatePostButton";

describe("Create Post button Component", () => {
    it("this is a test for Create post button", () => {
        expect(
          shallow(
            <BrowserRouter>
              <Routes>
                <CreatePostButton />
              </Routes>
            </BrowserRouter>
          )
        ).toMatchSnapshot();

    });
});