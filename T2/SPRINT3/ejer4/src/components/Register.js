// components/Register.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase/firebase'; // Importar firebaseApp desde la ruta correcta

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuario registrado correctamente
        const user = userCredential.user;
        console.log(user);
        setSuccessMessage('Usuario registrado correctamente');
        setErrorMessage('');
      })
      .catch((error) => {
        // Manejar errores de registro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setSuccessMessage('');
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
