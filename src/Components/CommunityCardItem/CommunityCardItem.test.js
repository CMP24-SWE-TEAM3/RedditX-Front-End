import {shallow} from 'enzyme';

// import Components
import CommunityCardItem from "./CommunityCardItem";
import { BrowserRouter, Routes } from "react-router-dom";

describe("Community Card Item Component", () => {
    it("this is a test for Community Card Item Component", () => {
        expect(
          shallow(
            <BrowserRouter>
              <Routes>
                <CommunityCardItem />
              </Routes>
            </BrowserRouter>
          )
        ).toMatchSnapshot();

    });
});