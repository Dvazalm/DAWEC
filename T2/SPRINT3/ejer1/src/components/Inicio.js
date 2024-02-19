import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h2>Bienvenido al perfil de usuarios</h2>
      <ul>
        <li><Link to="/usuario/1">Usuario 1</Link></li>
        <li><Link to="/usuario/2">Usuario 2</Link></li>
        <li><Link to="/usuario/3">Usuario 3</Link></li>
      </ul>
    </div>
  );
};

export default Inicio;
