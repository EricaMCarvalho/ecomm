import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact'>
      <h1 className='heading-primary'>Fale conosco</h1>
      <h2 className='heading-secondary'>Encomenda e informação</h2>
      <form className='contact__form' onSubmit={handleSubmit}>
        <div className='contact__form__controls'>
          <div className='contact__form__control'>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='contact__form__control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='contact__form__control'>
            <label htmlFor='phone'>Telefone</label>
            <input
              type='tel'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='contact__form__control'>
            <label htmlFor='mensagem'>Mensagem</label>
            <textarea
              id='mensagem'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows='7'
            ></textarea>
          </div>
        </div>
        <button className='button form__button' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
