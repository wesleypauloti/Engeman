import React, { useState } from 'react';

import '../Estilos/components/RecuperarSenha.css';

const RecuperarSenhaForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula uma chamada de API para recuperação de senha
    setMessage('Se o e-mail existir, um link de recuperação será enviado.');
  };

  return (
    <div className="recuperar-senha-container">
      <div className="recuperar-senha-card">
        <h2>Recuperar Senha</h2>
        <p>Insira o e-mail associado à sua conta e enviaremos um link para redefinir sua senha.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RecuperarSenhaForm;
