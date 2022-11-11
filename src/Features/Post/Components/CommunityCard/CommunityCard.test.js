import Enzyme, { shallow } from "enzyme";
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import CommunityCard from "./CommunityCard";

describe("the card of community", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SubmitDestinationProvider>
          <CommunityCard />
        </SubmitDestinationProvider>
      )
    ).toMatchSnapshot();
  });
});
