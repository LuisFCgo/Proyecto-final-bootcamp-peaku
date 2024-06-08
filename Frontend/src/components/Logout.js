import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout(); // Ejecuta la función de logout definida en el contexto
      localStorage.removeItem('user'); // Elimina la información del usuario de la caché
      window.location.href = '/'; // Redirige al home después del logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
