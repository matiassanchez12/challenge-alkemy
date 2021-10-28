import { React, useState } from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button, Alert } from "react-bootstrap";
import * as Yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [createSuccessful, setCreateSuccessful] = useState(false);

  const onSubmit = async (values) => {
    const res = await Axios.post("http://localhost:3001/users/insert", values);
    if(res.status === 200){
      setCreateSuccessful(true);
    }
  };

  return (
    <div style={{ width: 400 }}>
      {createSuccessful ? (
        <Alert variant="success">
          Usuario registrado con exito. <Link to="/">Iniciar sesión!</Link>
        </Alert>
      ) : null}
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          password: "",
          repassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Obligatorio"),
          email: Yup.string().required("Obligatorio"),
          password: Yup.string().required("Obligatorio"),
          repassword: Yup.string().required("Obligatorio"),
        })}
      >
        <Form>
          <Input
            type="text"
            placeholder="Ej.: Juan Perez"
            label="Tu nombre*"
            name="nombre"
          />
          <Input
            type="text"
            placeholder="Ej.: juan@correo.com"
            label="Email*"
            name="email"
          />
          <Input
            type="text"
            placeholder="Al menos 6 caracteres"
            label="Password*"
            name="password"
          />
          <Input type="text" label="Confirmar password*" name="repassword" />
          <Button type="submit" style={{ display: "block", width: "100%" }}>
            Crear cuenta <i class="fas fa-arrow-right"></i>
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegister;
