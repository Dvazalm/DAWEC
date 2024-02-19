import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile, updatePassword, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseApp from './firebase/firebase';

const defaultImageUrl = "https://cdn-icons-png.flaticon.com/512/64/64572.png";

const Profile = () => {
  const auth = getAuth();
  const storage = getStorage(firebaseApp);

  const [user, setUser] = useState(auth.currentUser);
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setName(user.displayName);
        setImageUrl(user.photoURL || defaultImageUrl);
      } else {
        setUser(null);
        setName('');
        setImageUrl(defaultImageUrl);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, { displayName: name, photoURL: imageUrl })
      .then(() => {
        setSuccessMessage('Perfil actualizado correctamente');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error al actualizar el perfil', error);
        setSuccessMessage('');
        setErrorMessage(error.message);
      });

    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      uploadBytes(storageRef, image)
        .then((snapshot) => {
          console.log('Imagen subida exitosamente');
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              setImageUrl(downloadURL);
              // Actualizar también la foto de perfil en los datos del usuario
              updateProfile(auth.currentUser, { photoURL: downloadURL })
                .then(() => {
                  console.log('Foto de perfil actualizada en los datos del usuario');
                })
                .catch((error) => {
                  console.error('Error al actualizar la foto de perfil en los datos del usuario', error);
                });
            })
            .catch((error) => {
              console.error('Error al obtener la URL de la imagen', error);
            });
        })
        .catch((error) => {
          console.error('Error al subir imagen', error);
        });
    }
  };

  const handleUpdatePassword = () => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        setSuccessMessage('Contraseña actualizada correctamente');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error al actualizar la contraseña', error);
        setSuccessMessage('');
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div style={{ margin: '0 40px' }}>
        <p>Email: {user ? user.email : ''}</p>
        <img src={imageUrl} alt="Profile" width="100" height="100" style={{ margin: '0 40px 40px 40px' }} />
        <br />
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpdateProfile} style={{ margin: '0 40px' }}>Actualizar imagen de usuario</button>

        <br/><br/><br/>
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button onClick={handleUpdatePassword}>Actializar contraseña</button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Profile;
