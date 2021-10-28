import { React, useState } from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button, Alert } from "react-bootstrap";
import * as Yup from "yup";
import Axios from "axios";

const Formlogin = () => {
  const [invalidUser, setInvalidUser] = useState(false);
  const onSubmit = async (values) => {
    const res = await Axios.post(
      "http://localhost:3001/users/findUser",
      values
    );
    if (res.data === "ok") {
      window.location.href = "http://localhost:3000/home";
    } else {
      setInvalidUser(true);
    }
  };
  return (
    <div style={{ width: 400 }}>
      {invalidUser ? (
        <Alert variant="danger">
          El email o el password ingresados son incorrectos
        </Alert>
      ) : null}
      <Formik
        initialValues={{
          email: "admin",
          password: "admin",
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
            <Button type="submit" style={{ width: "100%" }}>
              <i class="fas fa-sign-in-alt"></i> Ingresar
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Formlogin;
