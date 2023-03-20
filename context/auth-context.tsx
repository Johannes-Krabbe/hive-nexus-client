import { useState, ReactNode, useContext, createContext } from 'react'

interface AuthContext {
  authState: any,
  setAuthState: any,
  user: any,
  setUser: any,
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

interface Props {
  children?: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({ user: ""})
  const [authState, setAuthState] = useState(false);

  // const setUserAuthInfo = ({user}) => {
  //   console.log('getting')
  //   console.log(JSON.stringify(user))
  //   localStorage.setItem('hn-user', user);
  //   console.log('setting user')
  //   console.log(JSON.stringify(user))

  //   setAuthState(true);
  //   console.log('authState')
  //   console.log(JSON.stringify(authState))
  // }

  // const user = localStorage.getItem("hn-user")

  // if (!authState && user) {
  //   setAuthState(true)
  // }
  // const setUserAuthInfo = ({ data }) => {
  //   const user = localStorage.setItem("hn-user", data.data);

  //   setAuthState({
  //     user,
  //   });
  // };

  return (
    <AuthContext.Provider value={{
      authState,
      setAuthState,
      user,
      setUser
      }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)

  if (ctx === undefined) {
    throw new Error("useAuthContext must be within AuthProvider")
  }

  return ctx
}
