import React, { useState, useEffect } from "react";
import ListHeader from "./Form/ListHeader";
import Reducer from "./Reducer";
import ModalDelete from "./Actions/ModalDelete";
import ButtonDelete from "./Actions/ButtonDelete";
import FormCreate from "./Form/FormCreate";
import FormUpdate from "./Form/FormUpdate";
import ButtonActive from "./Form/CustomToggleButton";
import { Accordion, Spinner, Table } from "react-bootstrap";
import Axios from "axios";

const MyTable = () => {
  const [dataElement, setDataElement] = useState([]);
  const [filter, setFilter] = useState("");
  const [initialState, setInitialState] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
      const newArrayData = response.data.map((x) => {
        x.fecha = x.fecha.substr(0, 10);
        return x;
      });
      setIsLoading(false);
      setInitialState(newArrayData);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <FormCreate setList={refreshList} />
          <ListHeader setFilter={setFilter} />
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
            {initialState.length !== 0 ? (
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
                          <ButtonDelete
                            setModal={setShowModalDelete}
                            setData={setDataElement}
                            data={data}
                          />
                          <ButtonActive eventKey="0">
                            <i class="fas fa-edit"></i>
                          </ButtonActive>
                        </td>
                        <td style={{ display: "none" }}>{data.id}</td>
                      </tr>
                      <td colSpan="6" style={{ border: 0 }}>
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
      )}
    </div>
  );
};

export default MyTable;
