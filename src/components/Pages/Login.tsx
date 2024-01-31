import React, { useState } from 'react';
import InputLabel from '../Components/InputLabel';

type PropsForm = {
  handleViewData: () => void
}

export default function Login() {
  const [formData, setFormData] = useState({
    name: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form>
      <InputLabel data-testid="login-name-input"
         name="name"
         placeholder="Qual é o seu nome?"
         value={ formData.name }
         onChange={ handleChange }
      />
      <button 
        disabled={formData.name.length < 3}
        test-id="login-submit-button">
          Entrar
      </button>
    </form>
  );
}
