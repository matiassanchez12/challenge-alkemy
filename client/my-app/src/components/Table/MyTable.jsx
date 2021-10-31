import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import Reducer from "../Reducer";
import FormCreate from "../Form/FormCreate";
import FormUpdate from "../Form/FormUpdate";
import FormDelete from "../Form/FormDelete";
import AcordionRow from "./AcordionRow";
import ErrorRow from "./ErrorRow";
import ButtonActive from "./CustomToggleButton";
import Loader from "../Loader";
import { Accordion, Table } from "react-bootstrap";
import Axios from "axios";
import { GetCookie } from "../Cookies";

const MyTable = ({ setToast }) => {
  const [filter, setFilter] = useState({ by: "", value: "" });
  const [initialState, setInitialState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showMessageSuccess = (message) => {
    setToast({
      message: message,
      active: true,
    });
  };

  const refreshList = (newData, type) => {
    switch (type) {
      case "create":
        setInitialState([...initialState, newData]);
        console.log(initialState);
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
        setInitialState([]);
        setInitialState(
          initialState.reduce((acc, x) => {
            if (x.id === newData.id) {
              return acc;
            }
            return acc.concat(x);
          }, [])
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const idUser = parseInt(GetCookie("data").id_usuario);
    Axios.get("http://localhost:3001/budgest/list").then((response) => {
      let newArrayData = response.data.reduce((acc, x) => {
        if (x.id_usuario !== idUser) {
          return acc;
        }
        x.fecha = x.fecha.substr(0, 10);
        return acc.concat(x);
      }, []);

      setIsLoading(false);
      setInitialState(newArrayData);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <FormCreate setList={refreshList} showMessage={showMessageSuccess} />
          <TableHeader setFilter={setFilter} />
          <Table striped bordered hover variant="dark" size="sm" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Concepto</th>
                <th>Monto $</th>
                <th>Categoria</th>
                <th>Fecha</th>
                <th>Tipo</th>
                <th style={{ textAlign: "center" }}>Acción</th>
              </tr>
            </thead>
            {initialState.length !== 0 ? (
              Reducer(initialState, {
                type: filter.by,
                payload: filter.value,
              }).map((data, i) => {
                return (
                  <Accordion as="tbody" key={i}>
                    <tr>
                      <td>{i}</td>
                      <td>{data.concepto}</td>
                      <td>{data.monto}</td>
                      <td>{data.categoria}</td>
                      <td>{data.fecha}</td>
                      <td>{data.tipo}</td>
                      <td style={{ textAlign: "center" }}>
                        <ButtonActive variant="danger" eventKey="1">
                          <i class="far fa-trash-alt"></i>
                        </ButtonActive>
                        <ButtonActive variant="warning" eventKey="0">
                          <i class="fas fa-edit"></i>
                        </ButtonActive>
                      </td>
                      <td style={{ display: "none" }}>{data.id}</td>
                    </tr>
                    <AcordionRow eventKey="0">
                      <FormUpdate
                        data={data}
                        setList={refreshList}
                        showMessage={showMessageSuccess}
                      />
                    </AcordionRow>
                    <AcordionRow
                      eventKey="1"
                      style={{ display: `${data.id}-${i}` }}
                    >
                      <FormDelete
                        data={data}
                        setList={refreshList}
                        showMessage={showMessageSuccess}
                      />
                    </AcordionRow>
                  </Accordion>
                );
              })
            ) : (
              <ErrorRow />
            )}
          </Table>
        </div>
      )}
    </div>
  );
};

export default MyTable;
