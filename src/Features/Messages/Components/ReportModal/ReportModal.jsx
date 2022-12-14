import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { StyledModal, Report } from "./ReportModal.styled";

export default function ReportModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Report onClick={handleShow}>Report</Report>

      <StyledModal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="body-text">
            Thanks for looking out for yourself and your fellow redditors by
            reporting things that break the rules. Let us know what's happening,
            and we'll look into it.
          </p>
          <div className="btn-container">
            <div className="btn-div">
              <label className="btn-label">Harassment</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Threating violence</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Hate</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Sexualization of minors</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Sharing personal information</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Non-consensual intimate media</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Prohibited transaction</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Imperosnation</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Copyright violation</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Trademark violation</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Self-harm or suicide</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Spam</label>
            </div>
            <div className="btn-div">
              <label className="btn-label">Misinforamtion</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="not-sure-container">
            <svg
              className="icon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"></path>
              </g>
            </svg>
            <p className="not-sure-paragraph ">
              Not sure if something is breaking the rules?
              <a className="review-policy"> Review Reddit's Content Policy</a>
            </p>
          </div>
          <Button className="submit" variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </StyledModal>
    </>
  );
}