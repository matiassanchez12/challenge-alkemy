import React from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

const ModalDelete = ({ onHide, show, data, setList }) => {
  const removeData = () => {
    Axios.delete(`http://localhost:3001/api/remove/${data.id}`);
    setList(data, 'delete')
    onHide();
  };
  return (
    <Modal size="sm" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Eliminar este registro?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={removeData}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
