import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1 className='heading-primary'>Entrar</h1>
      <h2 className='heading-secondary'>
        <i className='fas fa-user'></i> Faça seu login
      </h2>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Senha</label>
          <input id='password' type='password' minLength='8' required />
        </div>
        <button className='button button-primary button-center'>Entrar</button>
      </form>
      <p className='my-2 text-center'>
        Quer criar uma conta?{' '}
        <Link to='/cadastro'>
          <strong>Faça seu cadastro</strong>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
