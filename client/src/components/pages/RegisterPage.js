import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';

const RegisterPage = () => {
  return (
    <div>
      <h1 className='heading-primary'>Cadastre-se</h1>
      <h2 className='heading-secondary'>
        <i className='fas fa-user'></i> Crie sua conta
      </h2>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='given-name'>Nome</label>
          <input id='given-name' type='text' required />
        </div>
        <div className='form-group'>
          <label htmlFor='surname'>Sobrenome</label>
          <input id='surname' type='text' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='tel'>Telefone</label>
          <input id='tel' type='tel' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Senha</label>
          <input id='password' type='password' minLength='8' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirme sua senha</label>
          <input id='password2' type='password' min-length='8' required />
        </div>
        <button className='button button-primary button-center'>
          Cadastrar
        </button>
      </form>
      <p className='my-2 text-center'>
        Já possui uma conta?{' '}
        <Link to='/login'>
          <strong>Faça seu login</strong>
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
