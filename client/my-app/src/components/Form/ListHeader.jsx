import { React, memo, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Modal from "../Actions/ModalCreate";
import Axios from "axios";

const ListHeader = ({ setFilter, setList }) => {
  const [modalShow, setModalShow] = useState(false);

  const createElement = (values) => {
    Axios.post("http://localhost:3001/api/insert", values).then(() => {});
    setList(values, 'create')
  };

  return (
    <Row style={{marginBottom: 25, marginTop: 25}}>
      <Col sm={9}>
        <Button onClick={() => setModalShow(true)}>
          Agregar <i class="fas fa-plus"></i>
        </Button>
      </Col>
      <Col sm={3}>
        <Form.Select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filtrar por tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </Form.Select>
      </Col>
      <Modal show={modalShow} onHide={() => setModalShow(false)} createElement={createElement} />
    </Row>
  );
};

export default memo(ListHeader);
