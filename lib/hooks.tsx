import { useState, useCallback } from "react";
import { IUser } from "types/interfaces";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    // @ts-ignore
    document.querySelector("html").style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    // @ts-ignore
    document.querySelector("html").style.overflow = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};

export const useToken = () => {
  const tokenName = "hn-token";

  const getToken = () => {
    const token = localStorage.getItem(tokenName);

    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    localStorage.setItem(tokenName, token);

    setToken(token);
  };

  return {
    token,
    setToken: saveToken,
  };
};

export const useUser = () => {
  const hnUser = "hn-user";

  const getUser = (): IUser | undefined => {
    const user = localStorage.getItem(hnUser);

    return user ? JSON.parse(user) : undefined;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user: IUser | undefined) => {
    if (user) {
      localStorage.setItem(hnUser, JSON.stringify(user));
    }

    setUser(user);
  };

  return {
    user,
    setUser: saveUser,
  };
};
