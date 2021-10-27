import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ListHeader from "./Form/ListHeader";
import Reducer from "./Reducer";
import ModalDelete from "./Actions/ModalDelete";
import Axios from "axios";
import FormCreate from "./Form/FormCreate";
import FormUpdate from "./Form/FormUpdate";
import ButtonActive from "./Form/CustomToggleButton";
import { Accordion } from "react-bootstrap";

const MyTable = () => {
  const [dataElement, setDataElement] = useState([]);
  const [filter, setFilter] = useState("");
  const [initialState, setInitialState] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
      const newArrayData = response.data.map((x) => {
        x.fecha = x.fecha.substr(0, 10);
        return x;
      });
      setInitialState(newArrayData);
    });
  }, []);

  const refreshList = (newData, type) => {
    switch (type) {
      case "create":
        setInitialState([...initialState, newData]);
        break;
      case "update":
        setInitialState(
          initialState.map((x) => {
            if (x.id === newData.id) {
              x = newData;
            }
            console.log(newData)
            return x;
          })
        );
        break;
      case "delete":
        setInitialState(initialState.filter((x) => x.id !== newData.id));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FormCreate setList={refreshList} />
      <ListHeader setFilter={setFilter} setList={refreshList} />
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Concepto</th>
            <th>Monto $</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th style={{ textAlign: "center" }}>Acción</th>
          </tr>
        </thead>
        {initialState !== [] ? (
          Reducer(initialState, { type: "FILTER", payload: filter }).map(
            (data, i) => {
              return (
                <Accordion as="tbody" defaultActiveKey="1">
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{data.concepto}</td>
                    <td>{data.monto}</td>
                    <td>{data.fecha}</td>
                    <td>{data.tipo}</td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        size="sm"
                        variant="danger"
                        style={{ marginRight: "5px" }}
                        onClick={() => {
                          setShowModalDelete(true);
                          setDataElement(data);
                        }}
                      >
                        <i class="far fa-trash-alt"></i>
                      </Button>
                      <ButtonActive eventKey="0">
                        <i class="fas fa-edit"></i>
                      </ButtonActive>
                    </td>
                    <td style={{ display: "none" }}>{data.id}</td>
                  </tr>
                  <td colspan="6" style={{border: 0}}>
                    <Accordion.Collapse eventKey="0">
                      <FormUpdate data={data} setList={refreshList} />
                    </Accordion.Collapse>
                  </td>
                </Accordion>
              );
            }
          )
        ) : (
          <div>No hay datos para mostrar..</div>
        )}
      </Table>
      <ModalDelete
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
        data={dataElement}
        setList={refreshList}
      />
    </div>
  );
};

export default MyTable;
