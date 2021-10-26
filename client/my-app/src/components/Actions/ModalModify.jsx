import FormModify from "../Form/FormModify";
import { Modal } from "react-bootstrap";
import Axios from "axios";

function ModalModify({ data, show, onHide, setList }) {
  const editData = (values) => {
    Axios.put(`http://localhost:3001/api/edit/${data.id}`, values);
    setList({...values, id: data.id, tipo: data.tipo}, 'update')
    console.log(values)
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
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
        <FormModify data={data} editData={editData} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalModify;
