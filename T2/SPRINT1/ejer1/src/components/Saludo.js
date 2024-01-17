// Agrega el siguiente código al archivo src/components/Saludo.js

import React from 'react';

function Saludo(props) {
  return (
    <p>Hola, {props.nombre}</p>
  );
}

export default Saludo;
