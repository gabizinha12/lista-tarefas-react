import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListarTarefas from "./listar/listar-tarefas";
import CadastrarTarefa from "./cadastrar/cadastrar-tarefas";
import AtualizarTarefa from "./atualizar/atualizar-tarefas";

//rAdicionar rotas aqui
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListarTarefas} />
        <Route path="/cadastrar" component={CadastrarTarefa} />
        <Route path="/atualizar/:id" component={AtualizarTarefa} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
