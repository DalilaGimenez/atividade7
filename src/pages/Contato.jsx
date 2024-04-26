// pages/Contato.jsx

import React from 'react';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';

import Topo from '../components/Topo';


const Contato = () => {
  return (
    <Layout>
    <div>
      <h1>Entre em Contato</h1>
      <form className="form-container">
        <div className="form-group">
          <label className='label'>Nome:</label>
          <CustomInput type="text" placeholderText="Digite seu nome" />
        </div>

        <div className="form-group">
          <label className='label'>Email:</label>
          <CustomInput type="email" placeholderText="Digite seu email" />
        </div>

        <div className="form-group">
          <label className='label'>Telefone:</label>
          <CustomInput type="tel" placeholderText="Digite seu telefone" />
        </div>

        <button className='button-enviar' type="submit">Enviar</button>
      </form>
    </div>
    </Layout>
  );
};

export default Contato;