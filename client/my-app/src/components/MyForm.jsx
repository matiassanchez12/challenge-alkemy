import React from "react";
import { Formik, Form } from "formik";
import Input from "./Form/Input";
import { Button } from "react-bootstrap";
import Select from "./Form/Select";
import Axios from "axios";

const MyForm = ({refreshTable}) => {
  const onSubmit = (values) => {
    Axios.post("http://localhost:3001/api/insert", values).then(() => {console.log('hola')});
    refreshTable();
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
      >
        <Form>
          <Input type="text" name="concepto" label="Concepto" />
          <Input type="text" name="monto" label="Monto" />
          <Input type="date" name="fecha" label="Fecha" />
          <Select name="tipo" label="Tipo">
            <option value="">Seleccionar tipo</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </Select>
          <Button type="submit">Agregar</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
