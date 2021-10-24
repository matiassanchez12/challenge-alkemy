import { Container } from "react-bootstrap";
import Home from "./components/Home";
import New from "./components/New";
import {Breadcrumb} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
