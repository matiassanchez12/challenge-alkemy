import React from "react";
import Input from "./Input";
import Select from "./Select";
import { Formik, Form } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import styled from "styled-components";
import Axios from "axios";

const Container = styled.div`
  margin-top: 5px;
  border-radius: 5px;
  padding: 8px;
`;
const MyForm = ({ setList }) => {
  const onSubmit = (values, { resetForm }) => {
    Axios.post("http://localhost:3001/api/insert", values);
    setList(values, "create");
    resetForm();
  };
  const refreshData = ({ resetForm }) => {
    resetForm();
  };
  return (
    <Container>
      <h3>Agregar registro</h3>
      <Formik
        initialValues={{
          concepto: "",
          monto: "",
          fecha: "",
          tipo: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          concepto: Yup.string().required("Obligatorio"),
          monto: Yup.number()
            .required("Obligatorio")
            .typeError("Debe ser un número"),
          fecha: Yup.date()
            .required("Obligatorio")
            .typeError("Debe ser una fecha"),
          tipo: Yup.string().required("Obligatorio"),
        })}
      >
        <Form>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={2}>
              <Input type="text" name="concepto" label="Concepto" />
            </Col>
            <Col sm={2}>
              <Input type="text" name="monto" label="Monto" />
            </Col>
            <Col sm={2}>
              <Input type="date" name="fecha" label="Fecha" />
            </Col>
            <Col sm={2}>
              <Select name="tipo" label="Tipo">
                <option value="">Seleccionar tipo</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
              </Select>
            </Col>
            <Col sm={3} style={{ alignSelf: "center" }}>
              <Button
                size="sm"
                type="submit"
                style={{ marginRight: 5 }}
                variant="success"
              >
                <i class="fas fa-check" style={{ marginRight: 5 }}></i>Agregar
              </Button>
              <Button
                size="sm"
                type="submit"
                variant="warning"
                onClick={() => refreshData}
              >
                <i class="fas fa-redo-alt" style={{ marginRight: 5 }}></i>
                Limpiar datos
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
      <hr />
    </Container>
  );
};

export default MyForm;
