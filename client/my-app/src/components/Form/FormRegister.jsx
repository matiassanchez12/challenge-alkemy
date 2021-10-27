import React from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
`;

const FormRegister = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required("Obligatorio"),
          email: Yup.string().required("Obligatorio"),
          password: Yup.string().required("Obligatorio"),
          repassword: Yup.string().required("Obligatorio"),
        })}
      >
        <Form>
          <Input type="text" label="Tu nombre*" name="name" />
          <Input type="text" label="Email*" name="email" />
          <Input
            type="text"
            placeholder="Al menos 6 caracteres"
            label="Password*"
            name="password"
          />
          <Input type="text" label="Confirmar password*" name="repassword" />
          <div>
            <Button type="submit" style={{ width: "100%" }}>
              Crear cuenta <i class="fas fa-arrow-right"></i>
            </Button>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default FormRegister;
