import React from "react";
import ReactDOM from "react-dom";
import RemoverTarefa from "./remover-tarefa";
import Tarefa from "../models/tarefa.model";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("teste do componente de remoção de tarefas", () => {
  const nomeTarefa = "nome de teste";
  const tarefa = new Tarefa(1, nomeTarefa, false);
  it("deve renderizar o componente sem problemas", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("deve exibir a modal", () => {
    const { getByTestId } = render(
      <RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId("btn-abrir-modal"));
    expect(getByTestId("modal")).toHaveTextContent(nomeTarefa);
  });
  it("deve remover a tarefa selecionada", () => {
    localStorage["tarefas"] = JSON.stringify([tarefa]);
    const { getByTestId } = render(
      <RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId("btn-abrir-modal"));
    fireEvent.click(getByTestId("btn-remover"));
    const tarefasDb = JSON.parse(localStorage["tarefas"]);
    expect(tarefasDb.length).toBe(0);
  });
});
