import React from 'react';
import '../Estilos/views/Tela2.css';

const Tela2 = () => {
  return (
    <div className="tela2-container">
      <h2>Filtros de Solicitação de Serviço</h2>
      <form className="filter-form">
        <div className="filter-group">
          <label>Aplicação</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <div className="filter-group">
          <label>Status</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <div className="filter-group">
          <label>Centro de Custo</label>
          <input type="text" placeholder="Selecione um registro" />
        </div>
        <div className="filter-group">
          <label>Data de Aprovação Início</label>
          <input type="date" />
        </div>
        <div className="filter-group">
          <label>Data de Aprovação Fim</label>
          <input type="date" />
        </div>
        <button className="btn-filter">Filtrar</button>
      </form>
    </div>
  );
};

export default Tela2;
