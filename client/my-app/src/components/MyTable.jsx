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

  const getData = () => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
      const newArrayData = response.data.map((x) => {
        x.fecha = x.fecha.substr(0, 10);
        return x;
      });
      setInitialState(newArrayData);
      console.log(newArrayData);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ListHeader setFilter={setFilter} refreshTable={getData} />
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th style={{ textAlign: "center" }}>Accion</th>
          </tr>
        </thead>
        <tbody>
          {initialState !== []
            ? Reducer(initialState, { type: "FILTER", payload: filter }).map(
                (data, i) => {
                  return (
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
            : null}
        </tbody>
      </Table>
      <ModalModify
        show={showModalModify}
        onHide={() => setShowModalModify(false)}
        data={dataElement}
        refreshTable={getData}
      />
      <ModalDelete
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
        data={dataElement}
        refreshTable={getData}
      />
    </div>
  );
};

export default MyTable;
