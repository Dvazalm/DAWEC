import React from 'react';
import { useParams } from 'react-router-dom';

const PerfilUsuario = () => {
  let { id } = useParams();
  return <h2>Perfil del Usuario: {id}</h2>;
};

export default PerfilUsuario;
