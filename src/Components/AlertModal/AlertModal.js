import {Modal, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

function AlertModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            You are not logged
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You must login before. You can login in <Link to="/login">here</Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AlertModal