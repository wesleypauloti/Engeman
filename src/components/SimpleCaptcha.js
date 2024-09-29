import React, { useState } from 'react';
import { FaSync  } from 'react-icons/fa'; // Importando ícones do FontAwesome

import '../Estilos/components/SimpleCaptcha.css';


const SimpleCaptcha = ({ onCaptchaValidate }) => {
  // Estado para as letras aleatórias e o valor do input
  const [randomLetters, setRandomLetters] = useState(generateRandomLetters());
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(null); // Para armazenar se a entrada é válida ou não

  // Função para gerar letras aleatórias
  function generateRandomLetters() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput)
    console.log(randomLetters)
    if (userInput.toUpperCase() === randomLetters) {
        setIsValid(true);
        onCaptchaValidate(true); // Chama a função de validação do CAPTCHA
    } else {
      setIsValid(false);
      onCaptchaValidate(false); // Chama a função de validação do CAPTCHA
    }
  };

  return (
    <div className="captcha-container">
      <div className="captcha-text">{randomLetters}</div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Captcha"
          className="captcha-input"
          required
        />
        <div className="input-container">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Captcha"
              className="fake-input" // Classe para o input fictício
            />
            <FaSync className="icon" onClick={() => setRandomLetters(generateRandomLetters())} />
          </div>
        <button type="submit" className="captcha-button">Verificar</button>
      </form>
      {isValid !== null && (
        <p className={isValid ? 'success' : 'error'}>
          {isValid ? 'CAPTCHA válido!' : 'CAPTCHA inválido!'}
        </p>
      )}
    </div>
  );
};

export default SimpleCaptcha;
