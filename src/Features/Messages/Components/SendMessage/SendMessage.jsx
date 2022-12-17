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
import composeMessage from "../../Services/ComposeMessage";
import useFetchFunction from "Hooks/useFetchFunction";

/**
 * Component that contains Compose Message
 *
 * @Component
 * @returns {React.Component}
 */
function SendAMessage() {
  const [composeRes, errorCompose, loadingCompose, fetchData] = useFetchFunction();
  const [subjectErr, setSubjectErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [toErr, setToErr] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { from, to, subject, message } = event.target;

    if(formData.to!=="" && toErr) {   //Input changed and we already have an error
      setToErr(false);
    }
    if(formData.message!=="" && messageErr) {
      setMessageErr(false);
    }
    if(formData.subject!=="" && subjectErr) {
      setSubjectErr(false);
    }

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

    //Check Each Error Type and increment errors [Errors should be 0 to submit]
    let errors = 0;
    if(formData.to==="") {
      setToErr(true);
      errors++;
    }
    if (formData.subject==="") {
      setSubjectErr(true);
      errors++;
    }
    if (formData.message==="") {
      setMessageErr(true);
      errors++;
    }
    if(errors===0) 
    {
      let dataObject = {
        toID: `t3_${formData.to}`,
        subject: formData.subject,
        text: formData.message
      };
      composeMessage(fetchData, dataObject);
      
      //Clearing form on successfull submission
      setFormData({from:""});
      setFormData({to:""});
      setFormData({subject:""});
      setFormData({message:""});
      console.log(formData);
    }
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
                />
                <Error className={toErr? "active" : ""}>
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
                />
                <Error className={subjectErr ? "active" : ""}>
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
                  />
                  <Error className={messageErr? "active" : ""}>
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
