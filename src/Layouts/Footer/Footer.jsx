// imports
import React from "react";
import { Container, Content, Section, Menu, CopyRight } from "./Footer.styled";
import { Link } from "react-router-dom";

/**
 * Component that has a languages of different countries , privacy polices and content policies
 *
 * @returns {React.Component}
 */
const Footer = () => {
  return (
    <Container>
      <Content>
        <Menu>
          <Section>
            <Link href={"https://www.redditinc.com/policies/user-agreement"}>
              User Agreement{" "}
            </Link>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Privacy Policy
            </Link>
          </Section>
          <Section>
            <Link href={"https://www.redditinc.com/policies/user-agreement"}>
              Content Policy{" "}
            </Link>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Moderator Code of Conduct
            </Link>
          </Section>
        </Menu>
        <Menu>
          <Section>
            <Link href={"https://www.redditinc.com/policies/user-agreement"}>
              English{" "}
            </Link>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Français
            </Link>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Italiano
            </Link>
          </Section>
          <Section>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Deutsch
            </Link>
            <Link href={"https://www.redditinc.com/policies/user-agreement"}>
              Español
            </Link>
            <Link href={"https://www.redditinc.com/policies/privacy-policy"}>
              Português
            </Link>
          </Section>
        </Menu>
        <CopyRight>Reddit Inc © 2022. All rights reserved</CopyRight>
      </Content>
    </Container>
  );
};

export default Footer;
