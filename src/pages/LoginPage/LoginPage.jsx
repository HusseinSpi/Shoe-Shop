import { useState, useEffect } from "react";
import { Check } from "../../hooks/CheckEmail";
import { AddUser } from "../../hooks/AddUsers";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import { MyAccount } from "../../components/Account/MyAccount";
import { getUserName } from "../../hooks/GetUserName";
import { useAccount } from "../../context/Account";

export const LoginPage = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    isLogIn,
    setIsLogIn,
  } = useAccount();
  const [action, setAction] = useState("Sign Up");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setIsLogIn(true);
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }
  }, []);

  const handleSubmit = async (btn) => {
    if (btn === action) {
      if (action === "Login") {
        try {
          if (await Check(email, password)) {
            setIsLogIn(true);
            localStorage.setItem("isLogIn", "true");
            localStorage.setItem("userName", await getUserName(email));
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      } else {
        AddUser(userName, email, password);
      }
    } else {
      setAction(btn);
    }
  };

  return (
    <div className="containerLogin">
      {isLogIn ? (
        <MyAccount userName={userName} isLogIn={isLogIn} />
      ) : (
        <LoginForm
          action={action}
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
