import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItensListaTarefas from "./itens-lista-tarefas";
import Paginacao from "./paginacao";
import Ordenacao from "./ordenacao";
function ListarTarefas() {
  const ITEMS_POR_PAG = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenarAsc, setOrdenarAsc] = useState(false);
  const [ordenarDesc, setOrdenarDesc] = useState(false);
  const [filtroTarefa, setFiltroTarefa] = useState("");

  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage["tarefas"];
      let listaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      //ordenar
      if (ordenarAsc) {
        listaTarefas.sort((t1, t2) =>
          t1.nome.toLowerCase() > t2.nome.toLowerCase() ? 1 : -1
        );
      } else if (ordenarDesc) {
        listaTarefas.sort((t1, t2) =>
          t1.nome.toLowerCase() < t2.nome.toLowerCase() ? 1 : -1
        );
      }
      setTotalItems(listaTarefas.length);
      setTarefas(
        listaTarefas.splice((paginaAtual - 1) * ITEMS_POR_PAG, ITEMS_POR_PAG)
      );
    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual, ordenarAsc, ordenarDesc]);

  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

  function handleOrdenar(event) {
    event.preventDefault();
    if (!ordenarAsc && !ordenarDesc) {
      setOrdenarAsc(true);
      setOrdenarDesc(false);
    } else if (ordenarAsc) {
      setOrdenarAsc(false);
      setOrdenarDesc(true);
    } else {
      setOrdenarAsc(false);
      setOrdenarDesc(false);
    }
    setCarregarTarefas(true);
  }

  function handleFiltrar(event) {
    setFiltroTarefa(event.target.value);
    setCarregarTarefas(true);
  }
  return (
    <div className="text-center">
      <h1>Tarefas a fazer</h1>
      <Table striped bordered hover responsive data-testid="tabela" size="sm">
        <thead>
          <tr>
            <a
              href="/"
              onClick={handleOrdenar}
              style={{ textDecoration: "none", color: "black" }}
            >
              Tarefa
              <Ordenacao
                ordenarAsc={ordenarAsc}
                ordenarDesc={ordenarDesc}
              ></Ordenacao>
            </a>
            <th>
              <Router>
                <Link to="/cadastrar">
                  <Button
                    variant="dark"
                    style={{ borderRadius: "50px" }}
                    data-testid="btn-nova-tarefa"
                    className="mt-2 mb-2"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ marginRight: "10px" }}
                    ></FontAwesomeIcon>
                    Adicione uma tarefa aqui
                  </Button>
                </Link>
              </Router>
            </th>
          </tr>
          <tr>
            <th>
              <Form.Control
                type="text"
                size="sm"
                value={filtroTarefa}
                onChange={handleFiltrar}
                data-testid="txt-tarefa"
              />
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
        itemsPorPagina={ITEMS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina}
      ></Paginacao>
    </div>
  );
}
export default ListarTarefas;
