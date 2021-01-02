import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function RemoverTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal(event) {
    setExibirModal(false);
  }

  function handleRemoverTarefa(event) {
    event.preventDefault();
    const tarefasDb = localStorage["tarefas"];
    let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    tarefas = tarefas.filter((tarefa) => tarefa.id !== props.tarefa.id);
    localStorage["tarefas"] = JSON.stringify(tarefas);
    setExibirModal(false);
    props.recarregarTarefas(true);
  }
  return (
    <span>
      <Button
        variant="danger"
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
        style={{ borderRadius: "50px" }}
      >
        <FontAwesomeIcon icon={faMinusCircle} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Remover tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente remover a seguinte tarefa?
          <br />
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover"
            style={{ borderRadius: "50px" }}
          >
            Sim
          </Button>
          <Button
            variant="secondary"
            onClick={handleFecharModal}
            style={{ borderRadius: "50px" }}
          >
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

RemoverTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default RemoverTarefa;
