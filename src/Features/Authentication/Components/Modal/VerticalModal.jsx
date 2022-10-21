import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyModal } from './VerticalModal.styled';

import SignUp from 'Features/Authentication/Layouts/SignUp/SignUp';

import LogIn from 'Features/Authentication/Layouts/LogIn/LogIn';

const VerticalModal = ({...props}) => {
  return (
    <MyModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <SignUp/>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </MyModal>
  );
}

export default VerticalModal;