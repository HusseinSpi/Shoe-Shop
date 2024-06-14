import { createContext, useState, useContext } from "react";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  return (
    <AccountContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        isLogIn,
        setIsLogIn,
        cart,
        setCart,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};
