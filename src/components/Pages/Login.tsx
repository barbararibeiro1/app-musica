import $ from 'jquery';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '../Functions/InputLabel';
import { createUser } from '../../services/userAPI';

// type PropsForm = {
//   handleViewData: () => void
// }

export default function Login() {
  const navigate = useNavigate();

  console.log($);

  const [formData, setFormData] = useState({
    name: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    createUser(formData)
      .then(() => {
        setIsLoading(false);
        navigate('/search');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <InputLabel
        data-testid="login-name-input"
        name="name"
        placeholder="Qual é o seu nome?"
        value={ formData.name }
        onChange={ handleChange }
      />
      <button
        data-testid="login-submit-button"
        disabled={ formData.name.length < 3 }
      >
        Entrar
      </button>
      {isLoading && <p>Carregando...</p> }
    </form>
  );
}
