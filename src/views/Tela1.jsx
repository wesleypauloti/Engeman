import React from 'react';
import '../Estilos/views/Tela1.css';

const Tela1 = () => {
  return (
    <div className="tela1-container">
      <div className="header">
        <h2>Todas</h2>
        <div className="tabs">
          <button className="tab active">Aberta Não Avaliada</button>
          <button className="tab">Aberta Aprovada</button>
          <button className="tab">Cancelada</button>
          <button className="tab">Concluída Não Avaliada</button>
          <button className="tab">Concluída Aprovada</button>
          <button className="tab">Serviço Reprovado</button>
        </div>
      </div>
      <table className="solicitacoes-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Solicitação</th>
            <th>Status</th>
            <th>Filial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>246</td>
            <td>Garras não fecham</td>
            <td><span className="status aberta">Aberta Aprovada</span></td>
            <td>Unidade 1</td>
          </tr>
          <tr>
            <td>245</td>
            <td>Favor retirar o porta bico da U84</td>
            <td><span className="status aberta">Aberta Aprovada</span></td>
            <td>Unidade 1</td>
          </tr>
          <tr>
            <td>244</td>
            <td>Sensor do auxiliar não está funcionando</td>
            <td><span className="status concluida">Concluída Não Avaliada</span></td>
            <td>Unidade 1</td>
          </tr>
          <tr>
            <td>243</td>
            <td>Desmontar o cilindro pneumático</td>
            <td><span className="status concluida">Concluída Não Avaliada</span></td>
            <td>Unidade 1</td>
          </tr>
          {/* Outros registros */}
        </tbody>
      </table>
    </div>
  );
};

export default Tela1;
