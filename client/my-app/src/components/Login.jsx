import { React } from "react";
import Form from "./Form/FormLogin";
import { Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Row style={{ height: "100vh", width: "100%", margin: "auto", backgroundColor: '#100b0b' }}>
      <Col
        sm={6}
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Login</h3>
        <Form />
        <div style={{ marginTop: 35 }}>
          <Link to="/register" style={{ fontSize: '0.9em', color: "white", textDecoration: "none", outlineColor: 'none' }}>
            ¿No tenes una cuenta? <b>Registrate!</b>
          </Link>
        </div>
      </Col>
      <Col
        sm={6}
        style={{
          backgroundImage: `url(img.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Col>
    </Row>
  );
};

export default Login;
