import React from "react";
import MyTable from "./MyTable";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <MyTable />
      </Container>
    </div>
  );
};

export default Home;
