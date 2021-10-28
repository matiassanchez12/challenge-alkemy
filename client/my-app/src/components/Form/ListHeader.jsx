import { React, memo, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";

const ListHeader = ({ setFilter }) => {
  return (
    <Row style={{ marginBottom: 25, marginTop: 25 }}>
      <Col sm={9}></Col>
      <Col sm={3}>
        <Form.Select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filtrar por tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default memo(ListHeader);
