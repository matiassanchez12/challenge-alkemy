import { React, useState } from "react";
import MyTable from "./Table/MyTable";
import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import Toast from "./Form/MyToast";

const Home = ({ userData, setUser }) => {
  const [toastActive, isToastActive] = useState({
    message: "",
    active: false,
  });

  return (
    <div>
      <Nav
        userData={userData}
        setUser={({ data, active }) => setUser({ data, active })}
      />
      <Toast toastActive={toastActive} setToast={isToastActive} />
      <Container>
        <MyTable setToast={isToastActive} />
      </Container>
    </div>
  );
};

export default Home;
