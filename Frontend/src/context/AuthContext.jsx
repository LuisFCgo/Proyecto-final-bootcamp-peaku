import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica si hay un usuario almacenado en localStorage cuando se monta el componente
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData)); // Almacena la información de usuario en la caché
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user'); // Elimina la información del usuario de la caché
    // Aquí podrías hacer cualquier limpieza necesaria después del logout, como eliminar tokens, etc.
  };

  const signup = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          username: userData.username,
          email: userData.email,
          password: userData.password,
          address: userData.address,
          country: userData.country,
          state: userData.state,
          zip: userData.zip,
        }),
        credentials: 'include'
      });
  
      if (response.ok) {
        // Si el registro es exitoso, puedes realizar alguna acción, como mostrar un mensaje al usuario
        console.log('User has been registered successfully');
          alert('User has been registered successfully');
          window.location.href = '/login';
      } else {
        // Si el registro falla, maneja el error apropiadamente, por ejemplo, mostrando un mensaje de error al usuario
        const errorData = await response.json();
        console.error(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      // Si ocurre algún error durante el proceso de registro, maneja el error adecuadamente
      console.error('Error registering the user:', error);
    }
  };
  

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isAuthenticated,
        signup, // Agrega la función signup al contexto de autenticación
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
