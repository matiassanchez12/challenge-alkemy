import React from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
`;

const Formlogin = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string().required("Obligatorio"),
          password: Yup.string().required("Obligatorio"),
        })}
      >
        <Form>
          <Input type="text" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <div>
            <Button type="submit"  style={{width: "100%"}}>
            <i class="fas fa-sign-in-alt"></i> Ingresar
            </Button>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default Formlogin;
