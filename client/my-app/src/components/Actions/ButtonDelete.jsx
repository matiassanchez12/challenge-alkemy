import React from "react";
import { Button } from "react-bootstrap";

const Buttondelete = ({setModal, setData, data }) => {
  const handleClick = () => {
    setModal(true)
    setData(data)
  };
  return (
    <Button
      size="sm"
      variant="danger"
      style={{ marginRight: "5px" }}
      onClick={handleClick}
    >
      <i class="far fa-trash-alt"></i>
    </Button>
  );
};

export default Buttondelete;
