import { React } from "react";
import Form from "./Form/FormLogin";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };
  const pageTransition = {
    type: "spring",
    stiffness: 50,
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
      <Col sm={6}>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          style={{
            height: "100%",
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Bienvenido a Mis gastos App</h2>
          <hr />
          <Form />
          <div style={{ marginTop: 35 }}>
            <Link
              to="/register"
              style={{
                fontSize: "0.9em",
                color: "white",
                textDecoration: "none",
                outlineColor: "none",
              }}
            >
              ¿No tenes una cuenta? <b>Registrate!</b>
            </Link>
          </div>
        </motion.div>
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
