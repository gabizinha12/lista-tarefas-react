import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ConcluirTarefa from "../listar/concluir-tarefa";
import RemoverTarefa from "../listar/remover-tarefa";

function ItensListaTarefas(props) {
  function marcarConcluida(tarefa) {
    return tarefa.concluida ? "line-through" : "none";
  }
  return props.tarefas.map((tarefa) => (
    <tr key={tarefa.id} data-testid="tarefa">
      <td
        width="75%"
        data-testid="nome-tarefa"
        style={{ textDecoration: marcarConcluida(tarefa) }}
      >
        {tarefa.nome}
      </td>
      <td className="text-right">
        <ConcluirTarefa
          tarefa={tarefa}
          recarregarTarefas={props.recarregarTarefas}
          className={tarefa.concluida ? "hidden" : null}
        />
        &nbsp;
        <Router>
          <Link
            href={"/atualizar/" + tarefa.id}
            to={"/atualizar/" + tarefa.id}
            className={
              tarefa.concluida ? "hidden" : "btn btn-warning btn-sm mr-5"
            }
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </Router>
        &nbsp;
        <RemoverTarefa
          tarefa={tarefa}
          recarregarTarefas={props.recarregarTarefas}
        />
      </td>
    </tr>
  ));
}

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
