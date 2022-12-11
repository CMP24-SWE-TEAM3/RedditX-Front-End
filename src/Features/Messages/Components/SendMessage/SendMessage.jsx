import {
  Content,
  Spacer,
  FormField,
  FieldDiv,
  Title,
  FieldContent,
  FromSelection,
  TitleDescription,
  Inputs,
  MessageContainer,
  Message,
  SendBtn,
  Heading,
  Page,
  Margin,
  Error,
} from "./SendMessage.styled";
import { useState } from "react";

/**
 * Component that contains Compose Message
 *
 * @Component
 * @returns {React.Component}
 */
function SendAMessage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { from, to, subject, message } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(formData);
  };

  return (
    <Page>
      <Margin>
        <Content>
          <Spacer>
            <Heading>Send A Private Message</Heading>
          </Spacer>
          <FormField onSubmit={handleSubmit}>
            <Spacer>
              <FieldDiv>
                <Title>From</Title>
                <FieldContent>
                  <FromSelection
                    onChange={handleChange}
                    value={formData.from}
                    name="from"
                    required
                  >
                    <option value={"--Choose--"}>--Choose--</option>
                    <option value={"mohamed"}>mohamed</option>
                    <option value={"ahmed"}>ahmed</option>
                  </FromSelection>
                </FieldContent>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>to
                  <TitleDescription>
                    (username, or /r/name for that subreddit's moderators)
                  </TitleDescription>
                </Title>
                
                <Inputs
                  type="text"
                  onChange={handleChange}
                  value={formData.to}
                  name="to"
                  required
                />
                <Error className={formData.to !== "" ? "" : "active"}>
                  please enter a username
                </Error>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>Subject</Title>
                <Inputs
                  type="text"
                  onChange={handleChange}
                  value={formData.subject}
                  name="subject"
                  required
                />
                <Error className={formData.subject !== "" ? "" : "active"}>
                  please enter a subject
                </Error>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>Message</Title>
                <MessageContainer>
                  <Message
                    type="text"
                    onChange={handleChange}
                    value={formData.message}
                    name="message"
                    required
                  />
                  <Error className={formData.message !== "" ? "" : "active"}>
                    we need something here
                  </Error>
                </MessageContainer>
              </FieldDiv>
            </Spacer>
            <SendBtn>Send</SendBtn>
          </FormField>
        </Content>
      </Margin>
    </Page>
  );
}

export default SendAMessage;
