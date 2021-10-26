import React from "react";
import Form from "./Form/FormLogin";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Row
      style={{
        height: "100vh",
        width: "100%",
        margin: "auto",
        backgroundColor: "#100b0b",
      }}
    >
      <Col
        sm={6}
        style={{
          backgroundImage: `url(img-register.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></Col>
      <Col
        sm={6}
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Register</h3>
        <Form />
        <div style={{ marginTop: 35 }}>
          <Link
            to="/"
            style={{
              fontSize: "0.9em",
              color: "white",
              textDecoration: "none",
              outlineColor: "none",
            }}
          >
            Ya tengo mi cuenta. <b>Ingresar!</b>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
