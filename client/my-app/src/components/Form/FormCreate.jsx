import React from "react";
import Input from "./Input";
import Select from "./Select";
import { Formik, Form } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import * as Yup from "yup";

const MyForm = ({ createElement }) => {
  const onSubmit = (values) => {
    createElement(values)
  };
  return (
    <div>
      <Formik
        initialValues={{
          concepto: "",
          monto: "",
          fecha: "",
          tipo: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          concepto: Yup.string()
            .required("Obligatorio"),
          monto: Yup.number()
            .required("Obligatorio")
            .typeError("Debe ser un número"),
          fecha: Yup.date()
            .required("Obligatorio")
            .typeError("Debe ser una fecha"),
          tipo: Yup.string()
            .required("Obligatorio")
        })}
      >
        <Form>
          <Row>
            <Col sm={6}>
              <Input type="text" name="concepto" label="Concepto" />
              <Input type="date" name="fecha" label="Fecha" />
            </Col>
            <Col sm={6}>
              <Input type="text" name="monto" label="Monto" />
              <Select name="tipo" label="Tipo">
                <option value="">Seleccionar tipo</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
              </Select>
            </Col>
          </Row>
          <Button type="submit" style={{ marginTop: 20 }} variant="success">
            <i class="fas fa-check" style={{ marginRight: 5 }}></i>Agregar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
