import { Modal } from "react-bootstrap";
import MyForm from "../Form/FormCreate";

function MyModal({refreshTable, createElement, ...props}) {
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
        <MyForm createElement={createElement} refreshTable={refreshTable} />
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
