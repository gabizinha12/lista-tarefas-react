import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItensListaTarefas from "./itens-lista-tarefas";
function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage["tarefas"];
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTarefas(listarTarefas);
      console.log(listarTarefas);
    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas]);
  return (
    <div className="text-center">
      <h1>Tarefas a fazer</h1>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <BrowserRouter>
                <Link to="/cadastrar">
                  <Button
                    variant="dark"
                    style={{ borderRadius: "50px" }}
                    data-testid="btn-nova-tarefa"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ marginRight: "5px" }}
                    ></FontAwesomeIcon>
                    Adicione uma tarefa aqui
                  </Button>
                </Link>
              </BrowserRouter>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas}
          />
        </tbody>
      </Table>
    </div>
  );
}
export default ListarTarefas;
