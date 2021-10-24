import React from "react";
import styled from "styled-components";
import MyForm from './MyForm'


const Container = styled.div`
    display: flex;
    max-width: 700px;
    background-color: red;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
`

const New = () => {
 
  return (
    <Container>
        <MyForm />
    </Container>
  );
};

export default New;
