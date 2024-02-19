// components/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importa los métodos necesarios desde Firebase

const Login = ({ onLoginSuccess }) => { // Recibe la función onLoginSuccess como una prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuario autenticado correctamente
        const user = userCredential.user;
        console.log(user);
        setSuccessMessage('Inicio de sesión exitoso');
        setErrorMessage('');
        onLoginSuccess(); // Llama a la función onLoginSuccess
      })
      .catch((error) => {
        // Manejar errores de autenticación
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setSuccessMessage('');
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
