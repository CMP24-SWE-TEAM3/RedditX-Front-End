import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

import VerticalModal from '../Components/Modal/VerticalModal';

const TestHome = () => {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default TestHome;