import React, { createContext, useContext, ReactNode, useState } from 'react';

interface User {
  documentoIdentidad: string;
  nombre: string;
  correoElectronico: string;
  telefono: number | null;
  pasadoJudicial: string;
  licenciaConducir: string;
  foto: string;
}

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const initialState: User = {
  documentoIdentidad: "",
  nombre: "",
  correoElectronico: "",
  telefono: null,
  pasadoJudicial: "",
  licenciaConducir: "",
  foto: "",
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser utilizado dentro de un UserProvider');
  }
  return context;
};