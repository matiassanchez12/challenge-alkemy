import { React, memo, useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import Modal from "../MyModal";

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

const ListHeader = ({ setFilter, refreshTable }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Control>
      <div>
        <Button onClick={() => setModalShow(true)}>
          Agregar <i class="fas fa-plus"></i>
        </Button>
      </div>
      <div>
        <Label>Filtrar por: </Label>
        <Form.Select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Seleccionar tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </Form.Select>
      </div>
      <Modal refreshTable={refreshTable} show={modalShow} onHide={() => setModalShow(false)} />
    </Control>
  );
};

export default memo(ListHeader);
