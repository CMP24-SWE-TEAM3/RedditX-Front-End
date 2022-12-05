import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaLeaf, FaSellcast } from "react-icons/fa";
import { StyledModal } from "./SettingModal.styled.js";

export default function SettingModal() {
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { email, password } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function validateEmail(email) {
    let validator = require("email-validator");
 
    if(validator.validate(email)) {
      console.log("Valid Email");
      return true;
    }
    else  {
      console.log("Invalid Email");
      return false;
    }
  }

  useEffect(() => {
    setValid(validateEmail(formData.email));
  }, [formData.email]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>      
      <Button variant="primary" onClick={handleShow} className="change-btn">
        Change
      </Button>
      
    
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="env-container">
            <div className="env">
              <svg
                className="svg-circle"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"></path>
                <path d="M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"></path>
              </svg>
              <svg
                className="svg-env"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle r="9" cx="9" cy="9"></circle>
                <path
                  d="m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z"
                  fill="inherit"
                  fill-rule="evenodd"
                  transform="translate(-1 -1)"
                ></path>
              </svg>
            </div>
          </div>
          <Modal.Title>Update your email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Update your email below. There will be a new verification email sent
            that you will need to use to verify this new email.
          </p>
          <Form>
            <Form.Group
              className="mb-4 input-field"
              controlId="exampleForm.ControlInputPassword"
            >
              <Form.Control
                type="password"
                placeholder="CURRENT PASSWORD"
                onChange={handleChange}
                autoFocus
                value={formData.password}
                name="password"
              />
              <div
                className={
                  valid || formData.password === ""
                    ? "password-correct"
                    : "password-correct error-active"
                }
              >
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414"
                      fill="inherit"
                    ></path>
                  </g>
                </svg>
              </div>
            </Form.Group>
            
            <Form.Group
              className="mb-4 input-field"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="email"
                placeholder="NEW EMAIL"
                autoFocus
                onChange= {handleChange}
                value={formData.email}
                name="email"
              />
              <div
                className={
                  valid || formData.email === ""
                    ? `enter-email-error`
                    : `enter-email-error error-active`
                }
              >
                {!valid&&<svg
                  class="_3ppQRTaxPs0X9rsFYHfSdf"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="9" cx="9" cy="9"></circle>
                  <path
                    d="m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z"
                    fill="inherit"
                    fill-rule="evenodd"
                    transform="translate(-1 -1)"
                  ></path>
                </svg>}
                {valid&&<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414"
                      fill="inherit"
                    ></path>
                  </g>
                </svg>}
              </div>
              <p className="enter-email ">Please enter a valid email</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className= {valid&&formData.password !== ""? "btn-save":  "btn-save disabled"}
            onClick={handleClose}
          >
            Save email
          </Button>
        </Modal.Footer>
      </StyledModal>
      </>
  );
}