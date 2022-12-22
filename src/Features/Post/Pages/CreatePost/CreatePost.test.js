import { render, screen, fireEvent } from "@testing-library/react";

// Import components
import CreatePost from "./CreatePost";

import { shallow } from "enzyme";

describe("Create post page", () => {
  it("should render without crashing", () => {
    shallow(<CreatePost />);
  });
});
