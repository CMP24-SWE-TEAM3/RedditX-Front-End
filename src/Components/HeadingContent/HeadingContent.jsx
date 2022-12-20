import CategoryContext from "Contexts/CategoryContext/Category-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainLinks from "../MainLinks/MainLinks";
import {
  Heading,
  Center,
  HeadingContentLayout,
  HeadingHeader,
  SubLinks,
  SubLinksList,
  SubLinksListElement,
  SubLinksListElementLink,
} from "./HeadingContent.styled";

const HeadingContent = ({ setActive, Active }) => {
  const ctx = useContext(CategoryContext);
  return (
    <Heading>
      <Center>
        <HeadingContentLayout>
          <HeadingHeader>{ctx.Category}</HeadingHeader>
          <SubLinks>
            <SubLinksList>
              <SubLinksListElement last={false}>
                {/* <SubLinksListElementLink to={"#"}>
                  Basketball
                </SubLinksListElementLink> */}
                {/* <Link to="#">Basketball, </Link> */}
              </SubLinksListElement>
              <SubLinksListElement last={true}>
                {/* <SubLinksListElementLink to={"#"}>
                  Basketball
                </SubLinksListElementLink> */}
                {/* <Link to={"#"}>Basketball</Link> */}
              </SubLinksListElement>
            </SubLinksList>
          </SubLinks>
        </HeadingContentLayout>
        <MainLinks Active={Active} setActive={setActive} />
      </Center>
    </Heading>
  );
};

export default HeadingContent;
