// Agrega el siguiente código al archivo src/components/ListaDeFrutas.js

import React from 'react';

function ListaDeFrutas({ frutas }) {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>
          <img id='imagen_fruta' src={fruta.imagen} alt={fruta.nombre} />
          {fruta.nombre}
        </li>
      ))}
    </ul>
  );
}

export default ListaDeFrutas;
