import React from "react";
import { useAccordionButton, Button } from "react-bootstrap";

const Customtogglebutton = ({ eventKey, children }) => {
  const active = useAccordionButton(eventKey, ()=>{
  });

  return (
    <Button variant="warning" size="sm" onClick={active}>
      {children}
    </Button>
  );
};

export default Customtogglebutton;
