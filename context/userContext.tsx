import { createContext, ReactNode, useContext, useState } from "react";

// TODO: define types, replace any
interface UserContext {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const UserContext = createContext<UserContext | undefined>(
  undefined
);

interface Props {
  children?: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (ctx === undefined) {
    throw new Error("useUserContext must be within UserProvider");
  }

  return ctx;
};
