import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItensListaTarefas from "./itens-lista-tarefas";
import Paginacao from "./paginação";
function ListarTarefas() {
  const ITENS_POR_PAG = 3;
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage["tarefas"];
      let listaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTarefas(
        listaTarefas.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG)
      );
      setTotalItems(listaTarefas.length);
    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual]);

  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }
  return (
    <div className="text-center">
      <h1>Tarefas a fazer</h1>
      <Table striped bordered hover responsive data-testid="tabela" size="sm">
        <thead>
          <tr>
            <th className="h3">Tarefa</th>
            <th>
              <Link to="/cadastrar">
                <Button
                  variant="dark"
                  style={{ borderRadius: "50px" }}
                  data-testid="btn-nova-tarefa"
                  className="mt-2 mb-2"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginRight: "5px" }}
                  ></FontAwesomeIcon>
                  Adicione uma tarefa aqui
                </Button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={() => setCarregarTarefas}
          />
        </tbody>
      </Table>
      <Paginacao
        totalItems={totalItems}
        itensPorPagina={ITENS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={() => handleMudarPagina}
      ></Paginacao>
    </div>
  );
}
export default ListarTarefas;
