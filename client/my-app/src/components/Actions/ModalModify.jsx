import MyFormModify from "../MyFormModify";
import { Modal } from "react-bootstrap";
import Axios from "axios";

function ModalModify({ data, refreshTable, ...props }) {
  const editData = (values) => {
    Axios.put(`http://localhost:3001/api/edit/${data.id}`, values);
    refreshTable();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar registro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyFormModify data={data} editData={editData} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalModify;
