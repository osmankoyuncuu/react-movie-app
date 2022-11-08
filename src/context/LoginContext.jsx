import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const values = {
    login,
    setLogin,
    currentUser,
    setCurrentUser,
    error,
    setError,
    alert,
    setAlert,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
