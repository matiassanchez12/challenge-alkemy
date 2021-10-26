import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { Button, Row, Col } from "react-bootstrap";
import * as Yup from "yup";

const MyForm = ({ data, editData }) => {
  const onSubmit = (values) => {
    editData(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
          concepto: data.concepto,
          monto: data.monto,
          fecha: data.fecha,
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
        })}
      >
        <Form>
          <Row>
            <Col sm={6}>
              <Input type="text" name="concepto" label="Concepto" />
            </Col>
            <Col sm={6}>
              <Input type="text" name="monto" label="Monto" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Input type="date" name="fecha" label="Fecha" />
            </Col>
          </Row>
          <Button type="submit" variant="success" style={{ marginTop: 20 }}>
            <i class="fas fa-check" style={{ marginRight: 5 }}></i>Editar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
