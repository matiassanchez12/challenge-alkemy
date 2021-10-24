import React from 'react';
import { Formik, Form } from "formik";
import Input from "./Form/Input";
import { Button } from "react-bootstrap";

const MyForm = ({data, editData}) => {
    const onSubmit = (values) => {
      editData(values)
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
        >
          <Form>
            <Input type="text" name="concepto" label="Concepto"/>
            <Input type="text" name="monto" label="Monto"/>
            <Input type="date" name="fecha" label="Fecha"/>
            <Button type="submit">Agregar</Button>
          </Form>
        </Formik>
      </div>
    );
  };
  

export default MyForm;
