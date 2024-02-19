import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDLDGLntgtmSNBxKGul5xDJMMgaAqZymOA",
    authDomain: "ejer4-f7b3d.firebaseapp.com",
    projectId: "ejer4-f7b3d",
    storageBucket: "ejer4-f7b3d.appspot.com",
    messagingSenderId: "601698474955",
    appId: "1:601698474955:web:3d41c104dc346c9f5db44e"
  };


export const firebaseApp = initializeApp(firebaseConfig); // Exporta la instancia de Firebase

export default firebaseApp; // Esto es opcional, dependiendo de cómo quieras usarlo en tu aplicación
