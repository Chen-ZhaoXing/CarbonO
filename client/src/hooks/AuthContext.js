import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [auth, setAuth] = useState({ authenticated: false });

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

