// Agrega el siguiente código al archivo src/components/Contador.js

import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const handleIncrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Número de click: <b>{contador}</b></p>
      <button onClick={handleIncrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
