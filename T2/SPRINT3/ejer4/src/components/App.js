// src/components/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Cuando el inicio de sesión es exitoso, establece el estado como verdadero
  };

  return (
    <div>
      {/* Si el usuario está autenticado, muestra el menú de usuario */}
      {isLoggedIn ? <Profile /> : (
        <>
          {/* Si no está autenticado, muestra los componentes de inicio de sesión y registro */}
          <Login onLoginSuccess={handleLoginSuccess} />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;
