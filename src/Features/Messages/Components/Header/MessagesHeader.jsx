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
} from "./MessagesHeader.styled";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

/**
 * Component that contains the header of the Messages page
 *
 * @Component
 * @returns {React.Component}
 */

function MessagesHeader() {
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
                <SecondaryLink to={`/message/inbox/all`}>All</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/inbox/unread`}>Unread</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/inbox/messages`}>Messages</SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/inbox/selfreply`}>
                  Post Replies
                </SecondaryLink>
              </SecondaryLI>
              <SecondaryLI>
                <SecondaryLink to={`/message/inbox/mentions`}>
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

export default MessagesHeader;
