import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import Router  from 'next/router'

type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type SignInCredentials = {
  email: string;
  password:string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  
  async function signIn({ email, password }: SignInCredentials) {

    try {
      const { data } = await api.post('sessions', {
        email,
        password
      })

      const { permissions, roles, token, refreshToken } = data

      setUser({
        email,
        permissions,
        roles
      })
      
      Router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}