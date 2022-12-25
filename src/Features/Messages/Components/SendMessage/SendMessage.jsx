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
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useLocation } from "react-router-dom";
/**
 * Component that contains Compose Message
 *
 * @Component
 * @param {boolean} reRender - Used to signal a re-render message to parent component
 * @returns {React.Component}
 */
function SendAMessage({Rerender}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receiver = queryParams.get("to");
  const sender = queryParams.get("from");
  
  const auth = useAuth();
  const [composeRes, errorCompose, loadingCompose, fetchData] = useFetchFunction();
  const [subjectErr, setSubjectErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [toErr, setToErr] = useState(false);
  const [formData, setFormData] = useState({

    from: "",
    to: receiver? receiver:"",
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
      console.log(formData.to);
      console.log(auth.getUserName());
      let dataObject;
      if(sender && receiver) {
        dataObject = {
          fromID: `t2_${sender}`,
          toID: `t2_${receiver}`,
          subject: formData.subject,
          text: formData.message
        }
      }
      else {
        dataObject = {
          fromID: auth.getUserName(),
          toID: `t2_${formData.to}`,
          subject: formData.subject,
          text: formData.message
        };
      }
      
      composeMessage(fetchData, dataObject, auth);
      Rerender((prev)=>!prev);
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
