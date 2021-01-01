import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ConcluirTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  function handleConcluirTarefa(event) {
    event.preventDefault();
    const tarefasDb = localStorage["tarefas"];
  }

  return (
    <span className={props.className}>
      <Button
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
      </Button>
      <Modal
        show={exibirModal}
        onHide={handleFecharModal}
        data-testid="modal"
      ></Modal>
      <Modal.Header closeButton>
        <Modal.Title>Concluir Tarefa</Modal.Title>
        <Modal.Body>
          Deseja realmente concluir a tarefa?
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleConcluirTarefa}
          data-testid="btn-concluir"
        >
          Sim
        </Button>
        <Button
          variant="light"
          onClick={handleFecharModal}
          data-testid="btn-concluir"
        >
          Não
        </Button>
      </Modal.Footer>
    </span>
  );
}

export default ConcluirTarefa;

ConcluirTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
