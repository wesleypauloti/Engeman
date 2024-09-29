import React from 'react';
import '../Estilos/views/Tela3.css';

const Tela3 = () => {
  return (
    <div className="tela3-container">
      <h2>Filtro de Solicitação de Serviço - Detalhado</h2>
      <form className="detailed-filter-form">
        <div className="filter-row">
          <label>Filial</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <div className="filter-row">
          <label>Solicitação</label>
          <input type="text" placeholder="Digite solicitação" />
        </div>
        <div className="filter-row">
          <label>Data de Solicitação Início</label>
          <input type="date" />
        </div>
        <div className="filter-row">
          <label>Data de Solicitação Fim</label>
          <input type="date" />
        </div>
        <div className="filter-row">
          <label>Status</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <div className="filter-row">
          <label>Centro de Custo</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <button className="btn-apply">Aplicar Filtros</button>
      </form>
    </div>
  );
};

export default Tela3;
