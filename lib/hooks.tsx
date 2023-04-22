import { useState, useCallback } from "react";
import { IUser } from "types/interfaces";
import { getCookie, getCookies, setCookie } from "cookies-next";

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
  const cookieName = "hn-token";

  const getToken = () => {
    const token = getCookie(cookieName);

    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    setCookie(cookieName, token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setToken(token);
  };

  return {
    token,
    setToken: saveToken,
  };
};

// just for debugging
export const printCookies = () => {
  const cookies = getCookies();
  console.log(cookies);
};

export const useUser = () => {
  const hnUser = "hn-user";

  const getUser = (): IUser | undefined => {
    const user = localStorage.getItem(hnUser);

    return user ? JSON.parse(user) : undefined;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user: IUser | undefined) => {
    localStorage.setItem(hnUser, JSON.stringify(user));

    setUser(user);
  };

  return {
    user,
    setUser: saveUser,
  };
};
