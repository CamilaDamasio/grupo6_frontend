import { createContext, useEffect, useState } from "react";
import { api } from "../api/api"

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  async function signIn(body) {
    try {
      const response = await api.post('login', body);

      const { token, user } = response.data;

      localStorage.setItem('@hackaton', token);
      
      api.defaults.headers.common.authorization = token;
      
      setUser(user);
    } catch (error) {
      return error.response.data
    }
  }

  async function createUser(userFields) {
    try {
      await api.post('user', userFields);

      const { email, password } = userFields

      const response = await api.post('login', { email, password });
      
      const { token, user } = response.data;

      localStorage.setItem('@hackaton', token);
      
      api.defaults.headers.common.authorization = token;
      
      setUser(user);
    } catch (error) {
      return error.response.data
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@hackaton');
  }

  useEffect(() => {
    async function getUser() {
      try {
        api.defaults.headers.common.authorization = token;
        const response = await api.get('user', token);
        setUser(response.data)
      } catch (error) {
        
      }
    }

    const token = localStorage.getItem('@hackaton');

    if (token) {
      getUser()
    }
  }, []);

  return(
    <AuthContext.Provider value={{ signIn, signOut, user, createUser }}>
      {children}
    </AuthContext.Provider>
  )
}
