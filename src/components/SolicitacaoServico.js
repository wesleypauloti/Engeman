import React from 'react';

import '../Estilos/components/SolicitacaoServico.css';

const SolicitacaoServico = () => {
  return (
    <div className="solicitacao-container">
      <h1>Solicitação de Serviço</h1>
      <form>
        <label>Filial</label>
        <input type="text" value="1 - UNIDADE FERRAZ (FÁBRICA)" disabled />
        <label>Status</label>
        <input type="text" value="Aberta Não Avaliada" disabled />
        <label>Solicitante/Funcionário</label>
        <input type="text" value="42884 - JOEL PEDRO DOS SANTOS" disabled />
        {/* Adicione os outros campos conforme necessário */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default SolicitacaoServico;
