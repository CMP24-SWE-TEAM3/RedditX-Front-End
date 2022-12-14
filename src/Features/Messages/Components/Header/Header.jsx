import {
  HeadPrimary,
  HeadPrimaryMargin,
  HeadPrimaryUL,
  PrimaryLI,
  PrimaryLinks,
  HeadSecondary,
  HeadSecondaryMargin,
  HeadSecondaryUL,
  SecondaryLI,
  SecondaryLink,
  Body,
} from "./Header.styled";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  let location = useLocation();
  let type = location.pathname.split("/")[2];
  const [allHeader, setAllHeader] = useState(type === "sent" || type === "compose" ? false : true);

  useEffect(() => {
    type = location.pathname.split("/")[2];
    if (type === "sent" || type === "compose") {
      setAllHeader(false);
    } else {
      setAllHeader(true);
    }
  }, [location]);

  return (
    <Body>
      <HeadPrimary>
        <HeadPrimaryMargin>
          <HeadPrimaryUL>
            <PrimaryLI>
              <PrimaryLinks to={`/message/compose`}>
                Send A Private Message
              </PrimaryLinks>
            </PrimaryLI>
            <PrimaryLI>
              <PrimaryLinks to={`/message/inbox`}>Inbox</PrimaryLinks>
            </PrimaryLI>
            <PrimaryLI>
              <PrimaryLinks to={`/message/sent`}>Sent</PrimaryLinks>
            </PrimaryLI>
          </HeadPrimaryUL>
        </HeadPrimaryMargin>
      </HeadPrimary>
      {allHeader && (
        <HeadSecondary>
          <HeadSecondaryMargin>
            <HeadSecondaryUL>
              <SecondaryLI>
                <SecondaryLink to={`/message/inbox`}>All</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/unread`}>Unread</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/messages`}>Messages</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/selfreply`}>
                  Post Replies
                </SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/mentions`}>
                  Username Mentions
                </SecondaryLink>
              </SecondaryLI>
            </HeadSecondaryUL>
          </HeadSecondaryMargin>
        </HeadSecondary>
      )}
    </Body>
  );
}

export default Header;
