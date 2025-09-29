import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const useAuth = () => {
  const { storedValue: user, setValue: setUser } = useLocalStorage(
    "activeUser",
    null
  );
  const { storedValue: accounts, setValue: setAccounts } = useLocalStorage(
    "accounts",
    []
  );

  const addAccount = (account) => {
    const foundUser = accounts.find((acc) => acc.email === account.email);
    if (!foundUser) {
      const newAccounts = [...accounts, account];
      setAccounts(newAccounts);
      return true;
    }
    return false;
  };

  const logIn = (email, password) => {
    const foundUser = accounts.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logOut = () => {
    setUser(null);
  };

  const isLogin = Boolean(user);

  return {
    user,
    isLogin,
    addAccount,
    logIn,
    logOut,
  };
};

export { useAuth };
