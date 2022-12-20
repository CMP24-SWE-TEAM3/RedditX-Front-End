import BlockPeople from "Features/settings/Components/BlockPeople/BlockPeople";
import CompContainer from "Features/settings/Components/CompContainer/CompContainer";
import { Header } from "Features/settings/Layouts/EmailsPage/EmailsPage.styled";
import { Text } from "./PrivacyPage.styled";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <>
      <Header>Safety & Privacy</Header>
      <Text>
        Manage how we use data to personalize your Reddit experience, and
        control how other redditors interact with you. To learn more, visit our
        <span>
          <Link to="#">Privacy & Security FAQs .</Link>
        </span>
      </Text>
      <CompContainer headerTitle="Safety">
        <BlockPeople />
      </CompContainer>
    </>
  );
};

export default PrivacyPage;
