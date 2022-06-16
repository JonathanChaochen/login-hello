import { createContext, useContext, useState, useEffect } from 'react';

export interface IUser {
  username: string;
  password: string;
}

interface UserContext {
  isAuthenticated: boolean;
  setAuth: (user: IUser) => void;
}

export const AuthContext = createContext<UserContext>({} as UserContext);

export const AuthProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // set credential to localStorage if valid
  const setAuth = (user: IUser = { username: '', password: '' }) => {
    if (isAuth(user)) {
      // store username and password in localStorage
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
    } else {
      // delete localStorage if not auth
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  };

  // check localStorage for token
  const isAuth = ({ username, password }: IUser) => {
    if (username === 'test@test.com' && password === '123') {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  // refresh page, check localStorage for token
  useEffect(() => {
    const username = localStorage.getItem('username') || '';
    const password = localStorage.getItem('password') || '';
    isAuth({ username, password });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
