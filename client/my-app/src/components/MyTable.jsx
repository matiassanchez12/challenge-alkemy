import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ListHeader from "./Form/ListHeader";
import Reducer from "./Reducer";
import ModalDelete from "./Actions/ModalDelete";
import ModalModify from "./Actions/ModalModify";
import Axios from "axios";

const MyTable = () => {
  const [dataElement, setDataElement] = useState([]);
  const [filter, setFilter] = useState("");
  const [initialState, setInitialState] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalModify, setShowModalModify] = useState(false);

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
        <tbody>
          {initialState !== [] ? (
            Reducer(initialState, { type: "FILTER", payload: filter }).map(
              (data, i) => {
                return (
                  <tr key={i} style={{ fontSize: "0.9em" }}>
                    <td>{i}</td>
                    <td>{data.concepto}</td>
                    <td>{data.monto}</td>
                    <td>{data.fecha}</td>
                    <td>{data.tipo}</td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          setShowModalDelete(true);
                          setDataElement(data);
                        }}
                      >
                        <i class="far fa-trash-alt"></i>
                      </Button>
                      <Button
                        style={{ marginLeft: "5px" }}
                        size="sm"
                        variant="warning"
                        onClick={() => {
                          setShowModalModify(true);
                          setDataElement(data);
                        }}
                      >
                        <i class="fas fa-edit"></i>
                      </Button>
                    </td>
                    <td style={{ display: "none" }}>{data.id}</td>
                  </tr>
                );
              }
            )
          ) : (
            <div>No hay datos para mostrar..</div>
          )}
        </tbody>
      </Table>
      <ModalModify
        show={showModalModify}
        onHide={() => setShowModalModify(false)}
        data={dataElement}
        setList={refreshList}
      />
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
