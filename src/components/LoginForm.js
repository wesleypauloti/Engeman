import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaUnlock, FaSync } from 'react-icons/fa'; // Importando ícones do FontAwesome
import FlagsSelect from 'react-flags-select';
import SimpleCaptcha from '../components/SimpleCaptcha';

import logo from '../assets/logo.jpg';

import '../Estilos/components/Login.css';
import '../Estilos/components/SimpleCaptcha.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando Font Awesome

const LoginForm = () => {
  const [selected, setSelected] = useState('BR'); // Define o idioma padrão (Brasil)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  const [randomLetters, setRandomLetters] = useState(generateRandomLetters());
  const [captcha, setCaptcha] = useState('');
  const [isValid, setIsValid] = useState(null); // Para armazenar se a entrada é válida ou não

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (captcha === randomLetters) {
      alert('Login realizado com sucesso!');
      navigate('/tela1'); // Redireciona para Tela1
    } else {
      alert('Por favor, valide o CAPTCHA antes de fazer login.');
    }
  };

  function generateRandomLetters() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }

  const handleSelect = (code) => {
    setSelected(code);
    console.log("Idioma selecionado:", code);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <h2>Informe o Login de Acesso</h2>
      <div className='bodyForm'>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              placeholder="Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              style={{ display: "none" }} // Oculta o input real
            />
            <div className="input-container">
              <input
                type="text"
                placeholder="Usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="fake-input" // Classe para o input fictício
              />
              <FaUser className="icon" />
            </div>
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              style={{ display: "none" }} // Oculta o input real
            />
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="fake-input" // Classe para o input fictício
              />
              {showPassword ? (
                <FaUnlock className="icon" onClick={togglePasswordVisibility} />
              ) : (
                <FaLock className="icon" onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
          <div className="captcha-text">{randomLetters}</div>
          <input
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
            placeholder="Captcha"
            className="captcha-input"
            required
          />
          <div className="input-container">
            <input
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
              placeholder="Captcha"
              className="fake-input" // Classe para o input fictício
            />
            <FaSync className="icon" onClick={() => setRandomLetters(generateRandomLetters())} />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <span
          className="forgot-password"
          onClick={() => navigate('/RecuperarSenha')} // Função de navegação ao clicar
          style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
        >
          Recuperar Senha
        </span>
        <div className="language-selector">
          <FlagsSelect
            selected={selected}
            onSelect={handleSelect}
            countries={["BR", "US", "ES", "FR", "DE"]} // Adicione os códigos de países que você deseja usar
            placeholder="Selecione um idioma"
            className="custom-flags-select"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
