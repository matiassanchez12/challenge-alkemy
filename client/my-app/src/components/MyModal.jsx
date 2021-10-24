import { Modal } from "react-bootstrap";
import MyForm from "./MyForm";

function MyModal({refreshTable, ...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar nuevo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm refreshTable={refreshTable} />
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
